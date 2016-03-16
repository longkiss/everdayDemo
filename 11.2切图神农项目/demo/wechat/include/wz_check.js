/**违章查询模块的js**/
var chatName = getUrlVars()["wechatOpenId"];// 获取url上的参
localStorage.wechatName = chatName;// 设置微信号
var ch;
var car_num = localStorage.carno;
var car_fdj = localStorage.ecode;
var car_cj = localStorage.vcode;
var car_sf = localStorage.sf;
var select_tag = localStorage.select_tag;
var cxsf = localStorage.cxsf;
var citylist = {
	"\u9752\u6d77" : [ [ "\u897f\u5b81", 0, 0, "xining" ] ],
	"\u6cb3\u5357" : [ [ "\u90d1\u5dde", 0, -1, "zhengzhou" ],
			[ "\u65b0\u4e61", 0, -1, "xinxiang" ],
			[ "\u5de9\u4e49", 0, -1, "gongyi" ],
			[ "\u7126\u4f5c", 0, 6, "jiaozuo" ],
			[ "\u5357\u9633", 0, 6, "nanyang" ],
			[ "\u9e64\u58c1", 0, 4, "hebi" ],
			[ "\u6fee\u9633", 0, 0, "puyang" ],
			[ "\u5e73\u9876\u5c71", 0, 6, "pingdingshan" ],
			[ "\u5546\u4e18", 0, 6, "shangqiu" ],
			[ "\u4fe1\u9633", 0, 0, "xinyang" ],
			[ "\u4e09\u95e8\u5ce1", 0, -1, "sanmenxia" ],
			[ "\u8bb8\u660c", 0, 0, "xuchang" ],
			[ "\u9a7b\u9a6c\u5e97", 0, 5, "zhumadian" ],
			[ "\u6d4e\u6e90", 0, -1, "jiyuan" ] ],
	"\u5c71\u4e1c" : [ [ "\u9752\u5c9b", 0, 4, "qingdao" ],
			[ "\u70df\u53f0", 0, 4, "yantai" ],
			[ "\u6f4d\u574a", 0, -1, "weifang" ],
			[ "\u5a01\u6d77", 0, 4, "weihai" ],
			[ "\u4e1c\u8425", 0, 6, "dongying" ],
			[ "\u804a\u57ce", 0, 6, "liaocheng" ],
			[ "\u6ed5\u5dde", 0, 6, "tengzhou" ],
			[ "\u65e5\u7167", 0, 6, "rizhao" ],
			[ "\u5fb7\u5dde", 0, 6, "dezhou" ],
			[ "\u8363\u6210", 0, 4, "rongcheng" ],
			[ "\u83b1\u5dde", 0, 4, "laizhou" ],
			[ "\u83b1\u829c", 0, 6, "laiwu" ],
			[ "\u67a3\u5e84", 0, 6, "zaozhuang" ],
			[ "\u83cf\u6cfd", 0, 6, "heze" ],
			[ "\u6ee8\u5dde", 0, 6, "binzhou" ],
			[ "\u8bf8\u57ce", 0, -1, "zhucheng" ],
			[ "\u84ec\u83b1", 0, 4, "penglai" ],
			[ "\u9f99\u53e3", 0, 4, "longkou" ],
			[ "\u5bff\u5149", 0, -1, "shouguang" ],
			[ "\u80f6\u5dde", 0, 4, "jiaozhou" ],
			[ "\u5e73\u5ea6", 0, 4, "pingdu" ],
			[ "\u62db\u8fdc", 0, 4, "zhaoyuan" ],
			[ "\u6587\u767b", 0, 4, "wendeng" ],
			[ "\u4e73\u5c71", 0, 4, "rushan" ],
			[ "\u90b9\u5e73\u53bf", 0, 6, "zoupingxian" ] ],
	"\u6c5f\u82cf" : [ [ "\u5357\u4eac", 6, 0, "nanjing" ],
			[ "\u65e0\u9521", 6, 0, "wuxi" ],
			[ "\u5e38\u5dde", 6, 0, "changzhou" ],
			[ "\u82cf\u5dde", 0, 7, "su1zhou" ],
			[ "\u5f20\u5bb6\u6e2f", 0, 7, "zhangjiagang" ],
			[ "\u6c5f\u9634", 6, 0, "jiangyin" ],
			[ "\u626c\u5dde", 0, 6, "yangzhou" ],
			[ "\u5357\u901a", 4, 0, "nantong" ],
			[ "\u5b9c\u5174", 6, 0, "yixing" ],
			[ "\u6606\u5c71", 0, 7, "kunshan" ],
			[ "\u5e38\u719f", 0, 7, "changshu" ],
			[ "\u9547\u6c5f", 0, 4, "zhenjiang" ],
			[ "\u8fde\u4e91\u6e2f", 6, 0, "lianyungang" ],
			[ "\u6c5f\u90fd", 0, 6, "jiangdou" ],
			[ "\u4e39\u9633", 0, 4, "danyang" ],
			[ "\u592a\u4ed3", 0, 7, "taicang" ],
			[ "\u6ea7\u9633", 6, 0, "liyang" ],
			[ "\u6d77\u95e8", 4, 0, "haimen" ],
			[ "\u542f\u4e1c", 4, 0, "qidong" ],
			[ "\u901a\u5dde", 4, 0, "tongzhou" ] ],
	"\u8d35\u5dde" : [ [ "\u8d35\u9633", 6, 0, "guiyang" ],
			[ "\u9075\u4e49", 6, 0, "zunyi" ],
			[ "\u6bd5\u8282", 6, 0, "bijie" ],
			[ "\u9ed4\u4e1c\u5357", 6, 0, "qiandongnan" ],
			[ "\u516d\u76d8\u6c34", 6, 0, "liupanshui" ],
			[ "\u5b89\u987a", 6, 0, "anshun" ],
			[ "\u94dc\u4ec1", 6, 0, "tongren" ],
			[ "\u9ed4\u5357", 6, 0, "qiannan" ],
			[ "\u9ed4\u897f\u5357", 6, 0, "qianxinan" ] ],
	"\u65b0\u7586" : [ [ "\u4e4c\u9c81\u6728\u9f50", 0, 6, "wulumuqi" ],
			[ "\u5df4\u97f3\u90ed\u695e", 0, 6, "bayinguoleng" ],
			[ "\u4f0a\u7281", 0, 6, "yili" ],
			[ "\u514b\u62c9\u739b\u4f9d", 0, 6, "kelamayi" ],
			[ "\u963f\u514b\u82cf", 0, 6, "akesu" ],
			[ "\u5580\u4ec0", 0, 6, "kashi" ],
			[ "\u54c8\u5bc6", 0, 6, "hami" ],
			[ "\u548c\u7530", 0, 6, "hetian" ],
			[ "\u660c\u5409", 0, 6, "changji" ],
			[ "\u5410\u9c81\u756a", 0, 6, "tulufan" ],
			[ "\u963f\u52d2\u6cf0", 0, 6, "aletai" ],
			[ "\u5854\u57ce", 0, 6, "tacheng" ],
			[ "\u535a\u5c14\u5854\u62c9", 0, 6, "boertala" ],
			[ "\u514b\u5b5c\u52d2\u82cf", 0, 6, "kezilesu" ],
			[ "\u77f3\u6cb3\u5b50", 0, 6, "shihezi" ],
			[ "\u963f\u62c9\u5c14", 0, 6, "alaer" ],
			[ "\u56fe\u6728\u8212\u514b", 0, 6, "tumushuke" ],
			[ "\u4e94\u5bb6\u6e20", 0, 6, "wujiaqu" ] ],
	"\u6d59\u6c5f" : [ [ "\u676d\u5dde", 0, 6, "hangzhou" ],
			[ "\u5b81\u6ce2", 0, 6, "ningbo" ],
			[ "\u4e49\u4e4c", 0, 3, "yiwu" ], [ "\u6148\u6eaa", 0, 6, "cixi" ],
			[ "\u4f59\u59da", 0, 6, "yuyao" ],
			[ "\u6c38\u5eb7", 0, 3, "yongkang" ],
			[ "\u7ecd\u5174\u53bf", 0, -1, "shaoxingxian" ],
			[ "\u5609\u5174", -1, -1, "jiaxing" ],
			[ "\u91d1\u534e", 0, 3, "jinhua" ],
			[ "\u7ecd\u5174", 0, -1, "shaoxing" ],
			[ "\u6850\u4e61", -1, -1, "tongxiang" ],
			[ "\u6d77\u5b81", -1, -1, "haining" ],
			[ "\u8bf8\u66a8", 0, -1, "zhuji" ],
			[ "\u4e0a\u865e", 0, -1, "shangyu" ],
			[ "\u8862\u5dde", 0, 6, "quzhou" ],
			[ "\u821f\u5c71", 0, 6, "zhoushan" ],
			[ "\u5e73\u6e56", -1, -1, "pinghu" ] ],
	"\u6e56\u5317" : [ [ "\u6b66\u6c49", 0, 5, "wuhan" ],
			[ "\u5b9c\u660c", 0, 5, "yichang" ],
			[ "\u8346\u5dde", 0, 5, "jingzhou" ],
			[ "\u8944\u6a0a", 0, 5, "xiangfan" ],
			[ "\u9ec4\u5188", 0, 5, "huanggang" ],
			[ "\u5341\u5830", 0, 5, "shiyan" ],
			[ "\u9ec4\u77f3", 0, 5, "huangshi" ],
			[ "\u968f\u5dde", 0, 5, "suizhou" ],
			[ "\u8346\u95e8", 0, 5, "jingmen" ],
			[ "\u5b5d\u611f", 0, 5, "xiaogan" ],
			[ "\u9102\u5dde", 0, 5, "ezhou" ],
			[ "\u54b8\u5b81", 0, 5, "xianning" ],
			[ "\u6069\u65bd", 0, 5, "enshi" ],
			[ "\u795e\u519c\u67b6", 0, 5, "shennongjia" ],
			[ "\u6f5c\u6c5f", 0, 5, "qianjiang" ],
			[ "\u5929\u95e8", 0, 5, "tianmen" ],
			[ "\u4ed9\u6843", 0, 5, "xiantao" ] ],
	"\u897f\u85cf" : [ [ "\u90a3\u66f2", 0, -1, "naqu" ] ],
	"\u5e7f\u4e1c" : [ [ "\u5e7f\u5dde", 4, 6, "guangzhou" ],
	                   [ "珠海", 4, 6, "zhuhai" ] , 
	                   [ "汕头", 4, 6, "shantou" ] , 
					   [ "佛山", 4, 6, "foshan" ] , 
					   [ "韶关", 4, 6, "shaoguan" ] , 
					   [ "河源", 4, 6, "heyuan" ] , 
					   [ "梅州", 4, 6, "meizhou" ] , 
					   [ "惠州", 4, 6, "huizhou" ] , 
					   [ "汕尾", 4, 6, "shanwei" ] , 
					   [ "东莞", 4, 6, "dongguan" ] , 
					   [ "中山", 4, 6, "zhongshan" ] , 
					   [ "江门", 4, 6, "jiangmen" ] , 
					   [ "阳江", 4, 6, "yangjiang" ] ,
					   [ "湛江", 4, 6, "zhanjiang" ] , 
					   [ "茂名", 4, 6, "maoming" ] , 
					   [ "肇庆", 4, 6, "zhaoqing" ] , 
					   [ "清远", 4, 6, "qingyuan" ] , 
					   [ "潮州", 4, 6, "chaozhou" ] ,
					   [ "揭阳", 4, 6, "jieyang" ] , 
					   [ "云浮", 4, 6, "yunfu" ],
					   [ "\u6df1\u5733", 4, 6, "shenzhen" ] ],
	"\u4e91\u5357" : [ [ "\u6606\u660e", 4, 4, "kunming" ],
			[ "\u7389\u6eaa", 0, 4, "yuxi" ],
			[ "\u4fdd\u5c71", 0, 4, "baoshan" ],
			[ "\u66f2\u9756", 0, 4, "qujing" ],
			[ "\u7ea2\u6cb3", 0, 4, "honghe" ],
			[ "\u4e3d\u6c5f", 0, 4, "lijiang" ],
			[ "\u662d\u901a", 0, 4, "zhaotong" ],
			[ "\u666e\u6d31", 0, 4, "puer" ],
			[ "\u4e34\u6ca7", 0, 4, "lincang" ],
			[ "\u5927\u7406", 0, 4, "dali" ],
			[ "\u8fea\u5e86", 0, 4, "diqing" ],
			[ "\u695a\u96c4", 0, 4, "chuxiong" ],
			[ "\u897f\u53cc\u7248\u7eb3", 0, 4, "xishuangbanna" ],
			[ "\u6587\u5c71", 0, 4, "wenshan" ],
			[ "\u5fb7\u5b8f", 0, 4, "dehong" ],
			[ "\u6012\u6c5f", 0, 4, "nujiang" ] ],
	"\u5317\u4eac" : [ [ "\u5317\u4eac", -1, 0, "beijing" ] ],
	"\u9655\u897f" : [ [ "\u897f\u5b89", -1, 0, "xian" ],
			[ "\u6c49\u4e2d", -1, 0, "hanzhong" ],
			[ "\u5ef6\u5b89", -1, 0, "yanan" ] ],
	"\u7518\u8083" : [ [ "\u5170\u5dde", 0, -1, "lanzhou" ],
			[ "\u9152\u6cc9", 0, -1, "jiuquan" ],
			[ "\u5929\u6c34", 0, -1, "tianshui" ],
			[ "\u5f20\u6396", 0, -1, "zhangye" ],
			[ "\u767d\u94f6", 0, -1, "baiyin" ],
			[ "\u5e86\u9633", 0, -1, "qingyang" ],
			[ "\u5609\u5cea\u5173", 0, -1, "jiayuguan" ],
			[ "\u6b66\u5a01", 0, -1, "wuwei" ],
			[ "\u5e73\u51c9", 0, -1, "pingliang" ],
			[ "\u91d1\u660c", 0, -1, "jinchang" ],
			[ "\u7518\u5357", 0, -1, "gannan" ],
			[ "\u4e34\u590f", 0, -1, "linxia" ],
			[ "\u9647\u5357", 0, -1, "longnan" ],
			[ "\u5b9a\u897f", 0, -1, "dingxi" ] ],
	"\u5b81\u590f" : [ [ "\u94f6\u5ddd", 0, 6, "yinchuan" ],
			[ "\u5434\u5fe0", 0, 6, "wuzhong" ],
			[ "\u77f3\u5634\u5c71", 0, 6, "shizuishan" ],
			[ "\u56fa\u539f", 0, 6, "guyuan" ],
			[ "\u4e2d\u536b", 0, 6, "zhongwei" ] ],
	"\u91cd\u5e86" : [ [ "\u91cd\u5e86", 0, 6, "chongqing" ] ],
	"\u5409\u6797" : [ [ "\u957f\u6625", 0, 4, "changchun" ],
			[ "\u5409\u6797", 0, 4, "jilin" ],
			[ "\u56db\u5e73", 0, 4, "siping" ],
			[ "\u901a\u5316", 0, 4, "tonghua" ],
			[ "\u767d\u5c71", 0, 4, "baishan" ],
			[ "\u8fbd\u6e90", 0, 4, "liaoyuan" ],
			[ "\u677e\u539f", 0, 4, "songyuan" ],
			[ "\u767d\u57ce", 0, 4, "baicheng" ],
			[ "\u5ef6\u8fb9", 0, 4, "yanbian" ] ],
	"\u6e56\u5357" : [ [ "\u76ca\u9633", 4, 4, "yiyang" ] ],
	"\u5b89\u5fbd" : [ [ "\u5408\u80a5", 0, 6, "hefei" ],
			[ "\u829c\u6e56", 0, 6, "wuhu" ],
			[ "\u961c\u9633", 0, 6, "fuyang" ],
			[ "\u9ec4\u5c71", 0, 6, "huangshan" ],
			[ "\u868c\u57e0", 0, 6, "bengbu" ],
			[ "\u5b89\u5e86", 0, 6, "anqing" ],
			[ "\u9a6c\u978d\u5c71", 0, 6, "maanshan" ],
			[ "\u4eb3\u5dde", 0, 6, "bozhou" ],
			[ "\u6ec1\u5dde", 0, 6, "chuzhou" ],
			[ "\u94dc\u9675", 0, 6, "tongling" ],
			[ "\u6dee\u5357", 0, 6, "huainan" ],
			[ "\u6dee\u5317", 0, 6, "huaibei" ],
			[ "\u516d\u5b89", 0, 6, "liuan" ],
			[ "\u5de2\u6e56", 0, 6, "chaohu" ],
			[ "\u5bbf\u5dde", 0, 6, "su4zhou" ],
			[ "\u5ba3\u57ce", 0, 6, "xuancheng" ],
			[ "\u6c60\u5dde", 0, 6, "chizhou" ] ],
	"\u5185\u8499\u53e4" : [
			[ "\u547c\u548c\u6d69\u7279", -1, 6, "huhehaote" ],
			[ "\u5305\u5934", -1, 6, "baotou" ],
			[ "\u5174\u5b89", -1, 6, "xingan" ],
			[ "\u51c6\u683c\u5c14", -1, 6, "zhungeer" ],
			[ "\u8d64\u5cf0", -1, 6, "chifeng" ],
			[ "\u9521\u6797\u90ed\u52d2", -1, 6, "xilinguole" ],
			[ "\u963f\u62c9\u5584", -1, 6, "alashan" ],
			[ "\u901a\u8fbd", -1, 6, "tongliao" ],
			[ "\u9102\u5c14\u591a\u65af", -1, 6, "eerduosi" ],
			[ "\u4e4c\u5170\u5bdf\u5e03", -1, 6, "wulanchabu" ],
			[ "\u547c\u4f26\u8d1d\u5c14", -1, 6, "hulunbeier" ],
			[ "\u5df4\u5f66\u6dd6\u5c14", -1, 6, "bayannaoer" ],
			[ "\u4e4c\u6d77", -1, 6, "wuhai" ] ],
	"\u5c71\u897f" : [ [ "\u592a\u539f", 0, 6, "taiyuan" ],
			[ "\u5927\u540c", 0, 6, "datong" ],
			[ "\u8fd0\u57ce", 0, 6, "yuncheng" ],
			[ "\u957f\u6cbb", 0, 6, "changzhi" ],
			[ "\u4e34\u6c7e", 0, 6, "linfen" ],
			[ "\u664b\u57ce", 0, 6, "jincheng" ],
			[ "\u9633\u6cc9", 0, 6, "yangquan" ],
			[ "\u5ffb\u5dde", 0, 6, "xinzhou" ],
			[ "\u664b\u4e2d", 0, 6, "jinzhong" ],
			[ "\u6714\u5dde", 0, 6, "shuozhou" ],
			[ "\u5415\u6881", 0, 6, "lvliang" ] ],
	"\u6d77\u5357" : [ [ "\u6d77\u53e3", 0, 4, "haikou" ],
			[ "\u4e09\u4e9a", 0, 4, "sanya" ],
			[ "\u9675\u6c34", 0, 4, "lingshui" ],
			[ "\u767d\u6c99", 0, 4, "baisha" ],
			[ "\u743c\u6d77", 0, 4, "qionghai" ],
			[ "\u743c\u4e2d", 0, 4, "qiongzhong" ],
			[ "\u6f84\u8fc8\u53bf", 0, 4, "chengmaixian" ],
			[ "\u660c\u6c5f", 0, 4, "changjiang" ],
			[ "\u6587\u660c", 0, 4, "wenchang" ],
			[ "\u5c6f\u660c\u53bf", 0, 4, "tunchangxian" ],
			[ "\u5b9a\u5b89\u53bf", 0, 4, "dinganxian" ],
			[ "\u510b\u5dde", 0, 4, "danzhou" ],
			[ "\u4fdd\u4ead", 0, 4, "baoting" ],
			[ "\u4e94\u6307\u5c71", 0, 4, "wuzhishan" ],
			[ "\u4e50\u4e1c", 0, 4, "ledong" ],
			[ "\u4e34\u9ad8\u53bf", 0, 4, "lingaoxian" ],
			[ "\u4e1c\u65b9", 0, 4, "dongfang" ],
			[ "\u4e07\u5b81", 0, 4, "wanning" ] ],
	"\u8fbd\u5b81" : [ [ "\u6c88\u9633", 0, 4, "shenyang" ],
			[ "\u5927\u8fde", 0, 4, "dalian" ],
			[ "\u978d\u5c71", 0, 4, "anshan" ],
			[ "\u4e39\u4e1c", 3, 4, "dandong" ],
			[ "\u9526\u5dde", 0, 6, "jinzhou" ],
			[ "\u629a\u987a", 0, 4, "fushun" ],
			[ "\u8fbd\u9633", 0, 4, "liaoyang" ],
			[ "\u8425\u53e3", 0, -1, "yingkou" ],
			[ "\u672c\u6eaa", 0, 4, "benxi" ],
			[ "\u961c\u65b0", -1, 0, "fuxin" ],
			[ "\u846b\u82a6\u5c9b", 0, -1, "huludao" ],
			[ "\u76d8\u9526", 0, 4, "panjin" ],
			[ "\u6d77\u57ce", 0, 4, "haicheng" ],
			[ "\u74e6\u623f\u5e97", 0, 4, "wafangdian" ] ]
};
var provincelist = jQuery
		.parseJSON('[ "\u5e7f\u4e1c", "\u5317\u4eac", "\u5c71\u897f", "\u5185\u8499\u53e4", "\u8fbd\u5b81", "\u5409\u6797", "\u6c5f\u82cf", "\u6d59\u6c5f", "\u5b89\u5fbd", "\u5c71\u4e1c", "\u6cb3\u5357", "\u6e56\u5317", "\u6e56\u5357","\u6d77\u5357", "\u91cd\u5e86", "\u8d35\u5dde", "\u4e91\u5357", "\u897f\u85cf", "\u9655\u897f", "\u7518\u8083", "\u9752\u6d77", "\u5b81\u590f", "\u65b0\u7586"]');
var province_pinyin_list = {
	"北京" : "0",
	"上海" : "2",
	"河北" : "1",
	"山西" : "2",
	"辽宁" : "1",
	"吉林" : "1",
	"黑龙江" : "1",
	"江苏" : "1",
	"浙江" : "3",
	"安徽" : "0",
	"福建" : "0",
	"山东" : "2",
	"河南" : "1",
	"湖北" : "1",
	"湖南" : "1",
	"广东" : "0",
	"海南" : "1",
	"四川" : "2",
	"贵州" : "0",
	"云南" : "3",
	"西藏" : "3",
	"陕西" : "2",
	"甘肃" : "0",
	"青海" : "2",
	"宁夏" : "1",
	"新疆" : "3",
	"天津" : "2",
	"内蒙古" : "1",
	"江西" : "1",
	"广西" : "0",
	"重庆" : "0"
};
//var tag = 2 ;	//定义是否保存的标识，1为保存，2为不保存
var sf = [ "粤", "京", "津", "冀", "晋", "蒙", "辽", "吉", "黑", "沪", "苏", "浙", "皖",
		"闽", "赣", "鲁", "豫", "鄂", "湘", "桂", "琼", "渝", "川", "贵", "云", "藏", "陕",
		"甘", "青", "宁", "新", "港", "澳", "台" ];
var ch, dp, engine;
/*function getData(){
	//http://localhost:8080/vecars/userInfo!userByWechatOpenId.action?wechatOpenId=test
	var in_url = "/vecars/userInfo!userByWechatOpenId.action?wechatOpenId="+chatName+"&r=" + Math.random() ;
	$.ajax({
    type: "GET",
    url: in_url,
    async:false,
    cache: false,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (result) {
		 if(result.ret == "1"){
		 	var inf = result.inf ;
		 	var cph ;
		 	if(inf.ch == "" || inf.ch == null){
		 		ch == "" ;
		 		cph  = ch ;
		 	}else{
		 		ch = inf.ch ;	//车牌
		 		cph = ch.substring(1,7) ;
		 	}
		 	if(inf.dp == "" || inf.dp == null){
		 		dp == "" ;
		 	}else{
		 		dp = inf.dp ;	//车架
		 	}
		 	if(inf.engine == "" || inf.engine == null){
		 		engine == "" ;
		 	}else{
		 		engine = inf.engine ;	//发动机
		 	}
		 	if(select_tag == 1){
		 	}else{
		 		$("#car-num").val(cph) ;
			 	$("#vcode").val(dp) ;
			 	$("#ecode").val(engine) ;
		 	}
		 	}
		 }
	}) ;
}*/
function save(flag){
	select_tag = flag ;
	return select_tag ;
}
function getSF(){
	var opHtml = "" ;
		var h1 = "" ;
		var h2 = "" ;
		var selector=$('<select id="sf" data-role="none"></select>');
		for(var i = 0;i<sf.length;i++){
			if(ch == "" || ch == null){
				opHtml += "<option value='"+sf[i]+"'>"+sf[i]+"</option>" ;
			}else{
				if(sf[i] == ch.split("")[0]){
					h1 = "<option value='"+sf[i]+"'>"+sf[i]+"</option>" ;
				}else{
					h2 += "<option value='"+sf[i]+"'>"+sf[i]+"</option>" ;
				}
			}
		}
		opHtml += h1+h2 ;
		selector.append(opHtml) ;
		$("#test").append(selector).trigger("create") ;
}
function  jcitylist(v){
     $("#citylist").html("") ;
     if (v) {
         $("#citylist").html("");
         for (i = 0; i < citylist[v].length; i++) {
             $("#citylist").append("<option value='" + citylist[v][i][3] + "'>" + citylist[v][i][0] + " </option>");
         }
     } else{
          $("#citylist").html("<option> 请选择  </option>");
     }

}
function loadWZ(){
	var div = document.getElementById("wz-detail-div");
	if(div.style.display == "none"){
		div.style.display = "";
	}else{
		div.style.display == "none" ;
	}
}