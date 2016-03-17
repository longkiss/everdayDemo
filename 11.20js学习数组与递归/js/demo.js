/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-20 09:18:02
 * @version $Id$
 */

//---------------------------盒子的的定时器和鼠标拖曳----------------------------------------//2015.11.20笔记
	var box=document.getElementById('box');
	setInterval(function(){
		// var a=+new Date();
		var a=new Date().toLocaleString();
 		box.innerHTML=a;

		},1000);
		box.onmousedown=fnDown;
		function fnDown(event){
			event=event||window.event;
			// document.title=event.clientX;
			fnDx=event.clientX-box.offsetLeft;
			fnDy=event.clientY-box.offsetTop;
			box.onmousemove=function(event){
				event=event||window.event;
				// document.title=event.clientX+' | '+event.clientY;
				fnMove(event,fnDx,fnDy);
			}
			box.onmouseup=function(){
				box.onmousemove=null;
				box.onmouseup=null;
			}
		}
		function fnMove(event,fndx,fndy){
			 var fnMx=event.clientX-fnDx;
			 var fnMy=event.clientY-fnDy;
			 // document.title=fnMy+' | '+fnMx;
			 var bodyW=document.documentElement.clientWidth||document.body.clientWidth;
			 var bodyH=document.documentElement.clientHeight||document.body.clientHeight;
			 var maxW=bodyW-box.offsetWidth;
			 var maxH=bodyH-box.offsetHeight;
			 if(fnMx<0){
			 	fnMx=0;
			 }else if(fnMx>maxW){
			 	fnMx=maxW;
			 }
			 if(fnMy<0){
			 	fnMy=0
			 }else if(fnMy>maxH){
			 	fnMy=maxH
			 }
			 box.style.left=fnMx+'px';
			 box.style.top=fnMy+'px';
		}
//----------------------------2015.11.20笔记------------------------------------------------------------//
//数组排序;
	var value=[1,5,10,6,8,15];
		 function compare(value1,value2){
		 	//第一种方法
		 	// if(value1>value2){
		 	// 	return 1
		 	// }else if(value1<value2){
		 	// 	return -1
		 	// }else{
		 	// 	return 0
		 	// }
		 	//第二种方法
		 	return value1-value2;
		 }	
	console.log(value.sort(compare));
//操作方法	
//concat()方法。基于当前数组创建一个新的数组。psuh()/unshif()返回的是数组的长度;
	var b=value.concat();
	console.log(b)
	//结果：[1, 5, 6, 8, 10, 15]
	var c=value.concat(b)
	console.log(c);
	//结果：[1, 5, 6, 8, 10, 15, 1, 5, 6, 8, 10, 15]
//slice()方法，基于当前数组中的一项或多项创建一个新的数组，slice(起始位置,结束位置)可接受两个参数;
	var value=[1,5,10,6,8,15];
	var values=value.slice(1,5);
	console.log(values);
//splice()方法，splice(要删除的第一项的位置，要删除的项数，要插入的项|可以有很多|)
	var color=['red','green','blue'];
	var remove=color.splice(0,1);//在0的起始项删除一个项。
		console.log(color);//返回删除后的数组
		console.log(remove);//返回删除的项。
		remove=color.splice(1,0,"black");//从1的起始位置增加一项
		console.log(color);
		console.log(remove);
		remove=color.splice(1,1,'red','orange');//插入两项，删除一项
		console.log(color);
		console.log(remove);
//indexOf()方法。indexOf(要查找的项,从第几项开始查找);如果没有找到，返回-1;lastIndexOf()相反；
	var color=['red','green','blue'];
	var col=color.indexOf('green');
	console.log(col);
//迭代方法  every()/some()/filter()/map()/forEach();
	//接收的三个参数【数组选项的值】【该项在数组中的位置】【数组本身】
	var a=[1, 5, 6, 8, 10, 15];	 
	var b=a.every(function(item,index,array){return a>1});
	console.log(b);
	var b=a.every(function(item,index,array){return a>0});
    console.log(b);
 	var b=a.every(function(item,index,array){return item>0});
    console.log(b);
 	var b=a.every(function(item,index,array){return item>1});
	console.log(b);
 	var b=a.some(function(item,index,array){return item>1});
	console.log(b);
 	var b=a.filter(function(item,index,array){return item>1});
	console.log(b);
	//[5, 6, 8, 10, 15];
	var b=a.map(function(item,index,array){return item>1});
	console.log(b);
	//[false, true, true, true, true, true];
	var b=a.map(function(item,index,array){return item-1});
	console.log(b);
	//[0, 4, 5, 7, 9, 14];	 
	var b=a.forEach(function(item,index,array){console.log(item)});
	console.log(b);
