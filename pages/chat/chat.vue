<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					{{name}}
				</view>
				<view class="action">
					<view class="cu-avatar round" @tap="goUserInfo()" :style="avatarstyle" v-if="avatarstyle!=''"></view>
					<view class="cu-avatar round" v-else>
						<text class="home-noLogin"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-chat" >
			<view class="cu-item"></view>
			<view class="cu-info" v-if="isFollow==0">
				你还不是Ta的粉丝，关注Ta后可以获得更多动态。
				<text class="text-blue">关注Ta</text>
			</view>
			<block v-for="(item,index) in msgList">
				<view class="cu-item " :class="item.uid==uid?'self':''">
					<view class="cu-avatar radius"  v-if="item.uid!=uid" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					<view class="main">
						<block v-if="item.type==0">
							<view class="content shadow" :class="item.uid==uid?'bg-green':''">
								<text>{{item.text}}</text>
							</view>
						</block>
						<block v-if="item.type==1">
							<image :src="item.url"></image>
						</block>
					</view>
					<view class="cu-avatar radius"  v-if="item.uid==uid" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					<view class="date">{{formatDate(item.created)}}</view>
				</view>
			</block>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-pic text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur" v-model="msg"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @tap="sendMsg()">发送</button>
		</view>

	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	// #ifdef APP-PLUS
	import owo from '../../static/app-plus/owo/OwO.js'
	// #endif
	// #ifdef H5
	import owo from '../../static/h5/owo/OwO.js'
	// #endif
	// #ifdef MP
	var owo = [];
	// #endif
	export default {
		data() {
			return {
				InputBottom: 0,
				chatid:0,
				name:"未知用户",
				toid:0,
				avatar:"",
				userInfo:null,
				token:"",
				avatarstyle:"",
				chatid:"",
				msg:"",
				isFollow:1,
				
				msgList:[],
				uid:"",
				
				msgLoading:null
			};
		},
		onShow() {
			var that = this
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.uid = that.userInfo.uid;
			}
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			console.log("现在是底部");
		},
		onHide() {
			var that = this
			clearInterval(that.msgLoading);
			that.msgLoading = null
		},
		onLoad(res) {
			var that = this
			if(res.name){
				that.name = res.name
			}
			if(res.toid){
				that.toid = res.uid;
				that.getIsFollow();
			}
			if(res.avatar){
				that.avatar = res.avatar;
				that.avatarstyle = "background-image:url("+that.avatar+");"
			}
			if(res.chatid){
				that.chatid = res.chatid;
				that.getMsgList();
				that.msgLoading = setInterval(() => {
				 that.getMsgList();
				}, 2000);
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				//second = ("0" + date.getSeconds()).slice(-2);
				// 拼接
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				// 返回
				return result;
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			getMsgList(isPage){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.msgList(),
					data:{
						"token":token,
						"chatid":that.chatid,
						"limit":30,
						"page":page,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								//that.contentsList = list;
								if(isPage){
									that.page++;
									list = list.reverse();
									list = list.concat(that.msgList);
									that.msgList = list;
								}else{
									that.msgList = list.reverse();
								}
								
								
							}else{
								that.moreText="没有更多数据了";
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
						that.moreText="加载更多";
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getIsFollow(){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					token:token,
					touid:that.toid,
				}
				Net.request({
					
					url: API.isFollow(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isFollow = res.data.code;
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			sendMsg(){
				var that = this;
				var token = "";
				if(that.msg==""){
					return false;
				}
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				
				var data={
					"chatid":that.chatid,
					"token":token,
					"msg":that.msg,
					"type":0,
					
				}
				Net.request({
					
					url: API.sendMsg(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.msg = "";
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			goUserInfo(){
				var that = this;
				var name = that.name;
				var title = name+"的信息";
				var id= that.toid
				var type="user";
				uni.redirectTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(that.avatar)
				});
			},
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
