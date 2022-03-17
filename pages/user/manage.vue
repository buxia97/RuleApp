<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					管理员中心
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box manage-data" >
			<view class="user-data grid col-4">
				<view class="user-data-box">
					<view class="user-data-value">{{allContents}}</view>
					<view class="user-data-title">全站文章</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{allComments}}</view>
					<view class="user-data-title">全站评论</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{allShop}}</view>
					<view class="user-data-title">全站商品</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{allUsers}}</view>
					<view class="user-data-title">用户注册</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/users')">
							<view class="index-sort-i">
								<text class="cuIcon-friend"></text>
							</view>
							<view class="index-sort-text">
								用户管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/contents')">
							<view class="index-sort-i">
								<text class="cuIcon-text"></text>
							</view>
							<view class="index-sort-text">
								文章管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/comments')">
							<view class="index-sort-i">
								<text class="cuIcon-favorfill"></text>
							</view>
							<view class="index-sort-text">
								评论管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/shop')">
							<view class="index-sort-i">
								<text class="cuIcon-shop"></text>
							</view>
							<view class="index-sort-text">
								商品管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/recharge')">
							<view class="index-sort-i">
								<text class="cuIcon-pay"></text>
							</view>
							<view class="index-sort-text">
								快捷充扣
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/withdraw')">
							<view class="index-sort-i">
								<text class="cuIcon-vipcard"></text>
							</view>
							<view class="index-sort-text">
								提现审核
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="ruleApi-Info grid col-2" v-if="ruleApiInfo">
				<view class="ruleApi-Info-box">
					<view class="ruleApi-title">客户端最新版本</view>
					<view class="ruleApi-name">RuleApp</view>
					<view class="ruleApi-version text-gray">{{ruleApiInfo.ruleappVersion}}</view>
					<text class="cu-btn bg-blue" @tap="toUrl(ruleApiInfo.ruleappDt)">获取</text>
				</view>
				<view class="ruleApi-Info-box">
					<view class="ruleApi-title">服务端最新版本</view>
					<view class="ruleApi-name">RuleApi</view>
					<view class="ruleApi-version text-gray">{{ruleApiInfo.ruleapiVersion}}</view>
					<text class="cu-btn bg-blue" @tap="toUrl(ruleApiInfo.ruleapiDt)">获取</text>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-list menu">
				<view class="cu-item" @tap="toReward">
					<view class="content">
						<text class="cuIcon-presentfill text-red"></text>
						<text>打赏开发者</text>
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
				
				
				userInfo:null,
				token:"",
				allComments:"",
				allUsers:"",
				allShop:"",
				allContents:"",
				
				ruleApiInfo:null,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.allData();
			}
			
			that.getInfo();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toLink(text){
				var that = this;
				
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
					url: text
				});
			},
			allData() {
				var that = this;
				Net.request({
					
					url: API.allData(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.allComments = res.data.data.allComments;
							that.allUsers = res.data.data.allUsers;
							that.allShop = res.data.data.allShop;
							that.allContents = res.data.data.allContents;
						}
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			getInfo() {
				var that = this;
				Net.request({
					
					url: "https://www.ruletree.club/ruleApiInfo.php",
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.ruleappVersion){
							that.ruleApiInfo = res.data;
						}
						
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			toUrl(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toReward(){
				var url = "https://www.ruletree.club/sponsor.html";
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			}
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
