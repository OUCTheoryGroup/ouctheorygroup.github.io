function SerMax(){
    $('#btn_ser').click(function(){
    	$('#ser').toggle();
    })
}

$('.codeBtn').mouseenter(function(){
	$('.code').show();
})
$('.codeBtn').mouseleave(function(){
	$('.code').hide();
})

//导航置顶
$(function(){
	var sWSon = document.documentElement.clientWidth;
		if(sWSon>1220){
				$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 10){
				$('.wraq_header').addClass('current');
				//$('.ser').addClass('current');
				$('.top').css({display:'none'}).stop().animate({top:"-40px"},300);}
			else{
				$('.wraq_header').removeClass('current');
	//			$('.ser').removeClass('current');
				$('.top').css({display:'block'}).stop().animate({top:0},300);}
		});
			
		}else{
		
		}
	})
 
//12.移动端顶部点击弹出下拉菜单
function Menu(menu,main){
    var onOff = true;
    $(menu).bind('click',function (){  //绑定this为menu
        $(main).slideToggle();
        if($(this).find('span').hasClass('fa-navicon')){
			$(this).find('span').removeClass('fa-navicon');
			$(this).find('span').addClass('fa-remove');
		}else{
			$(this).find('span').addClass('fa-navicon');
			$(this).find('span').removeClass('fa-remove');
			}
		
    })
    $(main).find('li > span').bind('click',function (){
    	if($(this).hasClass('fa-chevron-right')){
			$(this).removeClass('fa-chevron-right');
			$(this).addClass('fa-chevron-down');
		}else{
			$(this).addClass('fa-chevron-right');
			$(this).removeClass('fa-chevron-down');
			}
        if($(this).parent().hasClass('on')){
            $(this).parent().find('.subNavs').slideUp();
            $(this).parent().removeClass('on');
            return false;  //退出循环
        };
        $(this).parent().siblings().removeClass('on').find('.subNavs');
        $(this).parent().siblings().find('.subNavs').slideUp();
        $(this).parent().addClass('on').find('.subNavs');
        $(this).parent().find('.subNavs').slideDown();
    })
	
};

//左侧边栏二级菜单
function side_subMenu(){
	$('.sub_nav').find('.arrow').click(function(){
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



//判断子菜单的宽度
function snavWidth(){
	var liWidth = $("#nav li").width()
	$('.subNav').css('width',2*liWidth)
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



// 二级页头部大图高度
function SubImgHeight(){
    var iWSon = document.documentElement.clientWidth;
    var oSubbanner = document.getElementById('subbanner');

    if(iWSon>=1920){
    	oSubbanner.style.height = 500+'px';
    }else if(iWSon<1920){
    	oSubbanner.style.height = iWSon * (500/1920)+'px';
	}

	window.onscroll = window.onresize = function (){
		var iWSon = document.documentElement.clientWidth;
		if(iWSon>=1920){
	        oSubbanner.style.height = 500+'px';
	    }else if(iWSon<1920){
			oSubbanner.style.height = iWSon * (500/1920)+'px';
		}
	}

}

/*回到顶部*/
$(function(){
 	$(window).resize(function(){
					var h = $(window).height();
					$('.goTop').css('top',h-150);
					$(window).scroll(function(){				
						var scrollTop = $(document).scrollTop();					  
						$('.goTop').stop().animate({
							top: h + scrollTop-150
						},300);
					});
	}).resize();
	});
//gotop

$('.goTop').click(function(){

	$('body,html').stop().animate({scrollTop:0});

	return false;

});
		
// $(function(){
// 	$("#main li").mousemove(function(){
		
// 		$(this).find('.til_slides').fadeIn(500);
		
// 		})
// 	$("#main li").mouseleave(function(){
// 		$(this).find('.til_slides').fadeOut(2000);
		
// 		})
// 	});
//campus and outside
function tab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd')
	 oLi.hover(function(e) {
		 var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           //setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
				thisLi.addClass('active');                            // 添加当前元素的样式
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   }
			   //,100)
        //}
		);
	}

// 文章页分享按钮
$(function(){
	$(".size1").click(function(){
		$(".floatR").toggle(500);
	})
})

// 科学研究li有无线条问题
$(function(){
	$('.techList').each(function(){
		var techT=$(this).find("li").length;
		if(techT % 2==1){
			$(this).find('li:last').css('width','100%');
		}
	})	
})
// //大图切换高度问题
function ImgHeight(){
	// var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');
 var iWSon = document.documentElement.clientWidth;
    var oBanner = document.getElementById('Banner');

    if(iWSon>=1920){
    	//oBanner.style.height = 400+'px';
    	$('#main,.Banner .slides li').css('height',460+'px');
    }else if(iWSon<1920){
    	//oBanner.style.height = iWSon * (400/1920)+'px';
    	$('#main,.Banner .slides li').css('height',iWSon * (460/1920)+'px');
	}

	window.onscroll = window.onresize = function (){
		var iWSon = document.documentElement.clientWidth;
		if(iWSon>=1920){
	        //oBanner.style.height = 400+'px';
	        $('#main,.Banner .slides li').css('height',460+'px');
	    }else if(iWSon<1920){
			//oBanner.style.height = iWSon * (400/1920)+'px';
			$('#main,.Banner .slides li').css('height',iWSon * (460/1920)+'px');
		}
	}
}

// tab切换
(function($){
    $.fn.extend({
        tab: function (options){
            var defaults = {         //默认参数
                ev : 'mouseover',    //默认事件'mouseover','click'
                delay : 100,         //延迟时间
                auto : true,         //是否自动切换 true,false
                speed : 2000,        //自动切换间隔时间(毫秒)
                more : false         //是否有more,false,true
            };
            var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数
            return this.each(function (){
                var o = options;
                var obj = $(this);
                var oTil = obj.find('.til_tab');
                var oBox = obj.find('.tabListBox');
                var oMore = null;
                var iNum = 0;
                var iLen = oTil.length;
								
				// 默认选中第一个
				$('.tabListBox,.more_tab,.til_tab').addClass('off');
				$('.tabListBox:first,.more_tab:first,.til_tab:first').removeClass('off').addClass('on');
				
				
                //鼠标事件绑定
                oTil.bind(o.ev , function (){
                    var _this = this;
                    if(o.ev == 'mouseover' && o.delay){
                        _this.timer = setTimeout(function (){
                            change(_this);
                        },o.delay);
                    }else{
                        change(_this);
                    }; 
                })

                oTil.bind('mouseout',function (){
                    var _this = this;
                    clearTimeout(_this.timer);
                });

                //自动切换效果
                (function autoPlay(){
                    var timer2 = null;
                    if(o.auto){
                        function play(){
                            iNum++;
                            if(iNum >= iLen){
                                iNum =0;
                            };
                            change(oTil.eq(iNum));
                        };
                        timer2 = setInterval(play,o.speed);

                        obj.on('mouseover',function (){
                            clearInterval(timer2);
                        })

                        obj.on('mouseout',function (){
                            timer2 = setInterval(play,o.speed);
                        })
                    };
                })();

                function change(box){
                    iNum = $(box).index();
                    oTil.removeClass('on').addClass('off');
                    oBox.removeClass('on').addClass('off');
                    if(o.more){
                        oMore = obj.find('.more_tab');
                        oMore.removeClass('on').addClass('off');
                        oMore.eq(iNum).addClass('on').addClass('off');
                    };
                    oTil.eq(iNum).addClass('on').removeClass('off');
                    oBox.eq(iNum).addClass('on').removeClass('off');
                }
            });
        }
    })
})(jQuery);
