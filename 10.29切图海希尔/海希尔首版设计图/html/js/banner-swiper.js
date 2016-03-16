$(document).ready(function() {
		$(function() {
			if (navigator.platform.indexOf('Win32') != -1) {
				$(".index-classify li").css('width', '24.375%');
			};
			$(".foot-daosanjiao").css("left", ($(".foot-nav div").width() - 30) / 2);
			$(".swipe-box").css("width", $(window).width() + 15);
			$(".swipe-box img").css("width", $(window).width() + 15);
			if (document.getElementById("gallery")) {
				var gallery = new ScrollPic();
				gallery.scrollContId = "gallery";
				//内容容器ID
				gallery.dotListId = "swipe-dot";
				//点列表ID
				gallery.dotOnClassName = "selected";
				gallery.arrLeftId = "sw-left";
				//左箭头ID
				gallery.arrRightId = "sw-right";
				//右箭头ID
				gallery.frameWidth = $(window).width() + 15;
				gallery.pageWidth = $(window).width() + 15;
				gallery.upright = false;
				gallery.speed = 10;
				gallery.space = 30;
				gallery.initialize();
				//初始化
			}
		});
	}); 


// 页尾鼠标点击事件

		$(".footer-box>a").on("touchstart",function(){
			$(".footer-box>a").removeClass("footer-now");
			$(this).addClass("footer-now");
		})