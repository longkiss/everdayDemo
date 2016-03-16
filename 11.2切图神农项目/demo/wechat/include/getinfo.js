/*获取url后面参数的方法*/
function getUrlVars(){
				    var vars = [], hash;
				    var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
				    for(var i = 0; i < hashes.length; i++)
				    {
				        hash = hashes[i].split("=");
				        vars.push(hash[0]);
				        vars[hash[0]] = hash[1];
				    }
				    return vars;
				}

//字符转译
function string_to(index){
	//alert(index);
	/*var str1 = "&lt;";//转译<
	var str2 = "&gt;";
	var str3 = "&amp;";//&
	var str4 = "&quot;";//"
	var str5 = "&nbsp;"//空格
*/	if(index == null || index == ""){
		return index;
	}else{
		var str = index;
		for(var i=0;i<str.length;i++){
			str = str.replace("&lt;","<");
			str = str.replace("&gt;",">");
			str = str.replace("&amp;","&");
			str = str.replace("&quot;","\"");
			str = str.replace("&ldquo;","\"");
			str = str.replace("&rdquo;","\"");
			str = str.replace(/(\n)/g, "");
			str = str.replace(/(\t)/g, "");
			str = str.replace(/(\r)/g, "");
			str = str.replace("<br/>", "");
			str = str.replace("<img title","<img style='width:100%;' title");
			str = str.replace("<img alt","<img style='width:100%;' alt");
			str = str.replace("<img src","<img style='width:100%;' src");
			str = str.replace("<table width","<table style='width:100%;' width");
		}
		//alert(str);
		return str;
	}
}
//ajax获取数据;第一个参数是接口；第二个接口是参数；第三个接口是回调函数
function ajax(ajaxDataUrl, ajaxData, callback){
	$.ajax({
		async:true,
		type: "GET",
		dataType: "json",
		url: ajaxDataUrl,
		error: function(XMLHttpRequest, textStatus, errorThrown){},
		complete :function(XMLHttpRequest, textStatus) {},
		data: ajaxData,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		success: function(data){
			callback(data);
		}
	});
}
