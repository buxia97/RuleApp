<template>
	<view class="userpost" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					版主管理
				</view>
				<view class="action" @tap="setModerator()">
					<button class="cu-btn round bg-blue">添加版主</button>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<form>
			<view class="cu-form-group margin-top"  @tap="toSection()">
				<view class="title">选择版块</view>
				<view class="picker">
					<text class="text-green">{{curSection.name}}</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			
		</form>
		<view class="cu-list menu-avatar userList" style="margin-top: 20upx;">
			<view class="cu-item" v-for="(item,index) in moderators" :key="index">
				<view class="cu-avatar round lg" :style="item.style"></view>
				<view class="content">
					<view class="text-grey">
						<block>{{item.userJson.name}}</block>
						<text v-if="item.userJson.groupKey=='contributor'||item.userJson.groupKey=='administrator'" class="cuIcon-lightfill"></text>
						<!--  #ifdef H5 || APP-PLUS -->
						<block v-if="item.userJson.isvip>0">
							<block v-if="item.userJson.vip==1">
								<text class="isVIP bg-gradual-red">VIP</text>
							</block>
							<block v-else>
								<text class="isVIP bg-yellow">VIP</text>
							</block>
						</block>
						<!--  #endif -->
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{restrictList[item.purview-1].name}}
						</view> </view>
				</view>
				<view class="action goUserIndex">
					<view class="cu-btn text-red" @tap="deleteModerator(item.id)">卸任</view>
					
				</view>
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
				moderators:[],
				
				curSection:{
					"name":"",
					"id":0,
				},
				restrictList:[
					{
						'id':1,
						'name':'审核员'
					},
					{
						'id':2,
						'name':'执行员'
					},
					{
						'id':3,
						'name':'小版主'
					},
					{
						'id':4,
						'name':'版主'
					},
					{
						'id':5,
						'name':'大版主'
					}
				],
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('curSection')){
				that.curSection =JSON.parse(localStorage.getItem('curSection'));
				that.getSectionInfo();
				localStorage.removeItem('curSection');
				
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toSection(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/forum/section?type=1'
				});
			},
			setModerator(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/setModerator'
				});
			},
			deleteModerator(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要卸任该版主吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.deleteModerator(),
				            	data:data,
				            	header:{
				            		'Content-Type':'application/x-www-form-urlencoded'
				            	},
				            	method: "get",
				            	dataType: 'json',
				            	success: function(res) {
				            		setTimeout(function () {
				            			uni.hideLoading();
				            		}, 1000);
				            		
				            		if(res.data.code==1){
										uni.showToast({
											title: "操作成功，请等待缓存刷新",
											icon: 'none'
										})
				            			that.getSectionInfo();
				            		}else{
										uni.showToast({
											title: res.data.msg,
											icon: 'none'
										})
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
				            	}
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			getSectionInfo(){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					
					url: that.$API.sectionInfo(),
					data:{
						"id":that.curSection.id,
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.moderators = res.data.data.moderators;
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
		}
	}
</script>

<style>
</style>