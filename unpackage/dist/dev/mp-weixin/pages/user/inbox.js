(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/inbox"],{

/***/ 115:
/*!*******************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fuser%2Finbox"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _inbox = _interopRequireDefault(__webpack_require__(/*! ./pages/user/inbox.vue */ 116));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_inbox.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 116:
/*!************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/inbox.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.vue?vue&type=template&id=c4f5510a& */ 117);
/* harmony import */ var _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.vue?vue&type=script&lang=js& */ 119);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user/inbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 117:
/*!*******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/inbox.vue?vue&type=template&id=c4f5510a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inbox.vue?vue&type=template&id=c4f5510a& */ 118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_template_id_c4f5510a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 118:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/user/inbox.vue?vue&type=template&id=c4f5510a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.type == "inbox" ? _vm.inboxList.length : null
  var l0 =
    _vm.type == "inbox"
      ? _vm.__map(_vm.inboxList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g1 = _vm.inboxList.length
          var m0 = g1 > 0 ? _vm.markHtml(item.text) : null
          var m1 = g1 > 0 ? _vm.formatDate(item.created) : null
          return {
            $orig: $orig,
            g1: g1,
            m0: m0,
            m1: m1,
          }
        })
      : null
  var g2 = _vm.type == "inbox" ? _vm.inboxList.length : null
  var g3 = _vm.type == "chat" ? _vm.chatList.length : null
  var l1 =
    _vm.type == "chat" && g3 > 0
      ? _vm.__map(_vm.chatList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var m2 = _vm.chatFormatDate(item.lastTime)
          return {
            $orig: $orig,
            m2: m2,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g2: g2,
        g3: g3,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 119:
/*!*************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/inbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inbox.vue?vue&type=script&lang=js& */ 120);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 120:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/user/inbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      inboxList: [],
      chatList: [],
      oldChatList: [],
      uid: 0,
      type: "inbox",
      moreText: "加载更多",
      page: 1,
      token: "",
      isLoading: 0,
      owo: owo,
      owoList: [],
      chatLoading: null
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
  },
  onHide: function onHide() {
    var that = this;
    clearInterval(that.chatLoading);
    that.chatLoading = null;
  },
  onReachBottom: function onReachBottom() {
    //触底后执行的方法，比如无限加载之类的
    var that = this;
    that.loadMore();
  },
  onShow: function onShow() {
    var that = this;
    that.page = 1;
    if (_index.localStorage.getItem('userinfo')) {
      var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
      that.uid = userInfo.uid;
    }
    if (_index.localStorage.getItem('token')) {
      that.token = _index.localStorage.getItem('token');
      that.getInboxList(false);
      that.setRead();
    }
    if (_index.localStorage.getItem('chatList')) {
      that.oldChatList = JSON.parse(_index.localStorage.getItem('chatList'));
      // that.chatList = JSON.parse(localStorage.getItem('chatList'));
    }
  },
  onLoad: function onLoad() {
    var that = this;
    that.NavBar = this.CustomBar;
    _index.localStorage.setItem('noticeSum', 0);
  },
  methods: (_methods = {
    back: function back() {
      var that = this;
      clearInterval(that.chatLoading);
      that.chatLoading = null;
      uni.navigateBack({
        delta: 1
      });
    },
    loadMore: function loadMore() {
      var that = this;
      if (that.isLoad == 0) {
        if (that.type == "inbox") {
          that.moreText = "正在加载中...";
          that.getInboxList(true);
        }
      }
    },
    markHtml: function markHtml(text) {
      var that = this;
      var owoList = that.owoList;
      for (var i in owoList) {
        if (that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1) {
          text = that.replaceAll(that.replaceSpecialChar(text), owoList[i].data, "<img src='/" + owoList[i].icon + "' class='tImg' />");
        }
      }
      return text;
    },
    replaceAll: function replaceAll(string, search, replace) {
      return string.split(search).join(replace);
    },
    toInfo: function toInfo(cid, title) {
      var that = this;
      clearInterval(that.chatLoading);
      that.chatLoading = null;
      uni.navigateTo({
        url: '/pages/contents/info?cid=' + cid + "&title=" + title
      });
    },
    goInbox: function goInbox(data) {
      var that = this;
      if (data.type == "comment") {
        that.toInfo(data.contentsInfo.cid, data.contenTitle);
      }
      if (data.type == "finance") {
        clearInterval(that.chatLoading);
        that.chatLoading = null;
        uni.navigateTo({
          url: '/pages/user/assets'
        });
      }
      if (data.type == "system") {
        return false;
      }
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
    toType: function toType(i) {
      var that = this;
      that.type = i;
      that.page = 1;
      that.moreText = "加载更多";
      that.isLoad = 0;
      if (i == "inbox") {
        clearInterval(that.chatLoading);
        that.chatLoading = null;
        that.getInboxList(false);
      } else {
        that.getMyChat(false);
        that.msgLoading = setInterval(function () {
          that.getMyChat(false);
        }, 3000);
      }
    },
    getInboxList: function getInboxList(isPage) {
      var that = this;
      var page = that.page;
      if (isPage) {
        page++;
      }
      if (that.token == "") {
        uni.showToast({
          title: "请先登录",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      that.$Net.request({
        url: that.$API.getInbox(),
        data: {
          "token": that.token,
          "limit": 8,
          "page": page
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.isLoad = 0;
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              var inboxList = [];
              for (var i in list) {
                var arr = list[i];
                arr.style = "background-image:url(" + list[i].userJson.avatar + ");";
                inboxList.push(arr);
              }
              if (isPage) {
                that.page++;
                that.inboxList = that.inboxList.concat(inboxList);
              } else {
                that.inboxList = inboxList;
              }
            } else {
              that.moreText = "没有更多消息了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    //为了性能考虑，只显示最近30条聊天
    getMyChat: function getMyChat(isPage) {
      var that = this;
      var page = that.page;
      if (isPage) {
        page++;
      }
      if (that.token == "") {
        uni.showToast({
          title: "请先登录",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      that.$Net.request({
        url: that.$API.myChat(),
        data: {
          "token": that.token,
          "limit": 30,
          "page": page,
          "order": "lastTime"
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.isLoad = 0;
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              var chatList = [];
              for (var i in list) {
                var arr = list[i];
                arr.isNew = 0;
                arr.unRead = 0;
                chatList.push(arr);
              }
              if (isPage) {
                that.page++;
                that.chatList = that.chatList.concat(chatList);
              } else {
                var oldChatList = [];
                if (that.oldChatList != null) {
                  oldChatList = that.oldChatList;
                }
                if (oldChatList.length > 0) {
                  if (!that.arraysEqual(oldChatList, chatList)) {
                    console.log("开始对比");
                    for (var c in chatList) {
                      for (var d in oldChatList) {
                        if (oldChatList[d].id == chatList[c].id) {
                          if (oldChatList[d].lastTime < chatList[c].lastTime) {
                            console.log("赋值完成");
                            chatList[c].isNew = 1;
                            var unRead = chatList[c].msgNum - oldChatList[d].msgNum;
                            if (unRead <= 0) {
                              unRead = 0;
                            }
                            chatList[c].unRead = unRead;
                          }
                        }
                      }
                    }
                    that.oldChatList = chatList;
                    that.chatList = chatList;
                    _index.localStorage.setItem('chatList', JSON.stringify(chatList));
                  }
                } else {
                  that.oldChatList = chatList;
                  that.chatList = chatList;
                  _index.localStorage.setItem('chatList', JSON.stringify(chatList));
                }
                // 
              }
            } else {
              that.moreText = "没有更多消息了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    arraysEqual: function arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length != b.length) return false;
      for (var c in a) {
        for (var d in b) {
          if (b[d].id == a[c].id) {
            if (b[d].lastTime != a[c].lastTime) {
              return false;
            }
          }
        }
      }
    },
    commentsAdd: function commentsAdd(title, coid, reply, cid) {
      var that = this;
      clearInterval(that.chatLoading);
      that.chatLoading = null;
      uni.navigateTo({
        url: '/pages/contents/commentsadd?cid=' + cid + "&coid=" + coid + "&title=" + title + "&isreply=" + reply
      });
    },
    formatDate: function formatDate(datetime) {
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
    chatFormatDate: function chatFormatDate(datetime) {
      var datetime = new Date(parseInt(datetime * 1000));
      // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
      var year = datetime.getFullYear();
      var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
      var date = ("0" + datetime.getDate()).slice(-2);
      var hour = ("0" + datetime.getHours()).slice(-2);
      var minute = ("0" + datetime.getMinutes()).slice(-2);
      var time = year + "" + month + "" + date;
      var result = hour + ":" + minute;
      var curDate = new Date();
      var curYear = curDate.getFullYear(); //获取完整的年份(4位)
      var curMonth = ("0" + (curDate.getMonth() + 1)).slice(-2);
      var curDay = ("0" + curDate.getDate()).slice(-2); //获取当前日(1-31)
      var curTime = curYear + "" + curMonth + "" + curDay;
      if (year == curYear) {
        if (year == curYear) {
          if (date == curDay) {
            result = hour + ":" + minute;
          } else {
            result = month + "-" + date;
          }
        } else {
          result = month + "-" + date;
        }
      } else {
        result = month + "-" + date;
      }
      return result;
    },
    replaceSpecialChar: function replaceSpecialChar(text) {
      if (!text) {
        return false;
      }
      text = text.replace(/&quot;/g, '"');
      text = text.replace(/&amp;/g, '&');
      text = text.replace(/&lt;/g, '<');
      text = text.replace(/&gt;/g, '>');
      text = text.replace(/&nbsp;/g, ' ');
      return text;
    }
  }, (0, _defineProperty2.default)(_methods, "getUserLv", function getUserLv(i) {
    var that = this;
    if (!i) {
      var i = 0;
    }
    var rankList = that.$API.GetRankList();
    return rankList[i];
  }), (0, _defineProperty2.default)(_methods, "getUserLvStyle", function getUserLvStyle(i) {
    var that = this;
    if (!i) {
      var i = 0;
    }
    var rankStyle = that.$API.GetRankStyle();
    var userlvStyle = "color:#fff;background-color: " + rankStyle[i];
    return userlvStyle;
  }), (0, _defineProperty2.default)(_methods, "setRead", function setRead() {
    var that = this;
    that.$Net.request({
      url: that.$API.setRead(),
      data: {
        "token": that.token
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
  }), (0, _defineProperty2.default)(_methods, "goChat", function goChat(data) {
    var that = this;
    clearInterval(that.chatLoading);
    that.chatLoading = null;
    var chatid = data.id;
    //去除未读标志
    var chatList = that.chatList;
    for (var i in chatList) {
      if (chatList[i].id == chatid) {
        chatList[i].isNew = 0;
        chatList[i].unRead = 0;
      }
    }
    that.chatList = chatList;
    that.oldChatList = chatList;
    _index.localStorage.setItem('chatList', JSON.stringify(chatList));
    //结束
    var name = data.userJson.name;
    var uid = data.userJson.uid;
    clearInterval(that.chatLoading);
    that.chatLoading = null;
    uni.navigateTo({
      url: '/pages/chat/chat?uid=' + uid + "&name=" + name + "&chatid=" + chatid
    });
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[115,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/inbox.js.map