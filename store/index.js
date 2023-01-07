import Vue from 'vue';
import Vuex from 'vuex';
//全局风格设置
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		 AppStyle: 'simple-blue',
	},
	mutations:{
		setStyle(state, style) {
			state.AppStyle = style
		}
	}
})
export default store