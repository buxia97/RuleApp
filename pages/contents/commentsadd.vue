<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发布评论
				</view>
				<view class="action" @tap="commentsadd">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title"  v-if="isreply>0">回复：</view>
				<view class="title"  v-else>文章：</view>
				<input name="input" :value="title" disabled=""></input>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-model="text" placeholder="如首次发布评论,将审核后再给予显示"></textarea>
			</view>
		</form>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				
				title:"",
				coid:0,
				isreply:0,
				cid:0,
				text:"",
				
				userinfo:{},
				token:"",
				
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
			//获取用户信息
			if(localStorage.getItem('userinfo')){
				that.userinfo = JSON.parse(localStorage.getItem('userinfo'));
			}
			if(localStorage.getItem('token')){
				that.token = localStorage.getItem('token');
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			that.title=res.title;
			that.coid=res.coid;
			that.isreply=res.isreply;
			that.cid=res.cid;
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			commentsadd(){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					uni.navigateTo({
					    url: '../user/login'
					});
					var timer = setTimeout(function() {
						uni.navigateTo({
						    url: '../user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				if (that.text == "") {
					uni.showToast({
					    title:"请输入评论内容",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var coid = that.coid;
				if(that.isreply==0){
					coid = 0;
				}
				
				var data = {
					"cid":that.cid,
					//"ownerId":that.userinfo.uid,
					"parent":coid,
					"text":that.text,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.setComments(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							var timer = setTimeout(function() {
								that.back();
							}, 1000)
							
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
			}
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
