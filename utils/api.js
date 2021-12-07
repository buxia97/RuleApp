var API_URL = 'http://192.168.10.192:8081/';
//var API_URL = 'http://192.168.0.26:8080/';
var WEB_URL = 'https://www.ruletree.club/';
//var API_URL = 'http://web.prawnkj.com:8080/';
// #ifdef H5
//var API_URL = '/';
// #endif

module.exports = {
	
	GetWebUrl:function(){
		return WEB_URL;
	},
	GetUpdateUrl:function(){
		return API_URL + 'mp/versionControl';
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
	getCommentsList:function(){
		return API_URL + 'typechoComments/commentsList';
	},
	setComments:function(){
		return API_URL + 'typechoComments/commentsAdd';
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
	cosUpload:function(){
		return API_URL + 'upload/cosUpload';
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
