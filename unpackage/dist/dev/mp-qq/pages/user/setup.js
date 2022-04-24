(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/setup"],{

/***/ 118:
/*!*******************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fuser%2Fsetup"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _setup = _interopRequireDefault(__webpack_require__(/*! ./pages/user/setup.vue */ 119));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_setup.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 119:
/*!************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/setup.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.vue?vue&type=template&id=f978c81c& */ 120);
/* harmony import */ var _setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.vue?vue&type=script&lang=js& */ 122);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.vue?vue&type=style&index=0&lang=css& */ 124);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user/setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 120:
/*!*******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=template&id=f978c81c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setup.vue?vue&type=template&id=f978c81c& */ 121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_template_id_f978c81c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 121:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=template&id=f978c81c& ***!
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 122:
/*!*************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setup.vue?vue&type=script&lang=js& */ 123);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var API = __webpack_require__(/*! ../../utils/api */ 19);var Net = __webpack_require__(/*! ../../utils/net */ 20);var _default = { data: function data() {return { StatusBar: this.StatusBar, CustomBar: this.CustomBar, NavBar: this.StatusBar + this.CustomBar, localdata: '', versionCode: 0, wgtVer: '', Update: 0, versionUrl: "", userInfo: null, token: "" };}, onPullDownRefresh: function onPullDownRefresh() {var that = this;}, onShow: function onShow() {var that = this;if (_index.localStorage.getItem('userinfo')) {that.userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));that.userInfo.style = "background-image:url(" + that.userInfo.avatar + ");";}if (_index.localStorage.getItem('token')) {that.token = _index.localStorage.getItem('token');}}, onLoad: function onLoad() {
    var that = this;

    that.NavBar = this.CustomBar;

    that.get_cache_size();
  },
  methods: {
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    },
    rmlocal: function rmlocal() {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '是否清除缓存？',
        success: function success(res) {
          if (res.confirm) {
            that.closeLocal();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        } });

    },
    closeLocal: function closeLocal() {
      var that = this;
      _index.localStorage.clear();
      uni.showToast({
        title: '操作成功！',
        icon: 'none',
        duration: 1000,
        position: 'bottom' });

      that.localdata = '0 KB';
    },
    get_cache_size: function get_cache_size() {
      var that = this;
      var obj = uni.getStorageInfoSync();
      if (obj) {
        that.localdata = obj.currentSize + ' KB';
      } else {
        console.log('浏览器不支持localStorage');
      }
    },
    isUpdate: function isUpdate(Status) {
      var that = this;
      plus.runtime.getProperty(plus.runtime.appid, function (inf) {

        that.wgtVer = inf.version; //获取当前版本号
        that.versionCode = inf.versionCode;
        var version = inf.versionCode;
        Net.request({
          url: API.GetUpdateUrl(),
          method: 'get',
          success: function success(res) {
            var versionCode = res.data.versionCode;
            that.versionUrl = res.data.versionUrl;
            if (Status) {
              uni.showToast({
                title: "检测完成",
                icon: 'none',
                duration: 1000,
                position: 'bottom' });


            }
            if (versionCode > version) {
              console.log("有更新");
              that.Update = 1;
              if (Status) {
                if (res.data.versionUrl != "") {
                  plus.runtime.openURL(res.data.versionUrl);
                }
              }
            }

          },
          fail: function fail(res) {

          } });


      });
    },
    logout: function logout() {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确认退出账户？',
        success: function success(res) {
          if (res.confirm) {
            _index.localStorage.removeItem('userinfo');
            _index.localStorage.removeItem('token');
            uni.showToast({
              title: "退出成功",
              icon: 'none',
              duration: 1000,
              position: 'bottom' });

            var timer = setTimeout(function () {
              uni.reLaunch({
                url: '/pages/home/home' });

              clearTimeout('timer');
            }, 1000);
          } else if (res.cancel) {

          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 124:
/*!*********************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setup.vue?vue&type=style&index=0&lang=css& */ 125);
/* harmony import */ var _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_2_12_20211029_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 125:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/user/setup.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[118,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL3VzZXIvc2V0dXAudnVlP2JkNzkiLCJ3ZWJwYWNrOi8vL0U6L0FQUHByby92b3NzL+inhOWImeS5i+agkS9wYWdlcy91c2VyL3NldHVwLnZ1ZT9hNDRkIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvdXNlci9zZXR1cC52dWU/YmEwNCIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL3VzZXIvc2V0dXAudnVlP2RhNzUiLCJ1bmktYXBwOi8vL3BhZ2VzL3VzZXIvc2V0dXAudnVlIiwid2VicGFjazovLy9FOi9BUFBwcm8vdm9zcy/op4TliJnkuYvmoJEvcGFnZXMvdXNlci9zZXR1cC52dWU/OWM5MyIsIndlYnBhY2s6Ly8vRTovQVBQcHJvL3Zvc3Mv6KeE5YiZ5LmL5qCRL3BhZ2VzL3VzZXIvc2V0dXAudnVlPzVhZWEiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLDRGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGNBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtIO0FBQ2xIO0FBQ3lEO0FBQ0w7QUFDYTs7O0FBR2pFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBNHdCLENBQWdCLDB3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dEaHlCLHdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUNBLHlELGVBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSx5QkFEQSxFQUVBLHlCQUZBLEVBR0EsdUNBSEEsRUFLQSxhQUxBLEVBT0EsY0FQQSxFQVFBLFVBUkEsRUFVQSxTQVZBLEVBV0EsY0FYQSxFQWFBLGNBYkEsRUFjQSxTQWRBLEdBa0JBLENBcEJBLEVBcUJBLGlCQXJCQSwrQkFxQkEsQ0FDQSxnQkFFQSxDQXhCQSxFQXlCQSxNQXpCQSxvQkF5QkEsQ0FDQSxnQkFPQSw4Q0FFQSxvRUFDQSw0RUFDQSxDQUNBLDJDQUVBLGtEQUNBLENBRUEsQ0EzQ0EsRUE0Q0EsTUE1Q0Esb0JBNENBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQWxEQTtBQW1EQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBTEE7QUFNQSxXQU5BLHFCQU1BO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsMEJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FUQTs7QUFXQSxLQW5CQTtBQW9CQSxjQXBCQSx3QkFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLG9CQUZBO0FBR0Esc0JBSEE7QUFJQSwwQkFKQTs7QUFNQTtBQUNBLEtBOUJBO0FBK0JBLGtCQS9CQSw0QkErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXZDQTtBQXdDQSxZQXhDQSxvQkF3Q0EsTUF4Q0EsRUF3Q0E7QUFDQTtBQUNBOztBQUVBLGtDQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsNEJBRkE7QUFHQSw4QkFIQTtBQUlBLGtDQUpBOzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQXpCQTtBQTBCQTs7QUFFQSxXQTVCQTs7O0FBK0JBLE9BcENBO0FBcUNBLEtBL0VBO0FBZ0ZBLFVBaEZBLG9CQWdGQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTtBQUlBLGdDQUpBOztBQU1BO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQTtBQUNBLGFBTEEsRUFLQSxJQUxBO0FBTUEsV0FmQSxNQWVBOztBQUVBO0FBQ0EsU0F0QkE7O0FBd0JBLEtBMUdBLEVBbkRBLEU7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBbW1DLENBQWdCLDZqQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXZuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3VzZXIvc2V0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy91c2VyL3NldHVwLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTc4YzgxYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NldHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0dXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NldHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy91c2VyL3NldHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc2V0dXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5NzhjODFjJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZXR1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZXR1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1c2VyXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImhlYWRlclwiIDpzdHlsZT1cIlt7aGVpZ2h0OkN1c3RvbUJhciArICdweCd9XVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZVwiIDpzdHlsZT1cInsnaGVpZ2h0JzogQ3VzdG9tQmFyICsgJ3B4JywncGFkZGluZy10b3AnOlN0YXR1c0JhciArICdweCd9XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIiBAdGFwPVwiYmFja1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tYmFja1wiPjwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50IHRleHQtYm9sZFwiIDpzdHlsZT1cIlt7dG9wOlN0YXR1c0JhciArICdweCd9XVwiPlxyXG5cdFx0XHRcdFx06K6+572uXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyA6c3R5bGU9XCJbe3BhZGRpbmc6TmF2QmFyICsgJ3B4IDEwcHggMHB4IDEwcHgnfV1cIj48L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudSBtYXJnaW4tdG9wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIEB0YXA9XCJybWxvY2FsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7muIXpmaTnvJPlrZg8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtZ3JheVwiPnt7IGxvY2FsZGF0YSB9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSAgI2lmZGVmIEFQUC1QTFVTIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiBAdGFwPVwiaXNVcGRhdGUodHJ1ZSlcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuajgOafpeabtOaWsDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1ncmF5XCIgdi1pZj1cIlVwZGF0ZT09MFwiPnt7d2d0VmVyfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVwZGF0ZS10aXBzIGJnLXJlZFwiICB2LWlmPVwiVXBkYXRlPT0xXCI+TmV3czwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXJpZ2h0XCI+PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICAjZW5kaWYgLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvZ291dFwiIHYtaWY9XCJ0b2tlbiE9JydcIiBAdGFwPVwibG9nb3V0XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9nb3V0LW1haW5cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtcmVkXCI+6YCA5Ye655m75b2VPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgeyBsb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi9qc19zZGsvbXAtc3RvcmFnZS9tcC1zdG9yYWdlL2luZGV4LmpzJ1xyXG5cdHZhciBBUEkgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hcGknKVxyXG5cdHZhciBOZXQgPSByZXF1aXJlKCcuLi8uLi91dGlscy9uZXQnKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U3RhdHVzQmFyOiB0aGlzLlN0YXR1c0JhcixcclxuXHRcdFx0XHRDdXN0b21CYXI6IHRoaXMuQ3VzdG9tQmFyLFxyXG5cdFx0XHRcdE5hdkJhcjp0aGlzLlN0YXR1c0JhciArICB0aGlzLkN1c3RvbUJhcixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsb2NhbGRhdGE6ICcnLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZlcnNpb25Db2RlOjAsXHJcblx0XHRcdFx0d2d0VmVyOicnLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFVwZGF0ZTowLFxyXG5cdFx0XHRcdHZlcnNpb25Vcmw6XCJcIixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1c2VySW5mbzpudWxsLFxyXG5cdFx0XHRcdHRva2VuOlwiXCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHQvL+WPr+WPluWAvO+8miBcImRhcmtcIu+8mua3seiJsuWJjeaZr+iJsuagt+W8j++8iOWNs+eKtuaAgeagj+WJjeaZr+aWh+Wtl+S4uum7keiJsu+8ie+8jOatpOaXtmJhY2tncm91bmTlu7rorq7orr7nva7kuLrmtYXpopzoibLvvJsgXCJsaWdodFwi77ya5rWF6Imy5YmN5pmv6Imy5qC35byP77yI5Y2z54q25oCB5qCP5YmN5pmv5paH5a2X5Li655m96Imy77yJ77yM5q2k5pe2YmFja2dyb3VuZOW7uuiuvuiuvue9ruS4uua3seminOiJsu+8m1xyXG5cdFx0XHRwbHVzLm5hdmlnYXRvci5zZXRTdGF0dXNCYXJTdHlsZShcImRhcmtcIilcclxuXHRcdFx0XHJcblx0XHRcdHRoYXQuaXNVcGRhdGUoZmFsc2UpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJpbmZvJykpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQudXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyaW5mbycpKTtcclxuXHRcdFx0XHR0aGF0LnVzZXJJbmZvLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIit0aGF0LnVzZXJJbmZvLmF2YXRhcitcIik7XCJcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMgfHwgTVBcclxuXHRcdFx0dGhhdC5OYXZCYXIgPSB0aGlzLkN1c3RvbUJhcjtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdHRoYXQuZ2V0X2NhY2hlX3NpemUoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGJhY2soKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJtbG9jYWwoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0ICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHQgICAgY29udGVudDogJ+aYr+WQpua4hemZpOe8k+WtmO+8nycsXHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHQgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHRoYXQuY2xvc2VMb2NhbCgpO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlTG9jYWwoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOaIkOWKn++8gScsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhhdC5sb2NhbGRhdGEgPSAnMCBLQidcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0X2NhY2hlX3NpemUoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dmFyIG9iaiA9IHVuaS5nZXRTdG9yYWdlSW5mb1N5bmMoKVxyXG5cdFx0XHRcdGlmIChvYmopIHtcclxuXHRcdFx0XHRcdHRoYXQubG9jYWxkYXRhID0gb2JqLmN1cnJlbnRTaXplICsgJyBLQidcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+a1j+iniOWZqOS4jeaUr+aMgWxvY2FsU3RvcmFnZScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc1VwZGF0ZShTdGF0dXMpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0cGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgZnVuY3Rpb24oaW5mKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQud2d0VmVyID0gaW5mLnZlcnNpb24gLy/ojrflj5blvZPliY3niYjmnKzlj7dcclxuXHRcdFx0XHRcdHRoYXQudmVyc2lvbkNvZGUgPSBpbmYudmVyc2lvbkNvZGU7XHJcblx0XHRcdFx0XHR2YXIgdmVyc2lvbiA9IGluZi52ZXJzaW9uQ29kZTtcclxuXHRcdFx0XHRcdE5ldC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBBUEkuR2V0VXBkYXRlVXJsKCksXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB2ZXJzaW9uQ29kZSA9IHJlcy5kYXRhLnZlcnNpb25Db2RlO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQudmVyc2lvblVybCA9ICByZXMuZGF0YS52ZXJzaW9uVXJsO1xyXG5cdFx0XHRcdFx0XHRcdGlmKFN0YXR1cyl7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLmo4DmtYvlrozmiJBcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjonYm90dG9tJyxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmKHZlcnNpb25Db2RlID4gdmVyc2lvbil7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuacieabtOaWsFwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuVXBkYXRlPTE7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihTdGF0dXMpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS52ZXJzaW9uVXJsIT1cIlwiKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTChyZXMuZGF0YS52ZXJzaW9uVXJsKTsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dvdXQoKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0ICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHQgICAgY29udGVudDogJ+ehruiupOmAgOWHuui0puaIt++8nycsXHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHQgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyaW5mbycpO1xyXG5cdFx0XHRcdCAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLpgIDlh7rmiJDlip9cIixcclxuXHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjonYm90dG9tJyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2hvbWUvaG9tZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoJ3RpbWVyJylcclxuXHRcdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbkBpbXBvcnQgXCIuLi8uLi9zdGF0aWMvYmFzZS5jc3NcIjtcclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc2V0dXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMi4xMi4yMDIxMTAyOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjIuMTIuMjAyMTEwMjkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NldHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MDgzNDA0NTQ2MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJFOi9IQnVpbGRlclguMy4yLjEyLjIwMjExMDI5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9