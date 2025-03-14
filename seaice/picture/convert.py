import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import math
import math
import numpy as np
from PIL import Image
import concurrent.futures
import cv2

def polar_to_rectangular_optimized(polar_image_path, output_path, width=5400, height=1550, 
                                  start_angle=math.pi/2, mirror=True, num_threads=12, 
                                  upscale_factor=4):
    """
    将极地投影图转换为长方形投影图（多线程优化版本，带超分辨率处理）
    
    参数:
    polar_image_path: 极地投影图路径
    output_path: 输出图像路径
    width: 输出图像宽度
    height: 输出图像高度
    start_angle: 开始分割的角度（弧度），0表示正上方，np.pi表示正下方
    mirror: 是否左右镜像输出图像
    num_threads: 线程数量
    upscale_factor: 超分辨率倍数
    """
    # 读取极地投影图
    polar_img = Image.open(polar_image_path)
    polar_img = polar_img.convert('RGBA')  # 确保有alpha通道
    
    # 获取原始极地图像尺寸
    original_polar_width, original_polar_height = polar_img.size
    
    # 将图像转换为numpy数组
    polar_img_np = np.array(polar_img)
    
    # 定义需要去除的颜色
    colors_to_remove = [
        (210, 180, 140),
        (4, 98, 154),
        (0, 0, 0)
    ]
    
    # 创建掩码，初始化为全False
    mask = np.zeros(polar_img_np.shape[:2], dtype=bool)
    
    # 对每种需要去除的颜色，更新掩码
    for color in colors_to_remove:
        # 检查RGB通道是否匹配指定颜色
        color_mask = np.all(polar_img_np[:, :, :3] == color, axis=2)
        mask = mask | color_mask
    
    # 将匹配的像素点的alpha通道设置为0（完全透明）
    polar_img_np[mask, 3] = 0
    # 将图像最外围10个像素设为透明
    border_width = 20
    # 上边框
    polar_img_np[:border_width, :, 3] = 0
    # 下边框
    polar_img_np[-border_width:, :, 3] = 0
    # 左边框
    polar_img_np[:, :border_width, 3] = 0
    # 右边框
    polar_img_np[:, -border_width:, 3] = 0

    # 分离通道进行处理
    r_channel, g_channel, b_channel, a_channel = cv2.split(polar_img_np)
    
    # 对RGB通道应用EDSR超分辨率模型（OpenCV的超分辨率实现）
    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    
    try:
        # 尝试加载EDSR模型（如果有的话）
        model_path = "EDSR_x4.pb"  # 需要预先下载此模型
        sr.readModel(model_path)
        sr.setModel("edsr", upscale_factor)
        
        # 合并RGB通道进行超分辨率处理
        rgb = cv2.merge([r_channel, g_channel, b_channel])
        rgb_upscaled = sr.upsample(rgb)
        
        # 分离超分辨率后的RGB通道
        r_upscaled, g_upscaled, b_upscaled = cv2.split(rgb_upscaled)
        
        # 对alpha通道使用双三次插值
        a_upscaled = cv2.resize(a_channel, 
                               (original_polar_width * upscale_factor, 
                                original_polar_height * upscale_factor), 
                               interpolation=cv2.INTER_CUBIC)
        
        # 合并所有通道
        polar_img_upscaled = cv2.merge([r_upscaled, g_upscaled, b_upscaled, a_upscaled])
        
    except Exception as e:
        print(f"无法加载EDSR模型，使用备用方法: {e}")
        # 备用方法：使用Lanczos插值（高质量）
        polar_img_upscaled = cv2.resize(polar_img_np, 
                                       (original_polar_width * upscale_factor, 
                                        original_polar_height * upscale_factor), 
                                       interpolation=cv2.INTER_LANCZOS4)
    
    # 将超分辨率处理后的图像转回PIL格式
    polar_img = Image.fromarray(polar_img_upscaled)
    
    # 获取超分辨率后的极地图像尺寸
    polar_width, polar_height = polar_img.size
    polar_center_x = polar_width // 2
    polar_center_y = polar_height // 2
    
    # 创建新的长方形图像
    rect_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    
    # 计算极地图像的最大半径（从中心到角落）
    max_radius = min(polar_center_x, polar_center_y)
    
    # 将极坐标图像转换为numpy数组以便更快访问
    polar_array = np.array(polar_img)
    
    # 创建输出图像的numpy数组
    rect_array = np.zeros((height, width, 4), dtype=np.uint8)
    
    def process_row(y):
        """处理单行像素的函数"""
        row_data = np.zeros((width, 4), dtype=np.uint8)
        
        # 将y坐标映射到纬度（90°在顶部，-90°在底部）
        latitude = 90 - (y / height * 180)

        # 计算从北极点的距离（以像素为单位）
        r = max_radius * (90 - latitude) / 90
        
        for x in range(width):
            # 如果需要镜像，反转x坐标的映射
            x_map = width - 1 - x if mirror else x
            
            # 将x坐标映射到经度（-180°到180°）
            longitude = (x_map / width * 360) - 180
            
            # 将经度转换为极坐标中的角度（弧度），考虑起始角度
            theta = np.radians(longitude) + start_angle
            
            # 计算在极地图像中的坐标
            polar_x = int(polar_center_x + r * np.cos(theta))
            polar_y = int(polar_center_y + r * np.sin(theta))
            
            # 检查坐标是否在极地图像范围内
            if 0 <= polar_x < polar_width and 0 <= polar_y < polar_height:
                row_data[x] = polar_array[polar_y, polar_x]
        
        return y, row_data
    
    # 使用线程池并行处理每一行
    with concurrent.futures.ThreadPoolExecutor(max_workers=num_threads) as executor:
        # 提交所有行的处理任务
        future_to_row = {executor.submit(process_row, y): y for y in range(height)}
        
        # 收集结果并填充到输出数组
        for future in concurrent.futures.as_completed(future_to_row):
            y, row_data = future.result()
            rect_array[y] = row_data
    
    # 从numpy数组创建PIL图像
    rect_img = Image.fromarray(rect_array)
    
    # 保存结果
    rect_img.save(output_path)
    return rect_img
def overlay_sea_ice(base_image_path, sea_ice_image_path, output_path, white_threshold=150):
    """
    将海冰图片中的白色区域覆盖到基底图片上
    
    参数:
    base_image_path: 基底图片路径
    sea_ice_image_path: 海冰图片路径
    output_path: 输出图像路径
    white_threshold: 判断为白色的阈值（0-255），默认为200
    """
    # 读取基底图片和海冰图片
    base_img = Image.open(base_image_path).convert('RGBA')
    sea_ice_img = Image.open(sea_ice_image_path).convert('RGBA')
    
    # 获取两张图片的尺寸
    base_width, base_height = base_img.size
    sea_ice_width, sea_ice_height = sea_ice_img.size
    
    # 创建结果图像，初始为基底图片的副本
    result_img = base_img.copy()
    result_pixels = result_img.load()
    sea_ice_pixels = sea_ice_img.load()
    
    # 计算海冰图片应该放置的位置（居中）
    start_x = 0
    start_y = 0
    
    # 遍历海冰图片的每个像素
    for y in range(sea_ice_height):
        for x in range(sea_ice_width):
            # 计算在基底图片中的对应位置
            base_x = start_x + x
            base_y = start_y + y
            
            # 确保位置在基底图片范围内
            if 0 <= base_x < base_width and 0 <= base_y < base_height:
                # 获取海冰图片中的像素
                r, g, b, a = sea_ice_pixels[x, y]
                if a > 125:
                    result_pixels[base_x, base_y] = (r, g, b, a)
                
                # 检查是否为白色区域（RGB值都高于阈值）
                # if r > white_threshold and g > white_threshold and b > white_threshold:
                #     # 如果是白色区域，在结果图像中设置为白色
                    
    
    result_img = result_img.convert('RGB')
    
    # 使用压缩参数保存
    result_img.save(output_path, optimize=True, quality=85)
    return result_img

# 使用函数
if __name__ == "__main__":
    input_path = "./test4.png"  # 预测图像，默认的图像就行
    output_path = "arctic_rectangular_projection.png" # 转化后的海冰矩阵投影图像保存地址
    base_pic_path = "./globe-texture/world.topo.bathy.200401.jpg" # 原始的地球矩阵投影图片
    # 执行转换，可以指定start_angle参数和mirror参数
    # 0表示从正上方开始分割，np.pi表示从正下方开始分割
    # mirror=True表示左右镜像输出图像
    polar_to_rectangular_optimized(input_path, output_path)

    overlay_sea_ice(base_pic_path,output_path, "world.topo.bathy.200401-2.jpg") # 把converted.jpg保存到对应的地方，然后把地球的图像改成这个图像就可以了
    