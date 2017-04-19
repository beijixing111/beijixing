
;(function($){
	$.fn.drag = function(){
		var M = false;	//默认不移动
		var Rx,Ry;
		var t = $(this);
		t.mousedown(function(e){
			Rx = e.pageX-(parseInt(t.css("left")) || 0);
			Ry = e.pageY-(parseInt(t.css("top")) || 0);
			t.css({
				"position":"fixed",
				"cursor" :"move"
			}).fadeTo(20,0.5);
			M = true;
		}).mouseup(function(e){
			M = false; 
			t.fadeTo(20,1);
		});
		$(document).mousemove(function(e){
			if(M){
				t.css({
					top:e.pageY-Ry,
					left:e.pageX-Rx
				});
			}
		});
	}

})(jQuery);
