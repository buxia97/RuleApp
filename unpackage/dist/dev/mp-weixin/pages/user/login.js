(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/login"],{

/***/ 133:
/*!*************************************************************************!*\
  !*** E:/APPpro/voss/RuleAppRro/main.js?{"page":"pages%2Fuser%2Flogin"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/user/login.vue */ 134));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 134:
/*!******************************************************!*\
  !*** E:/APPpro/voss/RuleAppRro/pages/user/login.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=802e0a44& */ 135);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 137);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/*!*************************************************************************************!*\
  !*** E:/APPpro/voss/RuleAppRro/pages/user/login.vue?vue&type=template&id=802e0a44& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=802e0a44& */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_802e0a44___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 136:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/RuleAppRro/pages/user/login.vue?vue&type=template&id=802e0a44& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.loginType = 1
    }
    _vm.e1 = function ($event) {
      _vm.loginType = 0
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 137:
/*!*******************************************************************************!*\
  !*** E:/APPpro/voss/RuleAppRro/pages/user/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 138);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 138:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/RuleAppRro/pages/user/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = __webpack_require__(/*! ../../js_sdk/mp-storage/mp-storage/index.js */ 42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      NavBar: this.StatusBar + this.CustomBar,
      AppStyle: this.$store.state.AppStyle,
      userName: "",
      password: "",
      loginType: 0,
      isPhone: 0,
      times: 60,
      show: true,
      phone: "",
      code: "",
      modalName: null,
      kaptchaUrl: "",
      verifyCode: "",
      verifyLevel: 0
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
  },
  onShow: function onShow() {
    var that = this;
  },
  onLoad: function onLoad() {
    var that = this;
    that.NavBar = this.CustomBar;
    that.regConfig();
    that.kaptchaUrl = that.$API.getKaptcha();
  },
  methods: {
    back: function back() {
      uni.navigateBack({
        delta: 1
      });
    },
    reloadCode: function reloadCode() {
      var that = this;
      var kaptchaUrl = that.$API.getKaptcha();
      var num = Math.ceil(Math.random() * 10);
      kaptchaUrl += "?" + num;
      that.kaptchaUrl = kaptchaUrl;
    },
    getCID: function getCID() {
      var that = this;
      var cid = '';
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    setClientId: function setClientId(cid) {
      var that = this;
      var token = "";
      if (_index.localStorage.getItem('token')) {
        token = _index.localStorage.getItem('token');
      } else {
        return false;
      }
      that.$Net.request({
        url: that.$API.setClientId(),
        data: {
          "clientId": cid,
          "token": token
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 1) {}
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
        }
      });
    },
    regConfig: function regConfig() {
      var that = this;
      if (_index.localStorage.getItem('AppInfo')) {
        try {
          var AppInfo = JSON.parse(_index.localStorage.getItem('AppInfo'));
          that.loginType = AppInfo.isPhone;
          that.isPhone = AppInfo.isPhone;
          that.verifyLevel = AppInfo.verifyLevel;
        } catch (e) {
          console.log(e);
        }
      }
    },
    login: function login() {
      var that = this;
      if (that.password == "" || that.userName == "") {
        uni.showToast({
          title: "请输入正确的参数",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      var data = {
        name: that.userName,
        password: that.password
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.userLogin(),
        data: {
          "params": JSON.stringify(that.$API.removeObjectEmptyKey(data))
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          if (res.data.code == 1) {
            //保存用户信息
            _index.localStorage.setItem('userinfo', JSON.stringify(res.data.data));
            _index.localStorage.setItem('token', res.data.data.token);
            that.getCID();
            var timer = setTimeout(function () {
              uni.redirectTo({
                url: '/pages/home/index'
              });
              clearTimeout('timer');
            }, 1000);
          }
        },
        fail: function fail(res) {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
          uni.stopPullDownRefresh();
        }
      });
    },
    toRegister: function toRegister() {
      var that = this;
      uni.navigateTo({
        url: '/pages/user/register'
      });
    },
    toFoget: function toFoget() {
      var that = this;
      uni.navigateTo({
        url: '/pages/user/foget'
      });
    },
    toQQlogin: function toQQlogin() {
      //QQ登陆
      //后端直接根据access_token来判断用户的唯一性。
      var that = this;
      uni.login({
        provider: 'qq',
        success: function success(resp) {
          var js_code = resp.code;
          var access_token = "";
          uni.getUserInfo({
            provider: 'qq',
            success: function success(infoRes) {
              var formdata = {
                nickName: infoRes.userInfo.nickname,
                //gender: infoRes.userInfo.gender == '男' ? 1 : 2,
                appLoginType: "qq",
                headImgUrl: infoRes.userInfo.figureurl_qq_2
                // openId: infoRes.userInfo.openId,
                // accessToken: access_token
              };

              uni.showLoading({
                title: "加载中"
              });
              that.$Net.request({
                url: that.$API.userApi(),
                data: {
                  "params": JSON.stringify(that.$API.removeObjectEmptyKey(formdata))
                },
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "get",
                dataType: 'json',
                success: function success(res) {
                  console.log(res);
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: res.data.msg,
                    icon: 'none'
                  });
                  if (res.data.code == 1) {
                    //保存用户信息
                    _index.localStorage.setItem('userinfo', JSON.stringify(res.data.data));
                    _index.localStorage.setItem('token', res.data.data.token);
                    var timer = setTimeout(function () {
                      uni.redirectTo({
                        url: '/pages/home/index'
                      });
                      clearTimeout('timer');
                    }, 1000);
                  }
                },
                fail: function fail(res) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: "网络开小差了哦",
                    icon: 'none'
                  });
                  uni.stopPullDownRefresh();
                }
              });
            }
          });
        },
        fail: function fail(err) {
          uni.showToast({
            title: '请求出错啦！',
            icon: 'none',
            duration: 3000
          });
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
        }
      });
    },
    toWexinlogin: function toWexinlogin() {
      var that = this;
      //微信登陆
      //后端直接根据unionId来判断用户的唯一性。

      uni.login({
        provider: 'weixin',
        onlyAuthorize: true,
        success: function success(res) {
          var js_code = res.code;
          console.log(JSON.stringify(res));
          //微信APP需要从微信接口获取

          //微信小程序直接获取

          uni.getUserInfo({
            provider: 'weixin',
            onlyAuthorize: true,
            success: function success(infoRes) {
              console.log(JSON.stringify(infoRes));
              var formdata = {
                nickName: infoRes.userInfo.nickName,
                //gender: infoRes.userInfo.gender,
                appLoginType: "weixin",
                headImgUrl: infoRes.userInfo.avatarUrl
                // openId: infoRes.userInfo.openId,
                // accessToken: infoRes.userInfo.unionId,
              };

              formdata.type = "applets";
              formdata.js_code = js_code;
              uni.showLoading({
                title: "加载中"
              });
              that.$Net.request({
                url: that.$API.userApi(),
                data: {
                  "params": JSON.stringify(that.$API.removeObjectEmptyKey(formdata))
                },
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "get",
                dataType: 'json',
                success: function success(res) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: res.data.msg,
                    icon: 'none'
                  });
                  if (res.data.code == 1) {
                    //保存用户信息
                    _index.localStorage.setItem('userinfo', JSON.stringify(res.data.data));
                    _index.localStorage.setItem('token', res.data.data.token);
                    var timer = setTimeout(function () {
                      uni.redirectTo({
                        url: '/pages/home/index'
                      });
                      clearTimeout('timer');
                    }, 1000);
                  }
                },
                fail: function fail(res) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: "网络开小差了哦",
                    icon: 'none'
                  });
                  uni.stopPullDownRefresh();
                }
              });
            }
          });
        },
        fail: function fail(err) {
          console.log(err);
          uni.showToast({
            title: err.errMsg,
            icon: 'none',
            duration: 3000
          });
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
        }
      });
    },
    toWeibologin: function toWeibologin() {
      var that = this;
      //微博登陆
      //后端直接根据access_token来判断用户的唯一性。

      uni.login({
        provider: 'sinaweibo',
        success: function success(res) {
          var access_token = '';
          access_token = res.authResult.access_token;
          uni.getUserInfo({
            provider: 'sinaweibo',
            success: function success(infoRes) {
              var formdata = {
                nickName: infoRes.userInfo.nickname,
                //gender: infoRes.userInfo.gender == 'm' ? 1 : 2,
                headImgUrl: infoRes.userInfo.avatar_large,
                openId: infoRes.userInfo.id,
                accessToken: access_token,
                appLoginType: 'SINAWEIBO'
              };
              uni.showLoading({
                title: "加载中"
              });
              that.$Net.request({
                url: that.$API.userApi(),
                data: {
                  "params": JSON.stringify(that.$API.removeObjectEmptyKey(formdata))
                },
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "get",
                dataType: 'json',
                success: function success(res) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: res.data.msg,
                    icon: 'none'
                  });
                  if (res.data.code == 1) {
                    //保存用户信息
                    _index.localStorage.setItem('userinfo', JSON.stringify(res.data.data));
                    _index.localStorage.setItem('token', res.data.data.token);
                    var timer = setTimeout(function () {
                      uni.redirectTo({
                        url: '/pages/home/index'
                      });
                      clearTimeout('timer');
                    }, 1000);
                  }
                },
                fail: function fail(res) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                  uni.showToast({
                    title: "网络开小差了哦",
                    icon: 'none'
                  });
                  uni.stopPullDownRefresh();
                }
              });
            }
          });
        },
        fail: function fail(err) {
          uni.showToast({
            title: '请求出错啦！',
            icon: 'none',
            duration: 3000
          });
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
        }
      });
    },
    SMSCode: function SMSCode() {
      var that = this;
      if (that.phone == "") {
        uni.showToast({
          title: "请输入手机号",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      if (that.verifyLevel > 0) {
        if (that.verifyCode == "") {
          that.modalName = 'kaptcha';
          return false;
        }
      }
      var data = {
        'phone': that.phone,
        'verifyCode': that.verifyCode
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.sendSMS(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.modalName = null;
          that.verifyCode = "";
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          if (res.data.code == 1) {
            that.getCode();
          }
        },
        fail: function fail(res) {
          that.modalName = null;
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
          uni.stopPullDownRefresh();
        }
      });
    },
    getCode: function getCode() {
      var _this = this;
      this.show = false;
      this.timer = setInterval(function () {
        _this.times--;
        if (_this.times === 0) {
          _this.show = true;
          clearInterval(_this.timer);
          _this.times = 60;
        }
      }, 1000);
    },
    phoneLogin: function phoneLogin() {
      var that = this;
      if (that.phone == "" || that.code == "") {
        uni.showToast({
          title: "请输入正确的参数",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      var data = {
        'phone': that.phone,
        "code": that.code
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.phoneLogin(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          if (res.data.code == 1) {
            //保存用户信息
            _index.localStorage.setItem('userinfo', JSON.stringify(res.data.data));
            _index.localStorage.setItem('token', res.data.data.token);
            that.getCID();
            var timer = setTimeout(function () {
              uni.redirectTo({
                url: '/pages/home/index'
              });
              clearTimeout('timer');
            }, 1000);
          }
        },
        fail: function fail(res) {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
          uni.stopPullDownRefresh();
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[133,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/login.js.map