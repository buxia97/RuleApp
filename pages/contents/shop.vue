<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商城
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar-5 + 'px 10px 0px 10px'}]"></view>
		<view class="data-box shop-operate">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索商品" v-model="searchText"  @input="searchShop"></input>
				</view>
			</view>
			<view class="shop-sort shop-filter">
				<view class="grid col-2 text-center">
					<view class="shop-filter-box text-bold" @tap="sortShow=!sortShow,subtypeShow=false">
						<block v-if="sort==0">
							全部大类
						</block>
						<block v-else>
							{{sortText}}
						</block>
						<text class="cuIcon-unfold margin-left-sm"></text>
					</view>
					<view class="shop-filter-box text-bold" @tap="subtypeShow=!subtypeShow,sortShow=false">
						<block v-if="sort==0||subtypeText==''">
							全部
						</block>
						<block v-else>
							{{subtypeText}}
						</block>
						<text class="cuIcon-unfold margin-left-sm"></text>
					</view>
				</view>
				
				<view class="shop-sort-list" v-if="sortShow">
					<view class="shop-sort-list-box" :class="sort == 0?'text-blue':''" @tap="setSort(null)">
						全部
					</view>
					<view class="shop-sort-list-box" v-for="(item,index) in sortList" :class="item.id == sort?'text-blue':''"  @tap="setSort(item)">
						{{item.name}}
					</view>
				</view>
				<view class="shop-sort-list" v-if="subtypeShow">
					<view class="shop-sort-list-box" :class="subtype == 0?'text-blue':''" @tap="setSubtype(null)">
						全部
					</view>
					<view class="shop-sort-list-box" v-for="(item,index) in subtypeList" :class="item.id == subtype?'text-blue':''"  @tap="setSubtype(item)">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="shop-sort-list-bg" v-if="sortShow||subtypeShow" @tap="sortShow=false,subtypeShow=false"></view>
			<view class="shop-sort shop-type">
				<view class="shop-sort-box" @tap="setType(0)":class="type=='0'?'active':''">
					<text class="cuIcon-apps margin-right-xs"></text>全部
				</view>
				<view class="shop-sort-box" @tap="setType(1)":class="type=='1'?'active':''">
					实物
				</view>
				<view class="shop-sort-box" @tap="setType(2)":class="type=='2'?'active':''">
					代码
				</view>
				<view class="shop-sort-box" @tap="setType(3)":class="type=='3'?'active':''">
					软件
				</view>
				<view class="shop-sort-box" @tap="setType(4)":class="type=='4'?'active':''">
					付费阅读
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="no-data" v-if="shopList.length==0">
				暂时没有商品
			</view>
			<view class="shop-list">
				<block v-for="(item,index) in shopList" :key="index">
					<shopItem :item="item"></shopItem>
				</block>

				
			</view>
		</view>
		<view class="load-more" @tap="loadMore" v-if="shopList.length>0">
			<text>{{moreText}}</text>
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
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				
				userInfo:null,
				token:"",
				
				sort:0,
				subtype:0,
				shopList:[],
				isLoad:0,
				page:1,
				moreText:"加载更多",
				type:0,
				
				isLoading:0,
				searchText:"",
				
				shopTypelist:[],
				sortShow:false,
				sort:0,
				sortText:"",
				sortList:[],
				subtypeShow:false,
				subtype:0,
				subtypeText:"",
				subtypeList:[],
				
				
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getShopList(false);
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
		onShow(){
			var that = this;
			
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.isLoad=0;
			that.page=1;
			that.allCache();
			that.userStatus();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar - 7;
			// #endif
			that.getShopTypeList();
			that.getShopList(false);
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			searchShop(){
				var that = this;
				that.page=1;
				that.getShopList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getShopList(true);
				
			},
			setType(i){
				var that = this;
				that.type = i;
				that.page = 1;
				that.getShopList();
			},
			//公共缓存
			allCache(){
				var that = this;
				if(localStorage.getItem(that.type+'_shopList')){
					that.shopList = JSON.parse(localStorage.getItem(that.type+'_shopList'));
				}
			},
			getShopTypeList(){
				var that = this;
				that.$Net.request({
					url: that.$API.shopTypeList(),
					data:{
						"limit":50,
						"page":1,
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
						if(res.data.code==1){
							that.shopTypelist = res.data.data;
							var list = res.data.data;
							var sortList = [];
							for(var i in list){
								if(list[i].parent==0){
									sortList.push(list[i]);
								}
							}
							that.sortList = sortList;
							if(that.sort > 0){
								for(var s in sortList){
									if(sortList[s].id==that.sort){
										that.setSort(sortList[s],true);
									}
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
			setSort(data,noSub){
				var that = this;
				
				that.sortShow = false;
				if(data==null){
					that.sort = 0;
					that.sortText = "";
					that.subtype = 0;
					that.subtypeText = "";
					that.page = 1;
					that.getShopList();
					return false;
				}
				that.sort = data.id;
				that.sortText = data.name;
				
				if(that.sort != 0){
					var list = that.shopTypelist;
					var subtypeList = [];
					for(var i in list){
						if(list[i].parent==that.sort){
							subtypeList.push(list[i]);
						}
					}
					that.subtypeList = subtypeList;
					that.subtype = 0;
					that.subtypeText =  ""
					
					
				}
				that.getShopList();
				
			},
			setSubtype(data){
				var that = this;
				that.subtypeShow = false;
				if(data==null){
					that.subtype = 0;
					that.subtypeText = "";
					that.page = 1;
					that.getShopList();
					return false;
				}
				that.subtype = data.id;
				that.subtypeText = data.name;
				that.getShopList();
			},
			getShopList(isPage){
				var that = this;
				var data = {
					"status":"1",
					"isView":"1"
				}
				if(that.type!=0){
					data.type = that.type;
				}
				if(that.sort!=0){
					data.sort = that.sort;
				}
				if(that.subtype!=0){
					data.subtype = that.subtype;
				}
				
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.shopList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"searchKey":that.searchText,
						"limit":6,
						"page":page,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length==0){
								that.moreText="没有更多数据了";
							}
							if(isPage){
								if(list.length>0){
									that.page++;
									that.shopList = that.shopList.concat(list);
								}
							}else{
								
								that.shopList = list;
							}
							
							localStorage.setItem(that.type+'_shopList',JSON.stringify(that.shopList));
						}
					},
					fail: function(res) {
						that.moreText="加载更多";
						that.isLoad=0;
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						
					}
				})
			},
			shopInfo(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/shopinfo?sid='+sid
				});
			},
			
			userStatus() {
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					
					url: that.$API.userStatus(),
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
							that.vip = res.data.data.vip;
							that.isvip = res.data.data.isvip;
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
		},
		components: {
			waves
		}
	}
</script>

<style>
</style>
