<template>
	<view :id="wavesId" class="waves" :class="itemClass" @tap="onTap" @touchstart="onTouchstart($event)">
		<slot></slot>
		<view
			class="waves-ripple"
			:class="{ 'active': active }"
			:style="{
				top: rippleTop + 'px',
				left: rippleLeft + 'px',
				width: field.finalWidth + 'px',
				height: field.finalWidth + 'px',
				'background-color': wavesColor
			}"
		></view>
	</view>
</template>

<script>
let wavesId = 0;
export default {
	props: {
		wavesColor: {
			type: String,
			default: 'rgba(0, 0, 0, .15)'
		},
		itemClass: {
			type: String,
			default: ''
		}
	},
	data() {
		wavesId++;
		return {
			rippleTop: 0,
			rippleLeft: 0,
			field: {},
			active: Boolean,
			wavesId: 'waves_' + wavesId
		};
	},
	methods: {
		onTap(e) {	// 点击事件
			this.$emit('onTap');
		},
		onTouchstart(e) {	// 触碰事件 触发波纹
			this.active = false;
			this.$nextTick(() => {
				this.activeWaves(e);
			});
		},
		activeWaves(e) {
			this.getClientRect().then(data => {
				if (!data.height) {
					return;
				};
				data.finalWidth = data.height > data.width ? data.height : data.width;
				if (!data.finalWidth) {
					return;
				};
				this.field = data;
				let touchesX;
				let touchesY;
				// #ifdef MP-BAIDU
				touchesX = e.changedTouches[0].clientX;
				touchesY = e.changedTouches[0].clientY;
				// #endif
				// #ifdef MP-ALIPAY
				touchesX = e.detail.clientX;
				touchesY = e.detail.clientY;
				// #endif
				// #ifndef MP-BAIDU || MP-ALIPAY
				touchesX = e.touches[0].clientX;
				touchesY = e.touches[0].clientY;
				// #endif
				this.rippleTop = touchesY - data.top - data.finalWidth / 2;
				this.rippleLeft = touchesX - data.left - data.finalWidth / 2;
				this.$nextTick(() => {
					this.active = true;
				});
			});
		},
		getClientRect() {
			return new Promise(callback => {
				let query = uni.createSelectorQuery().in(this);
				let id = '#' + this.wavesId;
				query.select(id).boundingClientRect(data => {
						callback(data);
					}).exec();
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.waves {
	position: relative;
	overflow: hidden;
	
	.waves-ripple {
		position: absolute;
		border-radius: 100%;
		background-clip: padding-box;
		pointer-events: none;
		user-select: none;
		transform: scale(0);
		opacity: 1;
	}
	
	.active {
		opacity: 0;
		transform: scale(2);
		transition: opacity 1.0s ease-out, transform 0.3s ease-out;
	}
}


</style>
