<template>
	<uni-shadow-root>
		<view :class="'h2w h2w-light' + nodes.theme">
			<!-- jo-内联样式调整字体大小 font-size: 30rpx;-->
			<view class="h2w__main" style="font-size: 34rpx;">
				<decode :nodes="nodes" @click.stop="__event($event)" @change.stop="__event($event)" @load="load"></decode>
			</view>
		</view>
	</uni-shadow-root>
</template>

<script>
import Decode from './decode.vue';

export default {
	name: 'Towxml',
	components: {
		Decode
	},
	props: {
		nodes: {
			type: Object,
			value: {}
		}
	},
	data() {
		return {
			someData: {}
		};
	},
	mounted() {
		this.ready();
	},
	onReady() {
		this.ready();
	},
	methods: {
		ready() {},
		__event(e) {
			this.$emit('click', e);
		},
		load() {
			console.log('富文本渲染完成');
		}
	}
};
</script>
<style scoped></style>
