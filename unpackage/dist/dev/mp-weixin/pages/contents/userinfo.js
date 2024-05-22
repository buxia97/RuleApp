(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/userinfo"],{

/***/ 223:
/*!**************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fuserinfo"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _userinfo = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/userinfo.vue */ 224));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userinfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 224:
/*!*******************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/userinfo.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userinfo.vue?vue&type=template&id=62f7b7b6& */ 225);
/* harmony import */ var _userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinfo.vue?vue&type=script&lang=js& */ 227);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/contents/userinfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 225:
/*!**************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/userinfo.vue?vue&type=template&id=62f7b7b6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./userinfo.vue?vue&type=template&id=62f7b7b6& */ 226);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_template_id_62f7b7b6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 226:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/userinfo.vue?vue&type=template&id=62f7b7b6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 =
    _vm.introduce != "" && _vm.introduce ? _vm.subText(_vm.introduce, 60) : null
  var g0 = _vm.type == 0 ? _vm.contentsList.length : null
  var g1 = _vm.type == 0 ? _vm.contentsList.length : null
  var g2 = _vm.type == 2 ? _vm.spaceList.length : null
  var g3 = _vm.type == 2 ? _vm.spaceList.length : null
  var g4 = _vm.type == 1 ? _vm.commentsList.length : null
  var l0 =
    _vm.type == 1
      ? _vm.__map(_vm.commentsList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g5 = _vm.commentsList.length
          return {
            $orig: $orig,
            g5: g5,
          }
        })
      : null
  var g6 = _vm.type == 1 ? _vm.commentsList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        l0: l0,
        g6: g6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 227:
/*!********************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/userinfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./userinfo.vue?vue&type=script&lang=js& */ 228);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userinfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 228:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/userinfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _index = __webpack_require__(/*! ../../js_sdk/mp-storage/mp-storage/index.js */ 42);
var _methods;
var owo = [];
var _default = {
  data: function data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      NavBar: this.StatusBar + this.CustomBar,
      AppStyle: this.$store.state.AppStyle,
      contentsList: [],
      commentsList: [],
      spaceList: [],
      userList: [],
      owo: owo,
      owoList: [],
      type: 0,
      page: 1,
      moreText: "加载更多",
      isLoad: 0,
      isLoading: 0,
      title: "",
      uid: 0,
      avatar: "",
      name: "",
      customize: "",
      lv: "",
      vip: "",
      isvip: "",
      introduce: "",
      fanNum: 0,
      contentsNum: 0,
      commentsNum: 0,
      scrollTop: 0,
      isFollow: 0,
      vid: ""
    };
  },
  onPageScroll: function onPageScroll(res) {
    var that = this;
    that.scrollTop = res.scrollTop;
  },
  onShow: function onShow() {
    var that = this;
    if (_index.localStorage.getItem('userinfo')) {
      var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
      that.vid = userInfo.uid;
    }
  },
  onReachBottom: function onReachBottom() {
    //触底后执行的方法，比如无限加载之类的
    var that = this;
    if (that.isLoad == 0) {
      that.loadMore();
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    var i = that.type;
    that.page = 1;
    that.moreText = "加载更多";
    that.isLoad = 0;
    if (i == 0) {
      that.getContentsList(false);
    } else if (i == 1) {
      that.getCommentsList(false);
    } else {
      that.getSpaceList(false);
    }
  },
  onLoad: function onLoad(res) {
    var that = this;
    that.NavBar = this.CustomBar;
    that.title = res.title;
    that.uid = res.uid;
    that.avatar = res.avatar;
    that.name = res.name;
    that.getIsFollow();
    that.getUserInfo();
    that.getUserData();
    that.getContentsList(false);
  },
  methods: (_methods = {
    toType: function toType(i) {
      var that = this;
      that.type = i;
      that.page = 1;
      that.moreText = "加载更多";
      that.isLoad = 0;
      if (i == 0) {
        that.getContentsList(false);
      } else if (i == 1) {
        that.getCommentsList(false);
      } else {
        that.getSpaceList(false);
      }
    },
    goFanList: function goFanList(uid) {
      var that = this;
      uni.navigateTo({
        url: '/pages/user/fanList?uid=' + uid
      });
    },
    back: function back() {
      uni.navigateBack({
        delta: 1
      });
    },
    getUserLv: function getUserLv(i) {
      var that = this;
      if (!i) {
        var i = 0;
      }
      var rankList = that.$API.GetRankList();
      return rankList[i];
    },
    getUserLvStyle: function getUserLvStyle(i) {
      var that = this;
      if (!i) {
        var i = 0;
      }
      var rankStyle = that.$API.GetRankStyle();
      var userlvStyle = "color:#fff;background-color: " + rankStyle[i];
      return userlvStyle;
    },
    getUserInfo: function getUserInfo() {
      var that = this;
      that.$Net.request({
        url: that.$API.getUserInfo(),
        data: {
          "key": that.uid
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 1) {
            that.vip = res.data.data.vip;
            that.isvip = res.data.data.isvip;
            that.lv = res.data.data.lv;
            that.avatar = res.data.data.avatar;
            that.customize = res.data.data.customize;
            that.introduce = res.data.data.introduce;
          }
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
        }
      });
    },
    loadMore: function loadMore() {
      var that = this;
      that.moreText = "正在加载中...";
      that.isLoad = 1;
      if (that.type == 0) {
        that.getContentsList(true);
      } else if (that.type == 1) {
        that.getCommentsList(true);
      } else {
        that.getSpaceList(true);
      }
    },
    reload: function reload() {
      var that = this;
      if (that.type == 0) {
        that.getContentsList(false);
      } else if (that.type == 1) {
        that.getCommentsList(false);
      } else {
        that.getSpaceList(false);
      }
    },
    getPrivateChat: function getPrivateChat() {
      var that = this;
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      } else {
        uni.showToast({
          title: "请先登录",
          icon: 'none'
        });
        uni.navigateTo({
          url: '/pages/user/login'
        });
        return false;
      }
      var touid = that.uid;
      var data = {
        "touid": touid,
        "token": token
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.getPrivateChat(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          //console.log(JSON.stringify(res));
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          if (res.data.code == 1) {
            var name = that.name;
            var uid = that.uid;
            var chatid = res.data.data;
            uni.redirectTo({
              url: '/pages/chat/chat?uid=' + uid + "&name=" + name + "&chatid=" + chatid
            });
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: 'none'
            });
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
        }
      });
    },
    getUserData: function getUserData() {
      var that = this;
      that.$Net.request({
        url: that.$API.getUserData(),
        data: {
          "uid": that.uid
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          //console.log(JSON.stringify(res));
          if (res.data.code == 1) {
            that.fanNum = res.data.data.fanNum;
            that.contentsNum = res.data.data.contentsNum;
            that.commentsNum = res.data.data.commentsNum;
          }
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
        }
      });
    },
    getContentsList: function getContentsList(isPage) {
      var that = this;
      var data = {
        "type": "post",
        "authorId": that.uid
      };
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      }
      var page = that.page;
      if (isPage) {
        page++;
      }
      that.$Net.request({
        url: that.$API.getContentsList(),
        data: {
          "searchParams": JSON.stringify(that.$API.removeObjectEmptyKey(data)),
          "limit": 8,
          "page": page,
          "order": "created",
          "token": token
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          that.isLoad = 0;
          that.moreText = "加载更多";
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              //that.contentsList = list;
              if (isPage) {
                that.page++;
                that.contentsList = that.contentsList.concat(list);
              } else {
                that.contentsList = list;
              }
            } else {
              that.moreText = "没有更多数据了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          uni.stopPullDownRefresh();
          that.moreText = "加载更多";
          that.isLoad = 0;
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    getCommentsList: function getCommentsList(isPage) {
      var that = this;
      var data = {
        "type": "comment",
        "authorId": that.uid
      };
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        var uid = userInfo.uid;
        if (uid != that.uid) {
          data.status = "approved";
        }
      }
      var page = that.page;
      if (isPage) {
        page++;
      }
      that.$Net.request({
        url: that.$API.getCommentsList(),
        data: {
          "searchParams": JSON.stringify(that.$API.removeObjectEmptyKey(data)),
          "limit": 5,
          "page": page,
          "order": "created"
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          that.isLoad = 0;
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              var commentsList = [];
              for (var i in list) {
                var arr = list[i];
                arr.style = "background-image:url(" + list[i].avatar + ");";
                commentsList.push(arr);
              }
              if (isPage) {
                that.page++;
                that.commentsList = that.commentsList.concat(commentsList);
              } else {
                that.commentsList = commentsList;
              }
            } else {
              that.moreText = "没有更多数据了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          uni.stopPullDownRefresh();
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    getIsFollow: function getIsFollow() {
      var that = this;
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      }
      var data = {
        token: token,
        touid: that.uid
      };
      that.$Net.request({
        url: that.$API.isFollow(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          that.isFollow = res.data.code;
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
        }
      });
    },
    follow: function follow(type) {
      var that = this;
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      } else {
        uni.showToast({
          title: "请先登录",
          icon: 'none'
        });
        uni.navigateTo({
          url: '/pages/user/login'
        });
        return false;
      }
      var data = {
        token: token,
        touid: that.uid,
        type: type
      };
      that.isFollow = type;
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.follow(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          //console.log(JSON.stringify(res))
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          that.getIsFollow();
        },
        fail: function fail(res) {
          setTimeout(function () {
            uni.hideLoading();
          }, 1000);
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none'
          });
          that.getIsFollow();
        }
      });
    },
    commentsAdd: function commentsAdd(title, coid, reply) {
      var that = this;
      var cid = that.cid;
      uni.navigateTo({
        url: '/pages/contents/commentsadd?cid=' + cid + "&coid=" + coid + "&title=" + title + "&isreply=" + reply
      });
    },
    toPost: function toPost() {
      var that = this;
      uni.navigateTo({
        url: '/pages/user/post'
      });
    },
    toEdit: function toEdit(cid) {
      var that = this;
      uni.navigateTo({
        url: '/pages/user/post?type=edit' + '&cid=' + cid
      });
    }
  }, (0, _defineProperty2.default)(_methods, "getUserLv", function getUserLv(i) {
    var that = this;
    var rankList = that.$API.GetRankList();
    return rankList[i];
  }), (0, _defineProperty2.default)(_methods, "getUserLvStyle", function getUserLvStyle(i) {
    var that = this;
    var rankStyle = that.$API.GetRankStyle();
    var userlvStyle = "color:#fff;background-color: " + rankStyle[i];
    return userlvStyle;
  }), (0, _defineProperty2.default)(_methods, "toInfo", function toInfo(data) {
    var that = this;
    uni.navigateTo({
      url: '/pages/contents/info?cid=' + data.cid + "&title=" + data.title
    });
  }), (0, _defineProperty2.default)(_methods, "toInfoComment", function toInfoComment(cid, title) {
    var that = this;
    uni.navigateTo({
      url: '/pages/contents/info?cid=' + cid + "&title=" + title
    });
  }), (0, _defineProperty2.default)(_methods, "toSearch", function toSearch() {
    var that = this;
    uni.redirectTo({
      url: '/pages/contents/search'
    });
  }), (0, _defineProperty2.default)(_methods, "ToCopy", function ToCopy(text) {
    var that = this;
  }), (0, _defineProperty2.default)(_methods, "formatNumber", function formatNumber(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num;
  }), (0, _defineProperty2.default)(_methods, "replaceSpecialChar", function replaceSpecialChar(text) {
    if (!text) {
      return false;
    }
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&nbsp;/g, ' ');
    return text;
  }), (0, _defineProperty2.default)(_methods, "subText", function subText(text, num) {
    if (text) {
      if (text.length > num) {
        text = text.substring(0, num);
        return text + "……";
      } else {
        return text;
      }
    } else {
      return "Ta还没有个人介绍哦";
    }
  }), (0, _defineProperty2.default)(_methods, "getSpaceList", function getSpaceList(isPage) {
    var that = this;
    var token = "";
    var page = that.page;
    if (isPage) {
      page++;
    }
    var data = {
      "uid": that.uid
    };
    if (_index.localStorage.getItem('userinfo')) {
      var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
      token = userInfo.token;
      var uid = userInfo.uid;
      if (uid != that.uid) {
        data.status = 1;
      }
    }
    that.$Net.request({
      url: that.$API.spaceList(),
      data: {
        "searchParams": JSON.stringify(that.$API.removeObjectEmptyKey(data)),
        "limit": 10,
        "page": page,
        "order": "created",
        "token": token
      },
      method: "post",
      dataType: 'json',
      success: function success(res) {
        that.changeLoading = 1;
        that.isLoad = 0;
        that.moreText = "加载更多";
        if (!isPage) {
          that.dataLoad = true;
        }
        if (res.data.code == 1) {
          var list = res.data.data;
          var spaceList = [];
          for (var i in list) {
            if (list[i].type == 0) {
              if (list[i].pic) {
                var pic = list[i].pic;
                list[i].picList = pic.split("||");
              } else {
                list[i].picList = [];
              }
            }
            if (list[i].type == 2) {
              if (list[i].forwardJson.pic) {
                var pic = list[i].forwardJson.pic;
                list[i].forwardJson.picList = pic.split("||");
              } else {
                list[i].forwardJson.picList = [];
              }
            }
          }
          spaceList = list;
          if (list.length > 0) {
            if (isPage) {
              that.page++;
              that.spaceList = that.spaceList.concat(spaceList);
            } else {
              that.spaceList = spaceList;
            }
          } else {
            that.moreText = "没有更多动态了";
          }
        }
      },
      fail: function fail(res) {
        that.changeLoading = 1;
        that.isLoad = 0;
        that.moreText = "加载更多";
        var timer = setTimeout(function () {
          that.isLoading = 1;
          clearTimeout('timer');
        }, 300);
      }
    });
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[223,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/contents/userinfo.js.map