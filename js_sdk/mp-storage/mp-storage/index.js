var api

export var localStorage = {}

export var sessionStorage = {}

var sessionStorageDict = {}

var storages = [localStorage, sessionStorage]
/**
 * 数据同步
 */
function sync() {
    storages.forEach(function(storage) {
        storage.__sync()
    })
}
/**
 * 初始化
 */
function init() {
    storages.forEach(function(storage) {
        var isSession = storage === sessionStorage
        Object.defineProperties(storage, {
            length: {
                get: function() {
                    this.__sync()
                    return this.__keys.length
                },
                enumerable: false
            },
            setItem: {
                value: function(key, value) {
                    value = String(value)
                    if (isSession) {
                        sessionStorageDict[key] = value
                    } else {
                        api.setStorageSync(key, value)
                    }
                    this.__addKey(key)
                },
                enumerable: false
            },
            getItem: {
                value: function(key) {
                    if (isSession) {
                        return sessionStorageDict[key]
                    } else {
                        return api.getStorageSync(key)
                    }
                },
                enumerable: false
            },
            removeItem: {
                value: function(key) {
                    if (isSession) {
                        delete sessionStorageDict[key]
                    } else {
                        api.removeStorageSync(key)
                    }
                    this.__removeKey(key)
                },
                enumerable: false
            },
            clear: {
                value: function() {
                    if (isSession) {
                        sessionStorageDict = {}
                    } else {
                        api.clearStorageSync()
                    }
                    var self = this
                    var keys = this.__keys
                    keys.forEach(function(key) {
                        delete self[key]
                    })
                    keys.length = 0
                },
                enumerable: false
            },
            key: {
                value: function(index) {
                    this.__sync()
                    return this.__keys[index]
                },
                enumerable: false
            },
            __keys: {
                value: [],
                enumerable: false
            },
            __addKey: {
                value: function(key) {
                    if (key in this) {
                        return
                    }
                    Object.defineProperty(this, key, {
                        set: function(value) {
                            this.setItem(key, value)
                        },
                        get: function() {
                            return this.getItem(key)
                        },
                        enumerable: false,
                        configurable: true
                    })
                    this.__keys.push(key)
                },
                enumerable: false
            },
            __removeKey: {
                value: function(key) {
                    var keys = this.__keys
                    var index = keys.indexOf(key)
                    if (index >= 0) {
                        this.__keys.splice(index, 1)
                    }
                    delete this[key]
                },
                enumerable: false
            },
            __sync: {
                value: function() {
                    for (var key in this) {
                        if (this.propertyIsEnumerable(key)) {
                            var value = this[key]
                            delete this[key]
                            this.setItem(key, value)
                        }
                    }
                },
                enumerable: false
            }
        })
    })
    var info = api.getStorageInfoSync()
    info.keys.forEach(function(key) {
        localStorage.__addKey(key)
    })
    setInterval(function() {
        sync()
    }, 100)
}

if (typeof window === 'object' && typeof window.document === 'object') {
    localStorage = window.localStorage
    sessionStorage = window.sessionStorage
} else {
    switch ('object') {
        case typeof uni:
            api = uni
            break;
        case typeof wx:
            api = wx
            break;
        case typeof swan:
            api = swan
            break;
        case typeof tt:
            api = tt
            break;
        case typeof dd:
            api = dd
            break;
        default:
            throw new Error('storage not support')
    }
    init()
}
