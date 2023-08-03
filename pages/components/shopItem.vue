<template>
	<view class="shop-box">
		<view class="shop-main">
			<view class="shop-img" @tap="shopInfo(item)">
				<image :src="item.imgurl" mode="widthFix"></image>
			</view>
			<view class="shop-concent" @tap="shopInfo(item)">
				<text class="cuIcon-cart"></text>
				<view class="shop-title">
					<block v-if="isAdmin">
						<text class="text-orange" v-if="item.status==0">[待审核]</text>
						<text class="text-green" v-if="item.status==1">[已上架]</text>
						<text class="text-red" v-if="item.status==2">[已禁用]</text>
					</block>
					<block v-if="item.isView==0">
						<text class="text-gray">[隐藏]</text>
					</block>
					{{item.title||"无标题商品"}}
				</view>
				<view class="shop-list-value">
					{{item.sellNum}}人付款
					<text class="margin-right-xs margin-left-xs">|</text>
					<block v-if="item.num==-1">无限</block>
					<block v-else>剩余{{item.num}}</block>
				</view>
				<view class="shop-info">
					<text class="shop-price text-red text-bold" :class="isvip==1?'text-decoration':''">{{item.price}}</text>
					<text class="shop-price text-vip-style text-bold margin-left-xs"  v-if="isvip==1">{{parseInt(item.price * item.vipDiscount)}}</text>
					<text class="text-sm margin-left-xs">{{currencyName}}</text>
					
				</view>
				<view class="shop-list-user" v-if="item.userJson">
					<view class="content-author">
						<image :src="item.userJson.avatar" mode="aspectFill"></image>
						<text class="content-author-name">{{item.userJson.name}}</text>
					</view>
	
				</view>
				<view class="shop-list-user" v-else>
					<view class="content-author">
						<text class="content-author-name">用户已注销</text>
					</view>
				</view>
				
			</view>
			<view class="shop-admin-info text-center"  v-if="isAdmin">
				<text class="shop-btn text-blue" v-if="item.status==0" @tap="getUserInfo(item.uid)">用户信息</text>
				<text class="shop-btn text-yellow" v-if="item.status==0" @tap="auditShop(item.id)">审核</text>
				<text class="shop-btn text-red" @tap="deleteShop(item.id)" v-if="group=='administrator'">删除</text>
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
			isAdmin: {
			  type: Boolean,
			  default: false
			},
			
	    },
		name: "forumItem",
		data() {
			return {
				vipDiscount:0,
				vipPrice:0,
				scale:0,
				isvip:0,
				vip:0,
				currencyName:"",
				group:"",
			};
		},
		created(){
			var that = this;
			if(localStorage.getItem('userinfo')){
							
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
				that.isvip = userInfo.isvip;
			}
		},
		mounted() {
			var that = this;
			that.getVipInfo();
			that.currencyName = that.$API.getCurrencyName();
		},
		methods: {
			shopInfo(data){
				var that = this;
				if(that.isAdmin){
					that.editShop(data);
				}else{
					uni.navigateTo({
					    url: '/pages/contents/shopinfo?sid='+data.id
					});
				}
				
			},
			getVipInfo(){
				var that = this;
				that.$Net.request({
					url: that.$API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vipDiscount=res.data.data.vipDiscount;
							that.vipPrice=res.data.data.vipPrice;
							that.scale=res.data.data.scale;
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
									that.$emit('updateList','updateList');
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
										that.$emit('updateList','updateList');
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
		}
	}
</script>

<style>
</style>