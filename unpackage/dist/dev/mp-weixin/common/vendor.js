(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"规则之树","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 21:
/*!*****************************************************************!*\
  !*** E:/APPpro/voss/规则之树/js_sdk/mp-storage/mp-storage/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.sessionStorage = exports.localStorage = void 0;var api;

var localStorage = {};exports.localStorage = localStorage;

var sessionStorage = {};exports.sessionStorage = sessionStorage;

var sessionStorageDict = {};

var storages = [localStorage, sessionStorage];
/**
                                                * 数据同步
                                                */
function sync() {
  storages.forEach(function (storage) {
    storage.__sync();
  });
}
/**
   * 初始化
   */
function init() {
  storages.forEach(function (storage) {
    var isSession = storage === sessionStorage;
    Object.defineProperties(storage, {
      length: {
        get: function get() {
          this.__sync();
          return this.__keys.length;
        },
        enumerable: false },

      setItem: {
        value: function value(key, _value) {
          _value = String(_value);
          if (isSession) {
            sessionStorageDict[key] = _value;
          } else {
            api.setStorageSync(key, _value);
          }
          this.__addKey(key);
        },
        enumerable: false },

      getItem: {
        value: function value(key) {
          if (isSession) {
            return sessionStorageDict[key];
          } else {
            return api.getStorageSync(key);
          }
        },
        enumerable: false },

      removeItem: {
        value: function value(key) {
          if (isSession) {
            delete sessionStorageDict[key];
          } else {
            api.removeStorageSync(key);
          }
          this.__removeKey(key);
        },
        enumerable: false },

      clear: {
        value: function value() {
          if (isSession) {
            sessionStorageDict = {};
          } else {
            api.clearStorageSync();
          }
          var self = this;
          var keys = this.__keys;
          keys.forEach(function (key) {
            delete self[key];
          });
          keys.length = 0;
        },
        enumerable: false },

      key: {
        value: function value(index) {
          this.__sync();
          return this.__keys[index];
        },
        enumerable: false },

      __keys: {
        value: [],
        enumerable: false },

      __addKey: {
        value: function value(key) {
          if (key in this) {
            return;
          }
          Object.defineProperty(this, key, {
            set: function set(value) {
              this.setItem(key, value);
            },
            get: function get() {
              return this.getItem(key);
            },
            enumerable: false,
            configurable: true });

          this.__keys.push(key);
        },
        enumerable: false },

      __removeKey: {
        value: function value(key) {
          var keys = this.__keys;
          var index = keys.indexOf(key);
          if (index >= 0) {
            this.__keys.splice(index, 1);
          }
          delete this[key];
        },
        enumerable: false },

      __sync: {
        value: function value() {
          for (var key in this) {
            if (this.propertyIsEnumerable(key)) {
              var value = this[key];
              delete this[key];
              this.setItem(key, value);
            }
          }
        },
        enumerable: false } });


  });
  var info = api.getStorageInfoSync();
  info.keys.forEach(function (key) {
    localStorage.__addKey(key);
  });
  setInterval(function () {
    sync();
  }, 100);
}

if (typeof window === 'object' && typeof window.document === 'object') {
  exports.localStorage = localStorage = window.localStorage;
  exports.sessionStorage = sessionStorage = window.sessionStorage;
} else {
  switch ('object') {
    case typeof uni:
      api = uni;
      break;
    case typeof wx:
      api = wx;
      break;
    case typeof swan:
      api = swan;
      break;
    case typeof tt:
      api = tt;
      break;
    case typeof dd:
      api = dd;
      break;
    default:
      throw new Error('storage not support');}

  init();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 22:
/*!****************************************!*\
  !*** E:/APPpro/voss/规则之树/utils/api.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _module$exports;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var API_URL = 'https://api.ruletree.club/';
//var API_URL = 'http://127.0.0.1:8081/';
var WEB_URL = 'https://www.ruletree.club/';
var GroupUrl = 'https://jq.qq.com/?_wv=1027&k=XX5SFavQ';

var GithubUrl = 'https://github.com/buxia97/RuleApp';

//对于个人小程序，不能有评论，充值，商品和发布文章，所以在小程序端是不会显示这些的，因为不可能过审，但如果是企业，可以去页面上自行去除我的判断代码。

//下面主要用于用户协议
var appName = "规则之树";
var appEmail = "buxia97@126.com";
//全局数据调用部分【重要】

//用户头衔，自己修改名词
var rankList = ["小白", "萌新", "入门", "熟手", "大佬", "巨佬", "传说", "古神"];

//头衔对应的背景颜色
var rankStyle = ["#6699CC", "#666699", "#009933", "#FF9900", "#ff007f", "#FF0033", "#660033", "#000000"];

//链接规则(用于站内链接自动跳转和文章分享)，请根据自己的网站文件链接自由发挥，比如我的就是
//https://www.ruletree.club/archives/2824/
//{cid}对应文章id，{slug}对应独立页面名称，其实本质上就是页面拼接。
var linkRule = WEB_URL + "archives/{cid}/"; //普通文章
var pageRule = WEB_URL + "{slug}.html"; //独立页面
//首页图片轮播,后面的数字为mid，为typecho数据库的标签和分类id
var swiperid = 394;
//精选作品mid,后面的数字为mid，为typecho数据库的标签和分类id
var featured = 397;


//使用攻略文章id，typecho文章表cid
var raiders = 1518;
//意见反馈文章id，typecho文章表cid
var feedback = 2689;
//关于我们文章id，typecho文章表cid
var aboutme = 2;





module.exports = (_module$exports = {
  GetRankList: function GetRankList() {
    return rankList;
  },
  GetRankStyle: function GetRankStyle() {
    return rankStyle;
  },
  GetAppName: function GetAppName() {
    return appName;
  },
  GetAppEmail: function GetAppEmail() {
    return appEmail;
  },
  GetLinkRule: function GetLinkRule() {
    return linkRule;
  },
  GetPageRule: function GetPageRule() {
    return pageRule;
  },
  GetSwiperid: function GetSwiperid() {
    return swiperid;
  },
  GetFeatured: function GetFeatured() {
    return featured;
  },
  GetRaiders: function GetRaiders() {
    return raiders;
  },
  GetFeedback: function GetFeedback() {
    return feedback;
  },
  GetAboutme: function GetAboutme() {
    return aboutme;
  },
  GetUpdateUrl: function GetUpdateUrl() {
    return WEB_URL + 'apiResult.php?update=1';
  },
  GetAds: function GetAds() {
    return WEB_URL + 'apiResult.php?getAds=1';
  },
  GetGithubUrl: function GetGithubUrl() {
    return GithubUrl;
  },
  GetWebUrl: function GetWebUrl() {
    return WEB_URL;
  },
  GetGroupUrl: function GetGroupUrl() {
    return GroupUrl;
  },
  userLogin: function userLogin() {
    return API_URL + 'typechoUsers/userLogin';
  },
  RegSendCode: function RegSendCode() {
    return API_URL + 'typechoUsers/RegSendCode';
  },
  SendCode: function SendCode() {
    return API_URL + 'typechoUsers/SendCode';
  },
  userApi: function userApi() {
    return API_URL + 'typechoUsers/apiLogin';
  },
  userRegister: function userRegister() {
    return API_URL + 'typechoUsers/userRegister';
  },
  userFoget: function userFoget() {
    return API_URL + 'typechoUsers/userFoget';
  },
  getUserInfo: function getUserInfo() {
    return API_URL + 'typechoUsers/userInfo';
  },
  getUserList: function getUserList() {
    return API_URL + 'typechoUsers/userList';
  },
  userEdit: function userEdit() {
    return API_URL + 'typechoUsers/userEdit';
  },
  getUserData: function getUserData() {
    return API_URL + 'typechoUsers/userData';
  },
  userDelete: function userDelete() {
    return API_URL + 'typechoUsers/userDelete';
  },
  userRecharge: function userRecharge() {
    return API_URL + 'typechoUsers/userRecharge';
  },

  userWithdraw: function userWithdraw() {
    return API_URL + 'typechoUsers/userWithdraw';
  },
  withdrawList: function withdrawList() {
    return API_URL + 'typechoUsers/withdrawList';
  },
  withdrawStatus: function withdrawStatus() {
    return API_URL + 'typechoUsers/withdrawStatus';
  },
  manageUserEdit: function manageUserEdit() {
    return API_URL + 'typechoUsers/manageUserEdit';
  },
  apiBind: function apiBind() {
    return API_URL + 'typechoUsers/apiBind';
  },
  userBindStatus: function userBindStatus() {
    return API_URL + 'typechoUsers/userBindStatus';
  },
  setScan: function setScan() {
    return API_URL + 'typechoUsers/setScan';
  },
  userStatus: function userStatus() {
    return API_URL + 'typechoUsers/userStatus';
  },
  regConfig: function regConfig() {
    return API_URL + 'typechoUsers/regConfig';
  },
  //邀请码注册相关
  madeInvitation: function madeInvitation() {
    return API_URL + 'typechoUsers/madeInvitation';
  },
  invitationList: function invitationList() {
    return API_URL + 'typechoUsers/invitationList';
  },
  invitationExcel: function invitationExcel() {
    return API_URL + 'typechoUsers/invitationExcel';
  },


  getMarkList: function getMarkList() {
    return API_URL + 'typechoUserlog/markList';
  },
  getIsMark: function getIsMark() {
    return API_URL + 'typechoUserlog/isMark';
  },

  addLog: function addLog() {
    return API_URL + 'typechoUserlog/addLog';
  },
  removeLog: function removeLog() {
    return API_URL + 'typechoUserlog/removeLog';
  } }, _defineProperty(_module$exports, "removeLog",
function removeLog() {
  return API_URL + 'typechoUserlog/removeLog';
}), _defineProperty(_module$exports, "dataClean",
function dataClean() {
  return API_URL + 'typechoUserlog/dataClean';
}), _defineProperty(_module$exports, "getCommentsList",


function getCommentsList() {
  return API_URL + 'typechoComments/commentsList';
}), _defineProperty(_module$exports, "setComments",
function setComments() {
  return API_URL + 'typechoComments/commentsAdd';
}), _defineProperty(_module$exports, "commentsDelete",
function commentsDelete() {
  return API_URL + 'typechoComments/commentsDelete';
}), _defineProperty(_module$exports, "commentsAudit",
function commentsAudit() {
  return API_URL + 'typechoComments/commentsAudit';
}), _defineProperty(_module$exports, "getMetaContents",



function getMetaContents() {
  return API_URL + 'typechoMetas/selectContents';
}), _defineProperty(_module$exports, "getMetasList",
function getMetasList() {
  return API_URL + 'typechoMetas/metasList';
}), _defineProperty(_module$exports, "geMetaInfo",
function geMetaInfo() {
  return API_URL + 'typechoMetas/metaInfo';
}), _defineProperty(_module$exports, "editMeta",
function editMeta() {
  return API_URL + 'typechoMetas/editMeta';
}), _defineProperty(_module$exports, "getContentsList",

function getContentsList() {
  return API_URL + 'typechoContents/contentsList';
}), _defineProperty(_module$exports, "getContentsInfo",
function getContentsInfo() {
  return API_URL + 'typechoContents/contentsInfo';
}), _defineProperty(_module$exports, "contentsAdd",
function contentsAdd() {
  return API_URL + 'typechoContents/contentsAdd';
}), _defineProperty(_module$exports, "contentsUpdate",

function contentsUpdate() {
  return API_URL + 'typechoContents/contentsUpdate';
}), _defineProperty(_module$exports, "contentsImage",
function contentsImage() {
  return API_URL + 'typechoContents/ImagePexels';
}), _defineProperty(_module$exports, "allData",
function allData() {
  return API_URL + 'typechoContents/allData';
}), _defineProperty(_module$exports, "contentsDelete",
function contentsDelete() {
  return API_URL + 'typechoContents/contentsDelete';
}), _defineProperty(_module$exports, "contentsAudit",
function contentsAudit() {
  return API_URL + 'typechoContents/contentsAudit';
}), _defineProperty(_module$exports, "getForeverblog",
function getForeverblog() {
  return API_URL + 'typechoContents/foreverblog';
}), _defineProperty(_module$exports, "isCommnet",

function isCommnet() {
  return API_URL + 'typechoContents/isCommnet';
}), _defineProperty(_module$exports, "toRecommend",

function toRecommend() {
  return API_URL + 'typechoContents/toRecommend';
}), _defineProperty(_module$exports, "upload",

function upload() {
  //return API_URL + 'upload/ossUpload';//OSS对象存储接口
  return API_URL + 'upload/cosUpload'; //COS对象存储接口
  //return API_URL + 'upload/ftpUpload'; //远程ftp上传接口
  //return API_URL + 'upload/localUpload'; //本地上传接口
}), _defineProperty(_module$exports, "shopList",
function shopList() {
  return API_URL + 'typechoShop/shopList';
}), _defineProperty(_module$exports, "shopInfo",
function shopInfo() {
  return API_URL + 'typechoShop/shopInfo';
}), _defineProperty(_module$exports, "addShop",
function addShop() {
  return API_URL + 'typechoShop/addShop';
}), _defineProperty(_module$exports, "editShop",
function editShop() {
  return API_URL + 'typechoShop/editShop';
}), _defineProperty(_module$exports, "deleteShop",
function deleteShop() {
  return API_URL + 'typechoShop/deleteShop';
}), _defineProperty(_module$exports, "buyShop",
function buyShop() {
  return API_URL + 'typechoShop/buyShop';
}), _defineProperty(_module$exports, "isBuyShop",
function isBuyShop() {
  return API_URL + 'typechoShop/isBuyShop';
}), _defineProperty(_module$exports, "auditShop",
function auditShop() {
  return API_URL + 'typechoShop/auditShop';
}), _defineProperty(_module$exports, "getVipInfo",
function getVipInfo() {
  return API_URL + 'typechoShop/vipInfo';
}), _defineProperty(_module$exports, "buyVIP",
function buyVIP() {
  return API_URL + 'typechoShop/buyVIP';
}), _defineProperty(_module$exports, "orderList",
function orderList() {
  return API_URL + 'typechoUserlog/orderList';
}), _defineProperty(_module$exports, "orderSellList",
function orderSellList() {
  return API_URL + 'typechoUserlog/orderSellList';
}), _defineProperty(_module$exports, "mountShop",


function mountShop() {
  return API_URL + 'typechoShop/mountShop';
}), _defineProperty(_module$exports, "scancodePay",

function scancodePay() {
  return API_URL + 'pay/scancodePay';
}), _defineProperty(_module$exports, "wxPay",

function wxPay() {
  return API_URL + 'pay/WxPay';
}), _defineProperty(_module$exports, "tokenPay",

function tokenPay() {
  return API_URL + 'pay/tokenPay';
}), _defineProperty(_module$exports, "qrCode",


function qrCode() {
  return API_URL + 'pay/qrCode';
}), _defineProperty(_module$exports, "payLogList",
function payLogList() {
  return API_URL + 'pay/payLogList';
}), _defineProperty(_module$exports, "tokenPayList",

function tokenPayList() {
  return API_URL + 'pay/tokenPayList';
}), _defineProperty(_module$exports, "tokenPayExcel",
function tokenPayExcel() {
  return API_URL + 'pay/tokenPayExcel';
}), _defineProperty(_module$exports, "madetoken",


function madetoken() {
  return API_URL + 'pay/madetoken';
}), _defineProperty(_module$exports, "IsNull", function IsNull(
obj) {
  return obj != null && obj != undefined;
}), _defineProperty(_module$exports, "randomHexColor", function randomHexColor()
{//随机生成十六进制颜色
  var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
  while (hex.length < 6) {//while循环判断hex位数，少于6位前面加0凑够6位
    hex = '0' + hex;
  }
  return '#' + hex; //返回‘#'开头16进制颜色
}), _defineProperty(_module$exports, "formatDate", function formatDate(

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
}), _defineProperty(_module$exports, "removeObjectEmptyKey", function removeObjectEmptyKey(

json) {
  var value;
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      value = json[key];
      if (value === undefined || value === '' || value === null) {
        delete json[key];
      }
    }
  }
  return json;
}), _module$exports);

/***/ }),

/***/ 23:
/*!****************************************!*\
  !*** E:/APPpro/voss/规则之树/utils/net.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var requestHandler = {
  url: '',
  data: {},
  method: '',
  success: function success(res) {
  },
  fail: function fail() {
  },
  complete: function complete() {
  } };


function request(requestHandler) {
  var data = requestHandler.data;
  var url = requestHandler.url;
  var method = requestHandler.method;
  wx.request({
    url: url,
    data: data,
    method: method,
    success: function success(res) {
      requestHandler.success(res);
    },
    fail: function fail() {
      requestHandler.fail();
    },
    complete: function complete() {
    } });

}

module.exports = {
  request: request };

/***/ }),

/***/ 238:
/*!****************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/markdown/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview markdown 插件
 * Include marked (https://github.com/markedjs/marked)
 * Include github-markdown-css (https://github.com/sindresorhus/github-markdown-css)
 */var _require =
__webpack_require__(/*! ./marked.min */ 239),marked = _require.marked;
var index = 0;

function Markdown(vm) {
  this.vm = vm;
  vm._ids = {};
}

Markdown.prototype.onUpdate = function (content) {
  if (this.vm.markdown) {
    return marked(content);
  }
};

Markdown.prototype.onParse = function (node, vm) {
  if (vm.options.markdown) {
    // 中文 id 需要转换，否则无法跳转
    if (vm.options.useAnchor && node.attrs && /[\u4e00-\u9fa5]/.test(node.attrs.id)) {
      var id = 't' + index++;
      this.vm._ids[node.attrs.id] = id;
      node.attrs.id = id;
    }
    if (node.name === 'p' || node.name === 'table' || node.name === 'tr' || node.name === 'th' || node.name === 'td' || node.name === 'blockquote' || node.name === 'pre' || node.name === 'code') {
      node.attrs.class = "md-".concat(node.name, " ").concat(node.attrs.class || '');
    }
  }
};

module.exports = Markdown;

/***/ }),

/***/ 239:
/*!*********************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/markdown/marked.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function (e, t) { true ? t(exports) : undefined;}(this, function (r) {"use strict";function i(e, t) {for (var u = 0; u < t.length; u++) {var n = t[u];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);}}function s(e, t) {(null == t || t > e.length) && (t = e.length);for (var u = 0, n = new Array(t); u < t; u++) {n[u] = e[u];}return n;}function x(e, t) {var u = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];if (u) return (u = u.call(e)).next.bind(u);if (Array.isArray(e) || (u = function (e, t) {if (e) {if ("string" == typeof e) return s(e, t);var u = Object.prototype.toString.call(e).slice(8, -1);return "Map" === (u = "Object" === u && e.constructor ? e.constructor.name : u) || "Set" === u ? Array.from(e) : "Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? s(e, t) : void 0;}}(e)) || t && e && "number" == typeof e.length) {u && (e = u);var n = 0;return function () {return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function e() {return { baseUrl: null, breaks: !1, extensions: null, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, walkTokens: null, xhtml: !1 };}r.defaults = e();function u(e) {return t[e];}var n = /[&<>"']/,l = /[&<>"']/g,a = /[<>"']|&(?!#?\w+;)/,o = /[<>"']|&(?!#?\w+;)/g,t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };function D(e, t) {if (t) {if (n.test(e)) return e.replace(l, u);} else if (a.test(e)) return e.replace(o, u);return e;}var c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(e) {return e.replace(c, function (e, t) {return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";});}var h = /(^|[^\[])\^/g;function p(u, e) {u = u.source || u, e = e || "";var n = { replace: function replace(e, t) {return t = (t = t.source || t).replace(h, "$1"), u = u.replace(e, t), n;}, getRegex: function getRegex() {return new RegExp(u, e);} };return n;}var f = /[^\w:]/g,g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function F(e, t, u) {if (e) {var n;try {n = decodeURIComponent(m(u)).replace(f, "").toLowerCase();} catch (e) {return null;}if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null;}t && !g.test(u) && (u = function (e, t) {A[" " + e] || (d.test(e) ? A[" " + e] = e + "/" : A[" " + e] = w(e, "/", !0));var u = -1 === (e = A[" " + e]).indexOf(":");return "//" === t.substring(0, 2) ? u ? t : e.replace(C, "$1") + t : "/" === t.charAt(0) ? u ? t : e.replace(k, "$1") + t : e + t;}(t, u));try {u = encodeURI(u).replace(/%25/g, "%");} catch (e) {return null;}return u;}var A = {},d = /^[^:]+:\/*[^/]*$/,C = /^([^:]+:)[\s\S]*$/,k = /^([^:]+:\/*[^/]*)[\s\S]*$/;var E = { exec: function exec() {} };function b(e) {for (var t, u, n = 1; n < arguments.length; n++) {for (u in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);}}return e;}function B(e, t) {var u = e.replace(/\|/g, function (e, t, u) {for (var n = !1, r = t; 0 <= --r && "\\" === u[r];) {n = !n;}return n ? "|" : " |";}).split(/ \|/),n = 0;if (u[0].trim() || u.shift(), 0 < u.length && !u[u.length - 1].trim() && u.pop(), u.length > t) u.splice(t);else for (; u.length < t;) {u.push("");}for (; n < u.length; n++) {u[n] = u[n].trim().replace(/\\\|/g, "|");}return u;}function w(e, t, u) {var n = e.length;if (0 === n) return "";for (var r = 0; r < n;) {var i = e.charAt(n - r - 1);if (i !== t || u) {if (i === t || !u) break;r++;} else r++;}return e.substr(0, n - r);}function v(e) {e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");}function y(e, t) {if (t < 1) return "";for (var u = ""; 1 < t;) {1 & t && (u += e), t >>= 1, e += e;}return u + e;}function _(e, t, u, n) {var r = t.href,i = t.title ? D(t.title) : null,t = e[1].replace(/\\([\[\]])/g, "$1");if ("!" === e[0].charAt(0)) return { type: "image", raw: u, href: r, title: i, text: D(t) };n.state.inLink = !0;t = { type: "link", raw: u, href: r, title: i, text: t, tokens: n.inlineTokens(t, []) };return n.state.inLink = !1, t;}var z = function () {function e(e) {this.options = e || r.defaults;}var t = e.prototype;return t.space = function (e) {e = this.rules.block.newline.exec(e);if (e && 0 < e[0].length) return { type: "space", raw: e[0] };}, t.code = function (e) {var t = this.rules.block.code.exec(e);if (t) {e = t[0].replace(/^ {1,4}/gm, "");return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? e : w(e, "\n") };}}, t.fences = function (e) {var t = this.rules.block.fences.exec(e);if (t) {var u = t[0],e = function (e, t) {if (null === (e = e.match(/^(\s+)(?:```)/))) return t;var u = e[1];return t.split("\n").map(function (e) {var t = e.match(/^\s+/);return null !== t && t[0].length >= u.length ? e.slice(u.length) : e;}).join("\n");}(u, t[3] || "");return { type: "code", raw: u, lang: t[2] && t[2].trim(), text: e };}}, t.heading = function (e) {var t = this.rules.block.heading.exec(e);if (t) {var u = t[2].trim();/#$/.test(u) && (e = w(u, "#"), !this.options.pedantic && e && !/ $/.test(e) || (u = e.trim()));u = { type: "heading", raw: t[0], depth: t[1].length, text: u, tokens: [] };return this.lexer.inline(u.text, u.tokens), u;}}, t.hr = function (e) {e = this.rules.block.hr.exec(e);if (e) return { type: "hr", raw: e[0] };}, t.blockquote = function (e) {var t = this.rules.block.blockquote.exec(e);if (t) {e = t[0].replace(/^ *> ?/gm, "");return { type: "blockquote", raw: t[0], tokens: this.lexer.blockTokens(e, []), text: e };}}, t.list = function (e) {var t = this.rules.block.list.exec(e);if (t) {var u,n,r,i,s,l,a,o,D,c,h,p = 1 < (g = t[1].trim()).length,f = { type: "list", raw: "", ordered: p, start: p ? +g.slice(0, -1) : "", loose: !1, items: [] },g = p ? "\\d{1,9}\\" + g.slice(-1) : "\\" + g;this.options.pedantic && (g = p ? g : "[*+-]");for (var F = new RegExp("^( {0,3}" + g + ")((?: [^\\n]*)?(?:\\n|$))"); e && (h = !1, t = F.exec(e)) && !this.rules.block.hr.test(e);) {if (u = t[0], e = e.substring(u.length), a = t[2].split("\n", 1)[0], o = e.split("\n", 1)[0], this.options.pedantic ? (i = 2, c = a.trimLeft()) : (i = t[2].search(/[^ ]/), c = a.slice(i = 4 < i ? 1 : i), i += t[1].length), s = !1, !a && /^ *$/.test(o) && (u += o + "\n", e = e.substring(o.length + 1), h = !0), !h) for (var A = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:[*+-]|\\d{1,9}[.)])"); e && (a = D = e.split("\n", 1)[0], this.options.pedantic && (a = a.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !A.test(a));) {if (a.search(/[^ ]/) >= i || !a.trim()) c += "\n" + a.slice(i);else {if (s) break;c += "\n" + a;}s || a.trim() || (s = !0), u += D + "\n", e = e.substring(D.length + 1);}f.loose || (l ? f.loose = !0 : /\n *\n *$/.test(u) && (l = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(c)) && (r = "[ ] " !== n[0], c = c.replace(/^\[[ xX]\] +/, "")), f.items.push({ type: "list_item", raw: u, task: !!n, checked: r, loose: !1, text: c }), f.raw += u;}f.items[f.items.length - 1].raw = u.trimRight(), f.items[f.items.length - 1].text = c.trimRight(), f.raw = f.raw.trimRight();for (var d = f.items.length, C = 0; C < d; C++) {this.lexer.state.top = !1, f.items[C].tokens = this.lexer.blockTokens(f.items[C].text, []);var k = f.items[C].tokens.filter(function (e) {return "space" === e.type;}),E = k.every(function (e) {for (var t, u = 0, n = x(e.raw.split("")); !(t = n()).done;) {if ("\n" === t.value && (u += 1), 1 < u) return !0;}return !1;});!f.loose && k.length && E && (f.loose = !0, f.items[C].loose = !0);}return f;}}, t.html = function (e) {var t = this.rules.block.html.exec(e);if (t) {e = { type: "html", raw: t[0], pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]), text: t[0] };return this.options.sanitize && (e.type = "paragraph", e.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : D(t[0]), e.tokens = [], this.lexer.inline(e.text, e.tokens)), e;}}, t.def = function (e) {e = this.rules.block.def.exec(e);if (e) return e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), { type: "def", tag: e[1].toLowerCase().replace(/\s+/g, " "), raw: e[0], href: e[2], title: e[3] };}, t.table = function (e) {e = this.rules.block.table.exec(e);if (e) {var t = { type: "table", header: B(e[1]).map(function (e) {return { text: e };}), align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split("\n") : [] };if (t.header.length === t.align.length) {t.raw = e[0];for (var u, n, r, i = t.align.length, s = 0; s < i; s++) {/^ *-+: *$/.test(t.align[s]) ? t.align[s] = "right" : /^ *:-+: *$/.test(t.align[s]) ? t.align[s] = "center" : /^ *:-+ *$/.test(t.align[s]) ? t.align[s] = "left" : t.align[s] = null;}for (i = t.rows.length, s = 0; s < i; s++) {t.rows[s] = B(t.rows[s], t.header.length).map(function (e) {return { text: e };});}for (i = t.header.length, u = 0; u < i; u++) {t.header[u].tokens = [], this.lexer.inlineTokens(t.header[u].text, t.header[u].tokens);}for (i = t.rows.length, u = 0; u < i; u++) {for (r = t.rows[u], n = 0; n < r.length; n++) {r[n].tokens = [], this.lexer.inlineTokens(r[n].text, r[n].tokens);}}return t;}}}, t.lheading = function (e) {e = this.rules.block.lheading.exec(e);if (e) {e = { type: "heading", raw: e[0], depth: "=" === e[2].charAt(0) ? 1 : 2, text: e[1], tokens: [] };return this.lexer.inline(e.text, e.tokens), e;}}, t.paragraph = function (e) {e = this.rules.block.paragraph.exec(e);if (e) {e = { type: "paragraph", raw: e[0], text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1], tokens: [] };return this.lexer.inline(e.text, e.tokens), e;}}, t.text = function (e) {e = this.rules.block.text.exec(e);if (e) {e = { type: "text", raw: e[0], text: e[0], tokens: [] };return this.lexer.inline(e.text, e.tokens), e;}}, t.escape = function (e) {e = this.rules.inline.escape.exec(e);if (e) return { type: "escape", raw: e[0], text: D(e[1]) };}, t.tag = function (e) {e = this.rules.inline.tag.exec(e);if (e) return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: this.options.sanitize ? "text" : "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : D(e[0]) : e[0] };}, t.link = function (e) {var t = this.rules.inline.link.exec(e);if (t) {e = t[2].trim();if (!this.options.pedantic && /^</.test(e)) {if (!/>$/.test(e)) return;var u = w(e.slice(0, -1), "\\");if ((e.length - u.length) % 2 == 0) return;} else {var n = function (e, t) {if (-1 === e.indexOf(t[1])) return -1;for (var u = e.length, n = 0, r = 0; r < u; r++) {if ("\\" === e[r]) r++;else if (e[r] === t[0]) n++;else if (e[r] === t[1] && --n < 0) return r;}return -1;}(t[2], "()");-1 < n && (r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + n, t[2] = t[2].substring(0, n), t[0] = t[0].substring(0, r).trim(), t[3] = "");}var r,u = t[2],n = "";return this.options.pedantic ? (r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u)) && (u = r[1], n = r[3]) : n = t[3] ? t[3].slice(1, -1) : "", u = u.trim(), _(t, { href: (u = /^</.test(u) ? this.options.pedantic && !/>$/.test(e) ? u.slice(1) : u.slice(1, -1) : u) && u.replace(this.rules.inline._escapes, "$1"), title: n && n.replace(this.rules.inline._escapes, "$1") }, t[0], this.lexer);}}, t.reflink = function (e, t) {if ((u = this.rules.inline.reflink.exec(e)) || (u = this.rules.inline.nolink.exec(e))) {var e = (u[2] || u[1]).replace(/\s+/g, " ");if ((e = t[e.toLowerCase()]) && e.href) return _(u, e, u[0], this.lexer);var u = u[0].charAt(0);return { type: "text", raw: u, text: u };}}, t.emStrong = function (e, t, u) {void 0 === u && (u = "");var n = this.rules.inline.emStrong.lDelim.exec(e);if (n && (!n[3] || !u.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {var r = n[1] || n[2] || "";if (!r || "" === u || this.rules.inline.punctuation.exec(u)) {var i,s = n[0].length - 1,l = s,a = 0,o = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;for (o.lastIndex = 0, t = t.slice(-1 * e.length + s); null != (n = o.exec(t));) {if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]) if (i = i.length, n[3] || n[4]) l += i;else if (!((n[5] || n[6]) && s % 3) || (s + i) % 3) {if (!(0 < (l -= i))) {if (i = Math.min(i, i + l + a), Math.min(s, i) % 2) {var D = e.slice(1, s + n.index + i);return { type: "em", raw: e.slice(0, s + n.index + i + 1), text: D, tokens: this.lexer.inlineTokens(D, []) };}D = e.slice(2, s + n.index + i - 1);return { type: "strong", raw: e.slice(0, s + n.index + i + 1), text: D, tokens: this.lexer.inlineTokens(D, []) };}} else a += i;}}}}, t.codespan = function (e) {var t = this.rules.inline.code.exec(e);if (t) {var u = t[2].replace(/\n/g, " "),n = /[^ ]/.test(u),e = /^ /.test(u) && / $/.test(u),u = D(u = n && e ? u.substring(1, u.length - 1) : u, !0);return { type: "codespan", raw: t[0], text: u };}}, t.br = function (e) {e = this.rules.inline.br.exec(e);if (e) return { type: "br", raw: e[0] };}, t.del = function (e) {e = this.rules.inline.del.exec(e);if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2], []) };}, t.autolink = function (e, t) {e = this.rules.inline.autolink.exec(e);if (e) {var u,t = "@" === e[2] ? "mailto:" + (u = D(this.options.mangle ? t(e[1]) : e[1])) : u = D(e[1]);return { type: "link", raw: e[0], text: u, href: t, tokens: [{ type: "text", raw: u, text: u }] };}}, t.url = function (e, t) {var u, n, r, i;if (u = this.rules.inline.url.exec(e)) {if ("@" === u[2]) r = "mailto:" + (n = D(this.options.mangle ? t(u[0]) : u[0]));else {for (; i = u[0], u[0] = this.rules.inline._backpedal.exec(u[0])[0], i !== u[0];) {;}n = D(u[0]), r = "www." === u[1] ? "http://" + n : n;}return { type: "link", raw: u[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };}}, t.inlineText = function (e, t) {e = this.rules.inline.text.exec(e);if (e) {t = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : D(e[0]) : e[0] : D(this.options.smartypants ? t(e[0]) : e[0]);return { type: "text", raw: e[0], text: t };}}, e;}(),$ = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: E, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };$.def = p($.def).replace("label", $._label).replace("title", $._title).getRegex(), $.bullet = /(?:[*+-]|\d{1,9}[.)])/, $.listItemStart = p(/^( *)(bull) */).replace("bull", $.bullet).getRegex(), $.list = p($.list).replace(/bull/g, $.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + $.def.source + ")").getRegex(), $._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, $.html = p($.html, "i").replace("comment", $._comment).replace("tag", $._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $.paragraph = p($._paragraph).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.blockquote = p($.blockquote).replace("paragraph", $.paragraph).getRegex(), $.normal = b({}, $), $.gfm = b({}, $.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), $.gfm.table = p($.gfm.table).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.gfm.paragraph = p($._paragraph).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", $.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.pedantic = b({}, $.normal, { html: p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", $._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: E, paragraph: p($.normal._paragraph).replace("hr", $.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", $.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });var S = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: E, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: E, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };function T(e) {return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");}function R(e) {for (var t, u = "", n = e.length, r = 0; r < n; r++) {t = e.charCodeAt(r), u += "&#" + (t = .5 < Math.random() ? "x" + t.toString(16) : t) + ";";}return u;}S._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", S.punctuation = p(S.punctuation).replace(/punctuation/g, S._punctuation).getRegex(), S.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, S.escapedEmSt = /\\\*|\\_/g, S._comment = p($._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), S.emStrong.lDelim = p(S.emStrong.lDelim).replace(/punct/g, S._punctuation).getRegex(), S.emStrong.rDelimAst = p(S.emStrong.rDelimAst, "g").replace(/punct/g, S._punctuation).getRegex(), S.emStrong.rDelimUnd = p(S.emStrong.rDelimUnd, "g").replace(/punct/g, S._punctuation).getRegex(), S._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, S._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, S._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, S.autolink = p(S.autolink).replace("scheme", S._scheme).replace("email", S._email).getRegex(), S._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, S.tag = p(S.tag).replace("comment", S._comment).replace("attribute", S._attribute).getRegex(), S._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, S._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, S._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, S.link = p(S.link).replace("label", S._label).replace("href", S._href).replace("title", S._title).getRegex(), S.reflink = p(S.reflink).replace("label", S._label).replace("ref", $._label).getRegex(), S.nolink = p(S.nolink).replace("ref", $._label).getRegex(), S.reflinkSearch = p(S.reflinkSearch, "g").replace("reflink", S.reflink).replace("nolink", S.nolink).getRegex(), S.normal = b({}, S), S.pedantic = b({}, S.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: p(/^!?\[(label)\]\((.*?)\)/).replace("label", S._label).getRegex(), reflink: p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", S._label).getRegex() }), S.gfm = b({}, S.normal, { escape: p(S.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), S.gfm.url = p(S.gfm.url, "i").replace("email", S.gfm._extended_email).getRegex(), S.breaks = b({}, S.gfm, { br: p(S.br).replace("{2,}", "*").getRegex(), text: p(S.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });var I = function () {function u(e) {this.tokens = [], this.tokens.links = Object.create(null), this.options = e || r.defaults, this.options.tokenizer = this.options.tokenizer || new z(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, (this.tokenizer.lexer = this).inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };e = { block: $.normal, inline: S.normal };this.options.pedantic ? (e.block = $.pedantic, e.inline = S.pedantic) : this.options.gfm && (e.block = $.gfm, this.options.breaks ? e.inline = S.breaks : e.inline = S.gfm), this.tokenizer.rules = e;}u.lex = function (e, t) {return new u(t).lex(e);}, u.lexInline = function (e, t) {return new u(t).inlineTokens(e);};var e,t,n = u.prototype;return n.lex = function (e) {var t;for (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) {this.inlineTokens(t.src, t.tokens);}return this.tokens;}, n.blockTokens = function (r, t) {var u,e,i,n,s = this;for (void 0 === t && (t = []), this.options.pedantic && (r = r.replace(/^ +$/gm, "")); r;) {if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (e) {return !!(u = e.call({ lexer: s }, r, t)) && (r = r.substring(u.raw.length), t.push(u), !0);}))) if (u = this.tokenizer.space(r)) r = r.substring(u.raw.length), 1 === u.raw.length && 0 < t.length ? t[t.length - 1].raw += "\n" : t.push(u);else if (u = this.tokenizer.code(r)) r = r.substring(u.raw.length), !(e = t[t.length - 1]) || "paragraph" !== e.type && "text" !== e.type ? t.push(u) : (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue[this.inlineQueue.length - 1].src = e.text);else if (u = this.tokenizer.fences(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.heading(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.hr(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.blockquote(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.list(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.html(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.def(r)) r = r.substring(u.raw.length), !(e = t[t.length - 1]) || "paragraph" !== e.type && "text" !== e.type ? this.tokens.links[u.tag] || (this.tokens.links[u.tag] = { href: u.href, title: u.title }) : (e.raw += "\n" + u.raw, e.text += "\n" + u.raw, this.inlineQueue[this.inlineQueue.length - 1].src = e.text);else if (u = this.tokenizer.table(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.lheading(r)) r = r.substring(u.raw.length), t.push(u);else if (i = r, this.options.extensions && this.options.extensions.startBlock && function () {var t,u = 1 / 0,n = r.slice(1);s.options.extensions.startBlock.forEach(function (e) {"number" == typeof (t = e.call({ lexer: this }, n)) && 0 <= t && (u = Math.min(u, t));}), u < 1 / 0 && 0 <= u && (i = r.substring(0, u + 1));}(), this.state.top && (u = this.tokenizer.paragraph(i))) e = t[t.length - 1], n && "paragraph" === e.type ? (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e.text) : t.push(u), n = i.length !== r.length, r = r.substring(u.raw.length);else if (u = this.tokenizer.text(r)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === e.type ? (e.raw += "\n" + u.raw, e.text += "\n" + u.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e.text) : t.push(u);else if (r) {var l = "Infinite loop on byte: " + r.charCodeAt(0);if (this.options.silent) {console.error(l);break;}throw new Error(l);}}return this.state.top = !0, t;}, n.inline = function (e, t) {this.inlineQueue.push({ src: e, tokens: t });}, n.inlineTokens = function (r, t) {var u,e,i,s = this;void 0 === t && (t = []);var n,l,a,o = r;if (this.tokens.links) {var D = Object.keys(this.tokens.links);if (0 < D.length) for (; null != (n = this.tokenizer.rules.inline.reflinkSearch.exec(o));) {D.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, n.index) + "[" + y("a", n[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));}}for (; null != (n = this.tokenizer.rules.inline.blockSkip.exec(o));) {o = o.slice(0, n.index) + "[" + y("a", n[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);}for (; null != (n = this.tokenizer.rules.inline.escapedEmSt.exec(o));) {o = o.slice(0, n.index) + "++" + o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);}for (; r;) {if (l || (a = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (e) {return !!(u = e.call({ lexer: s }, r, t)) && (r = r.substring(u.raw.length), t.push(u), !0);}))) if (u = this.tokenizer.escape(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.tag(r)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === u.type && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (u = this.tokenizer.link(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.reflink(r, this.tokens.links)) r = r.substring(u.raw.length), (e = t[t.length - 1]) && "text" === u.type && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (u = this.tokenizer.emStrong(r, o, a)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.codespan(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.br(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.del(r)) r = r.substring(u.raw.length), t.push(u);else if (u = this.tokenizer.autolink(r, R)) r = r.substring(u.raw.length), t.push(u);else if (this.state.inLink || !(u = this.tokenizer.url(r, R))) {if (i = r, this.options.extensions && this.options.extensions.startInline && function () {var t,u = 1 / 0,n = r.slice(1);s.options.extensions.startInline.forEach(function (e) {"number" == typeof (t = e.call({ lexer: this }, n)) && 0 <= t && (u = Math.min(u, t));}), u < 1 / 0 && 0 <= u && (i = r.substring(0, u + 1));}(), u = this.tokenizer.inlineText(i, T)) r = r.substring(u.raw.length), "_" !== u.raw.slice(-1) && (a = u.raw.slice(-1)), l = !0, (e = t[t.length - 1]) && "text" === e.type ? (e.raw += u.raw, e.text += u.text) : t.push(u);else if (r) {var c = "Infinite loop on byte: " + r.charCodeAt(0);if (this.options.silent) {console.error(c);break;}throw new Error(c);}} else r = r.substring(u.raw.length), t.push(u);}return t;}, e = u, t = [{ key: "rules", get: function get() {return { block: $, inline: S };} }], (n = null) && i(e.prototype, n), t && i(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), u;}(),Z = function () {function e(e) {this.options = e || r.defaults;}var t = e.prototype;return t.code = function (e, t, u) {var n = (t || "").match(/\S*/)[0];return !this.options.highlight || null != (t = this.options.highlight(e, n)) && t !== e && (u = !0, e = t), e = e.replace(/\n$/, "") + "\n", n ? '<pre><code class="' + this.options.langPrefix + D(n, !0) + '">' + (u ? e : D(e, !0)) + "</code></pre>\n" : "<pre><code>" + (u ? e : D(e, !0)) + "</code></pre>\n";}, t.blockquote = function (e) {return "<blockquote>\n" + e + "</blockquote>\n";}, t.html = function (e) {return e;}, t.heading = function (e, t, u, n) {return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.slug(u) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";}, t.hr = function () {return this.options.xhtml ? "<hr/>\n" : "<hr>\n";}, t.list = function (e, t, u) {var n = t ? "ol" : "ul";return "<" + n + (t && 1 !== u ? ' start="' + u + '"' : "") + ">\n" + e + "</" + n + ">\n";}, t.listitem = function (e) {return "<li>" + e + "</li>\n";}, t.checkbox = function (e) {return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";}, t.paragraph = function (e) {return "<p>" + e + "</p>\n";}, t.table = function (e, t) {return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n";}, t.tablerow = function (e) {return "<tr>\n" + e + "</tr>\n";}, t.tablecell = function (e, t) {var u = t.header ? "th" : "td";return (t.align ? "<" + u + ' align="' + t.align + '">' : "<" + u + ">") + e + "</" + u + ">\n";}, t.strong = function (e) {return "<strong>" + e + "</strong>";}, t.em = function (e) {return "<em>" + e + "</em>";}, t.codespan = function (e) {return "<code>" + e + "</code>";}, t.br = function () {return this.options.xhtml ? "<br/>" : "<br>";}, t.del = function (e) {return "<del>" + e + "</del>";}, t.link = function (e, t, u) {if (null === (e = F(this.options.sanitize, this.options.baseUrl, e))) return u;e = '<a href="' + D(e) + '"';return t && (e += ' title="' + t + '"'), e += ">" + u + "</a>";}, t.image = function (e, t, u) {if (null === (e = F(this.options.sanitize, this.options.baseUrl, e))) return u;u = '<img src="' + e + '" alt="' + u + '"';return t && (u += ' title="' + t + '"'), u += this.options.xhtml ? "/>" : ">";}, t.text = function (e) {return e;}, e;}(),O = function () {function e() {}var t = e.prototype;return t.strong = function (e) {return e;}, t.em = function (e) {return e;}, t.codespan = function (e) {return e;}, t.del = function (e) {return e;}, t.html = function (e) {return e;}, t.text = function (e) {return e;}, t.link = function (e, t, u) {return "" + u;}, t.image = function (e, t, u) {return "" + u;}, t.br = function () {return "";}, e;}(),q = function () {function e() {this.seen = {};}var t = e.prototype;return t.serialize = function (e) {return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");}, t.getNextSafeSlug = function (e, t) {var u = e,n = 0;if (this.seen.hasOwnProperty(u)) for (n = this.seen[e]; u = e + "-" + ++n, this.seen.hasOwnProperty(u);) {;}return t || (this.seen[e] = n, this.seen[u] = 0), u;}, t.slug = function (e, t) {void 0 === t && (t = {});e = this.serialize(e);return this.getNextSafeSlug(e, t.dryrun);}, e;}(),L = function () {function u(e) {this.options = e || r.defaults, this.options.renderer = this.options.renderer || new Z(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new O(), this.slugger = new q();}u.parse = function (e, t) {return new u(t).parse(e);}, u.parseInline = function (e, t) {return new u(t).parseInline(e);};var e = u.prototype;return e.parse = function (e, t) {void 0 === t && (t = !0);for (var u, n, r, i, s, l, a, o, D, c, h, p, f, g, F, A, d = "", C = e.length, k = 0; k < C; k++) {if (o = e[k], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) || !1 === (A = this.options.extensions.renderers[o.type].call({ parser: this }, o)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) switch (o.type) {case "space":continue;case "hr":d += this.renderer.hr();continue;case "heading":d += this.renderer.heading(this.parseInline(o.tokens), o.depth, m(this.parseInline(o.tokens, this.textRenderer)), this.slugger);continue;case "code":d += this.renderer.code(o.text, o.lang, o.escaped);continue;case "table":for (l = D = "", r = o.header.length, u = 0; u < r; u++) {l += this.renderer.tablecell(this.parseInline(o.header[u].tokens), { header: !0, align: o.align[u] });}for (D += this.renderer.tablerow(l), a = "", r = o.rows.length, u = 0; u < r; u++) {for (l = "", i = (s = o.rows[u]).length, n = 0; n < i; n++) {l += this.renderer.tablecell(this.parseInline(s[n].tokens), { header: !1, align: o.align[n] });}a += this.renderer.tablerow(l);}d += this.renderer.table(D, a);continue;case "blockquote":a = this.parse(o.tokens), d += this.renderer.blockquote(a);continue;case "list":for (D = o.ordered, E = o.start, c = o.loose, r = o.items.length, a = "", u = 0; u < r; u++) {f = (p = o.items[u]).checked, g = p.task, h = "", p.task && (F = this.renderer.checkbox(f), c ? 0 < p.tokens.length && "paragraph" === p.tokens[0].type ? (p.tokens[0].text = F + " " + p.tokens[0].text, p.tokens[0].tokens && 0 < p.tokens[0].tokens.length && "text" === p.tokens[0].tokens[0].type && (p.tokens[0].tokens[0].text = F + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: F }) : h += F), h += this.parse(p.tokens, c), a += this.renderer.listitem(h, g, f);}d += this.renderer.list(a, D, E);continue;case "html":d += this.renderer.html(o.text);continue;case "paragraph":d += this.renderer.paragraph(this.parseInline(o.tokens));continue;case "text":for (a = o.tokens ? this.parseInline(o.tokens) : o.text; k + 1 < C && "text" === e[k + 1].type;) {a += "\n" + ((o = e[++k]).tokens ? this.parseInline(o.tokens) : o.text);}d += t ? this.renderer.paragraph(a) : a;continue;default:var E = 'Token with "' + o.type + '" type was not found.';if (this.options.silent) return void console.error(E);throw new Error(E);} else d += A || "";}return d;}, e.parseInline = function (e, t) {t = t || this.renderer;for (var u, n, r = "", i = e.length, s = 0; s < i; s++) {if (u = e[s], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u.type]) || !1 === (n = this.options.extensions.renderers[u.type].call({ parser: this }, u)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(u.type)) switch (u.type) {case "escape":r += t.text(u.text);break;case "html":r += t.html(u.text);break;case "link":r += t.link(u.href, u.title, this.parseInline(u.tokens, t));break;case "image":r += t.image(u.href, u.title, u.text);break;case "strong":r += t.strong(this.parseInline(u.tokens, t));break;case "em":r += t.em(this.parseInline(u.tokens, t));break;case "codespan":r += t.codespan(u.text);break;case "br":r += t.br();break;case "del":r += t.del(this.parseInline(u.tokens, t));break;case "text":r += t.text(u.text);break;default:var l = 'Token with "' + u.type + '" type was not found.';if (this.options.silent) return void console.error(l);throw new Error(l);} else r += n || "";}return r;}, u;}();function j(e, u, n) {if (null == e) throw new Error("marked(): input parameter is undefined or null");if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");if ("function" == typeof u && (n = u, u = null), v(u = b({}, j.defaults, u || {})), n) {var r,i = u.highlight;try {r = I.lex(e, u);} catch (e) {return n(e);}var s = function s(t) {var e;if (!t) try {u.walkTokens && j.walkTokens(r, u.walkTokens), e = L.parse(r, u);} catch (e) {t = e;}return u.highlight = i, t ? n(t) : n(null, e);};if (!i || i.length < 3) return s();if (delete u.highlight, !r.length) return s();var l = 0;return j.walkTokens(r, function (u) {"code" === u.type && (l++, setTimeout(function () {i(u.text, u.lang, function (e, t) {return e ? s(e) : (null != t && t !== u.text && (u.text = t, u.escaped = !0), void (0 === --l && s()));});}, 0));}), void (0 === l && s());}try {var t = I.lex(e, u);return u.walkTokens && j.walkTokens(t, u.walkTokens), L.parse(t, u);} catch (e) {if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", u.silent) return "<p>An error occurred:</p><pre>" + D(e.message + "", !0) + "</pre>";throw e;}}j.options = j.setOptions = function (e) {return b(j.defaults, e), e = j.defaults, r.defaults = e, j;}, j.getDefaults = e, j.defaults = r.defaults, j.use = function () {for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) {t[u] = arguments[u];}var n,r = b.apply(void 0, [{}].concat(t)),s = j.defaults.extensions || { renderers: {}, childTokens: {} };t.forEach(function (l) {var t;l.extensions && (n = !0, l.extensions.forEach(function (r) {if (!r.name) throw new Error("extension name required");var i;if (r.renderer && (i = s.renderers ? s.renderers[r.name] : null, s.renderers[r.name] = i ? function () {for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) {t[u] = arguments[u];}var n = r.renderer.apply(this, t);return n = !1 === n ? i.apply(this, t) : n;} : r.renderer), r.tokenizer) {if (!r.level || "block" !== r.level && "inline" !== r.level) throw new Error("extension level must be 'block' or 'inline'");s[r.level] ? s[r.level].unshift(r.tokenizer) : s[r.level] = [r.tokenizer], r.start && ("block" === r.level ? s.startBlock ? s.startBlock.push(r.start) : s.startBlock = [r.start] : "inline" === r.level && (s.startInline ? s.startInline.push(r.start) : s.startInline = [r.start]));}r.childTokens && (s.childTokens[r.name] = r.childTokens);})), l.renderer && function () {var e,s = j.defaults.renderer || new Z();for (e in l.renderer) {!function (r) {var i = s[r];s[r] = function () {for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) {t[u] = arguments[u];}var n = l.renderer[r].apply(s, t);return n = !1 === n ? i.apply(s, t) : n;};}(e);}r.renderer = s;}(), l.tokenizer && function () {var e,s = j.defaults.tokenizer || new z();for (e in l.tokenizer) {!function (r) {var i = s[r];s[r] = function () {for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++) {t[u] = arguments[u];}var n = l.tokenizer[r].apply(s, t);return n = !1 === n ? i.apply(s, t) : n;};}(e);}r.tokenizer = s;}(), l.walkTokens && (t = j.defaults.walkTokens, r.walkTokens = function (e) {l.walkTokens.call(this, e), t && t.call(this, e);}), n && (r.extensions = s), j.setOptions(r);});}, j.walkTokens = function (e, l) {for (var a, t = x(e); !(a = t()).done;) {!function () {var t = a.value;switch (l.call(j, t), t.type) {case "table":for (var e = x(t.header); !(u = e()).done;) {var u = u.value;j.walkTokens(u.tokens, l);}for (var n, r = x(t.rows); !(n = r()).done;) {for (var i = x(n.value); !(s = i()).done;) {var s = s.value;j.walkTokens(s.tokens, l);}}break;case "list":j.walkTokens(t.items, l);break;default:j.defaults.extensions && j.defaults.extensions.childTokens && j.defaults.extensions.childTokens[t.type] ? j.defaults.extensions.childTokens[t.type].forEach(function (e) {j.walkTokens(t[e], l);}) : t.tokens && j.walkTokens(t.tokens, l);}}();}}, j.parseInline = function (e, t) {if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");v(t = b({}, j.defaults, t || {}));try {var u = I.lexInline(e, t);return t.walkTokens && j.walkTokens(u, t.walkTokens), L.parseInline(u, t);} catch (e) {if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + D(e.message + "", !0) + "</pre>";throw e;}}, j.Parser = L, j.parser = L.parse, j.Renderer = Z, j.TextRenderer = O, j.Lexer = I, j.lexer = I.lex, j.Tokenizer = z, j.Slugger = q;var P = (j.parse = j).options,Q = j.setOptions,U = j.use,M = j.walkTokens,N = j.parseInline,X = j,G = L.parse,E = I.lex;r.Lexer = I, r.Parser = L, r.Renderer = Z, r.Slugger = q, r.TextRenderer = O, r.Tokenizer = z, r.getDefaults = e, r.lexer = E, r.marked = j, r.options = P, r.parse = X, r.parseInline = N, r.parser = G, r.setOptions = Q, r.use = U, r.walkTokens = M, Object.defineProperty(r, "__esModule", { value: !0 });});

/***/ }),

/***/ 240:
/*!*************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/audio/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview audio 插件
 */
var context = __webpack_require__(/*! ./context */ 241);
var index = 0;

function Audio(vm) {
  this.vm = vm;
}

Audio.prototype.onUpdate = function () {
  this.audios = [];
};

Audio.prototype.onParse = function (node) {
  if (node.name === 'audio') {
    if (!node.attrs.id) {
      node.attrs.id = 'a' + index++;
    }
    this.audios.push(node.attrs.id);
  }
};

Audio.prototype.onLoad = function () {var _this = this;
  setTimeout(function () {
    for (var i = 0; i < _this.audios.length; i++) {
      var ctx = context.get(_this.audios[i]);
      ctx.id = _this.audios[i];
      _this.vm._videos.push(ctx);
    }
  }, 50);
};

module.exports = Audio;

/***/ }),

/***/ 241:
/*!***************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/audio/context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ctx = {};

module.exports = {
  get: function get(id) {return ctx[id];},
  set: function set(id, vm) {ctx[id] = vm;},
  remove: function remove(id) {ctx[id] = undefined;} };

/***/ }),

/***/ 242:
/*!*****************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/highlight/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview highlight 插件
 * Include prismjs (https://prismjs.com)
 */
var prism = __webpack_require__(/*! ./prism.min */ 243);
var config = __webpack_require__(/*! ./config */ 244);
var Parser = __webpack_require__(/*! ../parser */ 245);

function Highlight(vm) {
  this.vm = vm;
}

Highlight.prototype.onParse = function (node, vm) {
  if (node.name === 'pre') {
    var i;
    for (i = node.children.length; i--;) {
      if (node.children[i].name === 'code') break;
    }
    if (i === -1) return;
    var code = node.children[i];
    var className = code.attrs.class || '';
    i = className.indexOf('language-');
    if (i === -1) {
      className = node.attrs.class || '';
      i = className.indexOf('language-');
    }
    if (i === -1) {
      //类型为text的自动变成html
      className = 'language-javascript';
      i = className.indexOf('language-');
    }
    i += 9;
    var j;
    for (j = i; j < className.length; j++) {
      if (className[j] === ' ') break;
    }
    var lang = className.substring(i, j);

    if (code.children.length && code.children[0].type === 'text') {
      var text = code.children[0].text.replace(/&amp;/g, '&');
      if (prism.languages[lang]) {
        code.children = new Parser(this.vm).parse(
        // 加一层 pre 保留空白符
        '<pre>' + prism.highlight(text, prism.languages[lang], lang).replace(/token /g, 'hl-') + '</pre>')[0].children;
      }
      node.attrs.class = 'hl-pre';
      code.attrs.class = 'hl-code';
      if (config.showLanguageName) {
        node.children.push({
          name: 'div',
          attrs: {
            class: 'hl-language',
            style: 'user-select:none' },

          children: [{
            type: 'text',
            text: lang }] });


      }
      if (config.copyByLongPress) {
        node.attrs.style += (node.attrs.style || '') + ';user-select:none';
        node.attrs['data-content'] = text;
        vm.expose();
      }
      if (config.showLineNumber) {
        var line = text.split('\n').length;var children = [];
        for (var k = line; k--;) {
          children.push({
            name: 'span',
            attrs: {
              class: 'span' } });


        }
        node.children.push({
          name: 'span',
          attrs: {
            class: 'line-numbers-rows' },

          children: children });

      }
    }
  }
};

module.exports = Highlight;

/***/ }),

/***/ 243:
/*!*********************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/highlight/prism.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! PrismJS 1.22.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},Prism = function (u) {var c = /\blang(?:uage)?-([\w-]+)\b/i,n = 0,M = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e(n) {return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");}, type: function type(e) {return Object.prototype.toString.call(e).slice(8, -1);}, objId: function objId(e) {return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;}, clone: function t(e, r) {var a, n;switch (r = r || {}, M.util.type(e)) {case "Object":if (n = M.util.objId(e), r[n]) return r[n];for (var i in a = {}, r[n] = a, e) {e.hasOwnProperty(i) && (a[i] = t(e[i], r));}return a;case "Array":return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {a[n] = t(e, r);}), a);default:return e;}}, getLanguage: function getLanguage(e) {for (; e && !c.test(e.className);) {e = e.parentElement;}return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";}, currentScript: function currentScript() {if ("undefined" == typeof document) return null;if ("currentScript" in document) return document.currentScript;try {throw new Error();} catch (e) {var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];if (n) {var t = document.getElementsByTagName("script");for (var r in t) {if (t[r].src == n) return t[r];}}return null;}}, isActive: function isActive(e, n, t) {for (var r = "no-" + n; e;) {var a = e.classList;if (a.contains(n)) return !0;if (a.contains(r)) return !1;e = e.parentElement;}return !!t;} }, languages: { extend: function extend(e, n) {var t = M.util.clone(M.languages[e]);for (var r in n) {t[r] = n[r];}return t;}, insertBefore: function insertBefore(t, e, n, r) {var a = (r = r || M.languages)[t],i = {};for (var l in a) {if (a.hasOwnProperty(l)) {if (l == e) for (var o in n) {n.hasOwnProperty(o) && (i[o] = n[o]);}n.hasOwnProperty(l) || (i[l] = a[l]);}}var s = r[t];return r[t] = i, M.languages.DFS(M.languages, function (e, n) {n === s && e != t && (this[e] = i);}), i;}, DFS: function e(n, t, r, a) {a = a || {};var i = M.util.objId;for (var l in n) {if (n.hasOwnProperty(l)) {t.call(n, l, n[l], r || l);var o = n[l],s = M.util.type(o);"Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a));}}} }, plugins: {}, highlightAll: function highlightAll(e, n) {M.highlightAllUnder(document, e, n);}, highlightAllUnder: function highlightAllUnder(e, n, t) {var r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);for (var a, i = 0; a = r.elements[i++];) {M.highlightElement(a, !0 === n, r.callback);}}, highlightElement: function highlightElement(e, n, t) {var r = M.util.getLanguage(e),a = M.languages[r];e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;var i = e.parentElement;i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);var l = { element: e, language: r, grammar: a, code: e.textContent };function o(e) {l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element);}if (M.hooks.run("before-sanity-check", l), !l.code) return M.hooks.run("complete", l), void (t && t.call(l.element));if (M.hooks.run("before-highlight", l), l.grammar) {if (n && u.Worker) {var s = new Worker(M.filename);s.onmessage = function (e) {o(e.data);}, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));} else o(M.highlight(l.code, l.grammar, l.language));} else o(M.util.encode(l.code));}, highlight: function highlight(e, n, t) {var r = { code: e, grammar: n, language: t };return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language);}, tokenize: function tokenize(e, n) {var t = n.rest;if (t) {for (var r in t) {n[r] = t[r];}delete n.rest;}var a = new i();return I(a, a.head, e), function e(n, t, r, a, i, l) {for (var o in r) {if (r.hasOwnProperty(o) && r[o]) {var s = r[o];s = Array.isArray(s) ? s : [s];for (var u = 0; u < s.length; ++u) {if (l && l.cause == o + "," + u) return;var c = s[u],g = c.inside,f = !!c.lookbehind,h = !!c.greedy,d = 0,v = c.alias;if (h && !c.pattern.global) {var p = c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern = RegExp(c.pattern.source, p + "g");}for (var m = c.pattern || c, y = a.next, k = i; y !== t.tail && !(l && k >= l.reach); k += y.value.length, y = y.next) {var b = y.value;if (t.length > n.length) return;if (!(b instanceof W)) {var x = 1;if (h && y != t.tail.prev) {m.lastIndex = k;var w = m.exec(n);if (!w) break;var A = w.index + (f && w[1] ? w[1].length : 0),P = w.index + w[0].length,S = k;for (S += y.value.length; S <= A;) {y = y.next, S += y.value.length;}if (S -= y.value.length, k = S, y.value instanceof W) continue;for (var E = y; E !== t.tail && (S < P || "string" == typeof E.value); E = E.next) {x++, S += E.value.length;}x--, b = n.slice(k, S), w.index -= k;} else {m.lastIndex = 0;var w = m.exec(b);}if (w) {f && (d = w[1] ? w[1].length : 0);var A = w.index + d,O = w[0].slice(d),P = A + O.length,L = b.slice(0, A),N = b.slice(P),j = k + b.length;l && j > l.reach && (l.reach = j);var C = y.prev;L && (C = I(t, C, L), k += L.length), z(t, C, x);var _ = new W(o, g ? M.tokenize(O, g) : O, v, O);y = I(t, C, _), N && I(t, y, N), 1 < x && e(n, t, r, y.prev, k, { cause: o + "," + u, reach: j });}}}}}}}(e, a, n, a.head, 0), function (e) {var n = [],t = e.head.next;for (; t !== e.tail;) {n.push(t.value), t = t.next;}return n;}(a);}, hooks: { all: {}, add: function add(e, n) {var t = M.hooks.all;t[e] = t[e] || [], t[e].push(n);}, run: function run(e, n) {var t = M.hooks.all[e];if (t && t.length) for (var r, a = 0; r = t[a++];) {r(n);}} }, Token: W };function W(e, n, t, r) {this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;}function i() {var e = { value: null, prev: null, next: null },n = { value: null, prev: e, next: null };e.next = n, this.head = e, this.tail = n, this.length = 0;}function I(e, n, t) {var r = n.next,a = { value: t, prev: n, next: r };return n.next = a, r.prev = a, e.length++, a;}function z(e, n, t) {for (var r = n.next, a = 0; a < t && r !== e.tail; a++) {r = r.next;}(n.next = r).prev = n, e.length -= a;}if (u.Prism = M, W.stringify = function n(e, t) {if ("string" == typeof e) return e;if (Array.isArray(e)) {var r = "";return e.forEach(function (e) {r += n(e, t);}), r;}var a = { type: e.type, content: n(e.content, t), tag: "span", classes: ["token", e.type], attributes: {}, language: t },i = e.alias;i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);var l = "";for (var o in a.attributes) {l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';}return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";}, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {var n = JSON.parse(e.data),t = n.language,r = n.code,a = n.immediateClose;u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close();}, !1)), M;var e = M.util.currentScript();function t() {M.manual || M.highlightAll();}if (e && (M.filename = e.src, e.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {var r = document.readyState;"loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);}return M;}(_self); true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {"entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function value(a, e) {var s = {};s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };var t = {};t[a] = { pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {return a;}), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t);} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (e) {var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css;var s = e.languages.markup;s && (s.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i, lookbehind: !0, inside: { "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { style: { pattern: /(["'])[\s\S]+(?=["']$)/, lookbehind: !0, alias: "language-css", inside: e.languages.css }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, "attr-name": /^style/i } } }, s.tag));}(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: Prism.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../HBuilderX.3.2.12.20211029.full/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 244:
/*!******************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/highlight/config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  copyByLongPress: true, // 是否需要长按代码块时显示复制代码内容菜单
  showLanguageName: false, // 是否在代码块右上角显示语言的名称
  showLineNumber: true // 是否显示行号
};

/***/ }),

/***/ 245:
/*!********************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/parser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * @fileoverview html 解析器
 */

// 配置
var config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),

  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),

  // 要移除的标签
  ignoreTags: makeMap('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),

  // 自闭合的标签
  voidTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),

  // html 实体
  entities: {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    ensp: "\u2002",
    emsp: "\u2003",
    nbsp: '\xA0',
    semi: ';',
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },


  // 默认的标签样式
  tagStyle: {

    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    strike: 'text-decoration:line-through',
    u: 'text-decoration:underline' },



  // svg 大小写对照表
  svgDict: {
    animatetransform: 'animateTransform',
    lineargradient: 'linearGradient',
    viewbox: 'viewBox',
    attributename: 'attributeName',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur' } };


var tagSelector = {};var _uni$getSystemInfoSyn =





uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,system = _uni$getSystemInfoSyn.system;
var blankChar = makeMap(' ,\r,\n,\t,\f');
var idIndex = 0;












/**
                  * @description 创建 map
                  * @param {String} str 逗号分隔
                  */
function makeMap(str) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }
  return map;
}

/**
   * @description 解码 html 实体
   * @param {String} str 要解码的字符串
   * @param {Boolean} amp 要不要解码 &amp;
   * @returns {String} 解码后的字符串
   */
function decodeEntity(str, amp) {
  var i = str.indexOf('&');
  while (i !== -1) {
    var j = str.indexOf(';', i + 3);
    var code = void 0;
    if (j === -1) break;
    if (str[i + 1] === '#') {
      // &#123; 形式的实体
      code = parseInt((str[i + 2] === 'x' ? '0' : '') + str.substring(i + 2, j));
      if (!isNaN(code)) {
        str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
      }
    } else {
      // &nbsp; 形式的实体
      code = str.substring(i + 1, j);
      if (config.entities[code] || code === 'amp' && amp) {
        str = str.substr(0, i) + (config.entities[code] || '&') + str.substr(j + 1);
      }
    }
    i = str.indexOf('&', i + 1);
  }
  return str;
}

/**
   * @description html 解析器
   * @param {Object} vm 组件实例
   */
function Parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.plugins = vm.plugins || [];
  this.attrs = Object.create(null);
  this.stack = [];
  this.nodes = [];
  this.pre = (this.options.containerStyle || '').includes('white-space') && this.options.containerStyle.includes('pre') ? 2 : 0;
}

/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */
Parser.prototype.parse = function (content) {
  // 插件处理
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, config) || content;
    }
  }

  new Lexer(this).parse(content);
  // 出栈未闭合的标签
  while (this.stack.length) {
    this.popNode();
  }
  return this.nodes;
};

/**
    * @description 将标签暴露出来（不被 rich-text 包含）
    */
Parser.prototype.expose = function () {

  for (var i = this.stack.length; i--;) {
    var item = this.stack[i];
    if (item.c || item.name === 'a' || item.name === 'video' || item.name === 'audio') return;
    item.c = 1;
  }

};

/**
    * @description 处理插件
    * @param {Object} node 要处理的标签
    * @returns {Boolean} 是否要移除此标签
    */
Parser.prototype.hook = function (node) {
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) === false) {
      return false;
    }
  }
  return true;
};

/**
    * @description 将链接拼接上主域名
    * @param {String} url 需要拼接的链接
    * @returns {String} 拼接后的链接
    */
Parser.prototype.getUrl = function (url) {
  var domain = this.options.domain;
  if (url[0] === '/') {
    if (url[1] === '/') {
      // // 开头的补充协议名
      url = (domain ? domain.split('://')[0] : 'http') + ':' + url;
    } else if (domain) {
      // 否则补充整个域名
      url = domain + url;
    }
  } else if (domain && !url.includes('data:') && !url.includes('://')) {
    url = domain + '/' + url;
  }
  return url;
};

/**
    * @description 解析样式表
    * @param {Object} node 标签
    * @returns {Object}
    */
Parser.prototype.parseStyle = function (node) {
  var attrs = node.attrs;
  var list = (this.tagStyle[node.name] || '').split(';').concat((attrs.style || '').split(';'));
  var styleObj = {};
  var tmp = '';

  if (attrs.id && !this.xml) {
    // 暴露锚点
    if (this.options.useAnchor) {
      this.expose();
    } else if (node.name !== 'img' && node.name !== 'a' && node.name !== 'video' && node.name !== 'audio') {
      attrs.id = undefined;
    }
  }

  // 转换 width 和 height 属性
  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
    attrs.width = undefined;
  }
  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
    attrs.height = undefined;
  }

  for (var i = 0, len = list.length; i < len; i++) {
    var info = list[i].split(':');
    if (info.length < 2) continue;
    var key = info.shift().trim().toLowerCase();
    var value = info.join(':').trim();
    if (value[0] === '-' && value.lastIndexOf('-') > 0 || value.includes('safe')) {
      // 兼容性的 css 不压缩
      tmp += ";".concat(key, ":").concat(value);
    } else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import')) {
      // 重复的样式进行覆盖
      if (value.includes('url')) {
        // 填充链接
        var j = value.indexOf('(') + 1;
        if (j) {
          while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      } else if (value.includes('rpx')) {
        // 转换 rpx（rich-text 内部不支持 rpx）
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});
      }
      styleObj[key] = value;
    }
  }

  node.attrs.style = tmp;
  return styleObj;
};

/**
    * @description 解析到标签名
    * @param {String} name 标签名
    * @private
    */
Parser.prototype.onTagName = function (name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName === 'svg') {
    this.xml = (this.xml || 0) + 1; // svg 标签内大小写敏感
  }
};

/**
    * @description 解析到属性名
    * @param {String} name 属性名
    * @private
    */
Parser.prototype.onAttrName = function (name) {
  name = this.xml ? name : name.toLowerCase();
  if (name.substr(0, 5) === 'data-') {
    if (name === 'data-src' && !this.attrs.src) {
      // data-src 自动转为 src
      this.attrName = 'src';
    } else if (this.tagName === 'img' || this.tagName === 'a') {
      // a 和 img 标签保留 data- 的属性，可以在 imgtap 和 linktap 事件中使用
      this.attrName = name;
    } else {
      // 剩余的移除以减小大小
      this.attrName = undefined;
    }
  } else {
    this.attrName = name;
    this.attrs[name] = 'T'; // boolean 型属性缺省设置
  }
};

/**
    * @description 解析到属性值
    * @param {String} val 属性值
    * @private
    */
Parser.prototype.onAttrVal = function (val) {
  var name = this.attrName || '';
  if (name === 'style' || name === 'href') {
    // 部分属性进行实体解码
    this.attrs[name] = decodeEntity(val, true);
  } else if (name.includes('src')) {
    // 拼接主域名
    this.attrs[name] = this.getUrl(decodeEntity(val, true));
  } else if (name) {
    this.attrs[name] = val;
  }
};

/**
    * @description 解析到标签开始
    * @param {Boolean} selfClose 是否有自闭合标识 />
    * @private
    */
Parser.prototype.onOpenTag = function (selfClose) {
  // 拼装 node
  var node = Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs;
  // 避免因为自动 diff 使得 type 被设置为 null 导致部分内容不显示
  if (this.options.nodes.length) {
    node.type = 'node';
  }
  this.attrs = Object.create(null);

  var attrs = node.attrs;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  var close = this.xml ? selfClose : config.voidTags[node.name];

  // 替换标签名选择器
  if (tagSelector[node.name]) {
    attrs.class = tagSelector[node.name] + (attrs.class ? ' ' + attrs.class : '');
  }

  // 转换 embed 标签
  if (node.name === 'embed') {

    var src = attrs.src || '';
    // 按照后缀名和 type 将 embed 转为 video 或 audio
    if (src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8') || (attrs.type || '').includes('video')) {
      node.name = 'video';
    } else if (src.includes('.mp3') || src.includes('.wav') || src.includes('.aac') || src.includes('.m4a') || (attrs.type || '').includes('audio')) {
      node.name = 'audio';
    }
    if (attrs.autostart) {
      attrs.autoplay = 'T';
    }
    attrs.controls = 'T';




  }


  // 处理音视频
  if (node.name === 'video' || node.name === 'audio') {
    // 设置 id 以便获取 context
    if (node.name === 'video' && !attrs.id) {
      attrs.id = 'v' + idIndex++;
    }
    // 没有设置 controls 也没有设置 autoplay 的自动设置 controls
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = 'T';
    }
    // 用数组存储所有可用的 source
    node.src = [];
    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = undefined;
    }
    this.expose();
  }


  // 处理自闭合标签
  if (close) {
    if (!this.hook(node) || config.ignoreTags[node.name]) {
      // 通过 base 标签设置主域名
      if (node.name === 'base' && !this.options.domain) {
        this.options.domain = attrs.href;
      } else if (node.name === 'source' && parent && (parent.name === 'video' || parent.name === 'audio') && attrs.src) {
        // 设置 source 标签（仅父节点为 video 或 audio 时有效）
        parent.src.push(attrs.src);
      }
      return;
    }

    // 解析 style
    var styleObj = this.parseStyle(node);

    // 处理图片
    if (node.name === 'img') {
      if (attrs.src) {
        // 标记 webp
        if (attrs.src.includes('webp')) {
          node.webp = 'T';
        }
        // data url 图片如果没有设置 original-src 默认为不可预览的小图片
        if (attrs.src.includes('data:') && !attrs['original-src']) {
          attrs.ignore = 'T';
        }
        if (!attrs.ignore || node.webp || attrs.src.includes('cloud://')) {
          for (var i = this.stack.length; i--;) {
            var item = this.stack[i];
            if (item.name === 'a') {
              node.a = item.attrs;
              break;
            }

            var style = item.attrs.style || '';
            if (style.includes('flex:') && !style.includes('flex:0') && !style.includes('flex: 0') && (!styleObj.width || !styleObj.width.includes('%'))) {
              styleObj.width = '100% !important';
              styleObj.height = '';
              for (var j = i + 1; j < this.stack.length; j++) {
                this.stack[j].attrs.style = (this.stack[j].attrs.style || '').replace('inline-', '');
              }
            } else if (style.includes('flex') && styleObj.width === '100%') {
              for (var _j = i + 1; _j < this.stack.length; _j++) {
                var _style = this.stack[_j].attrs.style || '';
                if (!_style.includes(';width') && !_style.includes(' width') && _style.indexOf('width') !== 0) {
                  styleObj.width = '';
                  break;
                }
              }
            } else if (style.includes('inline-block')) {
              if (styleObj.width && styleObj.width[styleObj.width.length - 1] === '%') {
                item.attrs.style += ';max-width:' + styleObj.width;
                styleObj.width = '';
              } else {
                item.attrs.style += ';max-width:100%';
              }
            }

            item.c = 1;
          }
          attrs.i = this.imgList.length.toString();
          var _src = attrs['original-src'] || attrs.src;

          if (this.imgList.includes(_src)) {
            // 如果有重复的链接则对域名进行随机大小写变换避免预览时错位
            var _i = _src.indexOf('://');
            if (_i !== -1) {
              _i += 3;
              var newSrc = _src.substr(0, _i);
              for (; _i < _src.length; _i++) {
                if (_src[_i] === '/') break;
                newSrc += Math.random() > 0.5 ? _src[_i].toUpperCase() : _src[_i];
              }
              newSrc += _src.substr(_i);
              _src = newSrc;
            }
          }

          this.imgList.push(_src);






        }
      }
      if (styleObj.display === 'inline') {
        styleObj.display = '';
      }

      if (attrs.ignore) {
        styleObj['max-width'] = styleObj['max-width'] || '100%';
        attrs.style += ';-webkit-touch-callout:none';
      }

      // 设置的宽度超出屏幕，为避免变形，高度转为自动
      if (parseInt(styleObj.width) > windowWidth) {
        styleObj.height = undefined;
      }
      // 记录是否设置了宽高
      if (styleObj.width) {
        if (styleObj.width.includes('auto')) {
          styleObj.width = '';
        } else {
          node.w = 'T';
          if (styleObj.height && !styleObj.height.includes('auto')) {
            node.h = 'T';
          }
        }
      }
    } else if (node.name === 'svg') {
      siblings.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }
    for (var key in styleObj) {
      if (styleObj[key]) {
        attrs.style += ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));
      }
    }
    attrs.style = attrs.style.substr(1) || undefined;
  } else {
    if ((node.name === 'pre' || (attrs.style || '').includes('white-space') && attrs.style.includes('pre')) && this.pre !== 2) {
      this.pre = node.pre = 1;
    }
    node.children = [];
    this.stack.push(node);
  }

  // 加入节点树
  siblings.push(node);
};

/**
    * @description 解析到标签结束
    * @param {String} name 标签名
    * @private
    */
Parser.prototype.onCloseTag = function (name) {
  // 依次出栈到匹配为止
  name = this.xml ? name : name.toLowerCase();
  var i;
  for (i = this.stack.length; i--;) {
    if (this.stack[i].name === name) break;
  }
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name === 'p' || name === 'br') {
    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name: name,
      attrs: {
        class: tagSelector[name],
        style: this.tagStyle[name] } });


  }
};

/**
    * @description 处理标签出栈
    * @private
    */
Parser.prototype.popNode = function () {
  var node = this.stack.pop();
  var attrs = node.attrs;
  var children = node.children;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;

  if (!this.hook(node) || config.ignoreTags[node.name]) {
    // 获取标题
    if (node.name === 'title' && children.length && children[0].type === 'text' && this.options.setTitle) {
      uni.setNavigationBarTitle({
        title: children[0].text });

    }
    siblings.pop();
    return;
  }

  if (node.pre && this.pre !== 2) {
    // 是否合并空白符标识
    this.pre = node.pre = undefined;
    for (var i = this.stack.length; i--;) {
      if (this.stack[i].pre) {
        this.pre = 1;
      }
    }
  }

  var styleObj = {};

  // 转换 svg
  if (node.name === 'svg') {
    if (this.xml > 1) {
      // 多层 svg 嵌套
      this.xml--;
      return;
    }


















    var src = '';
    var style = attrs.style;
    attrs.style = '';
    attrs.xmlns = 'http://www.w3.org/2000/svg';
    (function traversal(node) {
      if (node.type === 'text') {
        src += node.text;
        return;
      }
      var name = config.svgDict[node.name] || node.name;
      src += '<' + name;
      for (var item in node.attrs) {
        var val = node.attrs[item];
        if (val) {
          src += " ".concat(config.svgDict[item] || item, "=\"").concat(val, "\"");
        }
      }
      if (!node.children) {
        src += '/>';
      } else {
        src += '>';
        for (var _i2 = 0; _i2 < node.children.length; _i2++) {
          traversal(node.children[_i2]);
        }
        src += '</' + name + '>';
      }
    })(node);
    node.name = 'img';
    node.attrs = {
      src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
      style: style,
      ignore: 'T' };

    node.children = undefined;

    this.xml = false;
    return;
  }


  // 转换 align 属性
  if (attrs.align) {
    if (node.name === 'table') {
      if (attrs.align === 'center') {
        styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';
      } else {
        styleObj.float = attrs.align;
      }
    } else {
      styleObj['text-align'] = attrs.align;
    }
    attrs.align = undefined;
  }

  // 转换 dir 属性
  if (attrs.dir) {
    styleObj.direction = attrs.dir;
    attrs.dir = undefined;
  }

  // 转换 font 标签的属性
  if (node.name === 'font') {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = undefined;
    }
    if (attrs.face) {
      styleObj['font-family'] = attrs.face;
      attrs.face = undefined;
    }
    if (attrs.size) {
      var size = parseInt(attrs.size);
      if (!isNaN(size)) {
        if (size < 1) {
          size = 1;
        } else if (size > 7) {
          size = 7;
        }
        styleObj['font-size'] = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'][size - 1];
      }
      attrs.size = undefined;
    }
  }


  // 一些编辑器的自带 class
  if ((attrs.class || '').includes('align-center')) {
    styleObj['text-align'] = 'center';
  }

  Object.assign(styleObj, this.parseStyle(node));

  if (node.name !== 'table' && parseInt(styleObj.width) > windowWidth) {
    styleObj['max-width'] = '100%';
    styleObj['box-sizing'] = 'border-box';
  }


  if (config.blockTags[node.name]) {
    node.name = 'div';
  } else if (!config.trustTags[node.name] && !this.xml) {
    // 未知标签转为 span，避免无法显示
    node.name = 'span';
  }

  if (node.name === 'a' || node.name === 'ad')



  {
    this.expose();
  } else















  if ((node.name === 'ul' || node.name === 'ol') && node.c) {
    // 列表处理
    var types = {
      a: 'lower-alpha',
      A: 'upper-alpha',
      i: 'lower-roman',
      I: 'upper-roman' };

    if (types[attrs.type]) {
      attrs.style += ';list-style-type:' + types[attrs.type];
      attrs.type = undefined;
    }
    for (var _i3 = children.length; _i3--;) {
      if (children[_i3].name === 'li') {
        children[_i3].c = 1;
      }
    }
  } else if (node.name === 'table') {
    // 表格处理
    // cellpadding、cellspacing、border 这几个常用表格属性需要通过转换实现
    var padding = parseFloat(attrs.cellpadding);
    var spacing = parseFloat(attrs.cellspacing);
    var border = parseFloat(attrs.border);
    if (node.c) {
      // padding 和 spacing 默认 2
      if (isNaN(padding)) {
        padding = 2;
      }
      if (isNaN(spacing)) {
        spacing = 2;
      }
    }
    if (border) {
      attrs.style += ';border:' + border + 'px solid gray';
    }
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格通过 grid 布局实现
      styleObj.display = 'grid';
      if (spacing) {
        styleObj['grid-gap'] = spacing + 'px';
        styleObj.padding = spacing + 'px';
      } else if (border) {
        // 无间隔的情况下避免边框重叠
        attrs.style += ';border-left:0;border-top:0';
      }

      var width = []; // 表格的列宽
      var trList = []; // tr 列表
      var cells = []; // 保存新的单元格
      var map = {}; // 被合并单元格占用的格子

      (function traversal(nodes) {
        for (var _i4 = 0; _i4 < nodes.length; _i4++) {
          if (nodes[_i4].name === 'tr') {
            trList.push(nodes[_i4]);
          } else {
            traversal(nodes[_i4].children || []);
          }
        }
      })(children);

      for (var row = 1; row <= trList.length; row++) {
        var col = 1;
        for (var j = 0; j < trList[row - 1].children.length; j++, col++) {
          var td = trList[row - 1].children[j];
          if (td.name === 'td' || td.name === 'th') {
            // 这个格子被上面的单元格占用，则列号++
            while (map[row + '.' + col]) {
              col++;
            }
            var _style2 = td.attrs.style || '';
            var start = _style2.indexOf('width') ? _style2.indexOf(';width') : 0;
            // 提取出 td 的宽度
            if (start !== -1) {
              var end = _style2.indexOf(';', start + 6);
              if (end === -1) {
                end = _style2.length;
              }
              if (!td.attrs.colspan) {
                width[col] = _style2.substring(start ? start + 7 : 6, end);
              }
              _style2 = _style2.substr(0, start) + _style2.substr(end);
            }
            _style2 += (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '');
            // 处理列合并
            if (td.attrs.colspan) {
              _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) {
                _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + 1);
              }
              col += parseInt(td.attrs.colspan) - 1;
            }
            // 处理行合并
            if (td.attrs.rowspan) {
              _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) {
                _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + 1);
              }
              // 记录下方单元格被占用
              for (var rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                for (var colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                  map[row + rowspan + '.' + (col - colspan)] = 1;
                }
              }
            }
            if (_style2) {
              td.attrs.style = _style2;
            }
            cells.push(td);
          }
        }
        if (row === 1) {
          var temp = '';
          for (var _i5 = 1; _i5 < col; _i5++) {
            temp += (width[_i5] ? width[_i5] : 'auto') + ' ';
          }
          styleObj['grid-template-columns'] = temp;
        }
      }
      node.children = cells;
    } else {
      // 没有使用合并单元格的表格通过 table 布局实现
      if (node.c) {
        styleObj.display = 'table';
      }
      if (!isNaN(spacing)) {
        styleObj['border-spacing'] = spacing + 'px';
      }
      if (border || padding) {
        // 遍历
        (function traversal(nodes) {
          for (var _i6 = 0; _i6 < nodes.length; _i6++) {
            var _td = nodes[_i6];
            if (_td.name === 'th' || _td.name === 'td') {
              if (border) {
                _td.attrs.style = "border:".concat(border, "px solid gray;").concat(_td.attrs.style || '');
              }
              if (padding) {
                _td.attrs.style = "padding:".concat(padding, "px;").concat(_td.attrs.style || '');
              }
            } else if (_td.children) {
              traversal(_td.children);
            }
          }
        })(children);
      }
    }
    // 给表格添加一个单独的横向滚动层
    if (this.options.scrollTable && !(attrs.style || '').includes('inline')) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:auto' };

      node.children = [table];
      attrs = table.attrs;
    }
  } else if ((node.name === 'td' || node.name === 'th') && (attrs.colspan || attrs.rowspan)) {
    for (var _i7 = this.stack.length; _i7--;) {
      if (this.stack[_i7].name === 'table') {
        this.stack[_i7].flag = 1; // 指示含有合并单元格
        break;
      }
    }
  } else if (node.name === 'ruby') {
    // 转换 ruby
    node.name = 'span';
    for (var _i8 = 0; _i8 < children.length - 1; _i8++) {
      if (children[_i8].type === 'text' && children[_i8 + 1].name === 'rt') {
        children[_i8] = {
          name: 'div',
          attrs: {
            style: 'display:inline-block;text-align:center' },

          children: [{
            name: 'div',
            attrs: {
              style: 'font-size:50%;' + (children[_i8 + 1].attrs.style || '') },

            children: children[_i8 + 1].children },
          children[_i8]] };

        children.splice(_i8 + 1, 1);
      }
    }
  } else if (node.c) {
    node.c = 2;
    for (var _i9 = node.children.length; _i9--;) {
      if (!node.children[_i9].c || node.children[_i9].name === 'table') {
        node.c = 1;
      }
    }
  }

  if ((styleObj.display || '').includes('flex') && !node.c) {
    for (var _i10 = children.length; _i10--;) {
      var item = children[_i10];
      if (item.f) {
        item.attrs.style = (item.attrs.style || '') + item.f;
        item.f = undefined;
      }
    }
  }
  // flex 布局时部分样式需要提取到 rich-text 外层
  var flex = parent && (parent.attrs.style || '').includes('flex')

  // 检查基础库版本 virtualHost 是否可用
  && !(node.c && wx.getNFCAdapter); // eslint-disable-line




  if (flex) {
    node.f = ';max-width:100%';
  }


  for (var key in styleObj) {
    if (styleObj[key]) {
      var val = ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));

      if (flex && (key.includes('flex') && key !== 'flex-direction' || key === 'align-self' || styleObj[key][0] === '-' || key === 'width' && val.includes('%'))) {
        node.f += val;
        if (key === 'width') {
          attrs.style += ';width:100%';
        }
      } else {
        attrs.style += val;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || undefined;
};

/**
    * @description 解析到文本
    * @param {String} text 文本内容
    */
Parser.prototype.onText = function (text) {
  if (!this.pre) {
    // 合并空白符
    var trim = '';
    var flag;
    for (var i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) {
        trim += text[i];
      } else {
        if (trim[trim.length - 1] !== ' ') {
          trim += ' ';
        }
        if (text[i] === '\n' && !flag) {
          flag = true;
        }
      }
    }
    // 去除含有换行符的空串
    if (trim === ' ' && flag) return;
    text = trim;
  }
  var node = Object.create(null);
  node.type = 'text';
  node.text = decodeEntity(text);
  if (this.hook(node)) {

    if (this.options.selectable === 'force' && system.includes('iOS')) {
      this.expose();
      node.us = 'T';
    }

    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node);
  }
};

/**
    * @description html 词法分析器
    * @param {Object} handler 高层处理器
    */
function Lexer(handler) {
  this.handler = handler;
}

/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */
Lexer.prototype.parse = function (content) {
  this.content = content || '';
  this.i = 0; // 标记解析位置
  this.start = 0; // 标记一个单词的开始位置
  this.state = this.text; // 当前状态
  for (var len = this.content.length; this.i !== -1 && this.i < len;) {
    this.state();
  }
};

/**
    * @description 检查标签是否闭合
    * @param {String} method 如果闭合要进行的操作
    * @returns {Boolean} 是否闭合
    * @private
    */
Lexer.prototype.checkClose = function (method) {
  var selfClose = this.content[this.i] === '/';
  if (this.content[this.i] === '>' || selfClose && this.content[this.i + 1] === '>') {
    if (method) {
      this.handler[method](this.content.substring(this.start, this.i));
    }
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);
    if (this.handler.tagName === 'script') {
      this.i = this.content.indexOf('</', this.i);
      if (this.i !== -1) {
        this.i += 2;
        this.start = this.i;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};

/**
    * @description 文本状态
    * @private
    */
Lexer.prototype.text = function () {
  this.i = this.content.indexOf('<', this.i); // 查找最近的标签
  if (this.i === -1) {
    // 没有标签了
    if (this.start < this.content.length) {
      this.handler.onText(this.content.substring(this.start, this.content.length));
    }
    return;
  }
  var c = this.content[this.i + 1];
  if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
    // 标签开头
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c === '/' || c === '!' || c === '?') {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    var next = this.content[this.i + 2];
    if (c === '/' && (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z')) {
      // 标签结尾
      this.i += 2;
      this.start = this.i;
      this.state = this.endTag;
      return;
    }
    // 处理注释
    var end = '-->';
    if (c !== '!' || this.content[this.i + 2] !== '-' || this.content[this.i + 3] !== '-') {
      end = '>';
    }
    this.i = this.content.indexOf(end, this.i);
    if (this.i !== -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else {
    this.i++;
  }
};

/**
    * @description 标签名状态
    * @private
    */
Lexer.prototype.tagName = function () {
  if (blankChar[this.content[this.i]]) {
    // 解析到标签名
    this.handler.onTagName(this.content.substring(this.start, this.i));
    while (blankChar[this.content[++this.i]]) {;}
    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose('onTagName')) {
    this.i++;
  }
};

/**
    * @description 属性名状态
    * @private
    */
Lexer.prototype.attrName = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '=') {
    // 解析到属性名
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    var needVal = c === '=';
    var len = this.content.length;
    while (++this.i < len) {
      c = this.content[this.i];
      if (!blankChar[c]) {
        if (this.checkClose()) return;
        if (needVal) {
          // 等号后遇到第一个非空字符
          this.start = this.i;
          this.state = this.attrVal;
          return;
        }
        if (this.content[this.i] === '=') {
          needVal = true;
        } else {
          this.start = this.i;
          this.state = this.attrName;
          return;
        }
      }
    }
  } else if (!this.checkClose('onAttrName')) {
    this.i++;
  }
};

/**
    * @description 属性值状态
    * @private
    */
Lexer.prototype.attrVal = function () {
  var c = this.content[this.i];
  var len = this.content.length;
  if (c === '"' || c === "'") {
    // 有冒号的属性
    this.start = ++this.i;
    this.i = this.content.indexOf(c, this.i);
    if (this.i === -1) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } else {
    // 没有冒号的属性
    for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose('onAttrVal')) return;
    }
  }
  while (blankChar[this.content[++this.i]]) {;}
  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};

/**
    * @description 结束标签状态
    * @returns {String} 结束的标签名
    * @private
    */
Lexer.prototype.endTag = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '>' || c === '/') {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));
    if (c !== '>') {
      this.i = this.content.indexOf('>', this.i);
      if (this.i === -1) return;
    }
    this.start = ++this.i;
    this.state = this.text;
  } else {
    this.i++;
  }
};

module.exports = Parser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 246:
/*!**************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/search/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileoverview search 插件
 */
function Search(vm) {
  /**
                      * @description 关键词搜索
                      * @param {regexp|string} key 要搜索的关键词
                      * @param {boolean} anchor 是否将搜索结果设置为锚点
                      * @param {string} style 搜索结果的样式
                      */
  vm.search = function (key, anchor) {var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'background-color:yellow';
    var res = [];
    var stack = [];

    // 遍历搜索
    (function traversal(nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.type === 'text' && key) {
          var text = node.text;
          var arr = text.split(key);
          if (arr.length > 1) {
            node = {
              name: 'span',
              attrs: {},
              type: 'node',
              c: anchor ? 1 : undefined,
              s: 1,
              children: [] };

            vm.$set(nodes, i, node);
            for (var j = 0; j < arr.length; j++) {
              if (arr[j]) {
                node.children.push({
                  type: 'text',
                  text: arr[j] });

              }
              if (j !== arr.length - 1) {
                // 关键词转为一个 span
                node.children.push({
                  name: 'span',
                  attrs: {
                    id: anchor ? 'search' + (res.length + 1) : undefined, // 用于锚点的 id
                    style: style },

                  children: [{
                    type: 'text',
                    text: key instanceof RegExp ? key.exec(text)[0] : key }] });


                res.push(node.children[node.children.length - 1].attrs);
              }
            }
            if (key instanceof RegExp) {
              key.exec(text);
            }
            if (anchor) {
              for (var l = stack.length; l--;) {
                if (stack[l].c) {
                  break;
                } else {
                  vm.$set(stack[l], 'c', 1);
                }
              }
            }
          }
        } else if (node.s) {
          var _text = '';
          // 复原上一次的结果
          for (var k = 0; k < node.children.length; k++) {
            var child = node.children[k];
            if (child.text) {
              _text += child.text;
            } else {
              _text += child.children[0].text;
            }
          }
          vm.$set(nodes, i, {
            type: 'text',
            text: _text });

          if (key && (key instanceof RegExp ? key.test(_text) : _text.includes(key))) {
            i--;
          }
        } else if (node.children) {
          stack.push(node);
          traversal(node.children);
          stack.pop();
        }
      }
    })(vm.nodes);

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve({
          num: res.length, // 结果数量
          /**
           * @description 高亮某一个结果
           * @param {number} i 第几个
           * @param {string} hlstyle 高亮的样式
           */
          highlight: function highlight(i) {var hlstyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'background-color:#FF9632';
            if (i < 1 || i > res.length) return;
            if (this.last) {
              res[this.last - 1].style = style;
            }
            this.last = i;
            res[i - 1].style = hlstyle;
          },
          /**
              * @description 跳转到搜索结果
              * @param {number} i 第几个
              * @param {number} offset 偏移量
              */
          jump: anchor ?
          function (i, offset) {
            if (i > 0 && i <= res.length) {
              vm.navigateTo('search' + i, offset);
            }
          } :
          undefined });

      }, 200);
    });
  };
}

module.exports = Search;

/***/ }),

/***/ 247:
/*!*************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/style/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview style 插件
 */
function Style() {
  this.styles = [];
}


var Parser = __webpack_require__(/*! ./parser */ 248);

Style.prototype.onParse = function (node, vm) {
  // 获取样式
  if (node.name === 'style' && node.children.length && node.children[0].type === 'text') {
    this.styles = this.styles.concat(new Parser().parse(node.children[0].text));
  } else if (node.name) {
    // 匹配样式（对非文本标签）
    // 存储不同优先级的样式 name < class < id < 后代
    var matched = ['', '', '', ''];
    for (var i = 0, len = this.styles.length; i < len; i++) {
      var item = this.styles[i];
      var res = match(node, item.key || item.list[item.list.length - 1]);
      var j = void 0;
      if (res) {
        // 后代选择器
        if (!item.key) {
          j = item.list.length - 2;
          for (var k = vm.stack.length; j >= 0 && k--;) {
            // 子选择器
            if (item.list[j] === '>') {
              // 错误情况
              if (j < 1 || j > item.list.length - 2) break;
              if (match(vm.stack[k], item.list[j - 1])) {
                j -= 2;
              } else {
                j++;
              }
            } else if (match(vm.stack[k], item.list[j])) {
              j--;
            }
          }
          res = 4;
        }
        if (item.key || j < 0) {
          // 添加伪类
          if (item.pseudo && node.children) {
            var text = void 0;
            item.style = item.style.replace(/content:([^;]+)/, function (_, $1) {
              text = $1.replace(/['"]/g, '')
              // 处理 attr 函数
              .replace(/attr\((.+?)\)/, function (_, $1) {return node.attrs[$1.trim()] || '';})
              // 编码 \xxx
              .replace(/\\(\w{4})/, function (_, $1) {return String.fromCharCode(parseInt($1, 16));});
              return '';
            });
            var pseudo = {
              name: 'span',
              attrs: {
                style: item.style },

              children: [{
                type: 'text',
                text: text }] };


            if (item.pseudo === 'before') {
              node.children.unshift(pseudo);
            } else {
              node.children.push(pseudo);
            }
          } else {
            matched[res - 1] += item.style + (item.style[item.style.length - 1] === ';' ? '' : ';');
          }
        }
      }
    }
    matched = matched.join('');
    if (matched.length > 2) {
      node.attrs.style = matched + (node.attrs.style || '');
    }
  }
};

/**
    * @description 匹配样式
    * @param {object} node 要匹配的标签
    * @param {string|string[]} keys 选择器
    * @returns {number} 0：不匹配；1：name 匹配；2：class 匹配；3：id 匹配
    */
function match(node, keys) {
  function matchItem(key) {
    if (key[0] === '#') {
      // 匹配 id
      if (node.attrs.id && node.attrs.id.trim() === key.substr(1)) return 3;
    } else if (key[0] === '.') {
      // 匹配 class
      key = key.substr(1);
      var selectors = (node.attrs.class || '').split(' ');
      for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].trim() === key) return 2;
      }
    } else if (node.name === key) {
      // 匹配 name
      return 1;
    }
    return 0;
  }

  // 多选择器交集
  if (keys instanceof Array) {
    var res = 0;
    for (var j = 0; j < keys.length; j++) {
      var tmp = matchItem(keys[j]);
      // 任意一个不匹配就失败
      if (!tmp) return 0;
      // 优先级最大的一个作为最终优先级
      if (tmp > res) {
        res = tmp;
      }
    }
    return res;
  }

  return matchItem(keys);
}


module.exports = Style;

/***/ }),

/***/ 248:
/*!**************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/style/parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var blank = {
  ' ': true,
  '\n': true,
  '\t': true,
  '\r': true,
  '\f': true };


function Parser() {
  this.styles = [];
  this.selectors = [];
}

/**
   * @description 解析 css 字符串
   * @param {string} content css 内容
   */
Parser.prototype.parse = function (content) {
  new Lexer(this).parse(content);
  return this.styles;
};

/**
    * @description 解析到一个选择器
    * @param {string} name 名称
    */
Parser.prototype.onSelector = function (name) {
  // 不支持的选择器
  if (name.includes('[') || name.includes('*') || name.includes('@')) return;
  var selector = {};
  // 伪类
  if (name.includes(':')) {
    var info = name.split(':');
    var pseudo = info.pop();
    if (pseudo === 'before' || pseudo === 'after') {
      selector.pseudo = pseudo;
      name = info[0];
    } else return;
  }

  // 分割交集选择器
  function splitItem(str) {
    var arr = [];
    var i, start;
    for (i = 1, start = 0; i < str.length; i++) {
      if (str[i] === '.' || str[i] === '#') {
        arr.push(str.substring(start, i));
        start = i;
      }
    }
    if (!arr.length) {
      return str;
    } else {
      arr.push(str.substring(start, i));
      return arr;
    }
  }

  // 后代选择器
  if (name.includes(' ')) {
    selector.list = [];
    var list = name.split(' ');
    for (var i = 0; i < list.length; i++) {
      if (list[i].length) {
        // 拆分子选择器
        var arr = list[i].split('>');
        for (var j = 0; j < arr.length; j++) {
          selector.list.push(splitItem(arr[j]));
          if (j < arr.length - 1) {
            selector.list.push('>');
          }
        }
      }
    }
  } else {
    selector.key = splitItem(name);
  }

  this.selectors.push(selector);
};

/**
    * @description 解析到选择器内容
    * @param {string} content 内容
    */
Parser.prototype.onContent = function (content) {
  // 并集选择器
  for (var i = 0; i < this.selectors.length; i++) {
    this.selectors[i].style = content;
  }
  this.styles = this.styles.concat(this.selectors);
  this.selectors = [];
};

/**
    * @description css 词法分析器
    * @param {object} handler 高层处理器
    */
function Lexer(handler) {
  this.selector = '';
  this.style = '';
  this.handler = handler;
}

Lexer.prototype.parse = function (content) {
  this.i = 0;
  this.content = content;
  this.state = this.blank;
  for (var len = content.length; this.i < len; this.i++) {
    this.state(content[this.i]);
  }
};

Lexer.prototype.comment = function () {
  this.i = this.content.indexOf('*/', this.i) + 1;
  if (!this.i) {
    this.i = this.content.length;
  }
};

Lexer.prototype.blank = function (c) {
  if (!blank[c]) {
    if (c === '/' && this.content[this.i + 1] === '*') {
      this.comment();
      return;
    }
    this.selector += c;
    this.state = this.name;
  }
};

Lexer.prototype.name = function (c) {
  if (c === '/' && this.content[this.i + 1] === '*') {
    this.comment();
    return;
  }
  if (c === '{' || c === ',' || c === ';') {
    this.handler.onSelector(this.selector.trimEnd());
    this.selector = '';
    if (c !== '{') {
      while (blank[this.content[++this.i]]) {;}
    }
    if (this.content[this.i] === '{') {
      this.floor = 1;
      this.state = this.val;
    } else {
      this.selector += this.content[this.i];
    }
  } else if (blank[c]) {
    this.selector += ' ';
  } else {
    this.selector += c;
  }
};

Lexer.prototype.val = function (c) {
  if (c === '/' && this.content[this.i + 1] === '*') {
    this.comment();
    return;
  }
  if (c === '{') {
    this.floor++;
  } else if (c === '}') {
    this.floor--;
    if (!this.floor) {
      this.handler.onContent(this.style);
      this.style = '';
      this.state = this.blank;
      return;
    }
  }
  this.style += c;
};

module.exports = Parser;

/***/ }),

/***/ 249:
/*!*****************************************************************!*\
  !*** E:/APPpro/voss/规则之树/components/mp-html/img-cache/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 250);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var data = {
  name: 'imgcache',
  prefix: 'imgcache_' };

function ImgCache(vm) {
  this.vm = vm; // 保存实例在其他周期使用
  this.i = 0; // 用于标记第几张图
  vm.imgCache = {
    get list() {
      return uni.
      getStorageInfoSync().
      keys.filter(function (key) {return key.startsWith(data.prefix);}).
      map(function (key) {return key.split(data.prefix)[1];});
    },
    get: function get(url) {
      return uni.getStorageSync(data.prefix + url);
    },
    delete: function _delete(url) {
      var path = uni.getStorageSync(data.prefix + url);
      if (!path) return false;
      plus.io.resolveLocalFileSystemURL(path, function (entry) {
        entry.remove();
      });
      uni.removeStorageSync(data.prefix + url);
      return true;
    },
    add: function add(url) {return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {var filename;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  download(url));case 2:filename = _context.sent;if (!
                filename) {_context.next = 6;break;}
                uni.setStorageSync(data.prefix + url, filename);return _context.abrupt("return",
                'file://' + plus.io.convertLocalFileSystemURL(filename));case 6:return _context.abrupt("return",

                null);case 7:case "end":return _context.stop();}}}, _callee);}))();
    },
    clear: function clear() {
      uni.
      getStorageInfoSync().
      keys.filter(function (key) {return key.startsWith(data.prefix);}).
      forEach(function (key) {
        uni.removeStorageSync(key);
      });

      plus.io.resolveLocalFileSystemURL("_doc/".concat(data.name, "/"), function (entry) {
        entry.removeRecursively(
        function (entry) {
          console.log("".concat(data.name, "\u7F13\u5B58\u5220\u9664\u6210\u529F"), entry);
        },
        function (e) {
          console.log("".concat(data.name, "\u7F13\u5B58\u5220\u9664\u5931\u8D25"), e);
        });

      });
    } };

}


















































































module.exports = ImgCache;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 250:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 251);

/***/ }),

/***/ 251:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 252);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 252:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"规则之树","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"规则之树","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"规则之树","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"规则之树","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** E:/APPpro/voss/规则之树/pages.json ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/uni-stat.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 获取系统信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
var sys = uni.getSystemInfoSync();

// 访问开始即启动小程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源打开小程序；
var STAT_VERSION = '0.0.1';
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800; // 页面在前台无操作结束访问时间 单位s
var APP_PVER_TIME = 300; // 应用在后台结束访问时间 单位s
var OPERATING_TIME = 10; // 数据上报时间 单位s
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = {
  appid: '' };

var titleJsons = {};






statConfig = __webpack_require__(/*! uni-stat-config */ 7).default || __webpack_require__(/*! uni-stat-config */ 7);
var pagesTitle = __webpack_require__(/*! uni-pages?{"type":"style"} */ 8).default;
var pagesData = pagesTitle.pages;
for (var i in pagesData) {var _style$navigationBar;
  var style = pagesData[i];
  var titleText =
  // MP
  style.navigationBarTitleText ||
  // ali
  style.defaultTitle || (
  // H5 || App
  (_style$navigationBar = style.navigationBar) === null || _style$navigationBar === void 0 ? void 0 : _style$navigationBar.titleText) ||
  '';
  if (titleText) {
    titleJsons[i] = titleText;
  }
}



var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (get_platform_name() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}
/**
   * 获取配置信息 如 appid
   */
var stat_config = statConfig;

var get_uuid = function get_uuid(statData) {
  // 有可能不存在 deviceId（一般不存在就是出bug了），就自己生成一个
  return sys.deviceId || getUuid();
};

var get_sgin = function get_sgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }

  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var get_encodeURIComponent_options = function get_encodeURIComponent_options(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

/**
    * 获取当前平台
    * 移动端  : 'n',
    * h5	  : 'h5',
    * 微信	  : 'wx',
    * 阿里	  : 'ali',
    * 百度	  : 'bd',
    * 头条	  : 'tt',
    * qq	  : 'qq',
    * 快应用  : 'qn',
    * 快手	  : 'ks',
    * 飞书	  : 'lark',
    * 快应用  : 'qw',
    * 钉钉	  : 'dt'
    */
var get_platform_name = function get_platform_name() {var _platformList;
  // 苹果审核代码中禁止出现 alipay 字样 ，需要特殊处理一下
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    'app': 'n',
    'app-plus': 'n',
    h5: 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _defineProperty(_platformList,
  'mp-lark', 'lark'), _defineProperty(_platformList,
  'quickapp-webview', 'qw'), _platformList);

  if (platformList["mp-weixin"] === 'ali') {
    if (my && my.env) {
      var clientName = my.env.clientName;
      if (clientName === 'ap') return 'ali';
      if (clientName === 'dingtalk') return 'dt';
      // TODO 缺少 ali 下的其他平台
    }
  }
  return platformList["mp-weixin"];
};

/**
    * 获取小程序 appid
    */
var get_pack_name = function get_pack_name() {
  var packName = '';
  if (get_platform_name() === 'wx' || get_platform_name() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  if (get_platform_name() === 'n') ;
  return packName;
};

/**
    * 应用版本
    */
var get_version = function get_version() {
  return get_platform_name() === 'n' ? plus.runtime.version : '';
};

/**
    * 获取渠道
    */
var get_channel = function get_channel() {
  var platformName = get_platform_name();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

/**
    * 获取小程序场景值
    * @param {Object} options 页面信息
    */
var get_scene = function get_scene(options) {
  var platformName = get_platform_name();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};

/**
    * 获取拼接参数
    */
var get_splicing = function get_splicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

/**
    * 获取页面url，不包含参数
    */
var get_route = function get_route(pageVm) {
  var _self = pageVm || get_page_vm();
  if (get_platform_name() === 'bd') {
    var mp_route = _self.$mp && _self.$mp.page && _self.$mp.page.is;
    var scope_route = _self.$scope && _self.$scope.is;
    return mp_route || scope_route || '';
  } else {
    return _self.route || _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

/**
    * 获取页面url, 包含参数
    */
var get_page_route = function get_page_route(pageVm) {
  // 从 app 进入应用 ，没有 $page ,获取不到路由 ，需要获取页面 尝试从 getCurrentPages 获取也页面实例
  // FIXME 尽量不使用 getCurrentPages ，大部分获取路由是从 onHide 获取 ，这时可以获取到，如果是 onload ,则可能获取不到，比如 百度

  var page = pageVm.$page || pageVm.$scope && pageVm.$scope.$page;
  var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
  if (!page) return lastPageRoute || '';
  // 如果找不到 fullPath 就取 route 的值
  return page.fullPath === '/' ? page.route : page.fullPath || page.route;
};

/**
    * 获取页面实例
    */
var get_page_vm = function get_page_vm() {
  var pages = getCurrentPages();
  var $page = pages[pages.length - 1];
  if (!$page) return null;
  return $page.$vm;
};

/**
    * 获取页面类型
    */
var get_page_types = function get_page_types(self) {
  // XXX 百度有问题 ，获取的都是 componet ,等待修复
  if (self.mpType === 'page' || self.$mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.
  $options.mpType === 'page') {
    return 'page';
  }
  if (self.mpType === 'app' || self.$mpType === 'app' || self.$mp && self.$mp.mpType === 'app' || self.$options.
  mpType === 'app') {
    return 'app';
  }
  return null;
};

/**
    * 处理上报参数
    * @param {Object}  需要处理的数据
    */
var handle_data = function handle_data(statData) {
  var firstArr = [];
  var contentArr = [];
  var lastArr = [];var _loop = function _loop(
  _i) {
    var rd = statData[_i];
    rd.forEach(function (elm) {
      var newData = get_splicing(elm);
      if (_i === 0) {
        firstArr.push(newData);
      } else if (_i === 3) {
        lastArr.push(newData);
      } else {
        contentArr.push(newData);
      }
    });};for (var _i in statData) {_loop(_i);
  }

  firstArr.push.apply(firstArr, contentArr.concat(lastArr));
  // 参数需要处理成字符串，方便上传
  return JSON.stringify(firstArr);
};


/**
    * 自定义事件参数校验
    */
var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report Missing [eventName] parameter");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] Parameter type error, it can only be of type String");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] Parameter length cannot be greater than 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error('uni.report [options] Parameter type error, Only supports String or Object type');
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] Parameter length cannot be greater than 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error("uni.report [eventName] When the parameter is title, the [options] parameter can only be of type String");


    return true;
  }
};

var get_page_name = function get_page_name(routepath) {
  return titleJsons && titleJsons[routepath] || '';
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var is_report_data = function is_report_data() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref) {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2) {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }
  });
};

var requestData = function requestData(done) {
  var appid = "__UNI__8D6C809";
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var
      data = res.data;
      if (data.ret === 0) {
        typeof done === 'function' &&
        done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' &&
      done({
        enable: report_status_code });

    } });

};

var data = uni.getStorageSync('$$STAT__DBDATA') || {};
var dbSet = function dbSet(name, value) {
  if (!data) {
    data = {};
  }
  data[name] = value;
  uni.setStorageSync('$$STAT__DBDATA', data);
};

var dbGet = function dbGet(name) {
  if (!data[name]) {
    var dbdata = uni.getStorageSync('$$STAT__DBDATA');
    if (!dbdata) {
      dbdata = {};
    }
    if (!dbdata[name]) {
      return undefined;
    }
    data[name] = dbdata[name];
  }
  return data[name];
};

var dbRemove = function dbRemove(name) {
  if (data[name]) {
    delete data[name];
    uni.setStorageSync('$$STAT__DBDATA', data);
  } else {
    data = uni.getStorageSync('$$STAT__DBDATA');
    if (data[name]) {
      delete data[name];
      uni.setStorageSync('$$STAT__DBDATA', data);
    }
  }
};

// 首次访问时间
var FIRST_VISIT_TIME_KEY = '__first__visit__time';
// 最后访问时间
var LAST_VISIT_TIME_KEY = '__last__visit__time';
/**
                                                  * 获取当前时间
                                                  */
var get_time = function get_time() {
  return parseInt(new Date().getTime() / 1000);
};

/**
    * 获取首次访问时间
    */
var get_first_visit_time = function get_first_visit_time() {
  var timeStorge = dbGet(FIRST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = get_time();
    dbSet(FIRST_VISIT_TIME_KEY, time);
    // 首次访问需要 将最后访问时间置 0
    dbRemove(LAST_VISIT_TIME_KEY);
  }
  return time;
};

/**
    * 最后访问时间
    */
var get_last_visit_time = function get_last_visit_time() {
  var timeStorge = dbGet(LAST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  }
  dbSet(LAST_VISIT_TIME_KEY, get_time());
  return time;
};

// 页面停留时间记录key
var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_Residence_Time = 0;
var Last_Page_Residence_Time = 0;

/**
                                   * 设置页面停留时间
                                   */
var set_page_residence_time = function set_page_residence_time() {
  First_Page_Residence_Time = get_time();
  dbSet(PAGE_RESIDENCE_TIME, First_Page_Residence_Time);
  return First_Page_Residence_Time;
};

/**
    * 获取页面停留时间
    */
var get_page_residence_time = function get_page_residence_time() {
  Last_Page_Residence_Time = get_time();
  First_Page_Residence_Time = dbGet(PAGE_RESIDENCE_TIME);
  return Last_Page_Residence_Time - First_Page_Residence_Time;
};

/**
    * 获取总访问次数
    */
var TOTAL_VISIT_COUNT = '__total__visit__count';
var get_total_visit_count = function get_total_visit_count() {
  var timeStorge = dbGet(TOTAL_VISIT_COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  dbSet(TOTAL_VISIT_COUNT, count);
  return count;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

/**
                          * 获取第一次时间
                          */
var get_first_time = function get_first_time() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};

/**
    * 获取最后一次时间
    */
var get_last_time = function get_last_time() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};

/**
    * 获取页面 \ 应用停留时间
    */
var get_residence_time = function get_residence_time(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }
  return {
    residenceTime: residenceTime };

};

// 统计数据默认值
var statData = {
  uuid: get_uuid(), // 设备标识
  ut: get_platform_name(), // 平台类型
  mpn: get_pack_name(), // 原生平台包名、小程序 appid
  ak: stat_config.appid, // uni-app 应用 Appid
  usv: STAT_VERSION, // 统计 sdk 版本
  v: get_version(), // 应用版本，仅app
  ch: get_channel(), // 渠道信息
  cn: '', // 国家
  pn: '', // 省份
  ct: '', // 城市
  t: get_time(), // 上报数据时的时间戳
  tt: '',
  p: sys.platform === 'android' ? 'a' : 'i', // 手机系统
  brand: sys.brand || '', // 手机品牌
  md: sys.model, // 手机型号
  sv: sys.system.replace(/(Android|iOS)\s/, ''), // 手机系统版本
  mpsdk: sys.SDKVersion || '', // x程序 sdk version
  mpv: sys.version || '', // 小程序平台版本 ，如微信、支付宝
  lang: sys.language, // 语言
  pr: sys.pixelRatio, // pixelRatio 设备像素比
  ww: sys.windowWidth, // windowWidth 可使用窗口宽度
  wh: sys.windowHeight, // windowHeight 可使用窗口高度
  sw: sys.screenWidth, // screenWidth 屏幕宽度
  sh: sys.screenHeight // screenHeight 屏幕高度
};var
Report = /*#__PURE__*/function () {"use strict";
  function Report() {_classCallCheck(this, Report);
    // 页面实例
    this.self = '';
    // 进入应用标识
    this.__licationShow = false;
    // 离开应用标识
    this.__licationHide = false;
    // 统计默认值
    this.statData = statData;
    // 标题默认值
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };


    // 页面参数
    this._query = {};
    // 页面最后停留页面的 url
    // this._lastPageRoute = ''

    // 注册拦截器
    var registerInterceptor = typeof uni.addInterceptor === 'function';
    if (registerInterceptor) {
      this.addInterceptorInit();
      this.interceptLogin();
      this.interceptShare(true);
      this.interceptRequestPayment();
    }
  }_createClass(Report, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "_login", value: function _login()

    {
      this.sendEventRequest({
        key: 'login' },

      0);

    } }, { key: "_share", value: function _share()

    {
      this.sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this.sendEventRequest({
        key: key },
      0);
    }

    /**
       * 进入应用触发
       */ }, { key: "applicationShow", value: function applicationShow()
    {
      // 通过 __licationHide 判断保证是进入后台后在次进入应用，避免重复上报数据
      if (this.__licationHide) {
        get_last_time();
        var time = get_residence_time('app');
        // 需要判断进入后台是否超过时限 ，默认是 30min ，是的话需要执行进入应用的上报
        if (time.overtime) {
          var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
          var options = {
            path: lastPageRoute,
            scene: this.statData.sc };

          this.sendReportRequest(options);
        }
        // 状态重置
        this.__licationHide = false;
      }
    }

    /**
       * 离开应用触发
       * @param {Object} self
       * @param {Object} type
       */ }, { key: "applicationHide", value: function applicationHide(
    self, type) {
      if (!self) {
        // 表示应用切换到后台 ，此时需要从页面栈获取页面实例
        self = get_page_vm();
      }
      // 进入应用后台保存状态，方便进入前台后判断是否上报应用数据
      this.__licationHide = true;
      get_last_time();
      var time = get_residence_time();
      var route = get_page_route(self);
      uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
      this.sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },

      type);

      // 重置时间
      get_first_time();
    }

    /**
       * 进入页面触发
       */ }, { key: "pageShow", value: function pageShow(
    self) {
      // 清空值 ，初始化 ，避免污染后面的上报数据
      this._navigationBarTitle = {
        config: '',
        page: '',
        report: '',
        lt: '' };


      var route = get_page_route(self);
      var routepath = get_route(self);

      this._navigationBarTitle.config = get_page_name(routepath);
      // 表示应用触发 ，页面切换不触发之后的逻辑
      if (this.__licationShow) {
        get_first_time();
        // this._lastPageRoute = route
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.__licationShow = false;
        return;
      }

      get_last_time();

      var time = get_residence_time('page');
      // 停留时间
      if (time.overtime) {
        var options = {
          path: route,
          scene: this.statData.sc };

        this.sendReportRequest(options);
      }
      // 重置时间
      get_first_time();
    }

    /**
       * 离开页面触发
       */ }, { key: "pageHide", value: function pageHide(
    self) {
      if (!this.__licationHide) {
        get_last_time();
        var time = get_residence_time('page');
        var route = get_page_route(self);
        var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
        if (!lastPageRoute) {
          lastPageRoute = route;
        }
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.sendPageRequest({
          url: route,
          urlref: lastPageRoute,
          urlref_ts: time.residenceTime });

        // this._lastPageRoute = route
        return;
      }
    }


    /**
       * 发送请求,应用维度上报
       * @param {Object} options 页面信息
       */ }, { key: "sendReportRequest", value: function sendReportRequest(
    options) {
      this._navigationBarTitle.lt = '1';
      this._navigationBarTitle.config = get_page_name(options.path);
      var is_opt = options.query && JSON.stringify(options.query) !== '{}';
      var query = is_opt ? '?' + JSON.stringify(options.query) : '';
      Object.assign(this.statData, {
        lt: '1',
        url: options.path + query || '',
        t: get_time(),
        sc: get_scene(options.scene),
        fvts: get_first_visit_time(),
        lvts: get_last_visit_time(),
        tvc: get_total_visit_count() });

      if (get_platform_name() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    }

    /**
       * 发送请求,页面维度上报
       * @param {Object} opt
       */ }, { key: "sendPageRequest", value: function sendPageRequest(
    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time(),
        p: this.statData.p };

      this.request(options);
    }

    /**
       * 进入后台上报数据
       * @param {Object} opt
       * @param {Object} type
       */ }, { key: "sendHideRequest", value: function sendHideRequest(
    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time(),
        p: this.statData.p };

      this.request(options, type);
    }

    /**
       * 自定义事件上报
       */ }, { key: "sendEventRequest", value: function sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? '' : _ref3$value;
      // const route = this._lastPageRoute
      var routepath = get_route();
      this._navigationBarTitle.config = get_page_name(routepath);
      this._navigationBarTitle.lt = '21';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: routepath,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: get_time(),
        p: this.statData.p };

      this.request(options);
    }

    /**
       * 获取wgt资源版本
       */ }, { key: "getProperty", value: function getProperty()
    {var _this = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this.statData.v = wgtinfo.version || '';
        _this.getNetworkInfo();
      });
    }

    /**
       * 获取网络信息
       */ }, { key: "getNetworkInfo", value: function getNetworkInfo()
    {var _this2 = this;
      uni.getNetworkType({
        success: function success(result) {
          _this2.statData.net = result.networkType;
          _this2.getLocation();
        } });

    }

    /**
       * 获取位置信息
       */ }, { key: "getLocation", value: function getLocation()
    {var _this3 = this;
      if (stat_config.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    }

    /**
       * 发送请求
       * @param {Object} data 上报数据
       * @param {Object} type 类型
       */ }, { key: "request", value: function request(
    data, type) {var _this4 = this;
      var time = get_time();
      var title = this._navigationBarTitle;
      Object.assign(data, {
        ttn: title.page,
        ttpj: title.config,
        ttc: title.report });


      var uniStatData = dbGet('__UNI__STAT__DATA') || {};
      if (!uniStatData[data.lt]) {
        uniStatData[data.lt] = [];
      }
      // 加入队列
      uniStatData[data.lt].push(data);
      dbSet('__UNI__STAT__DATA', uniStatData);

      var page_residence_time = get_page_residence_time();
      // 判断时候到达上报时间 ，默认 10 秒上报
      if (page_residence_time < OPERATING_TIME && !type) return;

      // 时间超过，重新获取时间戳
      set_page_residence_time();
      var stat_data = handle_data(uniStatData);
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: stat_data };


      // 重置队列
      dbRemove('__UNI__STAT__DATA');


      {
        if (data.ut === 'h5') {
          this.imageRequest(optionsData);
          return;
        }
      }

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4.sendRequest(optionsData);
        }, 200);
        return;
      }

      this.sendRequest(optionsData);
    } }, { key: "getIsReportData", value: function getIsReportData()

    {
      return is_report_data();
    }

    /**
       * 数据上报
       * @param {Object} optionsData 需要上报的数据
       */ }, { key: "sendRequest", value: function sendRequest(
    optionsData) {var _this5 = this;


      {
        this.getIsReportData().then(function () {
          uni.request({
            url: STAT_URL,
            method: 'POST',
            data: optionsData,
            success: function success() {},
            fail: function fail(e) {
              if (++_this5._retry < 3) {
                setTimeout(function () {
                  _this5.sendRequest(optionsData);
                }, 1000);
              }
            } });

        });
      }
    }

    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = get_sgin(get_encodeURIComponent_options(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this.sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },

      1);

    } }]);return Report;}();var


Stat = /*#__PURE__*/function (_Report) {"use strict";_inherits(Stat, _Report);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!uni.__stat_instance) {
        uni.__stat_instance = new Stat();
      }
      return uni.__stat_instance;
    } }]);
  function Stat() {_classCallCheck(this, Stat);return _super.call(this);

  }

  /**
     * 进入应用
     * @param {Object} options 页面参数
     * @param {Object} self	当前页面实例
     */_createClass(Stat, [{ key: "launch", value: function launch(
    options, self) {
      // 初始化页面停留时间  start
      set_page_residence_time();
      this.__licationShow = true;
      this.sendReportRequest(options, true);
    } }, { key: "load", value: function load(
    options, self) {
      this.self = self;
      this._query = options;
    } }, { key: "appHide", value: function appHide(

    self) {
      this.applicationHide(self, true);
    } }, { key: "appShow", value: function appShow(

    self) {
      this.applicationShow(self);
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageShow(self);
      }










      if (get_page_types(self) === 'app') {
        this.appShow();
      }


    } }, { key: "hide", value: function hide(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageHide(self);
      }










      if (get_page_types(self) === 'app') {
        this.appHide();
      }


    } }, { key: "error", value: function error(

    em) {
      // 开发工具内不上报错误
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
          return;
        }
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: parseInt(new Date().getTime() / 1000),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Report);

var Stat$1 = Stat;

var stat = Stat$1.getInstance();

// 用于判断是隐藏页面还是卸载页面
var isHide = false;

var lifecycle = {
  onLaunch: function onLaunch(options) {
    // 进入应用上报数据
    stat.launch(options, this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };



function main() {
  {
    console.log('uni统计开启,version:1');
  }
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 7:
/*!******************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages.json?{"type":"stat"} ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__8D6C809" };exports.default = _default;

/***/ }),

/***/ 8:
/*!*******************************************************!*\
  !*** E:/APPpro/voss/规则之树/pages.json?{"type":"style"} ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/home/home": { "enablePullDownRefresh": true }, "pages/home/find": { "enablePullDownRefresh": true }, "pages/home/tool": { "enablePullDownRefresh": true }, "pages/home/user": {}, "pages/user/userlist": {}, "pages/user/useredit": {}, "pages/user/mailedit": {}, "pages/user/media": {}, "pages/user/scan": {}, "pages/user/login": { "softinputMode": "adjustResize" }, "pages/user/foget": { "softinputMode": "adjustResize" }, "pages/user/register": { "softinputMode": "adjustResize" }, "pages/user/setup": {}, "pages/user/usermark": {}, "pages/user/agreement": {}, "pages/contents/contentlist": {}, "pages/contents/imagetoday": { "enablePullDownRefresh": true }, "pages/contents/info": { "enablePullDownRefresh": true }, "pages/contents/alltag": {}, "pages/contents/randlist": {}, "pages/contents/allcategory": {}, "pages/contents/metas": {}, "pages/contents/recommend": {}, "pages/contents/search": {}, "pages/contents/userinfo": { "enablePullDownRefresh": true }, "pages/contents/foreverblog": { "enablePullDownRefresh": true } }, "globalStyle": { "navigationBarBackgroundColor": "#0081ff", "navigationBarTitleText": "规则之树", "navigationStyle": "custom", "navigationBarTextStyle": "black" } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map