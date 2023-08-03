<template>
	<view class="userpost" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品分类
				</view>
				<view class="action">
					<button class="cu-btn round bg-blue"  @tap="toLink('/pages/manage/shopTypeAdd')">添加大类</button>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box" v-for="(item,index) in shopList" :key="index">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					{{item.name}}
				</view>
				<view class="action text-blue">
					<text class="text-green" @tap="toEdit(item.parent,item.id,item.type)">
						<text class="cuIcon-edit"></text><text>编辑</text>
					</text>
					<text class="text-red margin-left" @tap="toDelete(item.id,item.type)">
						<text class="cuIcon-delete"></text><text>删除</text>
					</text>
					<text @tap="addSection(item.id,item.name)" class="margin-left">
						<text class="cuIcon-add"></text><text>添加小类</text>
					</text>
				</view>
			</view>
			<view class="shop-page">
				<view class="shop-page-box"  v-for="(data,j) in item.subList" :key="j">
					<view class="shop-item-intro">
						<view class="shop-item-title">
							{{data.name}}
						</view>
						<view class="shop-item-value">
							{{data.intro}} 商品
						</view>
					</view>
					<view class="shop-page-btn">
						<view class="cu-btn text-blue" @tap="toEdit(data.parent,data.id,data.type,item.name)">
							编辑
						</view>
						<view class="cu-btn margin-left-sm text-red" @tap="toDelete(data.id,data.type)">
							删除
						</view>
					</view>
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
				shopList:[],
				moreText:"加载更多",
				page:1,
				isLoading:0,
				token:"",
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getShopTypeList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getShopTypeList(false);
			that.page = 1;
			
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
				that.getShopTypeList(true);
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
			getShopTypeList(isPage){
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
							var list = res.data.data;
							var parentList = [];
							for(var i in list){
								if(list[i].parent==0){
									list[i].subList = [];
									parentList.push(list[i]);
								}
							}
							for(var j in list){
								if(list[j].parent!=0){
									for(var p in parentList){
										if(list[j].parent == parentList[p].id){
											parentList[p].subList.push(list[j]);
										}
									}
								}
							}
							that.shopList = parentList;
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
			addSection(parent,sort){
				var that = this;
				uni.navigateTo({
					url: '/pages/manage/shopTypeAdd?parent='+parent+'&sort='+sort
				});
			},
			toEdit(parent,id,type,name){
				var that = this;
				uni.navigateTo({
					url: '/pages/manage/shopTypeAdd?parent='+parent+'&sort='+type+'&type=edit'+'&id='+id+'&name='+name
				});
				
			},
			toDelete(id,type){
				var that = this;
				var token = "";
				var tips = "确定要删除该分类吗？所有帖子数据都将丢失！";
				if(type == 'sort'){
					tips = "确定要删除该大类吗？下属分类将变为自由分类！"
				}
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"token":token
				}
				uni.showModal({
				    title: tips,
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.deleteShopType(),
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
				            			that.getSectionList();
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
		}
	}
</script>

<style>
</style>