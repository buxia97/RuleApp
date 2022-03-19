(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/manage/comments"],{

/***/ 390:
/*!************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fmanage%2Fcomments"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _comments = _interopRequireDefault(__webpack_require__(/*! ./pages/manage/comments.vue */ 391));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_comments.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 391:
/*!*****************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/manage/comments.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.vue?vue&type=template&id=2c402cf5& */ 392);
/* harmony import */ var _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.vue?vue&type=script&lang=js& */ 394);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.vue?vue&type=style&index=0&lang=css& */ 396);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/manage/comments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 392:
/*!************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=template&id=2c402cf5& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comments.vue?vue&type=template&id=2c402cf5& */ 393);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_template_id_2c402cf5___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 393:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=template&id=2c402cf5& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.commentsList, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var m0 = _vm.commentsList.length > 0 ? _vm.markHtml(item.text) : null
    var m1 = _vm.commentsList.length > 0 ? _vm.formatDate(item.created) : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 394:
/*!******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comments.vue?vue&type=script&lang=js& */ 395);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 395:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































































var _index = __webpack_require__(/*! ../../js_sdk/mp-storage/mp-storage/index.js */ 18);


var _OwO = _interopRequireDefault(__webpack_require__(/*! ../../static/owo/OwO.js */ 77));var _methods;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var API = __webpack_require__(/*! ../../utils/api */ 19);var Net = __webpack_require__(/*! ../../utils/net */ 20);var _default =
{
  data: function data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      NavBar: this.StatusBar + this.CustomBar,

      commentsList: [],

      moreText: "加载更多",
      page: 1,

      searchText: "",

      status: "waiting",

      isLoading: 0,

      owo: _OwO.default,
      owoList: [] };


  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.page = 1;
    that.getCommentsList(false);
    var timer = setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);

  },
  onReachBottom: function onReachBottom() {
    //触底后执行的方法，比如无限加载之类的
    var that = this;
    that.loadMore();
  },
  onShow: function onShow() {
    var that = this;





  },
  onLoad: function onLoad() {
    var that = this;

    that.NavBar = this.CustomBar;


    var owo = that.owo.data;
    var owoList = [];
    for (var i in owo) {
      owoList = owoList.concat(owo[i].container);
    }
    that.owoList = owoList;
    that.getCommentsList(false);
  },
  methods: (_methods = {
    back: function back() {
      uni.navigateBack({
        delta: 1 });

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
    searchTag: function searchTag() {
      var that = this;
      var searchText = that.searchText;
      that.page = 1;
      that.getCommentsList();

    },
    getUserLv: function getUserLv(i) {
      var that = this;
      if (!i) {
        var i = 0;
      }
      var rankList = API.GetRankList();
      return rankList[i];
    },
    getUserLvStyle: function getUserLvStyle(i) {
      var that = this;
      if (!i) {
        var i = 0;
      }
      var rankStyle = API.GetRankStyle();
      var userlvStyle = "color:#fff;background-color: " + rankStyle[i];
      return userlvStyle;
    },
    loadMore: function loadMore() {
      var that = this;
      that.moreText = "正在加载中...";
      if (that.isLoad == 0) {
        that.getCommentsList(true);
      }
    },
    toInfo: function toInfo(cid, title) {
      var that = this;

      uni.navigateTo({
        url: '/pages/contents/info?cid=' + cid + "&title=" + title });

    } }, _defineProperty(_methods, "searchTag", function searchTag()
  {
    var that = this;
    var searchText = that.searchText;
    that.page = 1;
    that.getCommentsList();

  }), _defineProperty(_methods, "getCommentsList", function getCommentsList(
  isPage) {
    var that = this;
    var data = {
      "type": "comment",
      "status": that.status };

    var page = that.page;
    if (isPage) {
      page++;
    }
    Net.request({
      url: API.getCommentsList(),
      data: {
        "searchParams": JSON.stringify(API.removeObjectEmptyKey(data)),
        "limit": 5,
        "page": page,
        "searchKey": that.searchText },

      header: {
        'Content-Type': 'application/x-www-form-urlencoded' },

      method: "get",
      dataType: 'json',
      success: function success(res) {
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
            that.moreText = "没有更多评论了";
            if (!isPage) {
              that.commentsList = list;
            }
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
      } });

  }), _defineProperty(_methods, "toStatus", function toStatus(
  i) {
    var that = this;
    that.status = i;
    that.page = 1;
    that.moreText = "加载更多";
    that.isLoad = 0;
    that.getCommentsList(false);
  }), _defineProperty(_methods, "commentsAdd", function commentsAdd(
  title, coid, reply, cid) {
    var that = this;
    uni.navigateTo({
      url: '/pages/contents/commentsadd?cid=' + cid + "&coid=" + coid + "&title=" + title + "&isreply=" + reply });

  }), _defineProperty(_methods, "formatDate", function formatDate(

  datetime) {
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
  }), _defineProperty(_methods, "toDelete", function toDelete(
  id) {
    var that = this;
    var token = "";

    if (_index.localStorage.getItem('userinfo')) {
      var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
      token = userInfo.token;
    }
    var data = {
      "key": id,
      "token": token };

    uni.showModal({
      title: '确定要删除该文章吗',
      success: function success(res) {
        if (res.confirm) {
          uni.showLoading({
            title: "加载中" });


          Net.request({
            url: API.commentsDelete(),
            data: data,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded' },

            method: "get",
            dataType: 'json',
            success: function success(res) {
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
              uni.showToast({
                title: res.data.msg,
                icon: 'none' });

              if (res.data.code == 1) {
                that.getCommentsList();
              }

            },
            fail: function fail(res) {
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
              uni.showToast({
                title: "网络开小差了哦",
                icon: 'none' });

            } });

        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      } });

  }), _defineProperty(_methods, "toAudit", function toAudit(
  id) {
    var that = this;
    var token = "";

    if (_index.localStorage.getItem('userinfo')) {
      var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
      token = userInfo.token;
    }
    var data = {
      "key": id,
      "token": token };

    uni.showModal({
      title: '确定要通过审核吗？',
      success: function success(res) {
        if (res.confirm) {
          uni.showLoading({
            title: "加载中" });


          Net.request({
            url: API.commentsAudit(),
            data: data,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded' },

            method: "get",
            dataType: 'json',
            success: function success(res) {
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
              uni.showToast({
                title: res.data.msg,
                icon: 'none' });

              if (res.data.code == 1) {
                that.getCommentsList();
              }

            },
            fail: function fail(res) {
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
              uni.showToast({
                title: "网络开小差了哦",
                icon: 'none' });

            } });

        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      } });

  }), _defineProperty(_methods, "replaceSpecialChar", function replaceSpecialChar(
  text) {
    if (!text) {
      return false;
    }
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&nbsp;/g, ' ');
    return text;
  }), _methods) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 396:
/*!**************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comments.vue?vue&type=style&index=0&lang=css& */ 397);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 397:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/manage/comments.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[390,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZT9hZjYzIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZT9jZGFjIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZT81NjQ1IiwidW5pLWFwcDovLy9wYWdlcy9tYW5hZ2UvY29tbWVudHMudnVlIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZT8wYTU1Iiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZT8yYTIxIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxvRyw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxpQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUNhOzs7QUFHcEU7QUFDcU07QUFDck0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtB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UEE7QUFRQTtBQUNBO0FBQ0E7QUFDQSxlQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0EsbUNBREE7QUFFQSw0QkFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsYUFwQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0EsZUFGQSxFQUVBLElBRkE7QUFHQTtBQUNBLGdDQURBO0FBRUEsNEJBRkE7O0FBSUEsYUE3QkE7O0FBK0JBLFNBcENBLE1Bb0NBO0FBQ0E7QUFDQTtBQUNBLE9BMUNBOztBQTRDQSxHQS9RQTtBQWdSQSxNQWhSQSxFQWdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBMVJBLFlBM0RBLEU7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUFBO0FBQUE7QUFBc21DLENBQWdCLGdrQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTFuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL21hbmFnZS9jb21tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL21hbmFnZS9jb21tZW50cy52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM0MDJjZjUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb21tZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWFuYWdlL2NvbW1lbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjNDAyY2Y1JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmNvbW1lbnRzTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIG0wID0gX3ZtLmNvbW1lbnRzTGlzdC5sZW5ndGggPiAwID8gX3ZtLm1hcmtIdG1sKGl0ZW0udGV4dCkgOiBudWxsXG4gICAgdmFyIG0xID0gX3ZtLmNvbW1lbnRzTGlzdC5sZW5ndGggPiAwID8gX3ZtLmZvcm1hdERhdGUoaXRlbS5jcmVhdGVkKSA6IG51bGxcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgbTA6IG0wLFxuICAgICAgbTE6IG0xXG4gICAgfVxuICB9KVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDA6IGwwXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVzZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwiW3toZWlnaHQ6Q3VzdG9tQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlXCIgOnN0eWxlPVwieydoZWlnaHQnOiBDdXN0b21CYXIgKyAncHgnLCdwYWRkaW5nLXRvcCc6U3RhdHVzQmFyICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiIEB0YXA9XCJiYWNrXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1iYWNrXCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgdGV4dC1ib2xkXCIgOnN0eWxlPVwiW3t0b3A6U3RhdHVzQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdFx0XHTor4TorrrnrqHnkIZcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgOnN0eWxlPVwiW3twYWRkaW5nOk5hdkJhciArICdweCAxMHB4IDBweCAxMHB4J31dXCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWNhcmQgZHluYW1pYyBuby1jYXJkXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHVweDtcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgc2VhcmNoXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2gtZm9ybSByb3VuZFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tc2VhcmNoXCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLovpPlhaXmkJzntKLlhbPplK7lrZdcIiB2LW1vZGVsPVwic2VhcmNoVGV4dFwiICBAaW5wdXQ9XCJzZWFyY2hUYWdcIj48L2lucHV0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC10eXBlIGdyaWQgY29sLTJcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC10eXBlLWJveFwiIEB0YXA9XCJ0b1N0YXR1cygnd2FpdGluZycpXCIgOmNsYXNzPVwic3RhdHVzPT0nd2FpdGluZyc/J2FjdGl2ZSc6JydcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuW+heWuoeaguDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2gtdHlwZS1ib3hcIiBAdGFwPVwidG9TdGF0dXMoJ2FwcHJvdmVkJylcIiA6Y2xhc3M9XCJzdGF0dXM9PSdhcHByb3ZlZCc/J2FjdGl2ZSc6JydcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuW3suWPkeW4gzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUtYXZhdGFyIGNvbW1lbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJjb21tZW50c0xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0XHRcdOaaguaXtuayoeacieivhOiuulxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1jYXJkIGR5bmFtaWMgbm8tY2FyZFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjB1cHg7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNvbW1lbnRzTGlzdFwiIDprZXk9XCJpbmRleFwiIHYtaWY9XCJjb21tZW50c0xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudS1hdmF0YXIgY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kXCIgOnN0eWxlPVwiaXRlbS5zdHlsZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57e2l0ZW0uYXV0aG9yfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8IS0tICAjaWZkZWYgSDUgfHwgQVBQLVBMVVMgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1c2VybHZcIiA6c3R5bGU9XCJnZXRVc2VyTHZTdHlsZShpdGVtLmx2KVwiPnt7Z2V0VXNlckx2KGl0ZW0ubHYpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLSAgI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlcmx2IGN1c3RvbWl6ZVwiIHYtaWY9XCJpdGVtLmN1c3RvbWl6ZSYmaXRlbS5jdXN0b21pemUhPScnXCI+e3tpdGVtLmN1c3RvbWl6ZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY29udGVudCB0ZXh0LWRmIGJyZWFrLWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHJpY2gtdGV4dCA6bm9kZXM9XCJtYXJrSHRtbChpdGVtLnRleHQpXCI+PC9yaWNoLXRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctZ3JleSBsaWdodCBwYWRkaW5nLXNtIHJhZGl1cyBtYXJnaW4tdG9wLXNtICB0ZXh0LXNtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIiBAdGFwPVwidG9JbmZvKGl0ZW0uY2lkLGl0ZW0uY29udGVuVGl0bGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3Pnt7aXRlbS5jb250ZW5UaXRsZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYXJnaW4tdG9wLXNtIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JheSB0ZXh0LWRmXCI+e3tmb3JtYXREYXRlKGl0ZW0uY3JlYXRlZCl9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1tZXNzYWdlZmlsbCB0ZXh0LWdyYXkgbWFyZ2luLWxlZnQtc21cIiBAdGFwPVwiY29tbWVudHNBZGQoaXRlbS5hdXRob3IrJ++8micraXRlbS50ZXh0LGl0ZW0uY29pZCwxLGl0ZW0uY2lkKVwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdS1idG4gdGV4dC1ibHVlIGNvbW1lbnQtYXVkaXRcIiAgQHRhcD1cInRvQXVkaXQoaXRlbS5jb2lkKVwiIHYtaWY9XCJpdGVtLnN0YXR1cz09J3dhaXRpbmcnXCI+5a6h5qC4PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1LWJ0biB0ZXh0LXJlZCBjb21tZW50LWRlbGV0ZVwiICBAdGFwPVwidG9EZWxldGUoaXRlbS5jb2lkKVwiPuWIoOmZpDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZC1tb3JlXCIgQHRhcD1cImxvYWRNb3JlXCIgdi1pZj1cImNvbW1lbnRzTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57e21vcmVUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS3liqDovb3pga7nvaktLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZ1wiIHYtaWY9XCJpc0xvYWRpbmc9PTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nLW1haW5cIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2xvYWRpbmcuZ2lmXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLeWKoOi9vemBrue9qee7k+adny0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgbG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vanNfc2RrL21wLXN0b3JhZ2UvbXAtc3RvcmFnZS9pbmRleC5qcydcclxuXHR2YXIgQVBJID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXBpJylcclxuXHR2YXIgTmV0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbmV0JylcclxuXHRpbXBvcnQgb3dvIGZyb20gJy4uLy4uL3N0YXRpYy9vd28vT3dPLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U3RhdHVzQmFyOiB0aGlzLlN0YXR1c0JhcixcclxuXHRcdFx0XHRDdXN0b21CYXI6IHRoaXMuQ3VzdG9tQmFyLFxyXG5cdFx0XHRcdE5hdkJhcjp0aGlzLlN0YXR1c0JhciArICB0aGlzLkN1c3RvbUJhcixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb21tZW50c0xpc3Q6W10sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bW9yZVRleHQ6XCLliqDovb3mm7TlpJpcIixcclxuXHRcdFx0XHRwYWdlOjEsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VhcmNoVGV4dDpcIlwiLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN0YXR1czpcIndhaXRpbmdcIixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpc0xvYWRpbmc6MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvd286b3dvLFxyXG5cdFx0XHRcdG93b0xpc3Q6W10sXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQucGFnZT0xO1xyXG5cdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdChmYWxzZSk7XHJcblx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbSgpIHtcclxuXHRcdCAgICAvL+inpuW6leWQjuaJp+ihjOeahOaWueazle+8jOavlOWmguaXoOmZkOWKoOi9veS5i+exu+eahFxyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQubG9hZE1vcmUoKTtcclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0Ly/lj6/lj5blgLzvvJogXCJkYXJrXCLvvJrmt7HoibLliY3mma/oibLmoLflvI/vvIjljbPnirbmgIHmoI/liY3mma/mloflrZfkuLrpu5HoibLvvInvvIzmraTml7ZiYWNrZ3JvdW5k5bu66K6u6K6+572u5Li65rWF6aKc6Imy77ybIFwibGlnaHRcIu+8mua1heiJsuWJjeaZr+iJsuagt+W8j++8iOWNs+eKtuaAgeagj+WJjeaZr+aWh+Wtl+S4uueZveiJsu+8ie+8jOatpOaXtmJhY2tncm91bmTlu7rorr7orr7nva7kuLrmt7HpopzoibLvvJtcclxuXHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0U3RhdHVzQmFyU3R5bGUoXCJkYXJrXCIpXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIHx8IE1QXHJcblx0XHRcdHRoYXQuTmF2QmFyID0gdGhpcy5DdXN0b21CYXI7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIG93byA9IHRoYXQub3dvLmRhdGE7XHJcblx0XHRcdHZhciBvd29MaXN0PVtdO1xyXG5cdFx0XHRmb3IodmFyIGkgaW4gb3dvKXtcclxuXHRcdFx0XHRvd29MaXN0ID0gb3dvTGlzdC5jb25jYXQob3dvW2ldLmNvbnRhaW5lcik7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhhdC5vd29MaXN0ID0gb3dvTGlzdDtcclxuXHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoZmFsc2UpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXJrSHRtbCh0ZXh0KXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG93b0xpc3Q9dGhhdC5vd29MaXN0O1xyXG5cdFx0XHRcdGZvcih2YXIgaSBpbiBvd29MaXN0KXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKHRoYXQucmVwbGFjZVNwZWNpYWxDaGFyKHRleHQpLmluZGV4T2Yob3dvTGlzdFtpXS5kYXRhKSAhPSAtMSl7XHJcblx0XHRcdFx0XHRcdHRleHQgPSB0aGF0LnJlcGxhY2VBbGwodGhhdC5yZXBsYWNlU3BlY2lhbENoYXIodGV4dCksb3dvTGlzdFtpXS5kYXRhLFwiPGltZyBzcmM9Jy9cIitvd29MaXN0W2ldLmljb24rXCInIGNsYXNzPSd0SW1nJyAvPlwiKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRleHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcGxhY2VBbGwoc3RyaW5nLCBzZWFyY2gsIHJlcGxhY2UpIHtcclxuXHRcdFx0ICByZXR1cm4gc3RyaW5nLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VhcmNoVGFnKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzZWFyY2hUZXh0ID0gdGhhdC5zZWFyY2hUZXh0O1xyXG5cdFx0XHRcdHRoYXQucGFnZT0xO1xyXG5cdFx0XHRcdHRoYXQuZ2V0Q29tbWVudHNMaXN0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyTHYoaSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmKCFpKXtcclxuXHRcdFx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHJhbmtMaXN0ID0gQVBJLkdldFJhbmtMaXN0KCk7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmtMaXN0W2ldO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyTHZTdHlsZShpKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYoIWkpe1xyXG5cdFx0XHRcdFx0dmFyIGkgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgcmFua1N0eWxlID0gQVBJLkdldFJhbmtTdHlsZSgpO1xyXG5cdFx0XHRcdHZhciB1c2VybHZTdHlsZSA9XCJjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IFwiK3JhbmtTdHlsZVtpXTtcclxuXHRcdFx0XHRyZXR1cm4gdXNlcmx2U3R5bGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWRNb3JlKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLmraPlnKjliqDovb3kuK0uLi5cIjtcclxuXHRcdFx0XHRpZih0aGF0LmlzTG9hZD09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdCh0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvSW5mbyhjaWQsdGl0bGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9pbmZvP2NpZD0nK2NpZCtcIiZ0aXRsZT1cIit0aXRsZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWFyY2hUYWcoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHNlYXJjaFRleHQgPSB0aGF0LnNlYXJjaFRleHQ7XHJcblx0XHRcdFx0dGhhdC5wYWdlPTE7XHJcblx0XHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoKTtcclxuXHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENvbW1lbnRzTGlzdChpc1BhZ2Upe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwidHlwZVwiOlwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XCJzdGF0dXNcIjp0aGF0LnN0YXR1c1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgcGFnZSA9IHRoYXQucGFnZTtcclxuXHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0cGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHROZXQucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSS5nZXRDb21tZW50c0xpc3QoKSxcclxuXHRcdFx0XHRcdGRhdGE6e1xyXG5cdFx0XHRcdFx0XHRcInNlYXJjaFBhcmFtc1wiOkpTT04uc3RyaW5naWZ5KEFQSS5yZW1vdmVPYmplY3RFbXB0eUtleShkYXRhKSksXHJcblx0XHRcdFx0XHRcdFwibGltaXRcIjo1LFxyXG5cdFx0XHRcdFx0XHRcInBhZ2VcIjpwYWdlLFxyXG5cdFx0XHRcdFx0XHRcInNlYXJjaEtleVwiOnRoYXQuc2VhcmNoVGV4dCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnRzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIGxpc3Qpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYXJyID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJyLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIitsaXN0W2ldLmF2YXRhcitcIik7XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudHNMaXN0LnB1c2goYXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbW1lbnRzTGlzdCA9IHRoYXQuY29tbWVudHNMaXN0LmNvbmNhdChjb21tZW50c0xpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29tbWVudHNMaXN0ID0gY29tbWVudHNMaXN0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuayoeacieabtOWkmuivhOiuuuS6hlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoIWlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29tbWVudHNMaXN0ID0gbGlzdDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9TdGF0dXMoaSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc3RhdHVzPWk7XHJcblx0XHRcdFx0dGhhdC5wYWdlPTE7XHJcblx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoZmFsc2UpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21tZW50c0FkZCh0aXRsZSxjb2lkLHJlcGx5LGNpZCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQgICAgdXJsOiAnL3BhZ2VzL2NvbnRlbnRzL2NvbW1lbnRzYWRkP2NpZD0nK2NpZCtcIiZjb2lkPVwiK2NvaWQrXCImdGl0bGU9XCIrdGl0bGUrXCImaXNyZXBseT1cIityZXBseVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Zm9ybWF0RGF0ZShkYXRldGltZSkge1xyXG5cdFx0XHRcdHZhciBkYXRldGltZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGV0aW1lICogMTAwMCkpO1xyXG5cdFx0XHRcdC8vIOiOt+WPluW5tOaciOaXpeaXtuWIhuenkuWAvCAgc2xpY2UoLTIp6L+H5ruk5o6J5aSn5LqOMTDml6XmnJ/liY3pnaLnmoQwXHJcblx0XHRcdFx0dmFyIHllYXIgPSBkYXRldGltZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0XHRcdFx0bW9udGggPSAoXCIwXCIgKyAoZGF0ZXRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0XHRkYXRlID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0XHRob3VyID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0bWludXRlID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMik7XHJcblx0XHRcdFx0Ly9zZWNvbmQgPSAoXCIwXCIgKyBkYXRlLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpO1xyXG5cdFx0XHRcdC8vIOaLvOaOpVxyXG5cdFx0XHRcdHZhciByZXN1bHQgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF0ZSArIFwiIFwiICsgaG91ciArIFwiOlwiICsgbWludXRlO1xyXG5cdFx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRGVsZXRlKGlkKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHRva2VuID0gXCJcIjtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmluZm8nKSl7XHJcblx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyaW5mbycpKTtcclxuXHRcdFx0XHRcdHRva2VuPXVzZXJJbmZvLnRva2VuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwia2V5XCI6aWQsXHJcblx0XHRcdFx0XHRcInRva2VuXCI6dG9rZW5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0ICAgIHRpdGxlOiAn56Gu5a6a6KaB5Yig6Zmk6K+l5paH56ug5ZCXJyxcclxuXHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdHRpdGxlOiBcIuWKoOi9veS4rVwiXHJcblx0XHRcdFx0ICAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdFx0ICAgICAgICAgICAgTmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0dXJsOiBBUEkuY29tbWVudHNEZWxldGUoKSxcclxuXHRcdFx0XHQgICAgICAgICAgICBcdGRhdGE6ZGF0YSxcclxuXHRcdFx0XHQgICAgICAgICAgICBcdGhlYWRlcjp7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHR9LFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHQgICAgICAgICAgICBcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tc2csXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdH0pXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHRoYXQuZ2V0Q29tbWVudHNMaXN0KCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdH1cclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHR9LFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0dGl0bGU6IFwi572R57uc5byA5bCP5beu5LqG5ZOmXCIsXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdH0pXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHR9XHJcblx0XHRcdFx0ICAgICAgICAgICAgfSlcclxuXHRcdFx0XHQgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0F1ZGl0KGlkKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHRva2VuID0gXCJcIjtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmluZm8nKSl7XHJcblx0XHRcdFx0XHR2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyaW5mbycpKTtcclxuXHRcdFx0XHRcdHRva2VuPXVzZXJJbmZvLnRva2VuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwia2V5XCI6aWQsXHJcblx0XHRcdFx0XHRcInRva2VuXCI6dG9rZW5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0ICAgIHRpdGxlOiAn56Gu5a6a6KaB6YCa6L+H5a6h5qC45ZCX77yfJyxcclxuXHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdHRpdGxlOiBcIuWKoOi9veS4rVwiXHJcblx0XHRcdFx0ICAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdFx0ICAgICAgICAgICAgTmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0dXJsOiBBUEkuY29tbWVudHNBdWRpdCgpLFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0ZGF0YTpkYXRhLFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0aGVhZGVyOntcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHQgICAgICAgICAgICBcdH0sXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0fSlcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0aWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoKTtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0fVxyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHQgICAgICAgICAgICBcdH0sXHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHR0aXRsZTogXCLnvZHnu5zlvIDlsI/lt67kuoblk6ZcIixcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0fSlcclxuXHRcdFx0XHQgICAgICAgICAgICBcdH1cclxuXHRcdFx0XHQgICAgICAgICAgICB9KVxyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcGxhY2VTcGVjaWFsQ2hhcih0ZXh0KSB7XHJcblx0XHRcdFx0aWYoIXRleHQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mbHQ7L2csICc8Jyk7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvJmd0Oy9nLCAnPicpO1xyXG5cdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZuYnNwOy9nLCAnICcpO1xyXG5cdFx0XHRcdHJldHVybiB0ZXh0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuQGltcG9ydCBcIi4uLy4uL3N0YXRpYy9iYXNlLmNzc1wiO1xyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQ3NTM1NzA4OTYwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkU6L0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=