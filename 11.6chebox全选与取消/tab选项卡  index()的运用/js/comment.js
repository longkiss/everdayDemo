$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	/*调用方法如下：*/
	$.jqtab("#tabs","#tab_conbox","click");
 	$.jqtab("#tabs2","#tab_conbox2","mouseenter");
  });

// $(document).ready(function() {
// 	jQuery.jqtab = function(ID1,ID2,事件) {
// 		$(ID2).find("li").hide();
// 		$(ID1).find("li:first").addClass("thistab").show(); 
// 		$(ID2).find("li:first").show();
//  		$(ID1).find("li").bind(事件,function(){
// 		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
// 			var activeindex = $(ID1).find("li").index(this);//console.log(activeindex) 返回的是一个数值
// 			$(ID2).children().eq(activeindex).show().siblings().hide();
// 			return false;
// 		});
	
// 	};
// 	/*调用方法如下：*/
// 	$.jqtab("#tabs","#tab_conbox","click");
//  	$.jqtab("#tabs2","#tab_conbox2","mouseenter");
//   });