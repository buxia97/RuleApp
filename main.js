import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store/index.js'
// 把vuex定义成全局组件
Vue.prototype.$store = store

//接口和网络
import API from './utils/api.js'
import Net from './utils/net.js'
Vue.prototype.$API = API
Vue.prototype.$Net = Net
// import cuCustom from './colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)

//页面类型
//文章为主风格
import find from './pages/tabPage/find.vue'
Vue.component('find',find)

import home from './pages/tabPage/home.vue'
Vue.component('home',home)

import square from './pages/tabPage/square.vue'
Vue.component('square',square)

import inbox from './pages/tabPage/inbox.vue'
Vue.component('inbox',inbox)

//通用

import user from './pages/tabPage/user.vue'
Vue.component('user',user)



//下面是列表和模块组件

import articleItem from './pages/components/articleItem.vue'
Vue.component('articleItem',articleItem)

import commentItem from './pages/components/commentItem.vue'
Vue.component('commentItem',commentItem)

import spaceItem from './pages/components/spaceItem.vue'
Vue.component('spaceItem',spaceItem)

import shopItem from './pages/components/shopItem.vue'
Vue.component('shopItem',shopItem)

import Share from './pages/components/Share.vue'
Vue.component('Share',Share)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

 



