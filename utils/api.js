var API_URL = 'https://api.ruletree.club/';
//var API_URL = 'http://192.168.10.192:8081/';


var WEB_URL = 'https://www.ruletree.club/';
var GroupUrl = 'https://jq.qq.com/?_wv=1027&k=XX5SFavQ';

var GithubUrl = 'https://github.com/buxia97/RuleApp';

//下面主要用于用户协议
var appName="规则之树";
var appEmail = "buxia97@126.com";
//全局数据调用部分【重要】

//首页图片轮播,后面的数字为mid，为typecho数据库的标签和分类id
var swiperid = 394; 
//首页专题（mid为typecho数据库的标签和分类id，调用的文章就是该标签或者分类下文章）
var Topic=[
	{
		"mid":744,
		"name":"#区块链#",
		"imgUrl":"../../static/img/topic1.jpg"
	},
	{
		"mid":2,
		"name":"#编程#",
		"imgUrl":"../../static/img/topic2.jpg"
	},
	{
		"mid":24,
		"name":"#APP开发#",
		"imgUrl":"../../static/img/topic3.jpg"
	},
	{
		"mid":3,
		"name":"#短篇文学#",
		"imgUrl":"../../static/img/topic4.jpg"
	},
];
//推荐文章,后面的数字为mid，为typecho数据库的标签和分类id
var recommend = 397;
//软件中心链接,后面的数字为mid，为typecho数据库的标签和分类id
var software = 58;
//工具页数据调用id,后面的数字为mid，为typecho数据库的标签和分类id
var tool = 58;
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
	GetAppName:function(){
		return appName;
	},
	GetAppEmail:function(){
		return appEmail;
	},
	GetSwiperid:function(){
		return swiperid;
	},
	GetTopic:function(){
		return Topic;
	},
	GetRecommend:function(){
		return recommend;
	},
	GetSoftware:function(){
		return software;
	},
	GetTool:function(){
		return tool;
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
	getMarkList:function(){
		return API_URL + 'typechoUserlog/markList';
	},
	getIsMark:function(){
		return API_URL + 'typechoUserlog/isMark';
	},
	userStatus:function(){
		return API_URL + 'typechoUsers/userStatus';
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
	getContentsList:function(){
		return API_URL + 'typechoContents/contensList';
	},
	getContentsInfo:function(){
		return API_URL + 'typechoContents/contentsInfo';
	},
	contensAdd:function(){
		return API_URL + 'typechoContents/contensAdd';
	},
	
	contensUpdate:function(){
		return API_URL + 'typechoContents/contensUpdate';
	},
	contensImage:function(){
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
	
	//下面这个方法涉及图片上传，自己修改定义接口路径
	upload:function(){
		return API_URL + 'upload/ossUpload';//OSS对象存储接口
		//return API_URL + 'upload/cosUpload';//COS对象存储接口
		//return API_URL + 'upload/localUpload'; //本地上传接口
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
	//充值
	scancodePay:function(){
		return API_URL + 'pay/scancodePay';
	},
	//充值二维码
	qrCode:function(){
		return API_URL + 'pay/qrCode';
	},
	payLogList:function(){
		return API_URL + 'pay/payLogList';
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
