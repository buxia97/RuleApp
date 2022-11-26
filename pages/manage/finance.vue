<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					财务流水（积分）
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box manage-data" >
			<view class="user-data grid col-4">
				<view class="user-data-box">
					<view class="user-data-value">{{financeData.recharge||0}}</view>
					<view class="user-data-title">充值总额</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{financeData.withdraw||0}}</view>
					<view class="user-data-title">提现总额</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{financeData.trade||0}}</view>
					<view class="user-data-title">交易总额</view>
				</view>
				<view class="user-data-box">
					<view class="user-data-value">{{financeData.income||0}}</view>
					<view class="user-data-title">收益总额</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索用户UID" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="no-data" v-if="financeList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-item tokenList-box" v-for="(item,index) in financeList" :key="index" >
				<view class="content">
					<text class="text-bold">{{item.subject}}
					
					<text class="text-red margin-left-sm">{{item.totalAmount}}</text>
					</text>
				</view>
				<view class="tokenList-info">
					<text class="tokenDate">
						{{formatDate(item.created)}}
					</text>
					<text class="cu-btn bg-white text-blue" @tap="setUid(item.uid)">UID:{{item.uid}}</text>
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="financeList.length>0">
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
				
				financeList:[],
				financeData:{
					recharge:0,
					trade:0,
					withdraw:0,
					income:0
				},
				page:1,
				moreText:"加载更多",
				isLoad:0,
				searchText:"",
				
				isLoading:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.getFinanceList();
			that.getFinanceTotal();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onHide() {
			localStorage.removeItem('getuid')
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getFinanceList();
			that.getFinanceTotal();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toType(i){
				var that = this;
				that.status=i;
				that.financeList = [];
				that.page=1;
				that.getFinanceList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getFinanceList(true);
				}
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getFinanceList()
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page=1;
				that.getFinanceList()
			},
			setUid(uid){
				var that = this;
				that.searchText = uid;
				that.page=1;
				that.getFinanceList()
			},
			getFinanceTotal(){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				Net.request({
					url: API.financeTotal(),
					data:{
						'token':token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.financeData = res.data.data;
						}
					},
					fail: function(res) {
						
					}
				})
			},
			getFinanceList(isPage){
				var that = this;
				var page = that.page;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"status":1,
				}
				if(that.searchText!=""){
					data.uid = that.searchText;
				}
				if(isPage){
					page++;
				}
				Net.request({
					url: API.financeList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":20,
						"page":page,
						"order":"created",
						'token':token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								
								var financeList = list;
								if(isPage){
									that.page++;
									that.financeList = that.financeList.concat(financeList);
								}else{
									that.financeList = financeList;
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

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>

