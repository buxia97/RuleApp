<template>
<uni-shadow-root class="towxml-yuml-yuml"><view class="h2w__yumlBox">
    <view :style="'width:'+(size.w)+'em;'" class="h2w__yumlView">
        <image :class="attr.class" :src="attr.src" :style="'width:'+(size.w)+'em; height:'+(size.h)+'em;'" lazy-load="true" mode="aspectFill" @load="load"></image>
    </view>
</view></uni-shadow-root>
</template>

<script>
const config = require('../config');
export default {
	name: 'Todogroup',
	props: {
		yumlData: {
			type: Object,
			value: {}
		}
	},
	data(){
		return {
			attr:{
				src:'',
				class:''
			},
			size:{
				w:0,
				h:0
			},
		}
	},
	onReady(){this.attached()},
	methods:{
		attached:function(){
			const _ts = this;
			let dataAttr = this.yumlData.attr;

			// 设置公式图片
			_ts.attr = {
				src:`${config.yuml.api}=${dataAttr.value}&theme=${global._theme}`,
				class:`${dataAttr.class}`
			}
		}
	},
	methods: {
		load:function(e){
			const _ts = this;
			// 公式图片加载完成则根据其图片大小、类型计算其显示的合适大小
			let scale = 20,  //jo-这里调整图片大小呈现
				w = e.detail.width / scale,
				h = e.detail.height / scale;
				_ts.size = {
					w:w,
					h:h
				};
		},
		_tap(e, item){
			e.currentTarget.dataset.$el = e.currentTarget.dataset.$el?e.currentTarget.dataset.$el.concat([item]):[item];
			this.$emit('click',e);
		},
	}
}
</script>
<style platform="mp-weixin">

</style>