<template>
	<view class="user"  :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					应用风格
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="style-title">
				简约主题
			</view>
			<view class="style-concent grid col-4 style-simple">
				<view class="style-box" @tap="setAppStyle('simple-blue')">
					<view class="style-i" style="color: #0081ff;">
						(ง •̀_•́)ง
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-blue'"></text>默认蓝
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-pink')">
					<view class="style-i" style="color: #fa7298;">
						(๑• . •๑)
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-pink'"></text>简约粉
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-orange')">
					<view class="style-i" style="color: #f47c35;">
						(ಡωಡ)
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-orange'"></text>简约橙
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-green')">
					<view class="style-i" style="color: #8ebe58;">
						( ｰ̀εｰ́ )
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-green'"></text>简约绿
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="style-title">
				单色主题
			</view>
			<view class="style-concent grid col-4">
				<view class="style-box" @tap="setAppStyle('full-blue')">
					<view class="style-i" style="background: #0081ff;">
						
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-blue'"></text>单色蓝
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('full-pink')">
					<view class="style-i" style="background: #fa7298;">
						
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-pink'"></text>单色粉
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('full-orange')">
					<view class="style-i" style="background: #f47c35;">
						
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-orange'"></text>单色橙
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('full-green')">
					<view class="style-i" style="background: #8ebe58;">
						
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-green'"></text>单色绿
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
			}
		},
		onShow(){
			var that = this;
			if(localStorage.getItem('appStyle')){
				that.appStyle = localStorage.getItem('appStyle');
				// that.$store.state.AppStyle = that.appStyle;
				that.$store.commit('setStyle', that.appStyle);
				
				
			}
			// #ifdef APP-PLUS
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.text){
				that.text = res.text;
			}
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			setAppStyle(style){
				var that = this;
				that.AppStyle = style;
				// that.$store.state.AppStyle = style;
				localStorage.setItem('appStyle',style);
				that.$store.commit('setStyle', style);
				console.log(that.$store.state.AppStyle);
			}

		},
	}
</script>

<style>
</style>
