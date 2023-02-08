<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户封禁<block v-if="pageType==1">{{toid}}</block>
				</view>
				<view class="action" @tap="userBan">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">类型</view>
				<view class="picker" @tap="showModal" data-target="typeModal">
					<block v-if="typeText==''">
						选择发布的分类
					</block>
					<block v-else>
						{{typeText}}
					</block>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">用户ID</view>
				<input placeholder="请输入用户ID" name="input" type="number" v-model="toid"></input>
				<view class="action">
					<text class="text-blue" @tap="toUser" v-if="pageType==0">选择用户</text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">封禁时间</view>
				<view class="picker" @tap="showModal" data-target="timeModal">
					<block v-if="timeText==''">
						选择封禁时间
					</block>
					<block v-else>
						{{timeText}}
					</block>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			
		</form>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="userBan">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
		<!--类型选择-->
		<view class="cu-modal" :class="modalName=='typeModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in typeList" :key="index" @tap="toType(item,index)" >
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item}}</view>
								<radio class="round"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<!--时间选择-->
		<view class="cu-modal" :class="modalName=='timeModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in timeList" :key="index" @tap="toTime(item,index)" >
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.title}}</view>
								<radio class="round"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
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
				
				toid:"",
				num:"",
				typeText:"发布敏感/违法内容",
				typeList:["发布敏感/违法违规内容","机器人/广告/刷帖行为","辱骂他人/影响社区治安","攻击/入侵平台系统","管理员单纯看不顺眼"],
				type:0,
				timeList:[
					{
						"title":"1小时",
						"num":3600
					},
					{
						"title":"12小时",
						"num":43200
					},
					{
						"title":"一天",
						"num":86400
					},
					{
						"title":"七天",
						"num":604800
					},
					{
						"title":"一个月",
						"num":2592000
					},
					{
						"title":"一年",
						"num":31536000
					}
				],
				time:3600,
				timeText:"1小时",
				modalName:null,
				
				token:'',
				
				pageType:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onHide() {
			localStorage.removeItem('getuid')
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			if(localStorage.getItem('getuid')){
				that.toid = localStorage.getItem('getuid');
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.uid){
				that.pageType = 1;
				that.toid = res.uid;
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			toType(text,id){
				var that = this;
				that.typeText = text;
				that.type = id;
				that.hideModal();
			},
			toTime(item,index){
				var that = this;
				that.timeText = item.title;
				that.time = item.num;
				that.hideModal();
			},
			userBan() {
				var that = this;
				if(that.toid==""){
					uni.showToast({
					    title:"请完成表单输入",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"uid":that.toid,
					"time":that.time,
					"type":"manager",
					"text":that.typeText,
					"token":token,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.banUser(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							localStorage.removeItem('getuid');
							// var timer = setTimeout(function() {
							// 	that.back();
							// }, 1000)
							
						}
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			toUser(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/users?type=get'
				});
			}
		}
	}
</script>

<style>
</style>
