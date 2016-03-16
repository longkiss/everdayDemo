// JavaScript Document
$(document).ready(function(e) {
	//答题卡
    $("#juz").children(".dtk").click(function(){
		$("body").find(".dati-box").animate({'top':'0px'},300)
		});
	$(".dati-box").find(".close-gb").click(function(){
		$("body").find(".dati-box").animate({'top':'-600px'},300)
		})
	//单选题
	$(".dtk-list").children().click(function(){
			$(".dtk-list").children( ).eq($(this).index()).addClass("on").siblings().removeClass('on');
			$(".dtk-list").children( ).eq(2).click(function(){
			$("#two").css("display","block")

			});
	});
	$(".jjk").children(".hz").click(function(){
		$("body").find(".tanchu").show()
		$(".btn2").find(".bluse").click(function(){
		$("body").find(".tanchu").hide()
			});
		});
	$(".sumit").click(function(){
		$("body").find(".tanchu").show()
		
		})
});


/*$(document).ready(function(e) {
   $(".rdobox").find(".check-image").each(function(index, element) {
    	$(this).click(function(){
			$(this).addClass("checkeds").removeClass("check-image")
			
			
		})
	});
});


$(document).ready(function(e) {
   $(".rdobox").find(".check-image").each(function(index, element) {
    	$(this).dblclick(function(){
			$(this).addClass("check-image")
			
		})
	});
});*/








$(document).ready(function(e) {
   $(".rdobox").find(".check-image").each(function(index, element) {
    	$(this).click(function(){
			$(this).addClass("checkeds").removeClass("check-image")
		});
	});
	
});


$(document).ready(function(e) {
	
	$(".rdobox").find(".check-image").click(function(){
		alert("qqqqqq");
		
		
		})
});