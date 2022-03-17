<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toGroup">
					<text class="toGroup">社交</text>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					工具库
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 常用功能
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toPage('使用攻略',raiders)">
							<view class="index-sort-i">
								<text class="cuIcon-appreciate"></text>
							</view>
							<view class="index-sort-text">
								使用攻略
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/post?type=add')">
							<view class="index-sort-i">
								<text class="cuIcon-edit"></text>
							</view>
							<view class="index-sort-text">
								发布文章
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toRand">
							<view class="index-sort-i">
								<text class="cuIcon-refresh"></text>
							</view>
							<view class="index-sort-text">
								随机阅读
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toCategoryContents('#精选#',featured)">
							<view class="index-sort-i">
								<text class="cuIcon-choicenessfill"></text>
							</view>
							<view class="index-sort-text">
								精选作品
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 创意区
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toImagetoday">
							<view class="index-sort-i">
								<text class="cuIcon-picfill"></text>
							</view>
							<view class="index-sort-text">
								图库
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-read"></text>
							</view>
							<view class="index-sort-text">
								广告位
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toShop">
							<view class="index-sort-i">
								<text class="cuIcon-taoxiaopu"></text>
							</view>
							<view class="index-sort-text">
								积分商城
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 实用工具
				</view>
				<view class="action more"  @tap="toCategoryContents('实用工具',toolid)">
					<text>阅读更多</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-card article no-card">
				<view class="cu-item shadow"  v-for="(item,index) in toolList" :key="index" @tap="toInfo(item)">
					<view class="content">
						<image v-if="item.images.length>0" :src="item.images[0]"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">{{item.title}}</view>
							<view class="text-i">
								<view class="cu-tag bg-blue light sm round" v-if="item.category.length>0">{{item.category[0].name}}</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
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
				
				toolList:[],
				userInfo:null,
				token:"",
				isLoading:0,
				raiders:API.GetRaiders(),
				toolid:0,
				featured:API.GetFeatured()
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.getMetaContents(API.GetTool());
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
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
			}
			that.userStatus();
			that.allCache();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.toolid = API.GetTool();
			that.getMetaContents(that.toolid);
		},
		methods:{
			allCache(){
				var that = this;
				if(localStorage.getItem('toolList')){
					that.toolList = JSON.parse(localStorage.getItem('toolList'));
				}
			},
			getMetaContents(meta){
				var that = this;
				var data = {
					"mid":meta
				}
				Net.request({
					url: API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":1,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								that.toolList = list;
								localStorage.setItem('toolList',JSON.stringify(list));
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
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
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			toRand(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/randlist'
				});
			},
			toImagetoday(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/imagetoday'
				});
			},
			toShop(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/shop'
				});
			},
			userStatus() {
				var that = this;
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==0){
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
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
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
