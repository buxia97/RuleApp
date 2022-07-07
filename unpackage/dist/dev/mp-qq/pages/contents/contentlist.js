(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/contentlist"],{

/***/ 142:
/*!*****************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fcontentlist"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _contentlist = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/contentlist.vue */ 143));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_contentlist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 143:
/*!**********************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/contentlist.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentlist.vue?vue&type=template&id=4e50b7ca& */ 144);
/* harmony import */ var _contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentlist.vue?vue&type=script&lang=js& */ 146);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentlist.vue?vue&type=style&index=0&lang=css& */ 148);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/contents/contentlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/*!*****************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=template&id=4e50b7ca& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./contentlist.vue?vue&type=template&id=4e50b7ca& */ 145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_template_id_4e50b7ca___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 145:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=template&id=4e50b7ca& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.contentsList, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var m0 = _vm.replaceSpecialChar(item.title)
    var m1 = _vm.subText(item.text, 80)
    var m2 = _vm.formatNumber(item.views)
    var m3 = _vm.formatDate(item.created)
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2,
      m3: m3
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

/***/ 146:
/*!***********************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./contentlist.vue?vue&type=script&lang=js& */ 147);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 147:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































































var _index = __webpack_require__(/*! ../../js_sdk/mp-storage/mp-storage/index.js */ 18); //
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
var API = __webpack_require__(/*! ../../utils/api */ 19);var Net = __webpack_require__(/*! ../../utils/net */ 20);var _default = { data: function data() {return { StatusBar: this.StatusBar, CustomBar: this.CustomBar, NavBar: this.StatusBar + this.CustomBar, title: "", type: "", id: 0, contentsList: [], page: 1, moreText: "加载更多", isLoad: 0, metaList: [{ mid: 0, name: "全部", parent: 0 }], topList: [{ order: "commentsNum", name: "评论榜", parent: 0 }, { order: "views", name: "点击榜", parent: 0 }, { order: "likes", name: "喜欢榜", parent: 0 }], orderCur: "commentsNum", TabCur: 0, scrollLeft: 0, isLoading: 0 };}, onPullDownRefresh: function onPullDownRefresh() {var that = this;}, onReachBottom: function onReachBottom() {//触底后执行的方法，比如无限加载之类的
    var that = this;if (that.isLoad == 0) {that.loadMore();}}, onShow: function onShow() {var that = this;}, onLoad: function onLoad(res) {var that = this;that.NavBar = this.CustomBar;that.title = res.title;that.type = res.type; //user根据用户查询 meta根据分类和标签查询，all显示分类查询全部，search根据搜索关键词查询
    that.id = res.id;if (res.type != "") {if (that.type == "meta") {that.getMetaContents(false, that.id);} else if (that.type == "top") {
        that.getContentsList(false, that.type, that.id);
      } else {
        that.getContentsList(false, that.type, that.id);
      }
    }
    if (res.type == "all") {

      that.getMetaList();
    }

  },
  methods: {
    allCache: function allCache() {
      var that = this;
      var meta = that.TabCur;

    },
    tabSelect: function tabSelect(e) {
      var that = this;
      that.TabCur = e.currentTarget.dataset.id;
      that.id = e.currentTarget.dataset.id;
      that.page = 1;
      that.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
      if (that.TabCur == 0) {
        that.getContentsList(false, "all", 0);
      } else {
        that.getMetaContents(false, that.TabCur);
      }
    },
    topSelect: function topSelect(e) {
      var that = this;
      that.orderCur = e.currentTarget.dataset.order;
      that.page = 1;
      that.getContentsList(false, "all", 0);
    },
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    },
    loadMore: function loadMore() {
      var that = this;
      that.moreText = "正在加载中...";
      that.isLoad = 1;
      if (that.type == "meta") {

        that.getMetaContents(true, that.id);
      } else if (that.type == "all") {
        if (that.id == 0) {
          that.getContentsList(true, that.type, that.id);
        } else {
          that.getMetaContents(true, that.id);
        }
      } else if (that.type == "top") {
        that.getContentsList(true, that.type, that.id);

      } else {
        that.getContentsList(true, that.type, that.id);
      }
    },
    toInfo: function toInfo(data) {
      var that = this;

      uni.navigateTo({
        url: '/pages/contents/info?cid=' + data.cid + "&title=" + data.title });

    },
    getMetaList: function getMetaList() {
      var that = this;
      var data = {
        "type": "category" };

      Net.request({
        url: API.getMetasList(),
        data: {
          "searchParams": JSON.stringify(API.removeObjectEmptyKey(data)),
          "limit": 15,
          "page": 1 },

        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        method: "get",
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {

              that.metaList = that.metaList.concat(list);

            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none' });

          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        } });

    },
    getContentsList: function getContentsList(isPage, type, id) {
      var that = this;
      var info = {
        "type": "post" };

      var order = "created";
      if (type == "user") {
        info = {
          "type": "post",
          "authorId": that.id };

      }
      if (that.type == "top") {
        order = that.orderCur;
      }
      var page = that.page;
      if (isPage) {
        page++;
      } else {
        that.contentsList = [];
      }
      var data = {
        "searchParams": JSON.stringify(API.removeObjectEmptyKey(info)),
        "limit": 5,
        "page": page,
        "order": order };

      Net.request({
        url: API.getContentsList(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        method: "get",
        dataType: 'json',
        success: function success(res) {
          //console.log(JSON.stringify(res))
          that.moreText = "加载更多";
          that.isLoad = 0;
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              if (isPage) {
                that.page++;
                that.contentsList = that.contentsList.concat(list);
              } else {
                that.contentsList = list;
              }



            } else {
              that.moreText = "没有更多文章了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          that.moreText = "加载更多";
          that.isLoad = 0;
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none' });

          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        } });

    },
    getMetaContents: function getMetaContents(isPage, meta) {
      var that = this;
      var data = {
        "mid": meta };

      var page = that.page;
      if (isPage) {
        page++;
      }
      Net.request({
        url: API.getMetaContents(),
        data: {
          "searchParams": JSON.stringify(API.removeObjectEmptyKey(data)),
          "limit": 5,
          "page": page,
          "order": "created" },

        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        method: "get",
        dataType: 'json',
        success: function success(res) {
          //console.log(JSON.stringify(res))
          that.isLoad = 0;
          that.moreText = "加载更多";
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {
              if (isPage) {
                that.page++;
                that.contentsList = that.contentsList.concat(list);
              } else {
                that.contentsList = list;
              }


              _index.localStorage.setItem('contentsList_' + meta, JSON.stringify(that.contentsList));
            } else {
              that.moreText = "没有更多文章了";
            }
          }
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        },
        fail: function fail(res) {
          uni.showToast({
            title: "网络开小差了哦",
            icon: 'none' });

          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
          that.moreText = "加载更多";
          that.isLoad = 0;
        } });

    },


    subText: function subText(text, num) {
      if (text.length < null) {
        return text.substring(0, num) + "……";
      } else {
        return text;
      }

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
    formatNumber: function formatNumber(num) {
      return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num;
    },
    toSearch: function toSearch() {
      var that = this;

      uni.navigateTo({
        url: '/pages/contents/search' });

    },
    replaceSpecialChar: function replaceSpecialChar(text) {
      text = text.replace(/&quot;/g, '"');
      text = text.replace(/&amp;/g, '&');
      text = text.replace(/&lt;/g, '<');
      text = text.replace(/&gt;/g, '>');
      text = text.replace(/&nbsp;/g, ' ');
      return text;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 148:
/*!*******************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./contentlist.vue?vue&type=style&index=0&lang=css& */ 149);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_contentlist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/contentlist.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[142,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT81OTE5Iiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvY29udGVudGxpc3QudnVlPzQyNTgiLCJ3ZWJwYWNrOi8vL0U6L0FQUHByby92b3NzL+inhOWImeS5i+agkS9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWU/OWZiOCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT80MzExIiwidW5pLWFwcDovLy9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0U6L0FQUHByby92b3NzL+inhOWImeS5i+agkS9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWU/ZDA5OCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT84ZGYxIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBOzs7QUFHQTtBQUNBLDRHLDhGQUhBO0FBQ0FBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QyxDQUdBQyxVQUFVLENBQUNDLG9CQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3SDtBQUN4SDtBQUMrRDtBQUNMO0FBQ2E7OztBQUd2RTtBQUNxTTtBQUNyTSxnQkFBZ0IsNE1BQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsc0ZBQU07QUFD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Y29udGVudHMvY29udGVudGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG4vLyBAdHMtaWdub3JlXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTUwYjdjYSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTUwYjdjYSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5jb250ZW50c0xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBtMCA9IF92bS5yZXBsYWNlU3BlY2lhbENoYXIoaXRlbS50aXRsZSlcbiAgICB2YXIgbTEgPSBfdm0uc3ViVGV4dChpdGVtLnRleHQsIDgwKVxuICAgIHZhciBtMiA9IF92bS5mb3JtYXROdW1iZXIoaXRlbS52aWV3cylcbiAgICB2YXIgbTMgPSBfdm0uZm9ybWF0RGF0ZShpdGVtLmNyZWF0ZWQpXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG0wOiBtMCxcbiAgICAgIG0xOiBtMSxcbiAgICAgIG0yOiBtMixcbiAgICAgIG0zOiBtM1xuICAgIH1cbiAgfSlcblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwwOiBsMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb250ZW50bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb250ZW50bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1c2VyXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImhlYWRlclwiIDpzdHlsZT1cIlt7aGVpZ2h0OkN1c3RvbUJhciArICdweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZVwiIDpzdHlsZT1cInsnaGVpZ2h0JzogQ3VzdG9tQmFyICsgJ3B4JywncGFkZGluZy10b3AnOlN0YXR1c0JhciArICdweCd9XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiBAdGFwPVwiYmFja1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tYmFja1wiPjwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50IHRleHQtYm9sZFwiIDpzdHlsZT1cIlt7dG9wOlN0YXR1c0JhciArICdweCd9XVwiPlxyXG5cdFx0XHRcdFx0e3t0aXRsZX19XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gICNpZmRlZiBINSB8fCBBUFAtUExVUyAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiIEB0YXA9XCJ0b1NlYXJjaFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tc2VhcmNoXCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tICAjZW5kaWYgLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IDpzdHlsZT1cIlt7cGFkZGluZzpOYXZCYXIgKyAncHggMTBweCAwcHggMTBweCd9XVwiPjwvdmlldz5cclxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteCBjbGFzcz1cImJnLXdoaXRlIG5hdiBtZXRhTGlzdFwiIHNjcm9sbC13aXRoLWFuaW1hdGlvbiA6c2Nyb2xsLWxlZnQ9XCJzY3JvbGxMZWZ0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHVweDtcIiB2LWlmPVwidHlwZT09J2FsbCdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwiaXRlbS5taWQ9PVRhYkN1cj8ndGV4dC1ibHVlIGN1cic6JydcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtZXRhTGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJ0YWJTZWxlY3RcIiA6ZGF0YS1pZD1cIml0ZW0ubWlkXCIgdi1pZj1cIml0ZW0ucGFyZW50PT0wXCI+XHJcblx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWNhcmQgYXJ0aWNsZSBuby1jYXJkXCI+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXggY2xhc3M9XCJiZy13aGl0ZSBuYXYgbWV0YUxpc3RcIiBzY3JvbGwtd2l0aC1hbmltYXRpb24gOnNjcm9sbC1sZWZ0PVwic2Nyb2xsTGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjB1cHg7XCIgdi1pZj1cInR5cGU9PSd0b3AnXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIDpjbGFzcz1cIml0ZW0ub3JkZXI9PW9yZGVyQ3VyPyd0ZXh0LWJsdWUgY3VyJzonJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRvcExpc3RcIiA6a2V5PVwiaW5kZXhcIiBAdGFwPVwidG9wU2VsZWN0XCIgOmRhdGEtb3JkZXI9XCJpdGVtLm9yZGVyXCI+XHJcblx0XHRcdFx0e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWNhcmQgYXJ0aWNsZSBuby1jYXJkXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY29udGVudHNMaXN0XCIgOmtleT1cImluZGV4XCIgIEB0YXA9XCJ0b0luZm8oaXRlbSlcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW0gc2hhZG93XCI+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cIml0ZW0uaW1hZ2VzLmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtYXV0aG9yIGNvbnRlbnQtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF1dGhvckluZm8uYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudC1hdXRob3ItbmFtZVwiPnt7aXRlbS5hdXRob3JJbmZvLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFydGljbGUtY2F0ZWdvcnlcIiB2LWlmPVwiaXRlbS5jYXRlZ29yeS5sZW5ndGg+MFwiPnt7aXRlbS5jYXRlZ29yeVswXS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jdXRcIj57e3JlcGxhY2VTcGVjaWFsQ2hhcihpdGVtLnRpdGxlKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50IGFydGljbGUtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0IDxpbWFnZSB2LWlmPVwiaXRlbS5pbWFnZXMubGVuZ3RoID4gMFwiIDpzcmM9XCJpdGVtLmltYWdlc1swXVwiXHJcblx0XHRcdFx0XHRcdCAgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50XCI+IHt7c3ViVGV4dChpdGVtLnRleHQsODApfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50LWF1dGhvclwiIHYtaWY9XCJpdGVtLmltYWdlcy5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF1dGhvckluZm8uYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50LWF1dGhvci1uYW1lXCI+e3tpdGVtLmF1dGhvckluZm8ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhcnRpY2xlLWNhdGVnb3J5XCIgdi1pZj1cIml0ZW0uY2F0ZWdvcnkubGVuZ3RoPjBcIj57e2l0ZW0uY2F0ZWdvcnlbMF0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcnRpY2xlLWNvbnRlbnQtYnRuXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGRhdGEtYXV0aG9yXCI+PHRleHQgY2xhc3M9XCJjdUljb24tYXR0ZW50aW9uZmlsbFwiPjwvdGV4dD57e2Zvcm1hdE51bWJlcihpdGVtLnZpZXdzKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLWF1dGhvclwiPjx0ZXh0IGNsYXNzPVwiY3VJY29uLWFwcHJlY2lhdGVmaWxsXCI+PC90ZXh0Pnt7aXRlbS5saWtlc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLWF1dGhvclwiPjx0ZXh0IGNsYXNzPVwiY3VJY29uLW1lc3NhZ2VmaWxsXCI+PC90ZXh0Pnt7aXRlbS5jb21tZW50c051bX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGRhdGEtdGltZVwiPnt7Zm9ybWF0RGF0ZShpdGVtLmNyZWF0ZWQpfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZC1tb3JlXCIgQHRhcD1cImxvYWRNb3JlXCIgdi1pZj1cImNvbnRlbnRzTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdDx0ZXh0Pnt7bW9yZVRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWRhdGFcIiB2LWlmPVwiY29udGVudHNMaXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdOaaguaXtuayoeacieaVsOaNrlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0t5Yqg6L296YGu572pLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIiB2LWlmPVwiaXNMb2FkaW5nPT0wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZy1tYWluXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9sb2FkaW5nLmdpZlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS3liqDovb3pga7nvannu5PmnZ8tLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7IGxvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uL2pzX3Nkay9tcC1zdG9yYWdlL21wLXN0b3JhZ2UvaW5kZXguanMnXHJcblx0dmFyIEFQSSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FwaScpXHJcblx0dmFyIE5ldCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL25ldCcpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRTdGF0dXNCYXI6IHRoaXMuU3RhdHVzQmFyLFxyXG5cdFx0XHRcdEN1c3RvbUJhcjogdGhpcy5DdXN0b21CYXIsXHJcblx0XHRcdFx0TmF2QmFyOnRoaXMuU3RhdHVzQmFyICsgIHRoaXMuQ3VzdG9tQmFyLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRpdGxlOlwiXCIsXHJcblx0XHRcdFx0dHlwZTpcIlwiLFxyXG5cdFx0XHRcdGlkOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udGVudHNMaXN0OltdLFxyXG5cdFx0XHRcdHBhZ2U6MSxcclxuXHRcdFx0XHRtb3JlVGV4dDpcIuWKoOi9veabtOWkmlwiLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlzTG9hZDowLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG1ldGFMaXN0OltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWlkOjAsXHJcblx0XHRcdFx0XHRcdG5hbWU6XCLlhajpg6hcIixcclxuXHRcdFx0XHRcdFx0cGFyZW50OjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHRvcExpc3Q6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvcmRlcjpcImNvbW1lbnRzTnVtXCIsXHJcblx0XHRcdFx0XHRcdG5hbWU6XCLor4TorrrmppxcIixcclxuXHRcdFx0XHRcdFx0cGFyZW50OjBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9yZGVyOlwidmlld3NcIixcclxuXHRcdFx0XHRcdFx0bmFtZTpcIueCueWHu+amnFwiLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnQ6MFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b3JkZXI6XCJsaWtlc1wiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5Zac5qyi5qacXCIsXHJcblx0XHRcdFx0XHRcdHBhcmVudDowXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0b3JkZXJDdXI6XCJjb21tZW50c051bVwiLFxyXG5cdFx0XHRcdFRhYkN1cjogMCxcclxuXHRcdFx0XHRzY3JvbGxMZWZ0OiAwLFxyXG5cdFx0XHRcdGlzTG9hZGluZzowLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25QdWxsRG93blJlZnJlc2goKXtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tKCkge1xyXG5cdFx0ICAgIC8v6Kem5bqV5ZCO5omn6KGM55qE5pa55rOV77yM5q+U5aaC5peg6ZmQ5Yqg6L295LmL57G755qEXHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0aWYodGhhdC5pc0xvYWQ9PTApe1xyXG5cdFx0XHRcdHRoYXQubG9hZE1vcmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0Ly/lj6/lj5blgLzvvJogXCJkYXJrXCLvvJrmt7HoibLliY3mma/oibLmoLflvI/vvIjljbPnirbmgIHmoI/liY3mma/mloflrZfkuLrpu5HoibLvvInvvIzmraTml7ZiYWNrZ3JvdW5k5bu66K6u6K6+572u5Li65rWF6aKc6Imy77ybIFwibGlnaHRcIu+8mua1heiJsuWJjeaZr+iJsuagt+W8j++8iOWNs+eKtuaAgeagj+WJjeaZr+aWh+Wtl+S4uueZveiJsu+8ie+8jOatpOaXtmJhY2tncm91bmTlu7rorr7orr7nva7kuLrmt7HpopzoibLvvJtcclxuXHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0U3RhdHVzQmFyU3R5bGUoXCJkYXJrXCIpXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQocmVzKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIHx8IE1QXHJcblx0XHRcdHRoYXQuTmF2QmFyID0gdGhpcy5DdXN0b21CYXI7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR0aGF0LnRpdGxlID0gcmVzLnRpdGxlO1xyXG5cdFx0XHR0aGF0LnR5cGUgPSAgcmVzLnR5cGU7XHJcblx0XHRcdC8vdXNlcuagueaNrueUqOaIt+afpeivoiBtZXRh5qC55o2u5YiG57G75ZKM5qCH562+5p+l6K+i77yMYWxs5pi+56S65YiG57G75p+l6K+i5YWo6YOo77yMc2VhcmNo5qC55o2u5pCc57Si5YWz6ZSu6K+N5p+l6K+iXHJcblx0XHRcdHRoYXQuaWQgPSAgcmVzLmlkO1xyXG5cdFx0XHRpZihyZXMudHlwZSE9XCJcIil7XHJcblx0XHRcdFx0aWYodGhhdC50eXBlPT1cIm1ldGFcIil7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQuZ2V0TWV0YUNvbnRlbnRzKGZhbHNlLHRoYXQuaWQpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQudHlwZT09XCJ0b3BcIil7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSx0aGF0LnR5cGUsdGhhdC5pZCk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSx0aGF0LnR5cGUsdGhhdC5pZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHJlcy50eXBlPT1cImFsbFwiKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LmdldE1ldGFMaXN0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdGFsbENhY2hlKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBtZXRhID0gdGhhdC5UYWJDdXI7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYlNlbGVjdChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuVGFiQ3VyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblx0XHRcdFx0dGhhdC5pZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG5cdFx0XHRcdHRoYXQucGFnZSA9IDE7XHJcblx0XHRcdFx0dGhhdC5zY3JvbGxMZWZ0ID0gKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkIC0gMSkgKiA2MDtcclxuXHRcdFx0XHRpZih0aGF0LlRhYkN1cj09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSxcImFsbFwiLDApO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRNZXRhQ29udGVudHMoZmFsc2UsdGhhdC5UYWJDdXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9wU2VsZWN0KGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lm9yZGVyQ3VyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub3JkZXI7XHJcblx0XHRcdFx0dGhhdC5wYWdlID0gMTtcclxuXHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSxcImFsbFwiLDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2FkTW9yZSgpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5q2j5Zyo5Yqg6L295LitLi4uXCI7XHJcblx0XHRcdFx0dGhhdC5pc0xvYWQ9MTtcclxuXHRcdFx0XHRpZih0aGF0LnR5cGU9PVwibWV0YVwiKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC5nZXRNZXRhQ29udGVudHModHJ1ZSx0aGF0LmlkKTtcclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnR5cGU9PVwiYWxsXCIpe1xyXG5cdFx0XHRcdFx0aWYodGhhdC5pZD09MCl7XHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KHRydWUsdGhhdC50eXBlLHRoYXQuaWQpO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0TWV0YUNvbnRlbnRzKHRydWUsdGhhdC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC50eXBlPT1cInRvcFwiKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KHRydWUsdGhhdC50eXBlLHRoYXQuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdCh0cnVlLHRoYXQudHlwZSx0aGF0LmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvSW5mbyhkYXRhKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcvcGFnZXMvY29udGVudHMvaW5mbz9jaWQ9JytkYXRhLmNpZCtcIiZ0aXRsZT1cIitkYXRhLnRpdGxlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1ldGFMaXN0KCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6XCJjYXRlZ29yeVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJLmdldE1ldGFzTGlzdCgpLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFwic2VhcmNoUGFyYW1zXCI6SlNPTi5zdHJpbmdpZnkoQVBJLnJlbW92ZU9iamVjdEVtcHR5S2V5KGRhdGEpKSxcclxuXHRcdFx0XHRcdFx0XCJsaW1pdFwiOjE1LFxyXG5cdFx0XHRcdFx0XHRcInBhZ2VcIjoxLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0aWYobGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1ldGFMaXN0ID0gdGhhdC5tZXRhTGlzdC5jb25jYXQobGlzdCk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnvZHnu5zlvIDlsI/lt67kuoblk6ZcIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Q29udGVudHNMaXN0KGlzUGFnZSx0eXBlLGlkKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGluZm8gPSB7XHJcblx0XHRcdFx0XHRcInR5cGVcIjpcInBvc3RcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgb3JkZXIgPSBcImNyZWF0ZWRcIjtcclxuXHRcdFx0XHRpZih0eXBlPT1cInVzZXJcIil7XHJcblx0XHRcdFx0XHRpbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjpcInBvc3RcIixcclxuXHRcdFx0XHRcdFx0XCJhdXRob3JJZFwiOnRoYXQuaWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhhdC50eXBlPT1cInRvcFwiKXtcclxuXHRcdFx0XHRcdG9yZGVyID0gdGhhdC5vcmRlckN1clxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgcGFnZSA9IHRoYXQucGFnZTtcclxuXHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0cGFnZSsrO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5jb250ZW50c0xpc3QgPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcInNlYXJjaFBhcmFtc1wiOkpTT04uc3RyaW5naWZ5KEFQSS5yZW1vdmVPYmplY3RFbXB0eUtleShpbmZvKSksXHJcblx0XHRcdFx0XHRcImxpbWl0XCI6NSxcclxuXHRcdFx0XHRcdFwicGFnZVwiOnBhZ2UsXHJcblx0XHRcdFx0XHRcIm9yZGVyXCI6b3JkZXJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJLmdldENvbnRlbnRzTGlzdCgpLFxyXG5cdFx0XHRcdFx0ZGF0YTpkYXRhLFxyXG5cdFx0XHRcdFx0aGVhZGVyOntcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0aWYobGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnBhZ2UrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50c0xpc3QgPSB0aGF0LmNvbnRlbnRzTGlzdC5jb25jYXQobGlzdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50c0xpc3QgPSBsaXN0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLmsqHmnInmm7TlpJrmlofnq6DkuoZcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi572R57uc5byA5bCP5beu5LqG5ZOmXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1ldGFDb250ZW50cyhpc1BhZ2UsbWV0YSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJtaWRcIjptZXRhXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBwYWdlID0gdGhhdC5wYWdlO1xyXG5cdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRwYWdlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJLmdldE1ldGFDb250ZW50cygpLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFwic2VhcmNoUGFyYW1zXCI6SlNPTi5zdHJpbmdpZnkoQVBJLnJlbW92ZU9iamVjdEVtcHR5S2V5KGRhdGEpKSxcclxuXHRcdFx0XHRcdFx0XCJsaW1pdFwiOjUsXHJcblx0XHRcdFx0XHRcdFwicGFnZVwiOnBhZ2UsXHJcblx0XHRcdFx0XHRcdFwib3JkZXJcIjpcImNyZWF0ZWRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5wYWdlKys7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudHNMaXN0ID0gdGhhdC5jb250ZW50c0xpc3QuY29uY2F0KGxpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudHNMaXN0ID0gbGlzdDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udGVudHNMaXN0XycrbWV0YSxKU09OLnN0cmluZ2lmeSh0aGF0LmNvbnRlbnRzTGlzdCkpO1xyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuayoeacieabtOWkmuaWh+eroOS6hlwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi572R57uc5byA5bCP5beu5LqG5ZOmXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRzdWJUZXh0KHRleHQsbnVtKXtcclxuXHRcdFx0XHRpZih0ZXh0Lmxlbmd0aCA8IG51bGwpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsbnVtKStcIuKApuKAplwiXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGV4dDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdERhdGUoZGF0ZXRpbWUpIHtcclxuXHRcdFx0XHR2YXIgZGF0ZXRpbWUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRldGltZSAqIDEwMDApKTtcclxuXHRcdFx0XHQvLyDojrflj5blubTmnIjml6Xml7bliIbnp5LlgLwgIHNsaWNlKC0yKei/h+a7pOaOieWkp+S6jjEw5pel5pyf5YmN6Z2i55qEMFxyXG5cdFx0XHRcdHZhciB5ZWFyID0gZGF0ZXRpbWUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0XHRcdG1vbnRoID0gKFwiMFwiICsgKGRhdGV0aW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0ZGF0ZSA9IChcIjBcIiArIGRhdGV0aW1lLmdldERhdGUoKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0aG91ciA9IChcIjBcIiArIGRhdGV0aW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSxcclxuXHRcdFx0XHRcdG1pbnV0ZSA9IChcIjBcIiArIGRhdGV0aW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xyXG5cdFx0XHRcdC8vc2Vjb25kID0gKFwiMFwiICsgZGF0ZS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTtcclxuXHRcdFx0XHQvLyDmi7zmjqVcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGUgKyBcIiBcIiArIGhvdXIgKyBcIjpcIiArIG1pbnV0ZTtcclxuXHRcdFx0XHQvLyDov5Tlm55cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtYXROdW1iZXIobnVtKSB7XHJcblx0XHRcdCAgICByZXR1cm4gbnVtID49IDFlMyAmJiBudW0gPCAxZTQgPyAobnVtIC8gMWUzKS50b0ZpeGVkKDEpICsgJ2snIDogbnVtID49IDFlNCA/IChudW0gLyAxZTQpLnRvRml4ZWQoMSkgKyAndycgOiBudW1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9TZWFyY2goKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcvcGFnZXMvY29udGVudHMvc2VhcmNoJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXBsYWNlU3BlY2lhbENoYXIodGV4dCkge1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcclxuXHRcdFx0ICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZsdDsvZywgJzwnKTtcclxuXHRcdFx0ICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mZ3Q7L2csICc+Jyk7XHJcblx0XHRcdCAgdGV4dCA9IHRleHQucmVwbGFjZSgvJm5ic3A7L2csICcgJyk7XHJcblx0XHRcdCAgcmV0dXJuIHRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5AaW1wb3J0IFwiLi4vLi4vc3RhdGljL2Jhc2UuY3NzXCI7XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb250ZW50bGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTcxMTA3ODU2NTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRTovSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==