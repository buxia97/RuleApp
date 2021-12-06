<template>
	<uni-shadow-root>
		<block v-for="(item,i) in (nodes.child)" :key="i" >
			<text v-if="item.tag==undefined">{{item.text.trim()===''?'':item.text}}</text>
			<view v-if="(item.tag==='view'||item.tag==='p'||item.tag==='div')&&item.type!='style'&&item.type!='script'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</view>
			<video v-if="item.tag==='video'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style"  :poster="item.attr.poster" :src="item.attr.src">
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</video>
			<text v-if="item.tag==='text'||item.tag==='span'||item==='strong'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</text>
			<image v-if="item.tag==='image'||item.tag==='img'"  :class="item.attr.class" :image-data="item.attr.data"
			 :id="item.attr.id" :style="item.attr.style"  :src="item.attr.src"
			 :mode="item.attr.mode ? item.attr.mode : 'widthFix'" :lazy-load="item.attr['lazy-load']">
				<decode  v-if="item.child&&(item.tag==='image'||item.tag==='img')" :nodes="item"></decode>
			</image>
			<navigator v-if="item.tag==='navigator'||item.tag==='a'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style"  :url="item.attr.href">
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</navigator>
			<swiper v-if="item.tag==='swiper'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</swiper>
			<swiper-item v-if="item.tag==='swiper-item'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</swiper-item>
			<block v-if="item.tag==='block'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</block>
			<form v-if="item.tag==='form'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</form>
			<input v-if="item.tag==='input'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
			 </input>
			<decode  v-if="item.child && item.tag==='input'" :nodes="item"></decode>
			<textarea
			 v-if="item.tag==='textarea'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
			 <decode v-if="item.child!==undefined" :nodes="item"></decode>
			 </textarea>
			 <button
			 v-if="item.tag==='button'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</button>
			<checkbox-group v-if="item.tag==='checkbox-group'"  :class="item.attr.class" :data="item.attr.data"
			 :id="item.attr.id" :style="item.attr.style"  @change.stop="_change($event, item)">
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</checkbox-group>
			<checkbox v-if="item.tag==='checkbox'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style"  :checked="item.attr.checked" :value="item.attr.value">
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</checkbox>
			<radio-group v-if="item.tag==='radio-group'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style" >
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</radio-group>
			<radio v-if="item.tag==='radio'"  :class="item.attr.class" :data="item.attr.data" :id="item.attr.id"
			 :style="item.attr.style"  :checked="item.attr.checked">
				<decode  v-if="item.child!==undefined" :nodes="item"></decode>
			</radio>
			<block v-if="item.tag==='audio-player'">
				<audio-player :audio-data="item"  ></audio-player>
			</block>
			<block v-if="item.tag==='latex'">
				<latex :latex-data="item"  ></latex>
			</block>
			<block v-if="item.tag==='table'">
				<rtable :table-data="item"  ></rtable>
			</block>
			<block v-if="item.tag==='todogroup'">
				<todogroup :todo-data="item"  ></todogroup>
			</block>
			<block v-if="item.tag==='yuml'">
				<yuml :yuml-data="item"  ></yuml>
			</block>
		</block>
	</uni-shadow-root>
</template>

<script>
	// #ifdef MP || H5
	import Decode from './decode.vue'
	// #endif
	import AudioPlayer from './audio-player/audio-player.vue'
	import Latex from './latex/latex.vue'
	import Rtable from './table/table.vue'
	import Todogroup from './todogroup/todogroup.vue'
	import Yuml from './yuml/yuml.vue'
	import Img from './img/img.vue'
	const config = require('./config.js');
	// let app = getApp();
	export default {
		name: 'Decode',
		props: {
			nodes: {
				type: Object,
				value: {}
			}
		},
		components: {
			// #ifdef MP||H5
			Decode,
			// #endif
			AudioPlayer,
			Latex,
			Rtable,
			Todogroup,
			Yuml,
			Img,
		},
		// mounted(){this.ready()},
		// onReady(){this.ready()},
		methods:{
			//  ready(){
			//  },
			// _tap(e, item) {
			// 	e.currentTarget.dataset.$el = e.currentTarget.dataset.$el ? e.currentTarget.dataset.$el.concat([item]) : [item];
			// 	this.$emit('click', e);
			// },
			// _change(e, item) {
			// 	e.currentTarget.dataset.data = item;
			// 	this.$emit(e.type, e);
			// },
			// _load(e){
			// 	this.$emit('load', e);
			// }
		}
	}
</script>
<style platform="mp-weixin">

</style>
