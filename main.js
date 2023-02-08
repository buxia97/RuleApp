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

import articleItem from './pages/components/articleItem.vue'
Vue.component('articleItem',articleItem)

import commentItem from './pages/components/commentItem.vue'
Vue.component('commentItem',commentItem)

import spaceItem from './pages/components/spaceItem.vue'
Vue.component('spaceItem',spaceItem)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

 



