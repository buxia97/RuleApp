import Vue from 'vue';
import Vuex from 'vuex';
//全局风格设置
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		 AppStyle: 'simple-red', //默认风格
		 openTabbarText:1, //是否显示底部tabbar文字，1为显示，0为不显示
		 TabbarOpacity: 0.95,//底部tabbar半透明参数，1为不透明，可以精确到小数点后两位
		 scrollTop:0, //全局滚动条距离（千万别改）
		 
	},
	mutations:{
		setStyle(state, style) {
			state.AppStyle = style
		},
		setScrollTop(state, scrollTop) {
			state.scrollTop = scrollTop
		}
	}
})
export default store