<template>
	<view class="userpost" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					随机阅读
				</view>
				<view class="action" @tap="reload">
					<text class="cuIcon-refresh"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="no-data" v-if="contentsList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-card article no-card">
				<block v-for="(item,index) in contentsList" :key="index">
					<articleItem :item="item"></articleItem>
				</block>

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
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				contentsList:[],
				
				isLoading:0,
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getContentsList();
			
			
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
			reload(){
				var that = this;
				that.getContentsList();
			},
			getContentsList(){
				var that = this;
				var data = {
					"type":"post",
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}

				that.$Net.request({
					url: that.$API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":10,
						"page":1,
						"random":1,
						"token":token
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
									that.contentsList = list;
								
								
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
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
		}
	}
</script>

<style>
</style>
