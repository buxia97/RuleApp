<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="fullpost-btn">
				<text class="cu-btn bg-blue radius" @tap="toSort" v-if="group=='administrator'">商品分类</text>
			</view>
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
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
					<view class="shop-sort-list-box" v-for="(item,index) in sortList" :class="item.id == sort?'text-blue':''"  @tap="setSort(item)" :key="index">
						{{item.name}}
					</view>
				</view>
				<view class="shop-sort-list" v-if="subtypeShow">
					<view class="shop-sort-list-box" :class="subtype == 0?'text-blue':''" @tap="setSubtype(null)">
						全部
					</view>
					<view class="shop-sort-list-box" v-for="(item,index) in subtypeList" :class="item.id == subtype?'text-blue':''"  @tap="setSubtype(item)" :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="shop-sort-list-bg" v-if="sortShow||subtypeShow" @tap="sortShow=false,subtypeShow=false"></view>
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType(0)" :class="status==0?'active':''">
					<text>待审核</text>
				</view>
				<view class="search-type-box" @tap="toType(1)" :class="status==1?'active':''">
					<text>已上架</text>
				</view>
				<!-- <view class="search-type-box" @tap="toType(2)" :class="status==2?'active':''">
					<text>已禁用</text>
				</view> -->
			</view>
			<view class="no-data" v-if="shopList.length==0">
				暂时没有商品
			</view>
			<view class="shop-list">
				<block v-for="(item,index) in shopList" :key="index">
					<shopItem :item="item" :isAdmin="true" @updateList="updateList"></shopItem>
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
				uid:0,
				token:"",
				
				shopList:[],
				isLoad:0,
				page:1,
				moreText:"加载更多",
				type:1,
				searchText:"",
				status:0,
				
				isLoading:0,
				group:"",
				
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
			that.getShopList();
			that.getShopTypeList();
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
				that.uid = that.userInfo.uid;
				that.group = that.userInfo.group;
				
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.isLoad=0;
			that.page=1;
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getShopList();
			that.getShopTypeList();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getShopList(true);
				
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
				var uid= 0;
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid = userInfo.uid;
					
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
				var data = {
					"status":that.status
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
						"limit":6,
						"searchKey":that.searchText,
						"page":page,
						"order":"created"
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
			deleteShop(sid) {
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
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
				var data = {
					key: sid,
					token: token,
				}
				uni.showModal({
					title: '确定要删除此商品吗?',
					content: ' ',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							that.$Net.request({
								
								url: that.$API.deleteShop(),
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
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
									if(res.data.code==1){
										that.page=1;
										that.getShopList();
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
				});
				
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getShopList();
			
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page=1;
				that.getShopList();
			
			},
			toShop(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/addshop'
				});
			},
			editShop(data){
				var that = this;
				var sid = data.id;
				var isMd = data.isMd;
				if(isMd==1){
					uni.navigateTo({
					    url: '/pages/user/addshop?type=edit'+'&sid='+sid
					});
				}else{
					//富文本编辑器
					uni.navigateTo({
						url: '/pages/edit/addshop?type=edit'+'&id='+sid
					});
				}
				
			},
			auditShop(sid){
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
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
				var data = {
					key: sid,
					token: token,
				}
				uni.showModal({
					title: '确定审核通过该商品吗?',
					content: ' ',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							that.$Net.request({
								
								url: that.$API.auditShop(),
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
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
									if(res.data.code==1){
										that.page=1;
										that.getShopList();
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
				});
			},
			toType(i){
				var that = this;
				that.status=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getShopList(false);
			},
			updateList(){
				var that = this;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getShopList(false);
			},
			getUserInfo(uid){
				var that = this;
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.getUserInfo(),
					data:{
						"key":uid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						if(res.data.code==1){
							var data = res.data.data;
							that.toUserContents(data);
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
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			toUserContents(data){
				var that = this;
				var name = data.name;
				var title = data.name+"的信息";
				if(data.screenName){
					title = data.screenName+" 的信息";
					name = data.screenName
				}
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
			},
			toSort(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/shoptype'
				});
			}
			
		},
		components: {
			waves
		}
	}
</script>

<style>
</style>
