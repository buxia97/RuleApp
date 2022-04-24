(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/contentlist"],{

/***/ 142:
/*!*****************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fcontentlist"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _contentlist = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/contentlist.vue */ 143));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_contentlist.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT81OTE5Iiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvY29udGVudGxpc3QudnVlPzQyNTgiLCJ3ZWJwYWNrOi8vL0U6L0FQUHByby92b3NzL+inhOWImeS5i+agkS9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWU/OWZiOCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT80MzExIiwidW5pLWFwcDovLy9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0U6L0FQUHByby92b3NzL+inhOWImeS5i+agkS9wYWdlcy9jb250ZW50cy9jb250ZW50bGlzdC52dWU/ZDA5OCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZT84ZGYxIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSw0Ryw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxvQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUNhOzs7QUFHdkU7QUFDcU07QUFDck0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFB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bnRzL2NvbnRlbnRsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY29udGVudHMvY29udGVudGxpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNTBiN2NhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250ZW50bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbnRlbnRzL2NvbnRlbnRsaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNTBiN2NhJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmNvbnRlbnRzTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgdmFyIG0wID0gX3ZtLnJlcGxhY2VTcGVjaWFsQ2hhcihpdGVtLnRpdGxlKVxuICAgIHZhciBtMSA9IF92bS5zdWJUZXh0KGl0ZW0udGV4dCwgODApXG4gICAgdmFyIG0yID0gX3ZtLmZvcm1hdE51bWJlcihpdGVtLnZpZXdzKVxuICAgIHZhciBtMyA9IF92bS5mb3JtYXREYXRlKGl0ZW0uY3JlYXRlZClcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgbTA6IG0wLFxuICAgICAgbTE6IG0xLFxuICAgICAgbTI6IG0yLFxuICAgICAgbTM6IG0zXG4gICAgfVxuICB9KVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDA6IGwwXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVzZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwiW3toZWlnaHQ6Q3VzdG9tQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlXCIgOnN0eWxlPVwieydoZWlnaHQnOiBDdXN0b21CYXIgKyAncHgnLCdwYWRkaW5nLXRvcCc6U3RhdHVzQmFyICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiIEB0YXA9XCJiYWNrXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1iYWNrXCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgdGV4dC1ib2xkXCIgOnN0eWxlPVwiW3t0b3A6U3RhdHVzQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdFx0XHR7e3RpdGxlfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSAgI2lmZGVmIEg1IHx8IEFQUC1QTFVTIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCIgQHRhcD1cInRvU2VhcmNoXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1zZWFyY2hcIj48L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gICNlbmRpZiAtLT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgOnN0eWxlPVwiW3twYWRkaW5nOk5hdkJhciArICdweCAxMHB4IDBweCAxMHB4J31dXCI+PC92aWV3PlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC14IGNsYXNzPVwiYmctd2hpdGUgbmF2IG1ldGFMaXN0XCIgc2Nyb2xsLXdpdGgtYW5pbWF0aW9uIDpzY3JvbGwtbGVmdD1cInNjcm9sbExlZnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwdXB4O1wiIHYtaWY9XCJ0eXBlPT0nYWxsJ1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiA6Y2xhc3M9XCJpdGVtLm1pZD09VGFiQ3VyPyd0ZXh0LWJsdWUgY3VyJzonJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG1ldGFMaXN0XCIgOmtleT1cImluZGV4XCIgQHRhcD1cInRhYlNlbGVjdFwiIDpkYXRhLWlkPVwiaXRlbS5taWRcIiB2LWlmPVwiaXRlbS5wYXJlbnQ9PTBcIj5cclxuXHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIj5cclxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteCBjbGFzcz1cImJnLXdoaXRlIG5hdiBtZXRhTGlzdFwiIHNjcm9sbC13aXRoLWFuaW1hdGlvbiA6c2Nyb2xsLWxlZnQ9XCJzY3JvbGxMZWZ0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHVweDtcIiB2LWlmPVwidHlwZT09J3RvcCdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgOmNsYXNzPVwiaXRlbS5vcmRlcj09b3JkZXJDdXI/J3RleHQtYmx1ZSBjdXInOicnXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdG9wTGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJ0b3BTZWxlY3RcIiA6ZGF0YS1vcmRlcj1cIml0ZW0ub3JkZXJcIj5cclxuXHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb250ZW50c0xpc3RcIiA6a2V5PVwiaW5kZXhcIiAgQHRhcD1cInRvSW5mbyhpdGVtKVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbSBzaGFkb3dcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWlmPVwiaXRlbS5pbWFnZXMubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1hdXRob3IgY29udGVudC1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXV0aG9ySW5mby5hdmF0YXJcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50LWF1dGhvci1uYW1lXCI+e3tpdGVtLmF1dGhvckluZm8ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1jYXRlZ29yeVwiIHYtaWY9XCJpdGVtLmNhdGVnb3J5Lmxlbmd0aD4wXCI+e3tpdGVtLmNhdGVnb3J5WzBdLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWN1dFwiPnt7cmVwbGFjZVNwZWNpYWxDaGFyKGl0ZW0udGl0bGUpfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgYXJ0aWNsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQgPGltYWdlIHYtaWY9XCJpdGVtLmltYWdlcy5sZW5ndGggPiAwXCIgOnNyYz1cIml0ZW0uaW1hZ2VzWzBdXCJcclxuXHRcdFx0XHRcdFx0ICBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXNjXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWNvbnRlbnRcIj4ge3tzdWJUZXh0KGl0ZW0udGV4dCw4MCl9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQtYXV0aG9yXCIgdi1pZj1cIml0ZW0uaW1hZ2VzLmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXV0aG9ySW5mby5hdmF0YXJcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnQtYXV0aG9yLW5hbWVcIj57e2l0ZW0uYXV0aG9ySW5mby5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFydGljbGUtY2F0ZWdvcnlcIiB2LWlmPVwiaXRlbS5jYXRlZ29yeS5sZW5ndGg+MFwiPnt7aXRlbS5jYXRlZ29yeVswXS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFydGljbGUtY29udGVudC1idG5cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgZGF0YS1hdXRob3JcIj48dGV4dCBjbGFzcz1cImN1SWNvbi1hdHRlbnRpb25maWxsXCI+PC90ZXh0Pnt7Zm9ybWF0TnVtYmVyKGl0ZW0udmlld3MpfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGRhdGEtYXV0aG9yXCI+PHRleHQgY2xhc3M9XCJjdUljb24tYXBwcmVjaWF0ZWZpbGxcIj48L3RleHQ+e3tpdGVtLmxpa2VzfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGRhdGEtYXV0aG9yXCI+PHRleHQgY2xhc3M9XCJjdUljb24tbWVzc2FnZWZpbGxcIj48L3RleHQ+e3tpdGVtLmNvbW1lbnRzTnVtfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgZGF0YS10aW1lXCI+e3tmb3JtYXREYXRlKGl0ZW0uY3JlYXRlZCl9fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkLW1vcmVcIiBAdGFwPVwibG9hZE1vcmVcIiB2LWlmPVwiY29udGVudHNMaXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0PHRleHQ+e3ttb3JlVGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJjb250ZW50c0xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx05pqC5pe25rKh5pyJ5pWw5o2uXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS3liqDovb3pga7nvaktLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZ1wiIHYtaWY9XCJpc0xvYWRpbmc9PTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nLW1haW5cIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2xvYWRpbmcuZ2lmXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLeWKoOi9vemBrue9qee7k+adny0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgbG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vanNfc2RrL21wLXN0b3JhZ2UvbXAtc3RvcmFnZS9pbmRleC5qcydcclxuXHR2YXIgQVBJID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXBpJylcclxuXHR2YXIgTmV0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbmV0JylcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFN0YXR1c0JhcjogdGhpcy5TdGF0dXNCYXIsXHJcblx0XHRcdFx0Q3VzdG9tQmFyOiB0aGlzLkN1c3RvbUJhcixcclxuXHRcdFx0XHROYXZCYXI6dGhpcy5TdGF0dXNCYXIgKyAgdGhpcy5DdXN0b21CYXIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGl0bGU6XCJcIixcclxuXHRcdFx0XHR0eXBlOlwiXCIsXHJcblx0XHRcdFx0aWQ6MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb250ZW50c0xpc3Q6W10sXHJcblx0XHRcdFx0cGFnZToxLFxyXG5cdFx0XHRcdG1vcmVUZXh0Olwi5Yqg6L295pu05aSaXCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aXNMb2FkOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bWV0YUxpc3Q6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtaWQ6MCxcclxuXHRcdFx0XHRcdFx0bmFtZTpcIuWFqOmDqFwiLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnQ6MFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0dG9wTGlzdDpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9yZGVyOlwiY29tbWVudHNOdW1cIixcclxuXHRcdFx0XHRcdFx0bmFtZTpcIuivhOiuuuamnFwiLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnQ6MFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b3JkZXI6XCJ2aWV3c1wiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi54K55Ye75qacXCIsXHJcblx0XHRcdFx0XHRcdHBhcmVudDowXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvcmRlcjpcImxpa2VzXCIsXHJcblx0XHRcdFx0XHRcdG5hbWU6XCLllpzmrKLmppxcIixcclxuXHRcdFx0XHRcdFx0cGFyZW50OjBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRvcmRlckN1cjpcImNvbW1lbnRzTnVtXCIsXHJcblx0XHRcdFx0VGFiQ3VyOiAwLFxyXG5cdFx0XHRcdHNjcm9sbExlZnQ6IDAsXHJcblx0XHRcdFx0aXNMb2FkaW5nOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uUmVhY2hCb3R0b20oKSB7XHJcblx0XHQgICAgLy/op6blupXlkI7miafooYznmoTmlrnms5XvvIzmr5TlpoLml6DpmZDliqDovb3kuYvnsbvnmoRcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRpZih0aGF0LmlzTG9hZD09MCl7XHJcblx0XHRcdFx0dGhhdC5sb2FkTW9yZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHQvL+WPr+WPluWAvO+8miBcImRhcmtcIu+8mua3seiJsuWJjeaZr+iJsuagt+W8j++8iOWNs+eKtuaAgeagj+WJjeaZr+aWh+Wtl+S4uum7keiJsu+8ie+8jOatpOaXtmJhY2tncm91bmTlu7rorq7orr7nva7kuLrmtYXpopzoibLvvJsgXCJsaWdodFwi77ya5rWF6Imy5YmN5pmv6Imy5qC35byP77yI5Y2z54q25oCB5qCP5YmN5pmv5paH5a2X5Li655m96Imy77yJ77yM5q2k5pe2YmFja2dyb3VuZOW7uuiuvuiuvue9ruS4uua3seminOiJsu+8m1xyXG5cdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRTdGF0dXNCYXJTdHlsZShcImRhcmtcIilcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChyZXMpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMgfHwgTVBcclxuXHRcdFx0dGhhdC5OYXZCYXIgPSB0aGlzLkN1c3RvbUJhcjtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdHRoYXQudGl0bGUgPSByZXMudGl0bGU7XHJcblx0XHRcdHRoYXQudHlwZSA9ICByZXMudHlwZTtcclxuXHRcdFx0Ly91c2Vy5qC55o2u55So5oi35p+l6K+iIG1ldGHmoLnmja7liIbnsbvlkozmoIfnrb7mn6Xor6LvvIxhbGzmmL7npLrliIbnsbvmn6Xor6Llhajpg6jvvIxzZWFyY2jmoLnmja7mkJzntKLlhbPplK7or43mn6Xor6JcclxuXHRcdFx0dGhhdC5pZCA9ICByZXMuaWQ7XHJcblx0XHRcdGlmKHJlcy50eXBlIT1cIlwiKXtcclxuXHRcdFx0XHRpZih0aGF0LnR5cGU9PVwibWV0YVwiKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC5nZXRNZXRhQ29udGVudHMoZmFsc2UsdGhhdC5pZCk7XHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC50eXBlPT1cInRvcFwiKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KGZhbHNlLHRoYXQudHlwZSx0aGF0LmlkKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KGZhbHNlLHRoYXQudHlwZSx0aGF0LmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocmVzLnR5cGU9PVwiYWxsXCIpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuZ2V0TWV0YUxpc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0YWxsQ2FjaGUoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG1ldGEgPSB0aGF0LlRhYkN1cjtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiU2VsZWN0KGUpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5UYWJDdXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuXHRcdFx0XHR0aGF0LmlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblx0XHRcdFx0dGhhdC5wYWdlID0gMTtcclxuXHRcdFx0XHR0aGF0LnNjcm9sbExlZnQgPSAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQgLSAxKSAqIDYwO1xyXG5cdFx0XHRcdGlmKHRoYXQuVGFiQ3VyPT0wKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KGZhbHNlLFwiYWxsXCIsMCk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldE1ldGFDb250ZW50cyhmYWxzZSx0aGF0LlRhYkN1cik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3BTZWxlY3QoZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQub3JkZXJDdXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcmRlcjtcclxuXHRcdFx0XHR0aGF0LnBhZ2UgPSAxO1xyXG5cdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KGZhbHNlLFwiYWxsXCIsMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWRNb3JlKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLmraPlnKjliqDovb3kuK0uLi5cIjtcclxuXHRcdFx0XHR0aGF0LmlzTG9hZD0xO1xyXG5cdFx0XHRcdGlmKHRoYXQudHlwZT09XCJtZXRhXCIpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGF0LmdldE1ldGFDb250ZW50cyh0cnVlLHRoYXQuaWQpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQudHlwZT09XCJhbGxcIil7XHJcblx0XHRcdFx0XHRpZih0aGF0LmlkPT0wKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QodHJ1ZSx0aGF0LnR5cGUsdGhhdC5pZCk7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC5nZXRNZXRhQ29udGVudHModHJ1ZSx0aGF0LmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnR5cGU9PVwidG9wXCIpe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QodHJ1ZSx0aGF0LnR5cGUsdGhhdC5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KHRydWUsdGhhdC50eXBlLHRoYXQuaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9JbmZvKGRhdGEpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9pbmZvP2NpZD0nK2RhdGEuY2lkK1wiJnRpdGxlPVwiK2RhdGEudGl0bGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TWV0YUxpc3QoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcInR5cGVcIjpcImNhdGVnb3J5XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0TmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBBUEkuZ2V0TWV0YXNMaXN0KCksXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hQYXJhbXNcIjpKU09OLnN0cmluZ2lmeShBUEkucmVtb3ZlT2JqZWN0RW1wdHlLZXkoZGF0YSkpLFxyXG5cdFx0XHRcdFx0XHRcImxpbWl0XCI6MTUsXHJcblx0XHRcdFx0XHRcdFwicGFnZVwiOjEsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOntcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBsaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZihsaXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubWV0YUxpc3QgPSB0aGF0Lm1ldGFMaXN0LmNvbmNhdChsaXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIue9kee7nOW8gOWwj+W3ruS6huWTplwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb250ZW50c0xpc3QoaXNQYWdlLHR5cGUsaWQpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgaW5mbyA9IHtcclxuXHRcdFx0XHRcdFwidHlwZVwiOlwicG9zdFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBvcmRlciA9IFwiY3JlYXRlZFwiO1xyXG5cdFx0XHRcdGlmKHR5cGU9PVwidXNlclwiKXtcclxuXHRcdFx0XHRcdGluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOlwicG9zdFwiLFxyXG5cdFx0XHRcdFx0XHRcImF1dGhvcklkXCI6dGhhdC5pZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGF0LnR5cGU9PVwidG9wXCIpe1xyXG5cdFx0XHRcdFx0b3JkZXIgPSB0aGF0Lm9yZGVyQ3VyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBwYWdlID0gdGhhdC5wYWdlO1xyXG5cdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRwYWdlKys7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmNvbnRlbnRzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwic2VhcmNoUGFyYW1zXCI6SlNPTi5zdHJpbmdpZnkoQVBJLnJlbW92ZU9iamVjdEVtcHR5S2V5KGluZm8pKSxcclxuXHRcdFx0XHRcdFwibGltaXRcIjo1LFxyXG5cdFx0XHRcdFx0XCJwYWdlXCI6cGFnZSxcclxuXHRcdFx0XHRcdFwib3JkZXJcIjpvcmRlclxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0TmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBBUEkuZ2V0Q29udGVudHNMaXN0KCksXHJcblx0XHRcdFx0XHRkYXRhOmRhdGEsXHJcblx0XHRcdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBsaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZihsaXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRzTGlzdCA9IHRoYXQuY29udGVudHNMaXN0LmNvbmNhdChsaXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRzTGlzdCA9IGxpc3Q7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuayoeacieabtOWkmuaWh+eroOS6hlwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnvZHnu5zlvIDlsI/lt67kuoblk6ZcIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TWV0YUNvbnRlbnRzKGlzUGFnZSxtZXRhKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcIm1pZFwiOm1ldGFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHBhZ2UgPSB0aGF0LnBhZ2U7XHJcblx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdHBhZ2UrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0TmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBBUEkuZ2V0TWV0YUNvbnRlbnRzKCksXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hQYXJhbXNcIjpKU09OLnN0cmluZ2lmeShBUEkucmVtb3ZlT2JqZWN0RW1wdHlLZXkoZGF0YSkpLFxyXG5cdFx0XHRcdFx0XHRcImxpbWl0XCI6NSxcclxuXHRcdFx0XHRcdFx0XCJwYWdlXCI6cGFnZSxcclxuXHRcdFx0XHRcdFx0XCJvcmRlclwiOlwiY3JlYXRlZFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOntcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0aWYobGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnBhZ2UrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50c0xpc3QgPSB0aGF0LmNvbnRlbnRzTGlzdC5jb25jYXQobGlzdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50c0xpc3QgPSBsaXN0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb250ZW50c0xpc3RfJyttZXRhLEpTT04uc3RyaW5naWZ5KHRoYXQuY29udGVudHNMaXN0KSk7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5rKh5pyJ5pu05aSa5paH56ug5LqGXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnvZHnu5zlvIDlsI/lt67kuoblk6ZcIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHN1YlRleHQodGV4dCxudW0pe1xyXG5cdFx0XHRcdGlmKHRleHQubGVuZ3RoIDwgbnVsbCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCxudW0pK1wi4oCm4oCmXCJcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHJldHVybiB0ZXh0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0RGF0ZShkYXRldGltZSkge1xyXG5cdFx0XHRcdHZhciBkYXRldGltZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGV0aW1lICogMTAwMCkpO1xyXG5cdFx0XHRcdC8vIOiOt+WPluW5tOaciOaXpeaXtuWIhuenkuWAvCAgc2xpY2UoLTIp6L+H5ruk5o6J5aSn5LqOMTDml6XmnJ/liY3pnaLnmoQwXHJcblx0XHRcdFx0dmFyIHllYXIgPSBkYXRldGltZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0XHRcdFx0bW9udGggPSAoXCIwXCIgKyAoZGF0ZXRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0XHRkYXRlID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0XHRob3VyID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0bWludXRlID0gKFwiMFwiICsgZGF0ZXRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMik7XHJcblx0XHRcdFx0Ly9zZWNvbmQgPSAoXCIwXCIgKyBkYXRlLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpO1xyXG5cdFx0XHRcdC8vIOaLvOaOpVxyXG5cdFx0XHRcdHZhciByZXN1bHQgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF0ZSArIFwiIFwiICsgaG91ciArIFwiOlwiICsgbWludXRlO1xyXG5cdFx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdE51bWJlcihudW0pIHtcclxuXHRcdFx0ICAgIHJldHVybiBudW0gPj0gMWUzICYmIG51bSA8IDFlNCA/IChudW0gLyAxZTMpLnRvRml4ZWQoMSkgKyAnaycgOiBudW0gPj0gMWU0ID8gKG51bSAvIDFlNCkudG9GaXhlZCgxKSArICd3JyA6IG51bVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1NlYXJjaCgpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9zZWFyY2gnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcGxhY2VTcGVjaWFsQ2hhcih0ZXh0KSB7XHJcblx0XHRcdCAgdGV4dCA9IHRleHQucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcblx0XHRcdCAgdGV4dCA9IHRleHQucmVwbGFjZSgvJmx0Oy9nLCAnPCcpO1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZndDsvZywgJz4nKTtcclxuXHRcdFx0ICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mbmJzcDsvZywgJyAnKTtcclxuXHRcdFx0ICByZXR1cm4gdGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbkBpbXBvcnQgXCIuLi8uLi9zdGF0aWMvYmFzZS5jc3NcIjtcclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29udGVudGxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbnRlbnRsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MDgzNDA0NTQyMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJFOi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9