var api;

export var localStorage = {};
export var sessionStorage = {};

var sessionStorageDict = {};
var storages = [localStorage, sessionStorage];

// =========================
// 运行环境判断
// =========================
const isH5 = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const isIOS = () => {
  return /iP(ad|hone|od)/.test(navigator.userAgent);
};

// =========================
// 统一 Storage API
// =========================
function getApi() {
  if (typeof uni !== 'undefined') return uni;
  if (typeof wx !== 'undefined') return wx;
  if (typeof swan !== 'undefined') return swan;
  if (typeof tt !== 'undefined') return tt;
  if (typeof dd !== 'undefined') return dd;
  throw new Error('storage not support');
}

// =========================
// 初始化
// =========================
function init() {
  storages.forEach(function (storage) {
    var isSession = storage === sessionStorage;

    Object.defineProperties(storage, {
      length: {
        get: function () {
          this.__sync();
          return this.__keys.length;
        }
      },

      setItem: {
        value: function (key, value) {
          value = String(value);

          if (isSession) {
            sessionStorageDict[key] = value;
          } else {
            api.setStorageSync(key, value);
          }

          this.__addKey(key);
        }
      },

      getItem: {
        value: function (key) {
          if (isSession) {
            return sessionStorageDict[key] || null;
          } else {
            try {
              return api.getStorageSync(key);
            } catch (e) {
              return null;
            }
          }
        }
      },

      removeItem: {
        value: function (key) {
          if (isSession) {
            delete sessionStorageDict[key];
          } else {
            try {
              api.removeStorageSync(key);
            } catch (e) {}
          }
          this.__removeKey(key);
        }
      },

      clear: {
        value: function () {
          if (isSession) {
            sessionStorageDict = {};
          } else {
            try {
              api.clearStorageSync();
            } catch (e) {}
          }

          var keys = this.__keys;
          for (var i = 0; i < keys.length; i++) {
            delete this[keys[i]];
          }
          keys.length = 0;
        }
      },

      key: {
        value: function (index) {
          this.__sync();
          return this.__keys[index];
        }
      },

      __keys: {
        value: [],
        enumerable: false
      },

      __addKey: {
        value: function (key) {
          if (this.__keys.indexOf(key) >= 0) return;

          Object.defineProperty(this, key, {
            set: function (value) {
              this.setItem(key, value);
            },
            get: function () {
              return this.getItem(key);
            },
            enumerable: false,
            configurable: true
          });

          this.__keys.push(key);
        }
      },

      __removeKey: {
        value: function (key) {
          var index = this.__keys.indexOf(key);
          if (index >= 0) {
            this.__keys.splice(index, 1);
          }
          delete this[key];
        }
      },

      __sync: {
        value: function () {
          // ❌ 删除原逻辑（H5/iOS会卡）
          // 保留兼容但不做轮询同步
        }
      }
    });

    // 初始化 keys
    try {
      var info = api.getStorageInfoSync();
      if (info && info.keys) {
        info.keys.forEach(function (key) {
          storage.__addKey(key);
        });
      }
    } catch (e) {}
  });
}

// =========================
// H5 替换策略（重点修复 iOS Safari）
// =========================
if (isH5) {
  try {
    // iOS Safari 特殊处理
    if (isIOS()) {
      // ⚠️ iOS 不建议污染 localStorage 过多 key
      localStorage = window.localStorage;
      sessionStorage = window.sessionStorage;
    } else {
      localStorage = window.localStorage;
      sessionStorage = window.sessionStorage;
    }
  } catch (e) {
    console.warn('H5 storage fallback:', e);
  }
} else {
  api = getApi();
  init();
}