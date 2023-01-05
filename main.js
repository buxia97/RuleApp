import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store/index.js'
// 把vuex定义成全局组件
Vue.prototype.$store = store
// import cuCustom from './colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

 



