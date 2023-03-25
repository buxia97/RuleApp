//RuleApp是一套开源免费的客户端代码，如果您通过任何收费渠道下载到了此代码，则可以认为你被忽悠了。
//正式版下载地址：https://ext.dcloud.net.cn/plugin?id=6909
//github内测版地址：https://github.com/buxia97/RuleApp

var API_URL = 'http://127.0.0.4/';
//var API_URL = 'https://api.ruletree.club/';

var WEB_URL = 'https://www.ruletree.club/';
var GroupUrl = 'https://jq.qq.com/?_wv=1027&k=tzDllRvf';

var GithubUrl = 'https://github.com/buxia97/RuleApp';

//是否禁止网络代理，为1时开启（可以在安卓和苹果APP中防止抓包，但同时也会禁止VPN环境使用APP）
//由于uniapp官方的问题，只能拦截部分条件
var banVPN = 0;

//上传方式，可以设置为cos(腾讯云对象存储)，oss(阿里云对象存储)，ftp(远程ftp)，local(本地服务器)
var uploadType = 'local';

var currencyName = "规则豆";

//对于个人小程序，将不会出现积分商城，交易，评论等页面，因为会导致无法过审。如果是企业，可以自行注释条件编译判断，开启那些功能。

//下面主要用于用户协议
var appName="规则之树";
var appEmail = "buxia97@126.com";
//全局数据调用部分【重要】

//评论等级头衔
var rankList = ["小水友","资深水友","灌水大师","小龙王","大龙王","深海巨妖","水神","至尊水神"];
//经验等级头衔
var leverList = ["Lv0","Lv1","Lv2","Lv3","Lv4","Lv5","Lv6","Lv7"];
//头衔对应的背景颜色
var rankStyle = ["#6699CC","#666699","#009933","#FF9900","#ff007f","#FF0033","#660033","#000000"];

//链接规则(用于站内链接自动跳转和文章分享)，请根据自己的网站文件链接自由发挥，比如我的就是
//https://www.ruletree.club/archives/2824/
//{cid}对应文章id，{category}对应分类缩略名，{slug}对应独立页面名称，其实本质上就是页面拼接。
var linkRule =WEB_URL+"archives/{cid}/" //普通文章
var pageRule =WEB_URL+"{slug}.html" //独立页面


//使用攻略文章id，typecho文章表cid
var raiders = 1518
//意见反馈文章id，typecho文章表cid
var feedback = 2689
//关于我们文章id，typecho文章表cid
var aboutme = 2

//小程序配置
//小程序端是否开启评论，1位开启，0位关闭。
var isComment = 1;

//自定义字段配置（和可视化配置中心保持一致，英文逗号分割），默认的字段名称是小灯泡模板的abcimg字段，假如你的模板是用其它的字段进行判断，可以自己全局搜索abcimg进行修改，当然也可以什么都不做，这并不会导致使用出现问题。
var fields = "abcimg";

//配合nginx实现的访问key（部分情况会导致网络错误，建议不要配置）
var key = "";
// #ifdef H5
//var API_URL = '/';
// #endif


import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js'
//外部接口接管实现(预留)

module.exports = {
	getKey(){
		return key;
	},
	getBanVPN(){
		return banVPN;
	},
	getCurrencyName(){
		return currencyName;
	},
	
	GetIsComment(){
		return isComment;
	},
	GetRankList(){
		return rankList;
	},
	GetLeverList(){
		return leverList;
	},
	GetRankStyle(){
		return rankStyle;
	},
	GetAppName:function(){
		return appName;
	},
	GetAppEmail:function(){
		return appEmail;
	},
	GetLinkRule:function(){
		return linkRule;
	},
	GetPageRule:function(){
		return pageRule;
	},
	GetRaiders:function(){
		return raiders;
	},
	GetFeedback:function(){
		return feedback;
	},
	GetAboutme:function(){
		return aboutme;
	},
	GetFields:function(){
		return fields;
	},
	GetUpdateUrl:function(){
		return WEB_URL + 'apiResult.php?update=1';
	},
	GetAds:function(){
		return WEB_URL + 'apiResult.php?getAds=1';
	},
	GetAppStart:function(){
		return WEB_URL + 'apiResult.php?appStart=1';
	},
	GetGithubUrl:function(){
		return GithubUrl;
	},
	GetWebUrl:function(){
		return WEB_URL;
	},
	GetGroupUrl:function(){
		return GroupUrl;
	},
	userLogin:function(){
		return API_URL + 'typechoUsers/userLogin';
	},
	RegSendCode:function(){
		return API_URL + 'typechoUsers/RegSendCode';
	},
	SendCode:function(){
		return API_URL + 'typechoUsers/SendCode';
	},
	userApi:function(){
		return API_URL + 'typechoUsers/apiLogin';
	},
	userRegister:function(){
		return API_URL + 'typechoUsers/userRegister';
	},
	userFoget:function(){
		return API_URL + 'typechoUsers/userFoget';
	},
	getUserInfo:function(){
		return API_URL + 'typechoUsers/userInfo';
	},
	getUserList:function(){
		return API_URL + 'typechoUsers/userList';
	},
	userEdit:function(){
		return API_URL + 'typechoUsers/userEdit';
	},
	getUserData:function(){
		return API_URL + 'typechoUsers/userData';
	},
	userDelete:function(){
		return API_URL + 'typechoUsers/userDelete';
	},
	userRecharge:function(){
		return API_URL + 'typechoUsers/userRecharge';
	},
	
	userWithdraw:function(){
		return API_URL + 'typechoUsers/userWithdraw';
	},
	withdrawList:function(){
		return API_URL + 'typechoUsers/withdrawList';
	},
	withdrawStatus:function(){
		return API_URL + 'typechoUsers/withdrawStatus';
	},
	manageUserEdit:function(){
		return API_URL + 'typechoUsers/manageUserEdit';
	},
	apiBind:function(){
		return API_URL + 'typechoUsers/apiBind';
	},
	userBindStatus:function(){
		return API_URL + 'typechoUsers/userBindStatus';
	},
	setScan:function(){
		return API_URL + 'typechoUsers/setScan';
	},
	userStatus:function(){
		return API_URL + 'typechoUsers/userStatus';
	},
	regConfig:function(){
		return API_URL + 'typechoUsers/regConfig';
	},
	signOut:function(){
		return API_URL + 'typechoUsers/signOut';
	},
	
	//邀请码注册相关
	madeInvitation:function(){
		return API_URL + 'typechoUsers/madeInvitation';
	},
	invitationList:function(){
		return API_URL + 'typechoUsers/invitationList';
	},
	invitationExcel:function(){
		return API_URL + 'typechoUsers/invitationExcel';
	},
	setClientId:function(){
		return API_URL + 'typechoUsers/setClientId';
	},
	//消息相关
	getInbox:function(){
		return API_URL + 'typechoUsers/inbox';
	},
	unreadNum:function(){
		return API_URL + 'typechoUsers/unreadNum';
	},
	setRead:function(){
		return API_URL + 'typechoUsers/setRead';
	},
	sendUser:function(){
		return API_URL + 'typechoUsers/sendUser';
	},
	//关注
	follow:function(){
		return API_URL + 'typechoUsers/follow';
	},
	isFollow:function(){
		return API_URL + 'typechoUsers/isFollow';
	},
	followList:function(){
		return API_URL + 'typechoUsers/followList';
	},
	fanList:function(){
		return API_URL + 'typechoUsers/fanList';
	},
	//封禁
	banUser:function(){
		return API_URL + 'typechoUsers/banUser';
	},
	unblockUser:function(){
		return API_URL + 'typechoUsers/unblockUser';
	},
	violationList:function(){
		return API_URL + 'typechoUsers/violationList';
	},
	userClean:function(){
		return API_URL + 'typechoUsers/userClean';
	},
	restrict:function(){
		return API_URL + 'typechoUsers/restrict';
	},
	
	
	getMarkList:function(){
		return API_URL + 'typechoUserlog/markList';
	},
	getIsMark:function(){
		return API_URL + 'typechoUserlog/isMark';
	},
	
	addLog:function(){
		return API_URL + 'typechoUserlog/addLog';
	},
	removeLog:function(){
		return API_URL + 'typechoUserlog/removeLog';
	},
	removeLog:function(){
		return API_URL + 'typechoUserlog/removeLog';
	},
	dataClean:function(){
		return API_URL + 'typechoUserlog/dataClean';
	},
	
	
	getCommentsList:function(){
		return API_URL + 'typechoComments/commentsList';
	},
	setComments:function(){
		return API_URL + 'typechoComments/commentsAdd';
	},
	commentsDelete:function(){
		return API_URL + 'typechoComments/commentsDelete';
	},
	commentsAudit:function(){
		return API_URL + 'typechoComments/commentsAudit';
	},
	
	
	//根据标签或者分类获取文章
	getMetaContents:function(){
		return API_URL + 'typechoMetas/selectContents';
	},
	getMetasList:function(){
		return API_URL + 'typechoMetas/metasList';
	},
	geMetaInfo:function(){
		return API_URL + 'typechoMetas/metaInfo';
	},
	editMeta:function(){
		return API_URL + 'typechoMetas/editMeta';
	},
	addMeta:function(){
		return API_URL + 'typechoMetas/addMeta';
	},
	
	getContentsList:function(){
		return API_URL + 'typechoContents/contentsList';
	},
	getContentsInfo:function(){
		return API_URL + 'typechoContents/contentsInfo';
	},
	contentsAdd:function(){
		return API_URL + 'typechoContents/contentsAdd';
	},
	
	contentsUpdate:function(){
		return API_URL + 'typechoContents/contentsUpdate';
	},
	contentsImage:function(){
		return API_URL + 'typechoContents/ImagePexels';
	},
	allData:function(){
		return API_URL + 'typechoContents/allData';
	},
	contentsDelete:function(){
		return API_URL + 'typechoContents/contentsDelete';
	},
	contentsAudit:function(){
		return API_URL + 'typechoContents/contentsAudit';
	},
	getForeverblog:function(){
		return API_URL + 'typechoContents/foreverblog';
	},
	//文章是否评论过
	isCommnet:function(){
		return API_URL + 'typechoContents/isCommnet';
	},
	//文章推荐
	toRecommend:function(){
		return API_URL + 'typechoContents/toRecommend';
	},
	//文章置顶
	toTop:function(){
		return API_URL + 'typechoContents/addTop';
	},
	//文章轮播
	toSwiper:function(){
		return API_URL + 'typechoContents/addSwiper';
	},
	//设置自定义字段
	setFields:function(){
		return API_URL + 'typechoContents/setFields';
	},
	contentConfig:function(){
		return API_URL + 'typechoContents/contentConfig';
	},
	//下面这个方法涉及图片上传，根据上方的uploadType进行调整
	upload:function(){
		if(uploadType=='cos'){
			return API_URL + 'upload/cosUpload';
		}
		if(uploadType=='oss'){
			return API_URL + 'upload/ossUpload';
		}
		if(uploadType=='ftp'){
			return API_URL + 'upload/ftpUpload';
		}
		if(uploadType=='local'){
			return API_URL + 'upload/localUpload';
		}
	},
	shopList:function(){
		return API_URL + 'typechoShop/shopList';
	},
	shopInfo:function(){
		return API_URL + 'typechoShop/shopInfo';
	},
	addShop:function(){
		return API_URL + 'typechoShop/addShop';
	},
	editShop:function(){
		return API_URL + 'typechoShop/editShop';
	},
	deleteShop:function(){
		return API_URL + 'typechoShop/deleteShop';
	},
	buyShop:function(){
		return API_URL + 'typechoShop/buyShop';
	},
	isBuyShop:function(){
		return API_URL + 'typechoShop/isBuyShop';
	},
	auditShop:function(){
		return API_URL + 'typechoShop/auditShop';
	},
	getVipInfo:function(){
		return API_URL + 'typechoShop/vipInfo';
	},
	buyVIP:function(){
		return API_URL + 'typechoShop/buyVIP';
	},
	orderList:function(){
		return API_URL + 'typechoUserlog/orderList';
	},
	orderSellList:function(){
		return API_URL + 'typechoUserlog/orderSellList';
	},
	
	//文章挂载商品
	mountShop:function(){
		return API_URL + 'typechoShop/mountShop';
	},
	//支付宝当面付
	scancodePay:function(){
		return API_URL + 'pay/scancodePay';
	},
	//微信支付（官方）
	wxPay:function(){
		return API_URL + 'pay/WxPay';
	},
	//卡密充值
	tokenPay:function(){
		return API_URL + 'pay/tokenPay';
	},
	//易支付
	EPay:function(){
		return API_URL + 'pay/EPay';
	},
	//充值二维码生成
	qrCode:function(){
		return API_URL + 'pay/qrCode';
	},
	payLogList:function(){
		return API_URL + 'pay/payLogList';
	},
	//卡密充值相关
	tokenPayList:function(){
		return API_URL + 'pay/tokenPayList';
	},
	tokenPayExcel:function(){
		return API_URL + 'pay/tokenPayExcel';
	},
	
	//生成卡密
	madetoken:function(){
		return API_URL + 'pay/madetoken';
	},
	//财务记录
	financeList:function(){
		return API_URL + 'pay/financeList';
	},
	financeTotal:function(){
		return API_URL + 'pay/financeTotal';
	},
	//付费广告
	adsConfig:function(){
		return API_URL + 'typechoAds/adsConfig';
	},
	adsInfo:function(){
		return API_URL + 'typechoAds/adsInfo';
	},
	
	addAds:function(){
		return API_URL + 'typechoAds/addAds';
	},
	adsList:function(){
		return API_URL + 'typechoAds/adsList';
	},
	editAds:function(){
		return API_URL + 'typechoAds/editAds';
	},
	deleteAds:function(){
		return API_URL + 'typechoAds/deleteAds';
	},
	auditAds:function(){
		return API_URL + 'typechoAds/auditAds';
	},
	renewalAds:function(){
		return API_URL + 'typechoAds/renewalAds';
	},
	renewalAds:function(){
		return API_URL + 'typechoAds/renewalAds';
	},
	//聊天
	getPrivateChat:function(){
		return API_URL + 'typechoChat/getPrivateChat';
	},
	sendMsg:function(){
		return API_URL + 'typechoChat/sendMsg';
	},
	myChat:function(){
		return API_URL + 'typechoChat/myChat';
	},
	msgList:function(){
		return API_URL + 'typechoChat/msgList';
	},
	deleteChat:function(){
		return API_URL + 'typechoChat/deleteChat';
	},
	deleteMsg:function(){
		return API_URL + 'typechoChat/deleteMsg';
	},
	createGroup:function(){
		return API_URL + 'typechoChat/createGroup';
	},
	editGroup:function(){
		return API_URL + 'typechoChat/editGroup';
	},
	allChat:function(){
		return API_URL + 'typechoChat/allChat';
	},
	banChat:function(){
		return API_URL + 'typechoChat/banChat';
	},
	groupInfo:function(){
		return API_URL + 'typechoChat/groupInfo';
	},
	
	
	addSpace:function(){
		return API_URL + 'typechoSpace/addSpace';
	},
	editSpace:function(){
		return API_URL + 'typechoSpace/editSpace';
	},
	spaceInfo:function(){
		return API_URL + 'typechoSpace/spaceInfo';
	},
	spaceList:function(){
		return API_URL + 'typechoSpace/spaceList';
	},
	myFollowSpace:function(){
		return API_URL + 'typechoSpace/myFollowSpace';
	},
	spaceDelete:function(){
		return API_URL + 'typechoSpace/spaceDelete';
	},
	spaceLikes:function(){
		return API_URL + 'typechoSpace/spaceLikes';
	},
	
	
	IsNull(obj) {
		return (obj != null && obj != undefined);
	},
	randomHexColor() { //随机生成十六进制颜色
		var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
		while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
			hex = '0' + hex;
		}
		return '#' + hex; //返回‘#'开头16进制颜色
	},
	//获取日期
	formatDate(datetime) {
		var datetime = new Date(parseInt(datetime * 1000));
		// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
		var year = datetime.getFullYear(),
			month = ("0" + (datetime.getMonth() + 1)).slice(-2),
			date = ("0" + datetime.getDate()).slice(-2),
			hour = ("0" + datetime.getHours()).slice(-2),
			minute = ("0" + datetime.getMinutes()).slice(-2);
		//second = ("0" + date.getSeconds()).slice(-2);
		// 拼接
		var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
		// 返回
		return result;
	},
	//移除数据中的空对象
	removeObjectEmptyKey(json) {
	    var value;
	    for (var key in json) {
	        if (json.hasOwnProperty(key)) {
	            value = json[key];
	            if (value === undefined || value === '' || value === null) {
	                delete json[key]
	            }
	        }
	    }
	    return json;
	},
	//获取用户当前等级
	getLever(num){
		var lv = 0;
		if (num < 10) {
			lv = 0;
		} else if (num >= 10 && num < 50) {
			lv = 1;
		} else if (num >= 50 && num < 200) {
			lv = 2;
		} else if (num >= 200 && num < 500) {
			lv = 3;
		} else if (num >= 500 && num < 1000) {
			lv = 4;
		} else if (num >= 1000 && num < 2000) {
			lv = 5;
		} else if (num >= 2000 && num < 5000) {
			lv = 6;
		} else if (num >= 5000) {
			lv = 7;
		}
		return lv;
	},

}
