(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/space/post"],{

/***/ 249:
/*!*******************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fspace%2Fpost"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _post = _interopRequireDefault(__webpack_require__(/*! ./pages/space/post.vue */ 250));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_post.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 250:
/*!************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/space/post.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.vue?vue&type=template&id=a7c28e7c& */ 251);
/* harmony import */ var _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.vue?vue&type=script&lang=js& */ 253);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/space/post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 251:
/*!*******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/space/post.vue?vue&type=template&id=a7c28e7c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./post.vue?vue&type=template&id=a7c28e7c& */ 252);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_template_id_a7c28e7c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 252:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/space/post.vue?vue&type=template&id=a7c28e7c& ***!
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
  var g0 = _vm.type == 0 ? _vm.picList.length : null
  var g1 =
    _vm.type == 1 && _vm.contentJson != null && _vm.contentJson.cid != 0
      ? _vm.contentJson.images.length
      : null
  var m0 =
    _vm.type == 5 && _vm.shopJson != null && _vm.shopJson.id != 0
      ? parseInt(_vm.shopJson.price)
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.pic = ""
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        m0: m0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 253:
/*!*************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/space/post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./post.vue?vue&type=script&lang=js& */ 254);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/space/post.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var owo = [];
var _default = {
  data: function data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      NavBar: this.StatusBar + this.CustomBar,
      AppStyle: this.$store.state.AppStyle,
      id: 0,
      postType: "add",
      type: 0,
      text: "",
      toid: 0,
      pic: "",
      picList: [],
      token: "",
      currencyName: "",
      forwardJson: null,
      contentJson: null,
      shopJson: null,
      isOwO: false,
      owo: owo,
      owoList: [],
      OwOtype: "paopao"
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
  },
  onHide: function onHide() {
    _index.localStorage.removeItem('getuid');
  },
  onShow: function onShow() {
    var that = this;
    if (_index.localStorage.getItem('token')) {
      that.token = _index.localStorage.getItem('token');
    }
  },
  onLoad: function onLoad(res) {
    var that = this;
    that.currencyName = that.$API.getCurrencyName();
    that.NavBar = this.CustomBar;
    if (res.type) {
      that.type = res.type;
    }
    if (res.toid) {
      that.toid = res.toid;
      that.getInfo();
    }
    if (res.postType) {
      that.postType = res.postType;
    }
    if (res.id) {
      that.id = res.id;
      if (that.postType == 'add') {
        that.getForwardInfo(that.id);
      } else {
        that.getSpaceInfo();
      }
    }
  },
  methods: {
    back: function back() {
      uni.navigateBack({
        delta: 1
      });
    },
    toOwO: function toOwO(text) {
      var that = this;
      that.OwOtype = text;
      if (text == "paopao") {
        that.owoList = that.owo.data.paopao.container;
      }
      if (text == "adai") {
        that.owoList = that.owo.data.adai.container;
      }
      if (text == "alu") {
        that.owoList = that.owo.data.alu.container;
      }
      if (text == "quyinniang") {
        that.owoList = that.owo.data.quyinniang.container;
      }
    },
    setOwO: function setOwO(data) {
      var that = this;
      var text = data.data;
      that.text += text;
      that.isOwO = false;
    },
    OwO: function OwO() {
      var that = this;
      that.isOwO = !that.isOwO;
    },
    getForwardInfo: function getForwardInfo(toid) {
      var that = this;
      var data = {
        "id": toid
      };
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      }
      data.token = token;
      that.$Net.request({
        url: that.$API.spaceInfo(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.isLoading = 1;
          if (res.data.code == 1) {
            that.forwardJson = res.data.data;
            that.toid = res.data.data.id;
          }
        },
        fail: function fail(res) {
          that.isLoading = 1;
        }
      });
    },
    replaceAll: function replaceAll(string, search, replace) {
      return string.split(search).join(replace);
    },
    getSpaceInfo: function getSpaceInfo() {
      var that = this;
      var data = {
        "id": that.id
      };
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      }
      data.token = token;
      that.$Net.request({
        url: that.$API.spaceInfo(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          that.isLoading = 1;
          if (res.data.code == 1) {
            that.id = res.data.data.id;
            that.type = res.data.data.type;
            var text = res.data.data.text;
            text = that.replaceAll(text, "/r/n", "\n");
            text = that.replaceAll(text, "||rn||", "\n");
            that.text = text;
            that.toid = res.data.data.toid;
            if (res.data.data.pic) {
              that.pic = res.data.data.pic;
              if (that.type == 0) {
                if (that.pic.indexOf("||") != -1) {
                  that.picList = that.pic.split("||");
                } else {
                  that.picList = that.picList.push(that.pic);
                }
              }
            }
            if (that.type == 1) {
              that.contentJson = res.data.data.contentJson;
            }
            if (that.type == 5) {
              that.shopJson = res.data.data.shopJson;
            }
            if (that.type == 2) {
              that.getForwardInfo(that.toid);
            }
          }
        },
        fail: function fail(res) {
          that.isLoading = 1;
        }
      });
    },
    getInfo: function getInfo() {
      var that = this;
      var data = {
        "key": that.toid,
        "isMd": 0
      };
      var token = "";
      if (_index.localStorage.getItem('userinfo')) {
        var userInfo = JSON.parse(_index.localStorage.getItem('userinfo'));
        token = userInfo.token;
      }
      data.token = token;
      that.$Net.request({
        url: that.$API.getContentsInfo(),
        data: data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "get",
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          if (res.data.title) {
            that.contentJson = res.data;
          }
        },
        fail: function fail(res) {
          uni.stopPullDownRefresh();
        }
      });
    },
    addSpace: function addSpace() {
      var that = this;
      if (that.token == "") {
        uni.showToast({
          title: "请先登录",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        var timer = setTimeout(function () {
          uni.navigateTo({
            url: '/pages/user/login'
          });
          clearTimeout('timer');
        }, 1000);
        return false;
      }
      if (that.type == 2) {
        if (that.text == "") {
          text = "转发了动态";
        }
      }
      if (that.text == "") {
        uni.showToast({
          title: "请输入动态内容",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      var text = that.text;
      if (that.type == 0) {
        var picList = that.picList;
        var pic = "";
        for (var i in picList) {
          if (i == 0) {
            pic += picList[i];
          } else {
            pic += "||" + picList[i];
          }
        }
        that.pic = pic;
      }
      if (that.type == 4) {
        if (that.pic == "") {
          uni.showToast({
            title: "请上传视频文件",
            icon: 'none',
            duration: 1000,
            position: 'bottom'
          });
          return false;
        }
      }
      text = text.replace(/\r\n/g, "||rn||");
      text = text.replace(/\n/g, "||rn||");
      var data = {
        type: that.type,
        text: text,
        toid: that.toid,
        pic: that.pic,
        token: that.token
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.addSpace(),
        data: that.$API.removeObjectEmptyKey(data),
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
            var timer = setTimeout(function () {
              that.back();
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
    editSpace: function editSpace() {
      var that = this;
      if (that.token == "") {
        uni.showToast({
          title: "请先登录",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        var timer = setTimeout(function () {
          uni.navigateTo({
            url: '/pages/user/login'
          });
          clearTimeout('timer');
        }, 1000);
        return false;
      }
      if (that.type == 2) {
        if (that.text == "") {
          text = "转发了动态";
        }
      }
      if (that.text == "") {
        uni.showToast({
          title: "请输入动态内容",
          icon: 'none',
          duration: 1000,
          position: 'bottom'
        });
        return false;
      }
      var text = that.text;
      if (that.type == 0) {
        var picList = that.picList;
        var pic = "";
        for (var i in picList) {
          if (i == 0) {
            pic += picList[i];
          } else {
            pic += "||" + picList[i];
          }
        }
        that.pic = pic;
      }
      if (that.type == 4) {
        if (that.pic == "") {
          uni.showToast({
            title: "请上传视频文件",
            icon: 'none',
            duration: 1000,
            position: 'bottom'
          });
          return false;
        }
      }
      text = text.replace(/\r\n/g, "||rn||");
      text = text.replace(/\n/g, "||rn||");
      var data = {
        id: that.id,
        type: that.type,
        text: text,
        toid: that.toid,
        pic: that.pic,
        token: that.token
      };
      uni.showLoading({
        title: "加载中"
      });
      that.$Net.request({
        url: that.$API.editSpace(),
        data: that.$API.removeObjectEmptyKey(data),
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
            var timer = setTimeout(function () {
              that.back();
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
    upload: function upload() {
      var that = this;
      uni.chooseImage({
        count: 9,
        // 最多可以选择的图片张数，默认9
        sizeType: ['original'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          uni.showLoading({
            title: "加载中"
          });
          var tempFilePaths = res.tempFilePaths;
          for (var i = 0; i < tempFilePaths.length; i++) {
            var uploadTask = uni.uploadFile({
              url: that.$API.upload(),
              filePath: tempFilePaths[i],
              name: 'file',
              formData: {
                'token': that.token
              },
              success: function success(uploadFileRes) {
                var count = 0;
                count++;
                if (count == tempFilePaths.length) {
                  setTimeout(function () {
                    uni.hideLoading();
                  }, 1000);
                }
                var data = JSON.parse(uploadFileRes.data);
                //var data = uploadFileRes.data;
                uni.showToast({
                  title: data.msg,
                  icon: 'none'
                });
                if (data.code == 1) {
                  var url = data.data.url;
                  that.picList.push(url);
                }
              },
              fail: function fail() {
                setTimeout(function () {
                  uni.hideLoading();
                }, 1000);
              }
            });
          }
        }
      });
    },
    uploadVideo: function uploadVideo() {
      var that = this;
      uni.chooseVideo({
        sourceType: ['camera', 'album'],
        compressed: false,
        success: function success(responent) {
          uni.showLoading({
            title: "加载中"
          });
          var videoFile = responent.tempFilePath;
          var uploadTask = uni.uploadFile({
            url: that.$API.upload(),
            filePath: videoFile,
            name: 'file',
            formData: {
              'token': that.token
            },
            success: function success(uploadFileRes) {
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
              var data = JSON.parse(uploadFileRes.data);
              //var data = uploadFileRes.data;
              uni.showToast({
                title: data.msg,
                icon: 'none'
              });
              if (data.code == 1) {
                var url = data.data.url;
                that.pic = url;
              }
            },
            fail: function fail() {
              uni.showToast({
                title: "网络异常，上传失败！",
                icon: 'none'
              });
              setTimeout(function () {
                uni.hideLoading();
              }, 1000);
            }
          });
        }
      });
    },
    picClose: function picClose(item) {
      var that = this;
      var picList = that.picList;
      var list = [];
      for (var i in picList) {
        if (picList[i] != item) {
          list.push(picList[i]);
        }
      }
      that.picList = list;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[249,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/space/post.js.map