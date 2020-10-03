//搜索点击弹出效果
function SerMax(){
    $('#btn_ser').click(function(){
    	$('#ser').toggle();
    })
}
//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
        $(this).addClass('on');
	},function (){
        $(this).removeClass('on');
	})	
};
//12.移动端顶部点击弹出下拉菜单
function Menu(menu,main){
    var onOff = true;
    $(menu).bind('click',function (){
        $(main).slideToggle();
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			}
    })
    $(main).find('li> strong').bind('click',function (){
        if($(this).parent().hasClass('on')){
            $(this).parent().find('dl').slideUp();
            $(this).parent().removeClass('on');
            
            return false;
        };
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('dl').slideUp();
        $(this).parent().addClass('on');
        $(this).parent().find('dl').slideDown();
        
    })
	
};

function side_subMenu(){
	$('.sub_left').find('.arrow').click(function(){
		if($(this).parent().hasClass('on')){
            $(this).parent().find('dl').slideUp();
            $(this).parent().removeClass('on');
			$(this).html("+")
            return false;
        };
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('dl').slideUp();
        $(this).parent().addClass('on');
        $(this).parent().find('dl').slideDown();
		$(this).html('&times;');
		})
	}

// 手机端下拉菜单
function navMin() {
    $("#mbtn").click(function(){
        $(".navm").slideToggle(300);
    });
};



// 二级页头部大图高度
function SubImgHeight(){
    var iWSon = document.documentElement.clientWidth;
    var oSubbanner = document.getElementById('subbanner');

    if(iWSon>=1920){
    	oSubbanner.style.height = 350+'px';
    }else if(iWSon<1920){
    	oSubbanner.style.height = iWSon * (350/1920)+'px';
	}

	window.onscroll = window.onresize = function (){
		var iWSon = document.documentElement.clientWidth;
		if(iWSon>=1920){
	        oSubbanner.style.height = 350+'px';
	    }else if(iWSon<1920){
			oSubbanner.style.height = iWSon * (350/1920)+'px';
		}
	}

}

/*//字号大小
function ToMax(){
    var oArt = document.getElementById('art');
    var aEm = $('.rt01a_general em');

    aEm[0].onclick = aEm[3].onclick =function (){
    	oArt.style.fontSize = '1.4em';
    }
    aEm[1].onclick = aEm[4].onclick =function (){
    	oArt.style.fontSize = '1.6em';
    }
    aEm[2].onclick = aEm[5].onclick =function (){
    	oArt.style.fontSize = '1.8em';
    }
}*/
//字号大小
function FontSize2(Size,obj){
    var iNum = 13;

    $(Size).find('.max').bind('click',function (){
        iNum+=2;
        if(iNum>=24){
            iNum = 24;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.mid').bind('click',function (){
        iNum = 13;
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.min').bind('click',function (){
        iNum-=2;
        if(iNum<=14){
            iNum = 12;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })
};
//大图切换高度问题
function ImgHeight(){
	// var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');

	 window.onload = function (){
		var iHeight = document.documentElement.clientWidth * (450/1920);
		$('.rslides,.caption,.wz_caption').css('height',iHeight+'px');

		window.onscroll = window.onresize = function (){
			var iHeight = document.documentElement.clientWidth * (450/1920);
			$('.rslides,.caption,.wz_caption').css('height',iHeight+'px');
		}
     }
}

//选项卡切换
function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
 }
}
// JavaScript Document
window.onload = function (){		
		function getByClass(sClass,parent){
		
		var aEles = (parent||document).getElementsByTagName('*');
		var arr = [];
		
		for(var i=0; i<aEles.length; i++){
			
			var aClass = aEles[i].className.split(' ');
			
			for(var j=0; j<aClass.length; j++){
				
				if( aClass[j] == sClass ){
				
					arr.push( aEles[i] );
					break;
					
				}	
			}
		}
		return arr;
	}
	
	var arr = getByClass('select');
	var arr2 = getByClass('son_select');
	var that = null;
	var onoff = true;
	
	for(var i=0;i<arr.length;i++)
	{
		arr[i].index = i;
		arr[i].onclick = function(ev) {
			var e = ev || event;
			e.cancelBubble = true;
			for(var i=0;i<arr.length;i++)
			{
				if(i!=this.index)
				{
					arr2[this.index].style.display = 'block';
					arr2[i].style.display = 'none';
				}
			};
			if(onoff)
			{
				arr2[this.index].style.display = 'block';
				onoff = false;
			}else
			{
				arr2[this.index].style.display = 'none';
				onoff = true;
			};
			that = this.index;
			document.onclick = function() {
				arr2[that].style.display = 'none';
				onoff = true;
			}
		}
	};

}
/*二维码显示*/
$(document).ready(function() {
    $(".btn01").click(function(){
		$(this).next("div").toggle(700)
		});
	$(".close").click(function(){
		$(this).parent().hide(300);
		})
});