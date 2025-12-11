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
					<button class="cu-btn round bg-blue" @tap="save()">保存</button>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="style-title">
				简约主题
			</view>
			<view class="style-concent grid col-4 style-simple">
				<view class="style-box" @tap="setAppStyle('simple-red')">
					<view class="style-i" style="color:#e54d42;">
						✪ω✪
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-red'"></text>简约红
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-blue')">
					<view class="style-i" style="color: #0081ff;">
						(ง •̀_•́)ง
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-blue'"></text>简约蓝
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
				<view class="style-box" @tap="setAppStyle('simple-brown')">
					<view class="style-i" style="color: #a5673f;">
						（*/∇＼*）
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-brown'"></text>简约棕
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-cyan')">
					<view class="style-i" style="color: #1cbbb4;">
						(๑•̀ㅂ•́)و✧
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-cyan'"></text>简约青
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('simple-purple')">
					<view class="style-i" style="color: #6739b6;">
						(๑òᆺó๑)
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='simple-purple'"></text>简约紫
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="style-title">
				单色主题
			</view>
			<view class="style-concent grid col-4">
				<view class="style-box" @tap="setAppStyle('full-red')">
					<view class="style-i" style="background: #e54d42;">
						
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-red'"></text>单色红
					</view>
				</view>
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
				<view class="style-box" @tap="setAppStyle('full-brown')">
					<view class="style-i" style="background: #a5673f;">

					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-brown'"></text>单色棕
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('full-cyan')">
					<view class="style-i" style="background: #1cbbb4;">

					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-cyan'"></text>单色青
					</view>
				</view>
				<view class="style-box" @tap="setAppStyle('full-purple')">
					<view class="style-i" style="background: #6739b6;">
	
					</view>
					<view class="style-text">
						<text class="cuIcon-check" v-if="AppStyle=='full-purple'"></text>单色紫
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				styleIndex:""
				
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
			//plus.navigator.setStatusBarStyle("dark")
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
			that.styleIndex = that.$API.GetStyleIndex();
			
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
				
			},
			save(){
				var that = this;
				var style = that.AppStyle;
				localStorage.setItem('appStyle',style);
				that.$store.commit('setStyle', style);
				console.log(that.$store.state.AppStyle);
				var curStyle = "blue";
				if(style.indexOf("blue")!=-1){
					curStyle = "blue";
				}
				if(style.indexOf("pink")!=-1){
					curStyle = "pink";
				}
				if(style.indexOf("orange")!=-1){
					curStyle = "orange";
				}
				if(style.indexOf("green")!=-1){
					curStyle = "green";
				}
				var styleIndex = that.styleIndex;
				uni.redirectTo({
					url: '/pages/home/'+styleIndex
				})
				
			}

		}
		
	}
</script>

<style>
</style>
