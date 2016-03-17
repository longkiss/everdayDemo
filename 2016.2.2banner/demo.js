// window.onload=function(){
//     // 事件监听
//     function addEvent(ele,type,fn){
//         if(ele.addEventListener){
//             ele.addEventListener(type,fn,false)
//         }else if(ele.attachEvent){
//             ele.attachEvent('on'+type,fn);
//         }else{
//             ele.on[type]=fn;
//         }
//     }
//     /**
//      * 点击next,prev时
//      */
//     var oNext=document.getElementById('next'),
//             oPrev=document.getElementById('prev'),
//             oUl=document.getElementById('oul'),
//             oOus=document.getElementById('ous'),
//             oLis=oOus.getElementsByTagName('li'),
//             Left=parseInt(oUl.offsetLeft),
//             newtime=new Date();

//     function nextFn(){
//         if(new Date()-newtime>1000){
//             runs(1);
//             console.log(Left);
//             newtime=new Date();
//         }
//     }
//     function prevFn(){
//         if(new Date()-newtime>1000){
//             runs(0);
//             console.log(Left);
//             newtime=new Date();
//         }
//     }
//     /**
//      * 自动开启定时器
//      */
//     var t=setInterval(function(){
//         runs(1);
//     },2000)
//     //runs();轮播改变left值;
//     function runs(x){
//         if(x==0){
//             Left=Left+1000;
//             if(Left>0){
//                  Left=-4000;
//             }
//         }else{
//             Left=Left-1000;
//             if(Left<-4000){
//                 Left=0;
//             }
//         }
//         oUl.style.left=Left+'px';
//         check(Left);
//     }
//     //banner图与数字下标对应
//     function check(Left){
//         for(var i=0;i<oLis.length;i++){
//             oLis[i].className='';
//         }
//         switch (Left){
//             case 0:
//                 oLis[0].className='ls';
//                 break;
//             case -1000:
//                 oLis[1].className='ls';
//                 break;
//             case -2000:
//                 oLis[2].className='ls';
//                 break;
//             case -3000:
//                 oLis[3].className='ls';
//                 break;
//             case -4000:
//                 oLis[4].className='ls';
//                 break;
//         }
//     }
//     //鼠标经过数字标时；
//        for(var i=0;i<oLis.length;i++){
//            oLis[i].index=i;
//            oLis[i].onmouseover=function(){
//                clearInterval(t)
//                 for(var i=0;i<oLis.length;i++){
//                      oLis[i].className='';
//                 }
//                switch(this.index){
//                     case 0:
//                         oUl.style.left='0px';
//                         oLis[0].className='ls';
//                         break;
//                     case 1:
//                         oUl.style.left='-1000px';
//                         oLis[1].className='ls';
//                         break;
//                     case 2:
//                         oUl.style.left='-2000px';
//                         oLis[2].className='ls';
//                         break;
//                     case 3:
//                         oUl.style.left='-3000px';
//                         oLis[3].className='ls';
//                         break;
//                     case 4:
//                         oUl.style.left='-4000px';
//                         oLis[4].className='ls';
//                         break;
//                }
//                this.onmouseout = function(){
//                    t=setInterval(function(){runs(0)},2000)
//                }
//            }
//        }
//     //鼠标经过  oNext oPrev 关闭定时器
//     function clearTime(){
//         clearInterval(t)
//     }
//     //鼠标移开  oNext oPrev 启动定时器
//     function setTime(){
//         t=setInterval(function(){
//             runs(1);
//         },2000)
//     }
//     addEvent(oNext,'click',nextFn);
//     addEvent(oPrev,'click',prevFn);
//     addEvent(oNext,'mouseover',clearTime);
//     addEvent(oPrev,'mouseover',clearTime);
//     addEvent(oNext,'mouseout',setTime);
//     addEvent(oPrev,'mouseout',setTime);
// //    addEvent(oOus,'mouseover',LiFn)
// }
