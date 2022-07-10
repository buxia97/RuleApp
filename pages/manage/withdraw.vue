<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					提现审核
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
			<view class="search-type grid col-3 bg-white">
				<view class="search-type-box" @tap="toType('-1')" :class="type=='-1'?'active':''">
					<text>待审核</text>
				</view>
				<view class="search-type-box" @tap="toType('-2')" :class="type=='-2'?'active':''">
					<text>已拒绝</text>
				</view>
				<view class="search-type-box" @tap="toType('0')" :class="type=='0'?'active':''">
					<text>已通过</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-list menu-avatar comment">
					<view class="no-data" v-if="withdrawList.length==0">
						暂时没有数据
					</view>
					<view class="order-box"  v-for="(item,index) in withdrawList" :key="index" v-if="withdrawList.length>0">
						<view class="order-main">
							<view class="order-info">
								<text class="order-id">时间：{{formatDate(item.created)}}</text>
								<text class="order-type">UID：{{item.uid}}</text>
							</view>
							<view class="order-btn">
								<text class="text-red">{{item.num}} 积分 = ￥ {{item.num/scale}}</text>
								<text class="text-blue order-status" @tap="toPay(item.pay)">用户收款码</text>
							</view>
							<view class="order-kill" v-if="item.cid==-1">
								<text class="cu-btn text-green radius" @tap="toStatus(item.id,1)">已打款</text>
								<text class="cu-btn text-red radius"  @tap="toStatus(item.id,0)">拒绝</text>
							</view>
							
						</view>
					</view>
					
					<view class="load-more" @tap="loadMore" v-if="withdrawList.length>0">
						<text>{{moreText}}</text>
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				withdrawList:[],
				
				moreText:"加载更多",
				page:1,
				
				type:"-1",
				
				isLoading:0,
				scale:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getWithdrawList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.page=1;
			that.getVipInfo();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getWithdrawList(false);
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getWithdrawList(true);
				}
			},
			getWithdrawList(isPage){
				var that = this;
				var userInfo = null;
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				}else{
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var uid = 0;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid=userInfo.uid;
				}
				var data = {
					"type":"withdraw",
					"cid":that.type,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.withdrawList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						if(res.data.code==1){
							var withdrawList = res.data.data;
							if(withdrawList.length>0){
								
								if(isPage){
									that.page++;
									that.withdrawList = that.withdrawList.concat(withdrawList);
								}else{
									that.withdrawList = withdrawList;
								}
							}else{
								if(!isPage){
									that.withdrawList = withdrawList;
								}
								that.moreText="没有更多数据了";
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
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
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
			toPay(text){
				if(!text){
					uni.showToast({
						title: "该用户未设置收款",
						icon: 'none'
					})
					return false;
				}
				var arr = text.split("|");
				var image=arr[3];
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
			toStatus(id,type){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"type":type,
					"token":token
				}
				uni.showModal({
				    title: '确定要进行操作吗？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.withdrawStatus(),
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
				            			that.getWithdrawList();
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
			toType(i){
				var that= this;
				that.type = i;
				that.page=1;
				that.getWithdrawList();
			},
			getVipInfo(){
				var that = this;
				Net.request({
					url: API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
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
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
