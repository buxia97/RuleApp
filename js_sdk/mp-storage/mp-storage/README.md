# Storage for MP

小程序 Storage 垫片，用于在各个小程序平台实现 localStorage、sessionStorage。

可以直接在各小程序平台使用，也可以在各个跨端开发工具中使用。

当移植一些依赖 localStorage、sessionStorage 的组件、类库到小程序时，为了避免大量改动可以在其中引入此垫片。

当直接使用一些可配置 storage 参数的类库（如：vuex-persistedstate、vuex-persist ）时，也可使用此垫片。

uni-app 示例：[mp-storage、vuex-persistedstate 使用演示](https://github.com/zhetengbiji/mp-storage/tree/master/test/uni-app)

## 使用方式

### NPM

```
npm i mp-storage --save
```

```js
import { localStorage, sessionStorage } from 'mp-storage'
```

### 直接下载

```js
// 以下路径需根据项目实际情况填写
import { localStorage, sessionStorage } from '../../js/mp-storage/index.js'
```

## API

和浏览器的 localStorage、sessionStorage 用法一致

* localStorage.setItem(key, value)、sessionStorage.setItem(key, value)
* localStorage.getItem(key)、sessionStorage.getItem(key)
* localStorage.removeItem(key)、sessionStorage.removeItem(key)
* localStorage.clear()、sessionStorage.clear()
* localStorage.key(index)、sessionStorage.key(index)
* localStorage.length、sessionStorage.length

## 示例

直接使用

```js
import { localStorage } from '../../js/mp-storage/index.js'
// 推荐用法
localStorage.setItem('test', '123')
console.log(localStorage.getItem('test')) // 123
// 不推荐用法
localStorage.test = '123'
console.log(localStorage.test) // 123
```

在 vuex-persistedstate 中使用

```js
import { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { localStorage } from 'mp-storage'

const store = new Store({
  // ...
  plugins: [
    createPersistedState({
      storage: localStorage
    })
  ]
})
```

## 注意事项

* 使用之前需要先引用此垫片，非全局变量。
* 直接给 storage 对象上增加新属性的方式不太稳定，推荐使用 setItem 方式。