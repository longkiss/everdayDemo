/**
 * Created by Administrator on 2016/2/2.
 */
var left =parseInt($("#oul").css('left')),
    width=$('#oul').css('width'),
    newtime=new Date();
$('#next').click(function(){
    //当时间间隔大于1s时实行
    if(new Date()-newtime>1000){
        runs();
        newtime=new Date();
    }
    //clearInterval(t);
    console.log(left);
})
$('#prev').click(function(){
    //当时间间隔大于1s时实行
    if(new Date()-newtime>1000){
        runs(0);
        newtime=new Date();
    }
    console.log(left);
})
//设置定时器,自动轮播
var t=setInterval(function(){
    runs();
},2000);
//鼠标经过next,prev是关闭定时器，移开是开启定时器；
$('#next').mouseover(function(){
    clearInterval(t);
})
$('#prev').mouseover(function(){
    clearInterval(t);
})
$('#next').mouseout(function(){
    t=setInterval(function(){runs()},2000);
})
$('#prev').mouseout(function(){
    t=setInterval(function(){runs()},2000);
})
//鼠标经过和移开数字小标时
$('#ous li').mouseover(function(){
    $(this).addClass('ls').siblings().removeClass('ls');
    var index=$(this).index();
    console.log(index);
    var arr=[0,-1000,-2000,-3000,-4000];//预先定义#oul的left值;[每张图片最左边的开始位置];
    //判断index的值
    switch(index){
        case 0:
            $('#oul').css('left',arr[0]+'px');
            break;
        case 1:
            $('#oul').css('left',arr[1]+'px');
            break;
        case 2:
            $('#oul').css('left',arr[2]+'px');

            break;
        case 3:
            $('#oul').css('left',arr[3]+'px');

            break;
        case 4:
            $('#oul').css('left',arr[4]+'px');
            break;
    }
    clearInterval(t);
})
$('#ous li').mouseout(function(){
    //启动定时器
    t=setInterval(function(){runs()},2000);
})
//runs();轮播改变left值;
function runs(x){
    if(x==0){
        left=left+1000;
        if(left>0){
            left=-4000;
        }
    }else{
        left=left-1000;
        if(left<-4000){
            left=0;
        }
    }
    $('#oul').css('left',left+'px');
    check(left);
}
//banner与数字标对应
function check(left){
    var arr=[0,-1000,-2000,-3000,-4000];//预先定义#oul的left值;[每张图片最左边的开始位置];
    switch(left){
        case arr[0]:
            $('#ous li').eq(0).addClass('ls').siblings().removeClass('ls');
            break;
        case arr[1]:
            $('#ous li').eq(1).addClass('ls').siblings().removeClass('ls');
            break;
        case arr[2]:
            $('#ous li').eq(2).addClass('ls').siblings().removeClass('ls');
            break;
        case arr[3]:
            $('#ous li').eq(3).addClass('ls').siblings().removeClass('ls');
            break;
        case arr[4]:
            $('#ous li').eq(4).addClass('ls').siblings().removeClass('ls');
            break;
    }

}
