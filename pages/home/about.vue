<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					关于我们
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="app-about">
			<view class="app-logo">
				<image :src="logo" mode="widthFix"></image>
			</view>
			<view class="app-name">
				{{name}}
			</view>
			<view class="app-ver" v-if="wgtVer!=''">
				{{wgtVer}}
			</view>
			
		</view>
		<view class="cu-list menu margin-top">
			<!--  #ifdef APP-PLUS -->
			<view class="cu-item" @tap="isUpdate(true)">
				<view class="content">
					<text>最新版本</text>
				</view>
				<view class="action">
					<text class="update-tips bg-red" v-if="Update>0">News</text>
					<text class="text-gray">{{versionTitle}}</text>
					
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<!--  #endif -->
			<view class="cu-item" @tap="toAgreement">
				<view class="content">
					<text>隐私协议</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item"  @tap="toPage('关于平台',aboutme)">
				<view class="content">
					<text>详细介绍</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		<view class="about-tips">
			{{name}}平台部分图片，资源来源于互联网，如侵犯了您的权利，请立即联系邮箱（{{email}}）进行删除。
		</view>
		<!--  #ifdef APP-PLUS -->
		<view class="update" v-if="Update==2">
			<view class="update-bg">
				
			</view>
			<view class="update-box">
				<view class="update-main">
					<image src="../../static/app-plus/ic_ar.png"></image>
					<view class="update-title">发现新版本：{{versionTitle}}</view>
					<view class="update-intro"><rich-text :nodes="versionIntro"></rich-text></view>
					<view class="update-btn grid col-2">
						<view class="update-btn-box">
							<view class="update-btn-main bg-blue"  @tap="goUpdata(true)">
								确定
							</view>
						</view>
						<view class="update-btn-box">
							<view class="update-btn-main bg-gray" @tap="closeUpdate()">
								取消
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--  #endif -->
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				logo:"",
				name:"",
				email:"",
				versionCode:0,
				wgtVer:'',
				
				Update:0,
				versionUrl:"",
				versionTitle:"",
				versionIntro:"",
				aboutme:this.$API.GetAboutme(),
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			that.isUpdate(false);
			// #endif
			that.name = that.$API.GetAppName();
			that.logo = that.$API.GetLogo();
			that.email = that.$API.GetAppEmail();
			
			
		},
		onLoad() {
			var that = this;
			
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			goUpdata(){
				var that = this;
				console.log(that.versionUrl)
				if(that.versionUrl!=""){
					plus.runtime.openURL(that.versionUrl);  
				}
				that.closeUpdate();
			},
			isUpdate(Status) {
				var that = this;
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					
					that.wgtVer = inf.version //获取当前版本号
					that.versionCode = inf.versionCode;
					var version = inf.versionCode;
					//从缓存里读取版本号
					if(localStorage.getItem('AppInfo')){
						try{
							var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
							var versionCode = AppInfo.versionCode;
							let platform=uni.getSystemInfoSync().platform;
							if(platform=='ios'){
								that.versionUrl =  AppInfo.iosUrl;
							}else if(platform=='android'){
								that.versionUrl =  AppInfo.androidUrl;
							}
							
							that.versionTitle = AppInfo.version;
							that.versionIntro = AppInfo.versionIntro;
							
							if(versionCode > version){
								console.log("有更新");
								that.Update=1;
								if(Status){
									that.Update=2;
									
								}
							}else{
								if(Status){
									uni.showToast({
										title:"当前已是最新版本，无需更新",
										icon:'none',
										duration: 1000,
										position:'bottom',
									});
									
								}
							}
						}catch(e){
							console.log(e);
						}
						
					}
				});
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toAgreement(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/agreement'
				});
			},
			closeUpdate(){
				var that = this;
				that.Update = 1;
				// uni.showTabBar({
				// 	animation: true
				// });
			},
		},
	}
</script>

<style>
	page{
		background: #f9f9f9;
	}
</style>