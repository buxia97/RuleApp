(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/contents/search"],{

/***/ 217:
/*!************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/main.js?{"page":"pages%2Fcontents%2Fsearch"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/contents/search.vue */ 218));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 218:
/*!*****************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=d0744758& */ 219);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 221);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 38);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ 219:
/*!************************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=template&id=d0744758& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=d0744758& */ 220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_d0744758___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 220:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=template&id=d0744758& ***!
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.type == 0 ? _vm.contentsList.length : null
  var g1 = _vm.type == 0 ? _vm.contentsList.length : null
  var g2 = _vm.type == 1 ? _vm.commentsList.length : null
  var l0 =
    _vm.type == 1
      ? _vm.__map(_vm.commentsList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g3 = _vm.commentsList.length
          return {
            $orig: $orig,
            g3: g3,
          }
        })
      : null
  var g4 = _vm.type == 1 ? _vm.commentsList.length : null
  var g5 = _vm.type == 3 ? _vm.spaceList.length : null
  var g6 = _vm.type == 3 ? _vm.spaceList.length : null
  var g7 = _vm.type == 2 ? _vm.userList.length : null
  var l1 =
    _vm.type == 2
      ? _vm.__map(_vm.userList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var m0 = _vm.subText(item.introduce, 100)
          return {
            $orig: $orig,
            m0: m0,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l0: l0,
        g4: g4,
        g5: g5,
        g6: g6,
        g7: g7,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 221:
/*!******************************************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 222);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/APPpro/voss/规则之树/pages/contents/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contentsList: [],
      commentsList: [],
      userList: [],
      spaceList: [],
      searchText: "",
      type: 0,
      page: 1,
      moreText: "加载更多",
      isLoad: 0,
      isLoading: 0,
      changeLoading: 1
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.page = 1;
    that.moreText = "加载更多";
    that.isLoad = 0;
    if (that.type == 0) {
      that.getContentsList(false);
    } else if (that.type == 1) {
      that.getCommentsList(false);
    } else if (that.type == 2) {
      that.getUserList(false);
    } else {
      that.getSpaceList(false);
    }
    var timer = setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onShow: function onShow() {
    var that = this;
    that.page = 1;
    that.moreText = "加载更多";
    that.isLoad = 0;
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
  methods: (0, _defineProperty2.default)({
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
      } else if (i == 2) {
        that.getUserList(false);
      } else {
        that.getSpaceList(false);
      }
    },
    back: function back() {
      uni.navigateBack({
        delta: 1
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
      } else if (that.type == 2) {
        that.getUserList(true);
      } else {
        that.getSpaceList(true);
      }
    },
    reload: function reload() {
      var that = this;
      if (that.type == 0) {
        that.getContentsList();
      } else if (that.type == 1) {
        that.getCommentsList();
      } else if (that.type == 2) {
        that.getUserList();
      } else {
        that.getSpaceList();
      }
    },
    searchTag: function searchTag() {
      var that = this;
      that.changeLoading = 0;
      var searchText = that.searchText;
      that.page = 1;
      if (that.type == 0) {
        that.getContentsList();
      } else if (that.type == 1) {
        that.getCommentsList();
      } else if (that.type == 2) {
        that.getUserList();
      } else {
        that.getSpaceList();
      }
    },
    searchClose: function searchClose() {
      var that = this;
      that.searchText = "";
      that.page = 1;
      if (that.type == 0) {
        that.getContentsList();
      } else if (that.type == 1) {
        that.getCommentsList();
      } else if (that.type == 2) {
        that.getUserList();
      } else {
        that.getSpaceList();
      }
    },
    getContentsList: function getContentsList(isPage) {
      var that = this;
      var data = {
        "type": "post"
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
          "searchKey": that.searchText,
          "order": "created",
          "token": token
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          that.changeLoading = 1;
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
          that.changeLoading = 1;
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
        "type": "comment"
      };
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
          "searchKey": that.searchText,
          "order": "created"
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          that.changeLoading = 1;
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
          that.changeLoading = 1;
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    getUserList: function getUserList(isPage) {
      var that = this;
      var page = that.page;
      if (isPage) {
        page++;
      }
      that.$Net.request({
        url: that.$API.getUserList(),
        data: {
          "searchParams": "",
          "limit": 10,
          "page": page,
          "searchKey": that.searchText,
          "order": "created"
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "post",
        dataType: 'json',
        success: function success(res) {
          that.changeLoading = 1;
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
          that.changeLoading = 1;
          that.isLoad = 0;
          that.moreText = "加载更多";
          var timer = setTimeout(function () {
            that.isLoading = 1;
            clearTimeout('timer');
          }, 300);
        }
      });
    },
    getSpaceList: function getSpaceList(isPage) {
      var that = this;
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
        url: that.$API.spaceList(),
        data: {
          "limit": 10,
          "page": page,
          "order": "created",
          "searchKey": that.searchText,
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
        url: '/pages/contents/userinfo?title=' + title + "&name=" + name + "&uid=" + id + "&avatar=" + encodeURIComponent(data.avatar)
      });
    },
    commentsAdd: function commentsAdd(title, coid, reply) {
      var that = this;
      var cid = that.cid;
      uni.navigateTo({
        url: '/pages/contents/commentsadd?cid=' + cid + "&coid=" + coid + "&title=" + title + "&isreply=" + reply
      });
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
        url: '/pages/contents/info?cid=' + data.cid + "&title=" + data.title
      });
    },
    toInfoComment: function toInfoComment(cid, title) {
      var that = this;
      uni.navigateTo({
        url: '/pages/contents/info?cid=' + cid + "&title=" + title
      });
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
    }
  }, "subText", function subText(text, num) {
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
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[217,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/contents/search.js.map