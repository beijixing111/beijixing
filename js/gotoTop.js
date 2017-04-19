;(function($){
	var gotoTop = function(config){
		var options = {
			backgroundColor:"#599e44",
			iconColor:"#fff",
			right : "50px",
			bottom: "80px",
			time: "normal"
		};
		var set = $.extend({},options,config);

		var goto_css = '<style type="text/css">';
			goto_css += '.goto-top{display:none;width:50px;height:50px;border-radius:50%;background:'+set.backgroundColor+';box-shadow: 2px 2px 3px #fff,-2px -2px 3px #fff;position:fixed;bottom:'+set.bottom+';right:'+set.right+';z-index: 999;cursor: pointer;opacity: 0.6;transition:opacity 0.2s ease-in 0.2s;-webkit-transition:opacity 0.2s ease-in 0.2s;}';
			goto_css += '.goto-top:after{display: block;content: "";border-width: 0px 15px 20px 15px;border-style: dashed dashed solid dashed;border-color: transparent transparent '+set.iconColor+' transparent;position:absolute;left: 50%;top:50%;margin-left: -15px;margin-top: -12px;}';
			goto_css +='</style>';
			//将需要的CSS插入头部
			$("head").append(goto_css);
			var goto_div = '<div id="goto_top" class="goto-top"></div>';
			$("body").append(goto_div);
			var goto_top = $("#goto_top");
			var win = $(window);
			var offset = 300;
			//滚动事件出现返回顶部
			win.scroll(offset,function(){
		 		var src_hei= $(this).scrollTop();  
		 		if(src_hei>=offset){
		 			goto_top.fadeIn(set.time);
		 		}else{
		 			goto_top.fadeOut(set.time);
		 		} 
		 	});
		 	//点击返回
		 	goto_top.on("click",function(){
		 		$("html,body").animate({
		 			scrollTop : 0
		 		}, set.time)
		 	});
		 	goto_top.hover(function(){
		 		$(this).css("opacity",1);
		 	},function(){
		 		$(this).css("opacity",0.6);
		 	});
	}	
	window.gotoTop = function(config){
	  return new gotoTop(config);
	}
})(jQuery);
