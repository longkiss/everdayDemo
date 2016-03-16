// JavaScript Document

/*---------------------------------pc登录验证------------------------------*/


var MyValidator01 = function() {  
    var handleSubmit = function() {  
        $('#form01').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                names : {  
                    required : true 
                },
                password:{  
                    required : true  
                },  
                 Verification:{  
                    required : true  
                },   
            },  
            messages : {  
                names: {  
                    required : "必须填写姓名"  
                }, 
                password:{  
                    required : "必须填写密码."  
                },  
                 Verification:{  
                    required : "必须填写验证码"  
                },  
            },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('#form01 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form01').validate().form()) {  
                    $('#form01').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   

/*---------------------------------pc注册验证------------------------------*/
var MyValidator02 = function() {  
    var handleSubmit = function() {  
        $('#form02').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                name : {  
                    required : true  
                },
                email:{  
                    required : true  ,
					email : true
                },  
				tel:{
					 required : true  
					
					},
				 passwords:{
					 required: true,
               		 minlength: 5
					 },
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#rf-password"
           			 },
				Verification01: {
					required: true
            			 },	 
            },  
            messages : {  
                name: {  
                    required : "必须填写姓名"  
                }, 
                email:{  
                    required : "必须填写邮箱"  ,
					email : "请正确的填写邮箱"
                }, 
				tel:{
					 required : "请填写手机号"  
 					}, 
				 passwords:{
					 required: "没有填写密码",
               		 minlength: jQuery.format("密码不能小于{0}个字符") 
					 }, 
                confirm_password: {
					required: "没有确认密码",
					minlength: "确认密码不能小于{0}个字符",
					equalTo: "两次输入密码不一致嘛"
           			 },
				Verification01: {
					required: "必须填写验证码"
            			 },
            },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('#form02 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form02').validate().form()) {  
                    $('#form02').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   
/*---------------------------------手机登录验证------------------------------*/


var MyValidator03 = function() {  
    var handleSubmit = function() {  
        $('#form03').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                names : {  
                    required : true 
					 
                },
                password:{  
                    required : true  
                },  
                 Verification:{  
                    required : true  
                },   
            },  
            messages : {  
                names: {  
                    required : "必须填写姓名"  
                }, 
                password:{  
                    required : "必须填写密码."  
                },  
                 Verification:{  
                    required : "必须填写验证码."  
                },  
            },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('.form01 input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form03').validate().form()) {  
                    $('#form03').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   

/*---------------------------------手机注册验证------------------------------*/
var MyValidator04 = function() {  
    var handleSubmit = function() {  
        $('#form04').validate({  
            errorElement : 'span',  
            errorClass : 'help-block',  
            focusInvalid : false,  
            rules : {  
                name : {  
                    required : true  
                },
                email:{  
                    required : true  ,
					email : true
                },  
				tel:{
					 required : true  
					
					},
				 passwords:{
					 required: true,
               		 minlength: 5
					 },
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#rf-password"
           			 },
				Verification01: {
					required: true
            			 },	 
            },  
            messages : {  
                name: {  
                    required : "必须填写姓名"  
                }, 
                email:{  
                    required : "必须填写邮箱"  ,
					email : "请正确的填写邮箱"
                }, 
				tel:{
					 required : "请填写手机号"  
 					}, 
				 passwords:{
					 required: "没有填写密码",
               		 minlength: jQuery.format("密码不能小于{0}个字符") 
					 }, 
                confirm_password: {
					required: "没有确认密码",
					minlength: "确认密码不能小于{0}个字符",
					equalTo: "两次输入密码不一致嘛"
           			 },
				Verification01: {
					required: "必须填写验证码"
            			 },
            },  
            highlight : function(element) {  
                $(element).closest('.form-group').addClass('has-error');  
            },  
            success : function(label) {  
                label.closest('.form-group').removeClass('has-error');  
                label.remove();  
            },  
            errorPlacement : function(error, element) {  
                element.parent('div').append(error);  
            },  
            submitHandler : function(form) {  
                form.submit();  
            }  
        });  
        $('.registr-form input').keypress(function(e) {  
            if (e.which == 13) {  
                if ($('#form04').validate().form()) {  
                    $('#form04').submit();  
                }  
                return false;  
            }  
        });  
    }  
    return {  
        init : function() {  
            handleSubmit();  
        }  
    };  
}();   
