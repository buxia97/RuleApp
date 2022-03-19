(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/search"],{

/***/ 366:
/*!************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fsearch"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/search.vue */ 367));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 367:
/*!*****************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=d0744758& */ 368);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 370);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&lang=css& */ 372);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/contents/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 368:
/*!************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=template&id=d0744758& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=d0744758& */ 369);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 369:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=template&id=d0744758& ***!
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
  var l0 =
    _vm.type == 0
      ? _vm.__map(_vm.contentsList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var m0 = _vm.subText(item.text, 80)
          var m1 = _vm.formatNumber(item.views)
          var m2 = _vm.formatDate(item.created)
          return {
            $orig: $orig,
            m0: m0,
            m1: m1,
            m2: m2
          }
        })
      : null
  var l1 =
    _vm.type == 1
      ? _vm.__map(_vm.commentsList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var m3 =
            _vm.commentsList.length > 0 ? _vm.formatDate(item.created) : null
          return {
            $orig: $orig,
            m3: m3
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 370:
/*!******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 371);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 371:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var API = __webpack_require__(/*! ../../utils/api */ 19);var Net = __webpack_require__(/*! ../../utils/net */ 20);var _default = { data: function data() {return { StatusBar: this.StatusBar, CustomBar: this.CustomBar, NavBar: this.StatusBar + this.CustomBar, contentsList: [], commentsList: [], userList: [], searchText: "", type: 0, page: 1, moreText: "加载更多", isLoad: 0, isLoading: 0 };}, onShow: function onShow() {var that = this;that.getContentsList(false);}, onReachBottom: function onReachBottom() {//触底后执行的方法，比如无限加载之类的
    var that = this;if (that.isLoad == 0) {that.loadMore();}}, onLoad: function onLoad() {var that = this;that.NavBar = this.CustomBar;}, methods: { toType: function toType(i) {var that = this;that.type = i;that.page = 1;that.moreText = "加载更多";that.isLoad = 0;if (i == 0) {that.getContentsList(false);} else if (i == 1) {that.getCommentsList(false);} else {that.getUserList(false);}}, back: function back() {uni.navigateBack({ delta: 1 });}, loadMore: function loadMore() {var that = this;that.moreText = "正在加载中...";that.isLoad = 1;if (that.type == 0) {that.getContentsList(true);} else if (that.type == 1) {that.getCommentsList(true);} else {that.getUserList(true);}}, reload: function reload() {var that = this;if (that.type == 0) {that.getContentsList();} else if (that.type == 1) {that.getCommentsList();} else {that.getUserList();}}, searchTag: function searchTag() {var that = this;var searchText = that.searchText;that.page = 1;if (that.type == 0) {that.getContentsList();} else if (that.type == 1) {that.getCommentsList();} else {that.getUserList();}}, getContentsList: function getContentsList(isPage) {var that = this;var data = { "type": "post" };var page = that.page;if (isPage) {page++;}Net.request({ url: API.getContentsList(), data: { "searchParams": JSON.stringify(API.removeObjectEmptyKey(data)), "limit": 8, "page": page, "searchKey": that.searchText, "order": "created" }, header: { 'Content-Type': 'application/x-www-form-urlencoded' }, method: "get", dataType: 'json', success: function success(res) {that.isLoad = 0;that.moreText = "加载更多";if (res.data.code == 1) {var list = res.data.data;if (list.length > 0) {//that.contentsList = list;
              if (isPage) {that.page++;that.contentsList = that.contentsList.concat(list);} else {that.contentsList = list;}} else {
              that.moreText = "没有更多数据了";
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
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        } });

    },
    getCommentsList: function getCommentsList(isPage) {
      var that = this;
      var data = {
        "type": "comment" };

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
          "searchKey": that.searchText,
          "order": "created" },

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
              that.moreText = "没有更多数据了";
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

    },
    getUserList: function getUserList(isPage) {
      var that = this;
      var page = that.page;
      if (isPage) {
        page++;
      }
      Net.request({
        url: API.getUserList(),
        data: {
          "searchParams": "",
          "limit": 10,
          "page": page,
          "searchKey": that.searchText,
          "order": "created" },

        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.isLoad = 0;
          if (res.data.code == 1) {
            var list = res.data.data;
            if (list.length > 0) {

              var userList = [];
              for (var i in list) {
                var arr = list[i];
                arr.style = "background-image:url(" + list[i].avatar + ");";
                userList.push(arr);
              }
              if (isPage) {
                that.page++;
                that.userList = that.userList.concat(userList);
              } else {
                that.userList = userList;
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
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        } });

    },
    toUserContents: function toUserContents(data) {
      var that = this;
      var name = data.name;
      var title = data.name + "的信息";
      if (data.screenName) {
        title = data.screenName + " 的信息";
        name = data.screenName;
      }
      var id = data.uid;
      var type = "user";
      uni.navigateTo({
        url: '/pages/contents/userinfo?title=' + title + "&name=" + name + "&uid=" + id + "&avatar=" + encodeURIComponent(data.avatar) });

    },
    commentsAdd: function commentsAdd(title, coid, reply) {
      var that = this;
      var cid = that.cid;
      uni.navigateTo({
        url: '/pages/contents/commentsadd?cid=' + cid + "&coid=" + coid + "&title=" + title + "&isreply=" + reply });

    },
    toPost: function toPost() {
      var that = this;

      uni.navigateTo({
        url: '../user/post' });

    },
    toEdit: function toEdit(cid) {
      var that = this;

      uni.navigateTo({
        url: '../user/post?type=edit' + '&cid=' + cid });

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
    toInfo: function toInfo(data) {
      var that = this;

      uni.navigateTo({
        url: '/pages/contents/info?cid=' + data.cid + "&title=" + data.title });

    },
    toInfoComment: function toInfoComment(cid, title) {
      var that = this;

      uni.navigateTo({
        url: '/pages/contents/info?cid=' + cid + "&title=" + title });

    },
    ToCopy: function ToCopy(text) {
      var that = this;
























    },
    formatNumber: function formatNumber(num) {
      return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 372:
/*!**************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&lang=css& */ 373);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 373:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[366,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZT8yNzZhIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZT9lN2U0Iiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZT80ZWY5IiwidW5pLWFwcDovLy9wYWdlcy9jb250ZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZT8zZjk3Iiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZT83NjAzIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxrRyw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxlQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSDtBQUNuSDtBQUMwRDtBQUNMO0FBQ2E7OztBQUdsRTtBQUNxTTtBQUNyTSxnQkFBZ0IsNE1BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FB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QSxFOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQW9tQyxDQUFnQiw4akNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F4bkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9jb250ZW50cy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jb250ZW50cy9zZWFyY2gudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMDc0NDc1OCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb250ZW50cy9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQwNzQ0NzU4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPVxuICAgIF92bS50eXBlID09IDBcbiAgICAgID8gX3ZtLl9fbWFwKF92bS5jb250ZW50c0xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgICAgICAgIHZhciBtMCA9IF92bS5zdWJUZXh0KGl0ZW0udGV4dCwgODApXG4gICAgICAgICAgdmFyIG0xID0gX3ZtLmZvcm1hdE51bWJlcihpdGVtLnZpZXdzKVxuICAgICAgICAgIHZhciBtMiA9IF92bS5mb3JtYXREYXRlKGl0ZW0uY3JlYXRlZClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgICAgICAgbTA6IG0wLFxuICAgICAgICAgICAgbTE6IG0xLFxuICAgICAgICAgICAgbTI6IG0yXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgOiBudWxsXG4gIHZhciBsMSA9XG4gICAgX3ZtLnR5cGUgPT0gMVxuICAgICAgPyBfdm0uX19tYXAoX3ZtLmNvbW1lbnRzTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgICAgICAgdmFyIG0zID1cbiAgICAgICAgICAgIF92bS5jb21tZW50c0xpc3QubGVuZ3RoID4gMCA/IF92bS5mb3JtYXREYXRlKGl0ZW0uY3JlYXRlZCkgOiBudWxsXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICAgIG0zOiBtM1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIDogbnVsbFxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwwOiBsMCxcbiAgICAgICAgbDE6IGwxXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidXNlcnBvc3RcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwiW3toZWlnaHQ6Q3VzdG9tQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlXCIgOnN0eWxlPVwieydoZWlnaHQnOiBDdXN0b21CYXIgKyAncHgnLCdwYWRkaW5nLXRvcCc6U3RhdHVzQmFyICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiIEB0YXA9XCJiYWNrXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1iYWNrXCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgdGV4dC1ib2xkXCIgOnN0eWxlPVwiW3t0b3A6U3RhdHVzQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdFx0XHTlhajnq5nmkJzntKJcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IDpzdHlsZT1cIlt7cGFkZGluZzpOYXZCYXIgKyAncHggMTBweCAwcHggMTBweCd9XVwiPjwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWxsLWJveFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSBzZWFyY2hcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC1mb3JtIHJvdW5kXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1zZWFyY2hcIj48L3RleHQ+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIui+k+WFpeaQnOe0ouWFs+mUruWtl1wiIHYtbW9kZWw9XCJzZWFyY2hUZXh0XCIgIEBpbnB1dD1cInNlYXJjaFRhZ1wiPjwvaW5wdXQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoLXR5cGUgZ3JpZCBjb2wtM1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoLXR5cGUtYm94XCIgQHRhcD1cInRvVHlwZSgwKVwiIDpjbGFzcz1cInR5cGU9PTA/J2FjdGl2ZSc6JydcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuaWh+eroDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2gtdHlwZS1ib3hcIiBAdGFwPVwidG9UeXBlKDEpXCIgOmNsYXNzPVwidHlwZT09MT8nYWN0aXZlJzonJ1wiPlxyXG5cdFx0XHRcdFx0PHRleHQ+6K+E6K66PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC10eXBlLWJveFwiIEB0YXA9XCJ0b1R5cGUoMilcIiA6Y2xhc3M9XCJ0eXBlPT0yPydhY3RpdmUnOicnXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7nlKjmiLc8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIiB2LWlmPVwidHlwZT09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb250ZW50c0xpc3RcIiA6a2V5PVwiaW5kZXhcIiAgQHRhcD1cInRvSW5mbyhpdGVtKVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtIHNoYWRvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWN1dFwiPnt7aXRlbS50aXRsZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5pbWFnZXMubGVuZ3RoPjBcIiA6c3JjPVwiaXRlbS5pbWFnZXNbMF1cIlxyXG5cdFx0XHRcdFx0XHRcdCBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXNjXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY29udGVudFwiPiB7e3N1YlRleHQoaXRlbS50ZXh0LDgwKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtdGFnIGRhdGEtYXV0aG9yXCI+PHRleHQgY2xhc3M9XCJjdUljb24tYXR0ZW50aW9uZmlsbFwiPjwvdGV4dD57e2Zvcm1hdE51bWJlcihpdGVtLnZpZXdzKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLWF1dGhvclwiPjx0ZXh0IGNsYXNzPVwiY3VJY29uLWFwcHJlY2lhdGVmaWxsXCI+PC90ZXh0Pnt7aXRlbS5saWtlc319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLWF1dGhvclwiPjx0ZXh0IGNsYXNzPVwiY3VJY29uLW1lc3NhZ2VmaWxsXCI+PC90ZXh0Pnt7aXRlbS5jb21tZW50c051bX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLXRpbWVcIj57e2Zvcm1hdERhdGUoaXRlbS5jcmVhdGVkKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWQtbW9yZVwiIEB0YXA9XCJsb2FkTW9yZVwiIHYtaWY9XCJjb250ZW50c0xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0Pnt7bW9yZVRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuby1kYXRhXCIgdi1pZj1cImNvbnRlbnRzTGlzdC5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHRcdOaaguaXtuayoeacieaVsOaNrlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS3or4TorrotLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUtYXZhdGFyXCIgdi1pZj1cInR5cGU9PTFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWRhdGFcIiB2LWlmPVwiY29tbWVudHNMaXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdFx05pqC5pe25rKh5pyJ6K+E6K66XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBkeW5hbWljIG5vLWNhcmRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwdXB4O1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY29tbWVudHNMaXN0XCIgOmtleT1cImluZGV4XCIgdi1pZj1cImNvbW1lbnRzTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudS1hdmF0YXIgY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29weS1jb21tZW50XCIgQHRhcD1cIlRvQ29weShpdGVtLnRleHQpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHTlpI3liLZcclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWF2YXRhciByb3VuZFwiIDpzdHlsZT1cIml0ZW0uc3R5bGVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXlcIj57e2l0ZW0uYXV0aG9yfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50IHRleHQtZGZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0udGV4dH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1ncmV5IGxpZ2h0IHBhZGRpbmctc20gcmFkaXVzIG1hcmdpbi10b3Atc20gIHRleHQtc21cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIiBAdGFwPVwidG9JbmZvQ29tbWVudChpdGVtLmNpZCxpdGVtLmNvbnRlblRpdGxlKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+e3tpdGVtLmNvbnRlblRpdGxlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYXJnaW4tdG9wLXNtIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyYXkgdGV4dC1kZlwiPnt7Zm9ybWF0RGF0ZShpdGVtLmNyZWF0ZWQpfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1tZXNzYWdlZmlsbCB0ZXh0LWdyYXkgbWFyZ2luLWxlZnQtc21cIiBAdGFwPVwiY29tbWVudHNBZGQoaXRlbS5hdXRob3IrJ++8micraXRlbS50ZXh0LGl0ZW0uY29pZCwxKVwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkLW1vcmVcIiBAdGFwPVwibG9hZE1vcmVcIiB2LWlmPVwiY29tbWVudHNMaXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD57e21vcmVUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS3or4Torrrnu5PmnZ8tLT5cclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtbGlzdCBtZW51LWF2YXRhciB1c2VyTGlzdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogNHVweDtcIiB2LWlmPVwidHlwZT09MlwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHVzZXJMaXN0XCIgOmtleT1cImluZGV4XCIgQHRhcD1cInRvVXNlckNvbnRlbnRzKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWF2YXRhciByb3VuZCBsZ1wiIDpzdHlsZT1cIml0ZW0uc3R5bGVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXlcIiB2LWlmPVwiaXRlbS5zY3JlZW5OYW1lXCI+e3tpdGVtLnNjcmVlbk5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJpdGVtLmdyb3VwS2V5PT0nY29udHJpYnV0b3InfHxpdGVtLmdyb3VwS2V5PT0nYWRtaW5pc3RyYXRvcidcIiBjbGFzcz1cImN1SWNvbi1saWdodGZpbGxcIj48L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyZXlcIiB2LWVsc2U+e3tpdGVtLm5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJpdGVtLmdyb3VwS2V5PT0nY29udHJpYnV0b3InfHxpdGVtLmdyb3VwS2V5PT0nYWRtaW5pc3RyYXRvcidcIiBjbGFzcz1cImN1SWNvbi1saWdodGZpbGxcIj48L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWdyYXkgdGV4dC1zbSBmbGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWN1dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpdGVtLm1haWx9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz4gPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWJsdWUgdGV4dC14c1wiPuivpuaDhTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZC1tb3JlXCIgQHRhcD1cImxvYWRNb3JlXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD57e21vcmVUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0t55So5oi357uT5p2fLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDwhLS3liqDovb3pga7nvaktLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZ1wiIHYtaWY9XCJpc0xvYWRpbmc9PTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nLW1haW5cIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2xvYWRpbmcuZ2lmXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLeWKoOi9vemBrue9qee7k+adny0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgbG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vanNfc2RrL21wLXN0b3JhZ2UvbXAtc3RvcmFnZS9pbmRleC5qcydcclxuXHR2YXIgQVBJID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXBpJylcclxuXHR2YXIgTmV0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbmV0JylcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFN0YXR1c0JhcjogdGhpcy5TdGF0dXNCYXIsXHJcblx0XHRcdFx0Q3VzdG9tQmFyOiB0aGlzLkN1c3RvbUJhcixcclxuXHRcdFx0XHROYXZCYXI6dGhpcy5TdGF0dXNCYXIgKyAgdGhpcy5DdXN0b21CYXIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udGVudHNMaXN0OltdLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbW1lbnRzTGlzdDpbXSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1c2VyTGlzdDpbXSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWFyY2hUZXh0OlwiXCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dHlwZTowLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHBhZ2U6MSxcclxuXHRcdFx0XHRtb3JlVGV4dDpcIuWKoOi9veabtOWkmlwiLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlzTG9hZDowLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlzTG9hZGluZzowLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCl7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdC8v5Y+v5Y+W5YC877yaIFwiZGFya1wi77ya5rex6Imy5YmN5pmv6Imy5qC35byP77yI5Y2z54q25oCB5qCP5YmN5pmv5paH5a2X5Li66buR6Imy77yJ77yM5q2k5pe2YmFja2dyb3VuZOW7uuiuruiuvue9ruS4uua1heminOiJsu+8myBcImxpZ2h0XCLvvJrmtYXoibLliY3mma/oibLmoLflvI/vvIjljbPnirbmgIHmoI/liY3mma/mloflrZfkuLrnmb3oibLvvInvvIzmraTml7ZiYWNrZ3JvdW5k5bu66K6+6K6+572u5Li65rex6aKc6Imy77ybXHJcblx0XHRcdHBsdXMubmF2aWdhdG9yLnNldFN0YXR1c0JhclN0eWxlKFwiZGFya1wiKVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QoZmFsc2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbSgpIHtcclxuXHRcdCAgICAvL+inpuW6leWQjuaJp+ihjOeahOaWueazle+8jOavlOWmguaXoOmZkOWKoOi9veS5i+exu+eahFxyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdGlmKHRoYXQuaXNMb2FkPT0wKXtcclxuXHRcdFx0XHR0aGF0LmxvYWRNb3JlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVUyB8fCBNUFxyXG5cdFx0XHR0aGF0Lk5hdkJhciA9IHRoaXMuQ3VzdG9tQmFyO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHR0b1R5cGUoaSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQudHlwZT1pO1xyXG5cdFx0XHRcdHRoYXQucGFnZT0xO1xyXG5cdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdGlmKGk9PTApe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QoZmFsc2UpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKGk9PTEpe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoZmFsc2UpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXJMaXN0KGZhbHNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjaygpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bG9hZE1vcmUoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuato+WcqOWKoOi9veS4rS4uLlwiO1xyXG5cdFx0XHRcdHRoYXQuaXNMb2FkPTE7XHJcblx0XHRcdFx0aWYodGhhdC50eXBlPT0wKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KHRydWUpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQudHlwZT09MSl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdCh0cnVlKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRVc2VyTGlzdCh0cnVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVsb2FkKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmKHRoYXQudHlwZT09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdCgpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQudHlwZT09MSl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdCgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXJMaXN0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlYXJjaFRhZygpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgc2VhcmNoVGV4dCA9IHRoYXQuc2VhcmNoVGV4dDtcclxuXHRcdFx0XHR0aGF0LnBhZ2U9MTtcclxuXHRcdFx0XHRpZih0aGF0LnR5cGU9PTApe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QoKTtcclxuXHRcdFx0XHR9ZWxzZSBpZih0aGF0LnR5cGU9PTEpe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb21tZW50c0xpc3QoKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRVc2VyTGlzdCgpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Q29udGVudHNMaXN0KGlzUGFnZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6XCJwb3N0XCIsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBwYWdlID0gdGhhdC5wYWdlO1xyXG5cdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRwYWdlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJLmdldENvbnRlbnRzTGlzdCgpLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFwic2VhcmNoUGFyYW1zXCI6SlNPTi5zdHJpbmdpZnkoQVBJLnJlbW92ZU9iamVjdEVtcHR5S2V5KGRhdGEpKSxcclxuXHRcdFx0XHRcdFx0XCJsaW1pdFwiOjgsXHJcblx0XHRcdFx0XHRcdFwicGFnZVwiOnBhZ2UsXHJcblx0XHRcdFx0XHRcdFwic2VhcmNoS2V5XCI6dGhhdC5zZWFyY2hUZXh0LFxyXG5cdFx0XHRcdFx0XHRcIm9yZGVyXCI6XCJjcmVhdGVkXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0aWYobGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHQvL3RoYXQuY29udGVudHNMaXN0ID0gbGlzdDtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRzTGlzdCA9IHRoYXQuY29udGVudHNMaXN0LmNvbmNhdChsaXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnRzTGlzdCA9IGxpc3Q7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuayoeacieabtOWkmuaVsOaNruS6hlwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb21tZW50c0xpc3QoaXNQYWdlKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcInR5cGVcIjpcImNvbW1lbnRcIixcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHBhZ2UgPSB0aGF0LnBhZ2U7XHJcblx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdHBhZ2UrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0TmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBBUEkuZ2V0Q29tbWVudHNMaXN0KCksXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hQYXJhbXNcIjpKU09OLnN0cmluZ2lmeShBUEkucmVtb3ZlT2JqZWN0RW1wdHlLZXkoZGF0YSkpLFxyXG5cdFx0XHRcdFx0XHRcImxpbWl0XCI6NSxcclxuXHRcdFx0XHRcdFx0XCJwYWdlXCI6cGFnZSxcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hLZXlcIjp0aGF0LnNlYXJjaFRleHQsXHJcblx0XHRcdFx0XHRcdFwib3JkZXJcIjpcImNyZWF0ZWRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnRzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIGxpc3Qpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYXJyID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJyLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIitsaXN0W2ldLmF2YXRhcitcIik7XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudHNMaXN0LnB1c2goYXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmNvbW1lbnRzTGlzdCA9IHRoYXQuY29tbWVudHNMaXN0LmNvbmNhdChjb21tZW50c0xpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29tbWVudHNMaXN0ID0gY29tbWVudHNMaXN0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuayoeacieabtOWkmuaVsOaNruS6hlwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkaW5nPTE7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCd0aW1lcicpXHJcblx0XHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRVc2VyTGlzdChpc1BhZ2Upe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGFnZSA9IHRoYXQucGFnZTtcclxuXHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0cGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHROZXQucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSS5nZXRVc2VyTGlzdCgpLFxyXG5cdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFwic2VhcmNoUGFyYW1zXCI6XCJcIixcclxuXHRcdFx0XHRcdFx0XCJsaW1pdFwiOjEwLFxyXG5cdFx0XHRcdFx0XHRcInBhZ2VcIjpwYWdlLFxyXG5cdFx0XHRcdFx0XHRcInNlYXJjaEtleVwiOnRoYXQuc2VhcmNoVGV4dCxcclxuXHRcdFx0XHRcdFx0XCJvcmRlclwiOlwiY3JlYXRlZFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOntcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBsaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZihsaXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHVzZXJMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IodmFyIGkgaW4gbGlzdCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhcnIgPSBsaXN0W2ldO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcnIuc3R5bGUgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiK2xpc3RbaV0uYXZhdGFyK1wiKTtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyTGlzdC5wdXNoKGFycik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnBhZ2UrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC51c2VyTGlzdCA9IHRoYXQudXNlckxpc3QuY29uY2F0KHVzZXJMaXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnVzZXJMaXN0ID0gdXNlckxpc3Q7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvVXNlckNvbnRlbnRzKGRhdGEpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgbmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBkYXRhLm5hbWUrXCLnmoTkv6Hmga9cIjtcclxuXHRcdFx0XHRpZihkYXRhLnNjcmVlbk5hbWUpe1xyXG5cdFx0XHRcdFx0dGl0bGUgPSBkYXRhLnNjcmVlbk5hbWUrXCIg55qE5L+h5oGvXCI7XHJcblx0XHRcdFx0XHRuYW1lID0gZGF0YS5zY3JlZW5OYW1lXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBpZD0gZGF0YS51aWQ7XHJcblx0XHRcdFx0dmFyIHR5cGU9XCJ1c2VyXCI7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcvcGFnZXMvY29udGVudHMvdXNlcmluZm8/dGl0bGU9Jyt0aXRsZStcIiZuYW1lPVwiK25hbWUrXCImdWlkPVwiK2lkK1wiJmF2YXRhcj1cIitlbmNvZGVVUklDb21wb25lbnQoZGF0YS5hdmF0YXIpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbW1lbnRzQWRkKHRpdGxlLGNvaWQscmVwbHkpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgY2lkID0gdGhhdC5jaWQ7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcvcGFnZXMvY29udGVudHMvY29tbWVudHNhZGQ/Y2lkPScrY2lkK1wiJmNvaWQ9XCIrY29pZCtcIiZ0aXRsZT1cIit0aXRsZStcIiZpc3JlcGx5PVwiK3JlcGx5XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvUG9zdCgpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi91c2VyL3Bvc3QnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRWRpdChjaWQpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi91c2VyL3Bvc3Q/dHlwZT1lZGl0JysnJmNpZD0nK2NpZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJUZXh0KHRleHQsbnVtKXtcclxuXHRcdFx0XHRpZih0ZXh0Lmxlbmd0aCA8IG51bGwpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsbnVtKStcIuKApuKAplwiXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGV4dDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdERhdGUoZGF0ZXRpbWUpIHtcclxuXHRcdFx0XHR2YXIgZGF0ZXRpbWUgPSBuZXcgRGF0ZShwYXJzZUludChkYXRldGltZSAqIDEwMDApKTtcclxuXHRcdFx0XHQvLyDojrflj5blubTmnIjml6Xml7bliIbnp5LlgLwgIHNsaWNlKC0yKei/h+a7pOaOieWkp+S6jjEw5pel5pyf5YmN6Z2i55qEMFxyXG5cdFx0XHRcdHZhciB5ZWFyID0gZGF0ZXRpbWUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0XHRcdG1vbnRoID0gKFwiMFwiICsgKGRhdGV0aW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0ZGF0ZSA9IChcIjBcIiArIGRhdGV0aW1lLmdldERhdGUoKSkuc2xpY2UoLTIpLFxyXG5cdFx0XHRcdFx0aG91ciA9IChcIjBcIiArIGRhdGV0aW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSxcclxuXHRcdFx0XHRcdG1pbnV0ZSA9IChcIjBcIiArIGRhdGV0aW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xyXG5cdFx0XHRcdC8vc2Vjb25kID0gKFwiMFwiICsgZGF0ZS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTtcclxuXHRcdFx0XHQvLyDmi7zmjqVcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGUgKyBcIiBcIiArIGhvdXIgKyBcIjpcIiArIG1pbnV0ZTtcclxuXHRcdFx0XHQvLyDov5Tlm55cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0luZm8oZGF0YSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQgICAgdXJsOiAnL3BhZ2VzL2NvbnRlbnRzL2luZm8/Y2lkPScrZGF0YS5jaWQrXCImdGl0bGU9XCIrZGF0YS50aXRsZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0luZm9Db21tZW50KGNpZCx0aXRsZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQgICAgdXJsOiAnL3BhZ2VzL2NvbnRlbnRzL2luZm8/Y2lkPScrY2lkK1wiJnRpdGxlPVwiK3RpdGxlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFRvQ29weSh0ZXh0KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHRcdGRhdGE6IHRleHQsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7IC8v5aSN5Yi25oiQ5Yqf55qE5Zue6LCD5Ye95pWwXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3QoeyAvL+aPkOekulxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWkjeWItuaIkOWKn1wiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IFxyXG5cdFx0XHRcdGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuXHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHRleHQ7XHJcblx0XHRcdFx0dGV4dGFyZWEucmVhZE9ubHkgPSBcInJlYWRPbmx5XCI7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblx0XHRcdFx0dGV4dGFyZWEuc2VsZWN0KCk7XHJcblx0XHRcdFx0dGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGV4dC5sZW5ndGgpIDtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgLy/mj5DnpLpcclxuXHRcdFx0XHRcdHRpdGxlOiBcIuWkjeWItuaIkOWKn1wiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpIFxyXG5cdFx0XHRcdHRleHRhcmVhLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0TnVtYmVyKG51bSkge1xyXG5cdFx0XHQgICAgcmV0dXJuIG51bSA+PSAxZTMgJiYgbnVtIDwgMWU0ID8gKG51bSAvIDFlMykudG9GaXhlZCgxKSArICdrJyA6IG51bSA+PSAxZTQgPyAobnVtIC8gMWU0KS50b0ZpeGVkKDEpICsgJ3cnIDogbnVtXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuQGltcG9ydCBcIi4uLy4uL3N0YXRpYy9iYXNlLmNzc1wiO1xyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDc1MzU1ODc5OTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRTovSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==