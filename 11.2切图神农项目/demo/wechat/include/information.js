function getData(wxName,tag){//获取用户信息
	//http://localhost:8080/mmbank/userInfo!getOneByWechatOpenId.action?wechatOpenId=test
	var info_url = "/mmbank/userInfo!getOneByWechatOpenId.action?wechatOpenId="+wxName ;
	$.ajax({
		   type: "GET",
		   url: info_url,
		   async:false,
		   cache: false,
		   dataType: "json",
		   contentType: "application/json; charset=utf-8",
		   success: function (data) {
				if(data.ret == "1"){
					var userInfo = data.userInfo ;
					var nickName = userInfo.nickName ;	//昵称
					var gname = userInfo.gname ;	//姓名
					var headPic = userInfo.headPic ;	//头像
					var integral = userInfo.integral ;	//微信积分
					//var userId = userInfo.userId ;	//微信号
					var dpm = userInfo.dpm ;	//微信号
					var _name ;
					if(gname == "" || gname == null || gname == undefined){
						_name = nickName ;
					}else{
						_name = gname ;
					}
					$(".name").html(_name) ;
					$(".point").html(dpm) ;
					$(".info_img").attr("src",headPic) ;
				}else{
				}
		    }
	}) ; 
}
function getMessage(){	//判断是否有新消息
	//http://localhost:8080/mmbank/systemMsg!getCountOfStatus.action?wechatOpenId=test&status=0
	var m_url = "/mmbank/systemMsg!getCountOfStatus.action?wechatOpenId="+chatName+"&status=0" ;
	$.ajax({
		   type: "GET",
		   url: m_url,
		   async:false,
		   cache: false,
		   dataType: "json",
		   contentType: "application/json; charset=utf-8",
		   success: function (data) {
				if(data.total == "0"){
					$(".msg-img").attr("src","images/gif.png") ;
				}else{
					$(".msg-img").attr("src","images/gif.gif") ;
				}
		    }
	}) ; 
}