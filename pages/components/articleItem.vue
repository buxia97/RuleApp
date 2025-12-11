<template>
	<view class="content-list-box" @longtap="banShow=true"  v-if="!isBan" :class="banShow?'banShow':''">
		<view class="ban" v-if="!isTop&&!item.isAds">
			<view class="ban-close" @tap="banShow=false">
				<text class="cuIcon-close"></text>
			</view>
			<view class="ban-concent">
				<text class="ban-btn" @tap="report(item.title,1)">
					<text class="cuIcon-warn"></text>举报
				</text>
				<text class="ban-btn" @tap="goMyBan(item.cid,'banContent')">
					<text class="cuIcon-roundclosefill"></text>不喜欢
				</text>
				<text class="ban-btn" @tap="goMyBan(item.authorId,'banUser')">
					<text class="cuIcon-attentionforbidfill"></text>拉黑作者
				</text>
			</view>
		</view>
		<!--文章推流广告区域-->
		<view class="cu-card article no-card" :class="isTop?'topContents':''" v-if="item.isAds" @tap="goAds(item)">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">{{item.name}}</view>
				</view>
				<view class="content article-content" style="position: relative;">
					 <image :src="item.img"
					  mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">{{item.intro}}</view>
						<view class="ads-more">了解更多<text class="cuIcon-right"></text></view>
					</view>
					<text class="ads-ico">AD</text>
				</view>
			</view>
		</view>
		<!--文章推流广告区域结束-->
		<view class="cu-card article no-card"  @tap="toInfo(item)" v-else>
			<view class="cu-item shadow">
				<block v-if="item.images.length==0">
					<view class="content-author content-header">
						<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
						<text class="content-author-name">{{item.authorInfo.name}}</text>
						<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
					</view>
				</block>
				<view class="title">
					<view class="text-cut"><text class="text-red margin-right-xs" v-if="isTop">置顶</text>{{replaceSpecialChar(item.title)}}</view>
				</view>
				<block v-if="item.abcimg == 'mable'">
					
					<view class="article-imgMain grid col-3">
						
						<view class="article-img">
							<image v-if="item.images.length > 0" :src="item.images[0]"
							 mode="aspectFill"></image>
						</view>
						<view class="article-img">
							<image v-if="item.images.length > 1" :src="item.images[1]"
							 mode="aspectFill"></image>
						</view>
						<view class="article-img">
							<image v-if="item.images.length > 2" :src="item.images[2]"
							 mode="aspectFill"></image>
						</view>
					</view>
					<block v-if="item.images.length > 0">
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
				</block>
				<block v-if="item.abcimg == 'bable'">
					
					<view class="content article-content">
						<view class="article-big">
							<image v-if="item.images.length > 0" :src="item.images[0]"
							 mode="aspectFill"></image>
						</view>
						<view class="text-content"> {{subText(item.text,80)}}</view>
					</view>
					<block v-if="item.images.length > 0">
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
				</block>
				<block v-if="item.abcimg == 'able'||!item.abcimg">
					<view class="content article-content">
						
						 <image v-if="item.images.length > 0" :src="item.images[0]"
						  mode="aspectFill"></image>
						 
						<view class="desc">
							<view class="text-content"> {{subText(item.text,80)}}</view>
							<view class="content-author" v-if="item.images.length>0">
								<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
								<text class="content-author-name">{{item.authorInfo.name}}</text>
								<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
							</view>
						</view>
					</view>
				</block>
				
				<view class="article-content-btn article-list-btn">
					<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
					<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
					<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
				
					<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
export default {
    props: {
        item: {
		  type: Object,
		  default: () => ({})
		},
		isTop: {
		  type: Boolean,
		  default: false
		}
    },
	name: "articleItem",
	data() {
		return {
			banShow:false,
			isBan:false
		};
	},
	mounted() {
		var that = this;
		if(localStorage.getItem('userinfo')){
			if(localStorage.getItem('myBanLog')){
				var myBanLog = JSON.parse(localStorage.getItem('myBanLog'));
				var banContentList = myBanLog.banContentList;
				var banUserList = myBanLog.banUserList;
				for(var i in banUserList){
					if(that.item.authorId == banUserList[i].num){
						that.isBan = true;
					}
				}
				for(var i in banContentList){
					if(that.item.cid == banContentList[i].num){
						that.isBan = true;
					}
				}
			}
		}
	},
	methods: {
		subText(text,num){
			if(text.length < null){
				return text.substring(0,num)+"……"
			}else{
				return text;
			}
			
		},
		replaceSpecialChar(text) {
		  text = text.replace(/&quot;/g, '"');
		  text = text.replace(/&amp;/g, '&');
		  text = text.replace(/&lt;/g, '<');
		  text = text.replace(/&gt;/g, '>');
		  text = text.replace(/&nbsp;/g, ' ');
		  return text;
		},
		formatDate(datetime) {
			var datetime = new Date(parseInt(datetime * 1000));
			var year = datetime.getFullYear(),
				month = ("0" + (datetime.getMonth() + 1)).slice(-2),
				date = ("0" + datetime.getDate()).slice(-2),
				hour = ("0" + datetime.getHours()).slice(-2),
				minute = ("0" + datetime.getMinutes()).slice(-2);
			var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
			return result;
		},
		formatNumber(num) {
		    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
		},
		toInfo(data){
			var that = this;
			
			uni.navigateTo({
			    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
			});
		},
		goAds(data){
			var that = this;
			var url = data.url;
			var type = data.urltype;
			// #ifdef APP-PLUS
			if(type==1){
				plus.runtime.openURL(url);
			}
			if(type==0){
				plus.runtime.openWeb(url);
			}
			// #endif
			// #ifdef H5
			window.open(url)
			// #endif
		},
		goMyBan(uid,type){
			var that = this;
			var token = "";
			
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			}
			var title = "";
			if(type=="banUser"){
				title = '确定要拉黑作者吗？拉黑后，将屏蔽该用户所有发布内容！'
			}
			if(type=="banContent"){
				title = '确定要屏蔽该文章吗！'
			}
			var data = {
				"id":uid,
				"type":type,
				"token":token
			}
			uni.showModal({
				title: title,
				success: function (res) {
					if (res.confirm) {
						uni.showLoading({
							title: "加载中"
						});
						
						that.$Net.request({
							url: that.$API.ban(),
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
									that.isBan = true;
									that.myBanLog();
								}else{
									if(res.data.msg=="用户未登录或Token验证失败"){
										uni.showToast({
											title: "请先登录",
											icon: 'none'
										})
										uni.navigateTo({
											url: '/pages/user/login'
										});
									}else{
										uni.showToast({
											title: res.data.msg,
											icon: 'none'
										})
									}
									
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
		myBanLog(){
			var that = this;
			var token = ""
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			
			}else{
				return false;
			}
			that.$Net.request({
				
				url: that.$API.myBanLog(),
				data:{
					"token":token
				},
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					if(res.data.code==1){
						var myBanLog = res.data.data;
						localStorage.setItem('myBanLog',myBanLog);
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
		report(title,type){
			var that = this;
			if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
				uni.showToast({
					title: "请先登录哦",
					icon: 'none'
				})
				return false;
			}
			uni.navigateTo({
			    url: '/pages/user/report?title='+title+"&type="+type
			});
		},
	}
}
</script>

<style>
</style>