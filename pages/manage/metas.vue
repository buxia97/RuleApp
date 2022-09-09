<template>
	<view class="userpost">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					标签及分类
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
				</view>
			</view>
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType('category')" :class="type=='category'?'active':''">
					<text>分类</text>
				</view>
				<view class="search-type-box" @tap="toType('tag')" :class="type=='tag'?'active':''">
					<text>标签</text>
				</view>
			</view>
			<view class="no-data" v-if="metaList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-card article no-card">
				<view class="cu-item shadow"  v-for="(item,index) in metaList" :key="index">
					<view class="content">
						<view class="desc meta-main">
							<view class="text-content">{{item.name}}
							
							<text class="meta-id">MID：{{item.mid}}</text>
							</view>
						</view>
						
					</view>
					<view class="manage-btn">

						<text class="cu-btn text-green radius" v-if="item.isrecommend==0"  @tap="addRecommend(item.mid)">推荐</text>
						<text class="cu-btn text-grey radius" v-else  @tap="rmRecommend(item.mid)">取消推荐</text>
					
						<text class="cu-btn text-blue radius" @tap="toEdit(item.mid)">编辑</text>
					</view>
				</view>
				<view class="load-more" @tap="loadMore" v-if="metaList.length>0">
					<text>{{moreText}}</text>
				</view>
			
			</view>
		</view>
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
				metaList:[],
				searchText:"",
				type:"category",
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				token:"",
				isLoading:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getMetaList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getMetaList(false);
			that.page = 1;
			
		},
		methods: {
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getMetaList(true);
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.metaList = [];
				that.moreText="加载更多";
				that.isLoad=0;
				that.getMetaList(false);
			},
			getMetaList(isPage){
				var that = this;
				var data = {
					"type":that.type,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":8,
						"page":page,
						"searchKey":that.searchText,
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh()
						that.isLoad=0;
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.metaList = that.metaList.concat(list);
								}else{
									that.metaList = list;
								}
								
							}else{
								that.moreText="没有更多文章了";
								if(!isPage){
									that.metaList = list;
								}
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh()
						that.moreText="加载更多";
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			addRecommend(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					'mid':id,
					'isrecommend':1,
			
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.editMeta(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":token,
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
							that.page=1;
							that.moreText="加载更多";
							that.isLoad=0;
							that.getMetaList(false);
							
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
			rmRecommend(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					'mid':id,
					'isrecommend':0,
			
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.editMeta(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":token,
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
							that.page=1;
							that.moreText="加载更多";
							that.isLoad=0;
							that.getMetaList(false);
							
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
			toEdit(id){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/manage/metasedit?mid='+id
				});
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getMetaList();
			
			},
		}
		
	}
</script>

<style>
@import "../../static/base.css";
</style>
