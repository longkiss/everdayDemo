function addFooter(){
	var height =$(window).height();	
	var a =document.getElementById("thecontent").offsetHeight;
	if((a+50)>height){
		var html_footer = "<div data-role='footer' align='center' style='background:#E4E4E4;'>"
			+"<table><tr><th><img src='images/logo.png' style='width:16px;height:8px;'></th>"
		+"<th><p style='text-shadow:none;color:#939393;font-size:10px;'>©2014广州达讯公司版权所有</p></th></tr></table></div>"
		$("#thefooter").append(html_footer);
	}else{
		var html_footer = "<div align='center' style='position:absolute;width:100%;bottom:5px;background:#E4E4E4;'>"
			+"<table><tr><th><img src='images/logo.png' style='width:16px;height:8px;'></th>"
		+"<th><p style='text-shadow:none;color:#939393;font-size:10px;'>©2014广州达讯公司版权所有</p></th></tr></table></div>"
		$("#thefooter").append(html_footer);
	}
}
function share(){
	 var img_url = "http://14.17.121.143/voa/webapp_app/images/test/1.png";
	 var re_url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx84a68b344c743f66&redirect_uri=http://eonoot.nat123.net/voa/wechat/user_redirect.action&response_type=code&scope=snsapi_base&state=micro_card-share#wechat_redirect";
	 document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
               // 发送给好友
               WeixinJSBridge.on('menu:share:appmessage', function (argv) {
                   WeixinJSBridge.invoke('sendAppMessage', {
                       "appid": "wx84a68b344c743f66",
                       "img_url": img_url,
                       "img_width": "160",
                       "img_height": "160",
                       "link": re_url,
                       "desc":  "微名片",
                       "title": "微名片"
                   }, function (res) {
                       _report('send_msg', res.err_msg);
                   })
               });

               // 分享到朋友圈
               WeixinJSBridge.on('menu:share:timeline', function (argv) {
                   WeixinJSBridge.invoke('shareTimeline', {
                       "img_url": img_url,
                       "img_width": "160",
                       "img_height": "160",
                       "link": re_url,
                       "desc":  "微名片",
                       "title": "微名片"
                   }, function (res) {
                       _report('timeline', res.err_msg);
                   });
               });
           }, false);
}


