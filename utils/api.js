//var API_URL = 'https://api.ruletree.club/';
var API_URL = 'http://127.0.0.1:8081/';
var WEB_URL = 'https://www.ruletree.club/';
var GroupUrl = 'https://jq.qq.com/?_wv=1027&k=XX5SFavQ';

var GithubUrl = 'https://github.com/buxia97/RuleApp';

//对于个人小程序，不能有评论，充值，商品和发布文章，所以在小程序端是不会显示这些的，因为不可能过审，但如果是企业，可以去页面上自行去除我的判断代码。

//下面主要用于用户协议
var appName="规则之树";
var appEmail = "buxia97@126.com";
//全局数据调用部分【重要】

//用户头衔，自己修改名词
var rankList = ["小白","萌新","入门","熟手","大佬","巨佬","传说","古神"];

//头衔对应的背景颜色
var rankStyle = ["#6699CC","#666699","#009933","#FF9900","#ff007f","#FF0033","#660033","#000000"];

//链接规则(用于站内链接自动跳转和文章分享)，请根据自己的网站文件链接自由发挥，比如我的就是
//https://www.ruletree.club/archives/2824/
//{cid}对应文章id，{slug}对应独立页面名称，其实本质上就是页面拼接。
var linkRule =WEB_URL+"archives/{cid}/" //普通文章
var pageRule =WEB_URL+"{slug}.html" //独立页面
//首页图片轮播,后面的数字为mid，为typecho数据库的标签和分类id
var swiperid = 394; 
//精选作品mid,后面的数字为mid，为typecho数据库的标签和分类id
var featured = 397;


//使用攻略文章id，typecho文章表cid
var raiders = 1518
//意见反馈文章id，typecho文章表cid
var feedback = 2689
//关于我们文章id，typecho文章表cid
var aboutme = 2

// #ifdef H5
//var API_URL = '/';
// #endif

module.exports = {
	GetRankList(){
		return rankList;
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
	GetSwiperid:function(){
		return swiperid;
	},
	GetFeatured:function(){
		return featured;
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
	GetUpdateUrl:function(){
		return WEB_URL + 'apiResult.php?update=1';
	},
	GetAds:function(){
		return WEB_URL + 'apiResult.php?getAds=1';
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
	//下面这个方法涉及图片上传，自己修改定义接口路径
	upload:function(){
		//return API_URL + 'upload/ossUpload';//OSS对象存储接口
		//return API_URL + 'upload/cosUpload';//COS对象存储接口
		//return API_URL + 'upload/ftpUpload'; //远程ftp上传接口
		return API_URL + 'upload/localUpload'; //本地上传接口
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
	
	
	madetoken:function(){
		return API_URL + 'pay/madetoken';
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
	}

}
