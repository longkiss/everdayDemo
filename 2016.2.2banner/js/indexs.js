/**
 * Created by Administrator on 2016/2/2.
 */
var left =parseInt($("#oul").css('left')),
    width=$('#oul').css('width'),
    newtime=new Date();
$('#next').click(function(){
    //��ʱ��������1sʱʵ��
    if(new Date()-newtime>1000){
        runs();
        newtime=new Date();
    }
    //clearInterval(t);
    console.log(left);
})
$('#prev').click(function(){
    //��ʱ��������1sʱʵ��
    if(new Date()-newtime>1000){
        runs(0);
        newtime=new Date();
    }
    console.log(left);
})
//���ö�ʱ��,�Զ��ֲ�
var t=setInterval(function(){
    runs();
},2000);
//��꾭��next,prev�ǹرն�ʱ�����ƿ��ǿ�����ʱ����
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
//��꾭�����ƿ�����С��ʱ
$('#ous li').mouseover(function(){
    $(this).addClass('ls').siblings().removeClass('ls');
    var index=$(this).index();
    console.log(index);
    var arr=[0,-1000,-2000,-3000,-4000];//Ԥ�ȶ���#oul��leftֵ;[ÿ��ͼƬ����ߵĿ�ʼλ��];
    //�ж�index��ֵ
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
    //������ʱ��
    t=setInterval(function(){runs()},2000);
})
//runs();�ֲ��ı�leftֵ;
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
//banner�����ֱ��Ӧ
function check(left){
    var arr=[0,-1000,-2000,-3000,-4000];//Ԥ�ȶ���#oul��leftֵ;[ÿ��ͼƬ����ߵĿ�ʼλ��];
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
