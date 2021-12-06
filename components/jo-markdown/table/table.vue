<template>
<uni-shadow-root class="towxml-table-table"><block v-if="tableData.tag === 'table'">
    <scroll-view scroll-x="true" class="h2w__tableParent" style="width: 100%;height: 100%;">
        <view :class="tableData.attr.class" :width="tableData.attr.width" :style="tableData.attr.style">
            
            <block v-for="(item,index1) in (tableData.child)" :key="index1" v-if="tableData.child">
                <view v-if="item.tag" :class="item.attr.class">
                    
                    <block v-for="(item,index2) in (item.child)" :key="index2" v-if="item.child">
                        <view v-if="item.tag" :class="item.attr.class">
                            
                            <block v-for="(item,index3) in (item.child)" :key="index3" v-if="item.child">
                                <view v-if="item.tag" :class="item.attr.class" :width="tableData.attr.width" :style="tableData.attr.style">
                                    <decode v-if="item.child" :nodes="item" @click.stop="_tap($event, item)"></decode>
                                </view>
                            </block>
                        </view>
                    </block>
                </view>
            </block>
        </view>
    </scroll-view>
	<!-- <view class="text-center text-sm" :class="'text-'+colorStyle.top">
		(表格可以左右滑动)
	</view> -->
</block></uni-shadow-root>
</template>

<script>
// #ifdef MP
import Decode from '../decode.vue';
// #endif
export default {
	name: 'Rtable',
	data(){
		return {
			// colorStyle: getApp().globalData.colorStyle,
		}
	},
	props: {
		tableData: {
			type: Object,
			value: {}
		}
	},
	components:{
		// #ifdef MP
		Decode,
		// #endif
	},
	mounted(){this.ready()},
	onReady(){this.ready()},
	methods:{
		ready(){
		},
		_tap(e, item){
			e.currentTarget.dataset.$el = e.currentTarget.dataset.$el?e.currentTarget.dataset.$el.concat([item]):[item];
			this.$emit('click',e);
		},
	}
}
</script>
<style>

</style>