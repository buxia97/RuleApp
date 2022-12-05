var API = require('../utils/api');
var requestHandler = {
    url: '',
    data: {},
    method: '',
    success: function (res) {
    },
    fail: function () {
    },
    complete: function () {
    }
  }
   
  function request(requestHandler) {
    var data = requestHandler.data;
    var url = requestHandler.url;
    var method = requestHandler.method;
	var header = {
		'Content-Type':'application/x-www-form-urlencoded'
	};
	if(requestHandler.header){
		header = requestHandler.header;
	}
	if(API.getKey()!=""){
		header.Accept = "application/json; charset=utf-8"
		header.key = API.getKey();
	}
    uni.request({
      url: url,
      data: data,
	  header:header,
      method: method,
      success: function (res) {     
        requestHandler.success(res)
      },
      fail: function () {
        requestHandler.fail();
      },
      complete: function () {                                      
      }
    })
  }
   
  module.exports = {
    request: request
  }