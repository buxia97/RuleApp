<template>
<uni-shadow-root class="towxml-latex-latex">
	<image :class="attr.class" lazy-load="true" :src="attr.src" :style="'width:'+(size.w)+'em; height:'+(size.h)+'em;'" @load="load"></image>
</uni-shadow-root>
</template>

<script>
const config = require('../config');
export default {
	name:'Latex',
	options: {
		styleIsolation: 'shared'
	},
	props: {
		latexData: {
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
			}
		}
	},
	onReady(){this.attached()},
	mounted() {this.attached()},
	methods: {
		attached:function(){
			const _ts = this;
			let dataAttr = this.latexData.attr;
		
			// 设置公式图片
			_ts.attr = {
					src:`${config.latex.api}=${dataAttr.value}&theme=${global._theme}`,
					class:`${dataAttr.class} ${dataAttr.class}--${dataAttr.type}`
				}
		},
		load:function(e){
			const _ts = this;

			// 公式图片加载完成则根据其图片大小、类型计算其显示的合适大小
			let scale = 18,  //jo-这里调整图片大小呈现
				w = e.detail.width / scale,
				h = e.detail.height /scale;

			_ts.size = {
					w:w,
					h:h
				}
		}
	}
}
</script>
<style platform="mp-weixin">

</style>