<template>
	<view class="userpost">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					图库
				</view>
				<view class="action" @tap="toUrl('https://www.pexels.com/')">
					<text class="text-blue">Pexels</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search imagetoday-search">
				<view class="search-form round">
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"></input>
					<text class="cuIcon-search" @tap="searchTag()"></text>
				</view>
			</view>
			<view class="no-data" v-if="ImageList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="ImageList">
				<view class="ImageList-box"  v-for="(item,index) in ImageList" :key="index">
					<view class="cu-btn bg-blue setImage" @tap="goPost(item.src.large)">选择</view>
					<image :src="item.src.large2x"  mode="widthFix" @tap="previewImage(item.src.large2x)"></image>
					<view class="image-info">
						<text @tap="toUrl(item.photographer_url)">@{{item.photographer}}</text>
					</view>
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="ImageList.length>0">
				<text>{{moreText}}</text>
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				ImageList:[],
				
				searchText:"",
				moreText:"加载更多",
				isLoad:0,
				page:1,
				isSearch:0,
				isLoading:0,
				type:"",
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getImageList();
			
			
		},
		onPullDownRefresh(){
			var that = this;
			
			var timer = setTimeout(function() {
				that.getImageList();
			}, 1000)
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
			
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.type){
				that.type = res.type;
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			reload(){
				var that = this;
				that.getImageList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getImageList(true);
				
			},
			getImageList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var data={
					page:page,
				}
				if(that.searchText!=""){
					data.searchKey = that.searchText;
				}
				Net.request({
					url: API.contentsImage(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						that.isLoad=0;
						if(res.data.photos){
							var list= res.data.photos;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.ImageList = that.ImageList.concat(list);
								}else{
									that.ImageList = list;
								}
								
							}else{
								that.moreText="没有更多数据了";
							}
							
						}else{
							if(data.msg){
								uni.showToast({
									title: data.msg,
									icon: 'none'
								})
							}else{
								uni.showToast({
									title: "图片获取异常，请检查配置",
									icon: 'none'
								})
							}
							
							
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.isLoad=0;
						that.moreText="加载更多";
						uni.stopPullDownRefresh();
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toPost(){
				var that = this;
				
				uni.navigateTo({
					url: '../user/post'
				});
			},
			toEdit(cid){
				var that = this;
				
				uni.navigateTo({
					url: '../user/post?type=edit'+'&cid='+cid
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
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
			previewImage(image) {
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
			toUrl(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			searchTag(){
				var that = this;
				that.page=1;
				that.isLoad=1;
				that.ImageList=[];
				that.getImageList(false);
			},
			goPost(url){
				var that = this;
				// #ifdef H5
				uni.showToast({
					title: "请点击图片，在预览页长按保存",
					icon: 'none'
				})
				// #endif
				// #ifdef APP-PLUS
				var token = "";
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token = userInfo.token;
					
				}else{
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					var timer = setTimeout(function() {
						uni.navigateTo({
							url: '/pages/user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				uni.downloadFile({//下载
					url: url, //图片下载地址
					success: res => {
						if (res.statusCode === 200) {
							var path = res.tempFilePath;
							const uploadTask = uni.uploadFile({
							  url : API.upload(),
							  filePath: path,
							  name: 'file',
							  formData: {
							   'token': token
							  },
							  success: function (uploadFileRes) {
								  setTimeout(function () {
								  	uni.hideLoading();
								  }, 1000);
									var data = JSON.parse(uploadFileRes.data);
									//var data = uploadFileRes.data;
									uni.showToast({
										title: data.msg,
										icon: 'none'
									})
									if(data.code==1){
									   var url = data.data.url;
									   localStorage.setItem('serImage',url);
									   that.back();
									}
								},fail:function(){
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
								}
							});
						}else{
							uni.showToast({
								title: '图片保存失败',
								icon: 'none',
							});
						}
					}
				});
				// #endif
			},

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
