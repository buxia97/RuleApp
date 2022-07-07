(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/search"],{

/***/ 206:
/*!************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fsearch"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/search.vue */ 207));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 207:
/*!*****************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=d0744758& */ 208);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 210);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&lang=css& */ 212);
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

/***/ 208:
/*!************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=template&id=d0744758& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=d0744758& */ 209);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 209:
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
      : null
  var l1 =
    _vm.type == 1
      ? _vm.__map(_vm.commentsList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var m4 =
            _vm.commentsList.length > 0 ? _vm.formatDate(item.created) : null
          return {
            $orig: $orig,
            m4: m4
          }
        })
      : null
  var l2 =
    _vm.type == 2
      ? _vm.__map(_vm.userList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var m5 = _vm.subText(item.introduce, 100)
          return {
            $orig: $orig,
            m5: m5
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
        l2: l2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 210:
/*!******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 211);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 211:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































































































































var _index = __webpack_require__(/*! ../../js_sdk/mp-storage/mp-storage/index.js */ 18);function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var API = __webpack_require__(/*! ../../utils/api */ 19);
var Net = __webpack_require__(/*! ../../utils/net */ 20);var _default =
{
  data: function data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      NavBar: this.StatusBar + this.CustomBar,

      contentsList: [],

      commentsList: [],

      userList: [],

      searchText: "",

      type: 0,

      page: 1,
      moreText: "加载更多",

      isLoad: 0,

      isLoading: 0 };

  },
  onShow: function onShow() {
    var that = this;




    that.getContentsList(false);


  },
  onReachBottom: function onReachBottom() {
    //触底后执行的方法，比如无限加载之类的
    var that = this;
    if (that.isLoad == 0) {
      that.loadMore();
    }

  },
  onLoad: function onLoad() {
    var that = this;

    that.NavBar = this.CustomBar;


  },
  methods: _defineProperty({
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
        that.getUserList(false);
      }
    },
    back: function back() {
      uni.navigateBack({
        delta: 1 });

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
        that.getUserList(true);
      }

    },
    reload: function reload() {
      var that = this;
      if (that.type == 0) {
        that.getContentsList();
      } else if (that.type == 1) {
        that.getCommentsList();
      } else {
        that.getUserList();
      }

    },
    searchTag: function searchTag() {
      var that = this;
      var searchText = that.searchText;
      that.page = 1;
      if (that.type == 0) {
        that.getContentsList();
      } else if (that.type == 1) {
        that.getCommentsList();
      } else {
        that.getUserList();
      }

    },
    getContentsList: function getContentsList(isPage) {
      var that = this;
      var data = {
        "type": "post" };

      var page = that.page;
      if (isPage) {
        page++;
      }
      Net.request({
        url: API.getContentsList(),
        data: {
          "searchParams": JSON.stringify(API.removeObjectEmptyKey(data)),
          "limit": 8,
          "page": page,
          "searchKey": that.searchText,
          "order": "created" },

        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        method: "get",
        dataType: 'json',
        success: function success(res) {
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
    },
    replaceSpecialChar: function replaceSpecialChar(text) {
      text = text.replace(/&quot;/g, '"');
      text = text.replace(/&amp;/g, '&');
      text = text.replace(/&lt;/g, '<');
      text = text.replace(/&gt;/g, '>');
      text = text.replace(/&nbsp;/g, ' ');
      return text;
    } }, "subText", function subText(
  text, num) {
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
  }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 212:
/*!**************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&lang=css& */ 213);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[206,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/YTE4MyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/Mjc2YSIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/ZTdlNCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/NGVmOSIsInVuaS1hcHA6Ly8vcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/M2Y5NyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL2NvbnRlbnRzL3NlYXJjaC52dWU/NzYwMyJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTs7O0FBR0E7QUFDQSxrRyw4RkFIQTtBQUNBQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkMsQ0FHQUMsVUFBVSxDQUFDQyxlQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSDtBQUNuSDtBQUMwRDtBQUNMO0FBQ2E7OztBQUdsRTtBQUNxTTtBQUNyTSxnQkFBZ0IsNE1BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBLEdBbFZBLENBbERBLEU7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBb21DLENBQWdCLDhqQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXhuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2NvbnRlbnRzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDA3NDQ3NTgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY29udGVudHMvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMDc0NDc1OCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID1cbiAgICBfdm0udHlwZSA9PSAwXG4gICAgICA/IF92bS5fX21hcChfdm0uY29udGVudHNMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICAgICAgICB2YXIgbTAgPSBfdm0ucmVwbGFjZVNwZWNpYWxDaGFyKGl0ZW0udGl0bGUpXG4gICAgICAgICAgdmFyIG0xID0gX3ZtLnN1YlRleHQoaXRlbS50ZXh0LCA4MClcbiAgICAgICAgICB2YXIgbTIgPSBfdm0uZm9ybWF0TnVtYmVyKGl0ZW0udmlld3MpXG4gICAgICAgICAgdmFyIG0zID0gX3ZtLmZvcm1hdERhdGUoaXRlbS5jcmVhdGVkKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkb3JpZzogJG9yaWcsXG4gICAgICAgICAgICBtMDogbTAsXG4gICAgICAgICAgICBtMTogbTEsXG4gICAgICAgICAgICBtMjogbTIsXG4gICAgICAgICAgICBtMzogbTNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA6IG51bGxcbiAgdmFyIGwxID1cbiAgICBfdm0udHlwZSA9PSAxXG4gICAgICA/IF92bS5fX21hcChfdm0uY29tbWVudHNMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICAgICAgICB2YXIgbTQgPVxuICAgICAgICAgICAgX3ZtLmNvbW1lbnRzTGlzdC5sZW5ndGggPiAwID8gX3ZtLmZvcm1hdERhdGUoaXRlbS5jcmVhdGVkKSA6IG51bGxcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgICAgICAgbTQ6IG00XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgOiBudWxsXG4gIHZhciBsMiA9XG4gICAgX3ZtLnR5cGUgPT0gMlxuICAgICAgPyBfdm0uX19tYXAoX3ZtLnVzZXJMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICAgICAgICB2YXIgbTUgPSBfdm0uc3ViVGV4dChpdGVtLmludHJvZHVjZSwgMTAwKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkb3JpZzogJG9yaWcsXG4gICAgICAgICAgICBtNTogbTVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA6IG51bGxcbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDAsXG4gICAgICAgIGwxOiBsMSxcbiAgICAgICAgbDI6IGwyXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidXNlcnBvc3RcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwiW3toZWlnaHQ6Q3VzdG9tQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlXCIgOnN0eWxlPVwieydoZWlnaHQnOiBDdXN0b21CYXIgKyAncHgnLCdwYWRkaW5nLXRvcCc6U3RhdHVzQmFyICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiIEB0YXA9XCJiYWNrXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1iYWNrXCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgdGV4dC1ib2xkXCIgOnN0eWxlPVwiW3t0b3A6U3RhdHVzQmFyICsgJ3B4J31dXCI+XHJcblx0XHRcdFx0XHTlhajnq5nmkJzntKJcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IDpzdHlsZT1cIlt7cGFkZGluZzpOYXZCYXIgKyAncHggMTBweCAwcHggMTBweCd9XVwiPjwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYWxsLWJveFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSBzZWFyY2hcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC1mb3JtIHJvdW5kXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi1zZWFyY2hcIj48L3RleHQ+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIui+k+WFpeaQnOe0ouWFs+mUruWtl1wiIHYtbW9kZWw9XCJzZWFyY2hUZXh0XCIgIEBpbnB1dD1cInNlYXJjaFRhZ1wiPjwvaW5wdXQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoLXR5cGUgZ3JpZCBjb2wtM1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoLXR5cGUtYm94XCIgQHRhcD1cInRvVHlwZSgwKVwiIDpjbGFzcz1cInR5cGU9PTA/J2FjdGl2ZSc6JydcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuaWh+eroDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2gtdHlwZS1ib3hcIiBAdGFwPVwidG9UeXBlKDEpXCIgOmNsYXNzPVwidHlwZT09MT8nYWN0aXZlJzonJ1wiPlxyXG5cdFx0XHRcdFx0PHRleHQ+6K+E6K66PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaC10eXBlLWJveFwiIEB0YXA9XCJ0b1R5cGUoMilcIiA6Y2xhc3M9XCJ0eXBlPT0yPydhY3RpdmUnOicnXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7nlKjmiLc8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIiB2LWlmPVwidHlwZT09MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtY2FyZCBhcnRpY2xlIG5vLWNhcmRcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb250ZW50c0xpc3RcIiA6a2V5PVwiaW5kZXhcIiAgQHRhcD1cInRvSW5mbyhpdGVtKVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtIHNoYWRvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cIml0ZW0uaW1hZ2VzLmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1hdXRob3IgY29udGVudC1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdXRob3JJbmZvLmF2YXRhclwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudC1hdXRob3ItbmFtZVwiPnt7aXRlbS5hdXRob3JJbmZvLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1jYXRlZ29yeVwiIHYtaWY9XCJpdGVtLmNhdGVnb3J5Lmxlbmd0aD4wXCI+e3tpdGVtLmNhdGVnb3J5WzBdLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY3V0XCI+e3tyZXBsYWNlU3BlY2lhbENoYXIoaXRlbS50aXRsZSl9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgYXJ0aWNsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0IDxpbWFnZSB2LWlmPVwiaXRlbS5pbWFnZXMubGVuZ3RoID4gMFwiIDpzcmM9XCJpdGVtLmltYWdlc1swXVwiXHJcblx0XHRcdFx0XHRcdFx0ICBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWNvbnRlbnRcIj4ge3tzdWJUZXh0KGl0ZW0udGV4dCw4MCl9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1hdXRob3JcIiB2LWlmPVwiaXRlbS5pbWFnZXMubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF1dGhvckluZm8uYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnQtYXV0aG9yLW5hbWVcIj57e2l0ZW0uYXV0aG9ySW5mby5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1jYXRlZ29yeVwiIHYtaWY9XCJpdGVtLmNhdGVnb3J5Lmxlbmd0aD4wXCI+e3tpdGVtLmNhdGVnb3J5WzBdLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcnRpY2xlLWNvbnRlbnQtYnRuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgZGF0YS1hdXRob3JcIj48dGV4dCBjbGFzcz1cImN1SWNvbi1hdHRlbnRpb25maWxsXCI+PC90ZXh0Pnt7Zm9ybWF0TnVtYmVyKGl0ZW0udmlld3MpfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS10YWcgZGF0YS1hdXRob3JcIj48dGV4dCBjbGFzcz1cImN1SWNvbi1hcHByZWNpYXRlZmlsbFwiPjwvdGV4dD57e2l0ZW0ubGlrZXN9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLWF1dGhvclwiPjx0ZXh0IGNsYXNzPVwiY3VJY29uLW1lc3NhZ2VmaWxsXCI+PC90ZXh0Pnt7aXRlbS5jb21tZW50c051bX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LXRhZyBkYXRhLXRpbWVcIj57e2Zvcm1hdERhdGUoaXRlbS5jcmVhdGVkKX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZC1tb3JlXCIgQHRhcD1cImxvYWRNb3JlXCIgdi1pZj1cImNvbnRlbnRzTGlzdC5sZW5ndGg+MFwiPlxyXG5cdFx0XHRcdFx0PHRleHQ+e3ttb3JlVGV4dH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vLWRhdGFcIiB2LWlmPVwiY29udGVudHNMaXN0Lmxlbmd0aD09MFwiPlxyXG5cdFx0XHRcdFx05pqC5pe25rKh5pyJ5pWw5o2uXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLeivhOiuui0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudS1hdmF0YXJcIiB2LWlmPVwidHlwZT09MVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJjb21tZW50c0xpc3QubGVuZ3RoPT0wXCI+XHJcblx0XHRcdFx0XHTmmoLml7bmsqHmnInor4TorrpcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1jYXJkIGR5bmFtaWMgbm8tY2FyZFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjB1cHg7XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb21tZW50c0xpc3RcIiA6a2V5PVwiaW5kZXhcIiB2LWlmPVwiY29tbWVudHNMaXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtbGlzdCBtZW51LWF2YXRhciBjb21tZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb3B5LWNvbW1lbnRcIiBAdGFwPVwiVG9Db3B5KGl0ZW0udGV4dClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdOWkjeWItlxyXG5cdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kXCIgOnN0eWxlPVwiaXRlbS5zdHlsZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleVwiPnt7aXRlbS5hdXRob3J9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQgdGV4dC1kZlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7aXRlbS50ZXh0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnLWdyZXkgbGlnaHQgcGFkZGluZy1zbSByYWRpdXMgbWFyZ2luLXRvcC1zbSAgdGV4dC1zbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiIEB0YXA9XCJ0b0luZm9Db21tZW50KGl0ZW0uY2lkLGl0ZW0uY29udGVuVGl0bGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz57e2l0ZW0uY29udGVuVGl0bGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1hcmdpbi10b3Atc20gZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JheSB0ZXh0LWRmXCI+e3tmb3JtYXREYXRlKGl0ZW0uY3JlYXRlZCl9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLW1lc3NhZ2VmaWxsIHRleHQtZ3JheSBtYXJnaW4tbGVmdC1zbVwiIEB0YXA9XCJjb21tZW50c0FkZChpdGVtLmF1dGhvcisn77yaJytpdGVtLnRleHQsaXRlbS5jb2lkLDEpXCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWQtbW9yZVwiIEB0YXA9XCJsb2FkTW9yZVwiIHYtaWY9XCJjb21tZW50c0xpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0Pnt7bW9yZVRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLeivhOiuuue7k+adny0tPlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUtYXZhdGFyIHVzZXJMaXN0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA0dXB4O1wiIHYtaWY9XCJ0eXBlPT0yXCI+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdXNlckxpc3RcIiA6a2V5PVwiaW5kZXhcIiBAdGFwPVwidG9Vc2VyQ29udGVudHMoaXRlbSlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kIGxnXCIgOnN0eWxlPVwiaXRlbS5zdHlsZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleVwiIHYtaWY9XCJpdGVtLnNjcmVlbk5hbWVcIj57e2l0ZW0uc2NyZWVuTmFtZX19XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uZ3JvdXBLZXk9PSdjb250cmlidXRvcid8fGl0ZW0uZ3JvdXBLZXk9PSdhZG1pbmlzdHJhdG9yJ1wiIGNsYXNzPVwiY3VJY29uLWxpZ2h0ZmlsbFwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JleVwiIHYtZWxzZT57e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uZ3JvdXBLZXk9PSdjb250cmlidXRvcid8fGl0ZW0uZ3JvdXBLZXk9PSdhZG1pbmlzdHJhdG9yJ1wiIGNsYXNzPVwiY3VJY29uLWxpZ2h0ZmlsbFwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtZ3JheSB0ZXh0LXNtIGZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtY3V0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e3N1YlRleHQoaXRlbS5pbnRyb2R1Y2UsMTAwKX19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtYmx1ZSB0ZXh0LXhzXCI+6K+m5oOFPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkLW1vcmVcIiBAdGFwPVwibG9hZE1vcmVcIj5cclxuXHRcdFx0XHRcdDx0ZXh0Pnt7bW9yZVRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS3nlKjmiLfnu5PmnZ8tLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLeWKoOi9vemBrue9qS0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nXCIgdi1pZj1cImlzTG9hZGluZz09MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmctbWFpblwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvbG9hZGluZy5naWZcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0t5Yqg6L296YGu572p57uT5p2fLS0+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgeyBsb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi9qc19zZGsvbXAtc3RvcmFnZS9tcC1zdG9yYWdlL2luZGV4LmpzJ1xyXG5cdHZhciBBUEkgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hcGknKVxyXG5cdHZhciBOZXQgPSByZXF1aXJlKCcuLi8uLi91dGlscy9uZXQnKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U3RhdHVzQmFyOiB0aGlzLlN0YXR1c0JhcixcclxuXHRcdFx0XHRDdXN0b21CYXI6IHRoaXMuQ3VzdG9tQmFyLFxyXG5cdFx0XHRcdE5hdkJhcjp0aGlzLlN0YXR1c0JhciArICB0aGlzLkN1c3RvbUJhcixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb250ZW50c0xpc3Q6W10sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29tbWVudHNMaXN0OltdLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVzZXJMaXN0OltdLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlYXJjaFRleHQ6XCJcIixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0eXBlOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cGFnZToxLFxyXG5cdFx0XHRcdG1vcmVUZXh0Olwi5Yqg6L295pu05aSaXCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aXNMb2FkOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aXNMb2FkaW5nOjAsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0Ly/lj6/lj5blgLzvvJogXCJkYXJrXCLvvJrmt7HoibLliY3mma/oibLmoLflvI/vvIjljbPnirbmgIHmoI/liY3mma/mloflrZfkuLrpu5HoibLvvInvvIzmraTml7ZiYWNrZ3JvdW5k5bu66K6u6K6+572u5Li65rWF6aKc6Imy77ybIFwibGlnaHRcIu+8mua1heiJsuWJjeaZr+iJsuagt+W8j++8iOWNs+eKtuaAgeagj+WJjeaZr+aWh+Wtl+S4uueZveiJsu+8ie+8jOatpOaXtmJhY2tncm91bmTlu7rorr7orr7nva7kuLrmt7HpopzoibLvvJtcclxuXHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0U3RhdHVzQmFyU3R5bGUoXCJkYXJrXCIpXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvblJlYWNoQm90dG9tKCkge1xyXG5cdFx0ICAgIC8v6Kem5bqV5ZCO5omn6KGM55qE5pa55rOV77yM5q+U5aaC5peg6ZmQ5Yqg6L295LmL57G755qEXHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0aWYodGhhdC5pc0xvYWQ9PTApe1xyXG5cdFx0XHRcdHRoYXQubG9hZE1vcmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIHx8IE1QXHJcblx0XHRcdHRoYXQuTmF2QmFyID0gdGhpcy5DdXN0b21CYXI7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvVHlwZShpKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC50eXBlPWk7XHJcblx0XHRcdFx0dGhhdC5wYWdlPTE7XHJcblx0XHRcdFx0dGhhdC5tb3JlVGV4dD1cIuWKoOi9veabtOWkmlwiO1xyXG5cdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0aWYoaT09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdChmYWxzZSk7XHJcblx0XHRcdFx0fWVsc2UgaWYoaT09MSl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdChmYWxzZSlcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0VXNlckxpc3QoZmFsc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2FkTW9yZSgpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5q2j5Zyo5Yqg6L295LitLi4uXCI7XHJcblx0XHRcdFx0dGhhdC5pc0xvYWQ9MTtcclxuXHRcdFx0XHRpZih0aGF0LnR5cGU9PTApe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRDb250ZW50c0xpc3QodHJ1ZSk7XHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC50eXBlPT0xKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29tbWVudHNMaXN0KHRydWUpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXJMaXN0KHRydWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZWxvYWQoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYodGhhdC50eXBlPT0wKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29udGVudHNMaXN0KCk7XHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC50eXBlPT0xKXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0Q29tbWVudHNMaXN0KClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0VXNlckxpc3QoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VhcmNoVGFnKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzZWFyY2hUZXh0ID0gdGhhdC5zZWFyY2hUZXh0O1xyXG5cdFx0XHRcdHRoYXQucGFnZT0xO1xyXG5cdFx0XHRcdGlmKHRoYXQudHlwZT09MCl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbnRlbnRzTGlzdCgpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKHRoYXQudHlwZT09MSl7XHJcblx0XHRcdFx0XHR0aGF0LmdldENvbW1lbnRzTGlzdCgpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXJMaXN0KClcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb250ZW50c0xpc3QoaXNQYWdlKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcInR5cGVcIjpcInBvc3RcIixcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHBhZ2UgPSB0aGF0LnBhZ2U7XHJcblx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdHBhZ2UrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0TmV0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBBUEkuZ2V0Q29udGVudHNMaXN0KCksXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hQYXJhbXNcIjpKU09OLnN0cmluZ2lmeShBUEkucmVtb3ZlT2JqZWN0RW1wdHlLZXkoZGF0YSkpLFxyXG5cdFx0XHRcdFx0XHRcImxpbWl0XCI6OCxcclxuXHRcdFx0XHRcdFx0XCJwYWdlXCI6cGFnZSxcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hLZXlcIjp0aGF0LnNlYXJjaFRleHQsXHJcblx0XHRcdFx0XHRcdFwib3JkZXJcIjpcImNyZWF0ZWRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBsaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZihsaXN0Lmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdFx0XHRcdC8vdGhhdC5jb250ZW50c0xpc3QgPSBsaXN0O1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5wYWdlKys7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudHNMaXN0ID0gdGhhdC5jb250ZW50c0xpc3QuY29uY2F0KGxpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudHNMaXN0ID0gbGlzdDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENvbW1lbnRzTGlzdChpc1BhZ2Upe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwidHlwZVwiOlwiY29tbWVudFwiLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgcGFnZSA9IHRoYXQucGFnZTtcclxuXHRcdFx0XHRpZihpc1BhZ2Upe1xyXG5cdFx0XHRcdFx0cGFnZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHROZXQucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSS5nZXRDb21tZW50c0xpc3QoKSxcclxuXHRcdFx0XHRcdGRhdGE6e1xyXG5cdFx0XHRcdFx0XHRcInNlYXJjaFBhcmFtc1wiOkpTT04uc3RyaW5naWZ5KEFQSS5yZW1vdmVPYmplY3RFbXB0eUtleShkYXRhKSksXHJcblx0XHRcdFx0XHRcdFwibGltaXRcIjo1LFxyXG5cdFx0XHRcdFx0XHRcInBhZ2VcIjpwYWdlLFxyXG5cdFx0XHRcdFx0XHRcInNlYXJjaEtleVwiOnRoYXQuc2VhcmNoVGV4dCxcclxuXHRcdFx0XHRcdFx0XCJvcmRlclwiOlwiY3JlYXRlZFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOntcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiZ2V0XCIsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0aWYobGlzdC5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29tbWVudHNMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IodmFyIGkgaW4gbGlzdCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhcnIgPSBsaXN0W2ldO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcnIuc3R5bGUgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiK2xpc3RbaV0uYXZhdGFyK1wiKTtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50c0xpc3QucHVzaChhcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYoaXNQYWdlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5wYWdlKys7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY29tbWVudHNMaXN0ID0gdGhhdC5jb21tZW50c0xpc3QuY29uY2F0KGNvbW1lbnRzTGlzdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5jb21tZW50c0xpc3QgPSBjb21tZW50c0xpc3Q7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzTG9hZD0wO1xyXG5cdFx0XHRcdFx0XHR0aGF0Lm1vcmVUZXh0PVwi5Yqg6L295pu05aSaXCI7XHJcblx0XHRcdFx0XHRcdHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc0xvYWRpbmc9MTtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJMaXN0KGlzUGFnZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBwYWdlID0gdGhhdC5wYWdlO1xyXG5cdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRwYWdlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJLmdldFVzZXJMaXN0KCksXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0XCJzZWFyY2hQYXJhbXNcIjpcIlwiLFxyXG5cdFx0XHRcdFx0XHRcImxpbWl0XCI6MTAsXHJcblx0XHRcdFx0XHRcdFwicGFnZVwiOnBhZ2UsXHJcblx0XHRcdFx0XHRcdFwic2VhcmNoS2V5XCI6dGhhdC5zZWFyY2hUZXh0LFxyXG5cdFx0XHRcdFx0XHRcIm9yZGVyXCI6XCJjcmVhdGVkXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5pc0xvYWQ9MDtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXNlckxpc3QgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvcih2YXIgaSBpbiBsaXN0KXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFyciA9IGxpc3RbaV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyci5zdHlsZSA9IFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIrbGlzdFtpXS5hdmF0YXIrXCIpO1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJMaXN0LnB1c2goYXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGlzUGFnZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnVzZXJMaXN0ID0gdGhhdC51c2VyTGlzdC5jb25jYXQodXNlckxpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQudXNlckxpc3QgPSB1c2VyTGlzdDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuaXNMb2FkPTA7XHJcblx0XHRcdFx0XHRcdHRoYXQubW9yZVRleHQ9XCLliqDovb3mm7TlpJpcIjtcclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzTG9hZGluZz0xO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCgndGltZXInKVxyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9Vc2VyQ29udGVudHMoZGF0YSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBuYW1lID0gZGF0YS5uYW1lO1xyXG5cdFx0XHRcdHZhciB0aXRsZSA9IGRhdGEubmFtZStcIueahOS/oeaBr1wiO1xyXG5cdFx0XHRcdGlmKGRhdGEuc2NyZWVuTmFtZSl7XHJcblx0XHRcdFx0XHR0aXRsZSA9IGRhdGEuc2NyZWVuTmFtZStcIiDnmoTkv6Hmga9cIjtcclxuXHRcdFx0XHRcdG5hbWUgPSBkYXRhLnNjcmVlbk5hbWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGlkPSBkYXRhLnVpZDtcclxuXHRcdFx0XHR2YXIgdHlwZT1cInVzZXJcIjtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy91c2VyaW5mbz90aXRsZT0nK3RpdGxlK1wiJm5hbWU9XCIrbmFtZStcIiZ1aWQ9XCIraWQrXCImYXZhdGFyPVwiK2VuY29kZVVSSUNvbXBvbmVudChkYXRhLmF2YXRhcilcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tbWVudHNBZGQodGl0bGUsY29pZCxyZXBseSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBjaWQgPSB0aGF0LmNpZDtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9jb21tZW50c2FkZD9jaWQ9JytjaWQrXCImY29pZD1cIitjb2lkK1wiJnRpdGxlPVwiK3RpdGxlK1wiJmlzcmVwbHk9XCIrcmVwbHlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViVGV4dCh0ZXh0LG51bSl7XHJcblx0XHRcdFx0aWYodGV4dC5sZW5ndGggPCBudWxsKXtcclxuXHRcdFx0XHRcdHJldHVybiB0ZXh0LnN1YnN0cmluZygwLG51bSkrXCLigKbigKZcIlxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRleHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtYXREYXRlKGRhdGV0aW1lKSB7XHJcblx0XHRcdFx0dmFyIGRhdGV0aW1lID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZXRpbWUgKiAxMDAwKSk7XHJcblx0XHRcdFx0Ly8g6I635Y+W5bm05pyI5pel5pe25YiG56eS5YC8ICBzbGljZSgtMinov4fmu6TmjonlpKfkuo4xMOaXpeacn+WJjemdoueahDBcclxuXHRcdFx0XHR2YXIgeWVhciA9IGRhdGV0aW1lLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0XHRtb250aCA9IChcIjBcIiArIChkYXRldGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSxcclxuXHRcdFx0XHRcdGRhdGUgPSAoXCIwXCIgKyBkYXRldGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSxcclxuXHRcdFx0XHRcdGhvdXIgPSAoXCIwXCIgKyBkYXRldGltZS5nZXRIb3VycygpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0XHRtaW51dGUgPSAoXCIwXCIgKyBkYXRldGltZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTtcclxuXHRcdFx0XHQvL3NlY29uZCA9IChcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7XHJcblx0XHRcdFx0Ly8g5ou85o6lXHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXRlICsgXCIgXCIgKyBob3VyICsgXCI6XCIgKyBtaW51dGU7XHJcblx0XHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9JbmZvKGRhdGEpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9pbmZvP2NpZD0nK2RhdGEuY2lkK1wiJnRpdGxlPVwiK2RhdGEudGl0bGVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9JbmZvQ29tbWVudChjaWQsdGl0bGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9jb250ZW50cy9pbmZvP2NpZD0nK2NpZCtcIiZ0aXRsZT1cIit0aXRsZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRUb0NvcHkodGV4dCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHR1bmkuc2V0Q2xpcGJvYXJkRGF0YSh7XHJcblx0XHRcdFx0XHRkYXRhOiB0ZXh0LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKCkgPT4geyAvL+WkjeWItuaIkOWKn+eahOWbnuiwg+WHveaVsFxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgLy/mj5DnpLpcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLlpI3liLbmiJDlip9cIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBINSBcclxuXHRcdFx0XHRsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcblx0XHRcdFx0dGV4dGFyZWEudmFsdWUgPSB0ZXh0O1xyXG5cdFx0XHRcdHRleHRhcmVhLnJlYWRPbmx5ID0gXCJyZWFkT25seVwiO1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cdFx0XHRcdHRleHRhcmVhLnNlbGVjdCgpO1xyXG5cdFx0XHRcdHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIHRleHQubGVuZ3RoKSA7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IC8v5o+Q56S6XHJcblx0XHRcdFx0XHR0aXRsZTogXCLlpI3liLbmiJDlip9cIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKSBcclxuXHRcdFx0XHR0ZXh0YXJlYS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdE51bWJlcihudW0pIHtcclxuXHRcdFx0ICAgIHJldHVybiBudW0gPj0gMWUzICYmIG51bSA8IDFlNCA/IChudW0gLyAxZTMpLnRvRml4ZWQoMSkgKyAnaycgOiBudW0gPj0gMWU0ID8gKG51bSAvIDFlNCkudG9GaXhlZCgxKSArICd3JyA6IG51bVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXBsYWNlU3BlY2lhbENoYXIodGV4dCkge1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcclxuXHRcdFx0ICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG5cdFx0XHQgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyZsdDsvZywgJzwnKTtcclxuXHRcdFx0ICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mZ3Q7L2csICc+Jyk7XHJcblx0XHRcdCAgdGV4dCA9IHRleHQucmVwbGFjZSgvJm5ic3A7L2csICcgJyk7XHJcblx0XHRcdCAgcmV0dXJuIHRleHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlRleHQodGV4dCxudW0pe1xyXG5cdFx0XHRcdGlmKHRleHQpe1xyXG5cdFx0XHRcdFx0aWYodGV4dC5sZW5ndGg+bnVtKXtcclxuXHRcdFx0XHRcdFx0dGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsbnVtKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRleHQrXCLigKbigKZcIjtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGV4dDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHJldHVybiBcIlRh6L+Y5rKh5pyJ5Liq5Lq65LuL57uN5ZOmXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5AaW1wb3J0IFwiLi4vLi4vc3RhdGljL2Jhc2UuY3NzXCI7XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NzExMDc4NTYxNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJFOi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9