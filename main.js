import Vue from 'vue'
import App from './App'

// import cuCustom from './colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

uni.hideShareMenu();
const app = new Vue({
    ...App
})
app.$mount()

 



