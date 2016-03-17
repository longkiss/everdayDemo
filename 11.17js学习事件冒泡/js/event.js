/**
 * Created by Administrator on 2015/11/17.
 */
var eventutill={
//添加事件监听
    addHandle:function(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn,false)
        }else if(ele.attachEvent){
            ele.attachEvent(type,fn)
        }else{
            ele.on[type]=fn;
        }
    },
//移除事件监听
    removeHaddle:function(ele,type,fn){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn,false)
        }else if(ele.detachEvent){
            ele.detachEvent(type,fn)
        }else{
            ele.on[type]=null;
        }
    },
//兼容浏览器的事件对象
 	getEvent:function(event){
 		return event?event:window.event;
 	},
//获取事件类型
   	getType:function(event){
        return event.type;
    },
//获取事件目标
    gettarget:function(event){
        var target=event.target||event.srcElement;
        return target;
    },
//阻止事件冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation()
        }else{
            event.cancleBubble=false;
        }
    },
//取消事件的默认行�?
    prevenDefault:function(event){
        if(event.preventDefault){
            event.preventDefault(event);
        }else{
            event.returnValue=false;
            event.returnValue=false;
        }
    }
}
