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
    wx.request({
      url: url,
      data: data,
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