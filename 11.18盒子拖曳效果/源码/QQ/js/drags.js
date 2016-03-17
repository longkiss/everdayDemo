//获取className
function getByClass(clsName,parent){
	var oParent=parent?document.getElementById(parent):document,
		elements=oParent.getElementsByTagName('*'),
		eles=[];
		for(var i=0,l=elements.length;i<l;i++){
			if(elements[i].className==clsName){
				eles.push(elements[i])
			}
		}
		return eles;	
		// console.log(eles)
}
window.onload=drags;
function drags(){
	var  oTitle=getByClass('login_logo_webqq','loginPanel')[0];
		 // console.log(oTitle);
		 // 在 oTitle区域按下的时候 触发一个fnDownn 函数。
		 oTitle.onmousedown=fnDown;
} 
function fnDown(event){
	console.log(event);
	event=event||window.event;
	var oDrag=document.getElementById('loginPanel'),
		//event.clientX、event.clientY获取的是光标按下时的位置
		//disX、disY获取的是光标相对于oDrag盒子里面的位置（光标到盒子边框的宽度）。
		disX=event.clientX-oDrag.offsetLeft,
		disY=event.clientY-oDrag.offsetTop;
		document.onmousemove=function(event){
			console.log(event);
			event=event||window.event;
			fnMove(event,disX,disY);
		}
	// document.onmousemove=function(event){
	// 	event=event||window.event;
	// 	// document.title=event.clientX+','+event.clientY;
	// 	oDrag.style.left=event.clientX+'px';
	// 	oDrag.style.top=event.clientY+'px';
	//}
		document.onmouseup=function(event){
	    	 console.log(event);
			 document.onmousemove=null;
			 document.onmouseup=null;
		}
 }
function fnMove(e,posX,posY){
		console.log(e);
	var oDrag=document.getElementById('loginPanel'),	
		//e.clientX、e.clientY获取的是光标移动时的位置。
		//l、t获取的是鼠标移动后的位置。
	    l=e.clientX-posX,
		t=e.clientY-posY,
		winW=document.documentElement.clientWidth||document.body.clientWidth,
		winH=document.documentElement.clientHeight||document.body.clientHeight,
		maxW=winW-oDrag.offsetWidth-10,
		maxH=winH-oDrag.offsetHeight;		
		if(l<0){
			l=0;
		}else if(l>maxW){
			l=maxW
		}
		if(t<0){
			t=10;
		}else if(t>maxH){
			t=maxH;
		}
		oDrag.style.left=l+'px';
		oDrag.style.top=t+'px';
}