<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					管理员中心
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box"  v-if="group=='administrator'||group=='editor'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>全站数据
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="manage-data">
				<view class="manage-dataLoad" v-if="allData==null">
					<image src="../../static/loading.gif" mode="widthFix"></image>
				</view>
				<view class="user-data grid col-4" v-if="allData!=null">
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allContents}}</view>
						<view class="user-data-title">文章总计</view>
					</view>
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allComments}}</view>
						<view class="user-data-title">文章评论</view>
					</view>
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allShop}}</view>
						<view class="user-data-title">商品总计</view>
					</view>
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allUsers}}</view>
						<view class="user-data-title">用户总计</view>
					</view>
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allSpace}}</view>
						<view class="user-data-title">动态总计</view>
					</view>
					<view class="user-data-box">
						<view class="user-data-value">{{allData.allAds}}</view>
						<view class="user-data-title">广告总计</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="data-box"  v-if="group=='administrator'||group=='editor'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>待办事项
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="manage-data upcoming">
				<view class="manage-dataLoad" v-if="allData==null">
					<image src="../../static/loading.gif" mode="widthFix"></image>
				</view>
				<view class="manage-dataLoad" v-if="allData!=null&&upcomingTotal==0">
					你做得很好！暂无待办事项！
				</view>
				<view class="user-data grid col-3"  v-if="allData!=null&&upcomingTotal>0">
					<view class="user-data-box" v-if="allData.upcomingContents!=0">
						<view class="user-data-main"  @tap="toLink('/pages/manage/contents')">
							<view class="user-data-value">{{allData.upcomingContents}}</view>
							<view class="user-data-title">待审核文章</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.upcomingComments!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/comments')">
							<view class="user-data-value">{{allData.upcomingComments}}</view>
							<view class="user-data-title">待审核评论</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.upcomingShop!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/shop')">
							<view class="user-data-value">{{allData.upcomingShop}}</view>
							<view class="user-data-title">待审核商品</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.upcomingSpace!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/space')">
							<view class="user-data-value">{{allData.upcomingSpace}}</view>
							<view class="user-data-title">待审核动态</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.upcomingAds!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/ads')">
							<view class="user-data-value">{{allData.upcomingAds}}</view>
							<view class="user-data-title">待审核广告</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.upcomingWithdraw!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/withdraw')">
							<view class="user-data-value">{{allData.upcomingWithdraw}}</view>
							<view class="user-data-title">待审核提现</view>
						</view>
						
					</view>
					<view class="user-data-box" v-if="allData.upcomingIdentifyConsumer!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/consumer')">
							<view class="user-data-value">{{allData.upcomingIdentifyConsumer}}</view>
							<view class="user-data-title">个人认证</view>
						</view>
						
					</view>
					<view class="user-data-box" v-if="allData.upcomingIdentifyCompany!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/company')">
							<view class="user-data-value">{{allData.upcomingIdentifyCompany}}</view>
							<view class="user-data-title">机构认证</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.selfDelete!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/selfDelete')">
							<view class="user-data-value">{{allData.selfDelete}}</view>
							<view class="user-data-title">申请注销</view>
						</view>
					</view>
					<view class="user-data-box" v-if="allData.report!=0">
						<view class="user-data-main" @tap="toLink('/pages/manage/report')">
							<view class="user-data-value">{{allData.report}}</view>
							<view class="user-data-title">举报</view>
						</view>
					</view>
					
					
				</view>
			</view>
			
		</view>
		<view class="data-box" v-if="group=='administrator'||group=='editor'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>用户模块
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/users')">
							<view class="index-sort-i" style="background-color: #fa5c00;">
								<text class="cuIcon-friend"></text>
							</view>
							<view class="index-sort-text">
								用户管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/senduser')">
							<view class="index-sort-i" style="background-color: #2889a6;">
								<text class="cuIcon-light"></text>
							</view>
							<view class="index-sort-text">
								发送消息
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/invitation')">
							<view class="index-sort-i" style="background-color: #0bb335;">
								<text class="cuIcon-friendadd"></text>
							</view>
							<view class="index-sort-text">
								邀请码管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/clean')">
							<view class="index-sort-i">
								<text class="cuIcon-file"></text>
							</view>
							<view class="index-sort-text">
								常规数据清理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/userClean')">
							<view class="index-sort-i">
								<text class="cuIcon-file"></text>
							</view>
							<view class="index-sort-text">
								用户数据清理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/banuser')">
							<view class="index-sort-i" style="background-color: #333333;">
								<text class="cuIcon-warnfill"></text>
							</view>
							<view class="index-sort-text">
								封禁用户
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/endException')">
							<view class="index-sort-i" style="background-color: #ea4eea;">
								<text class="cuIcon-paintfill"></text>
							</view>
							<view class="index-sort-text">
								解除异常
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/consumer')">
							<view class="index-sort-i" style="background-color: #ff5356;">
								<text class="cuIcon-profilefill"></text>
							</view>
							<view class="index-sort-text">
								个人认证审核
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/company')">
							<view class="index-sort-i" style="background-color: #0852ff;">
								<text class="cuIcon-profilefill"></text>
							</view>
							<view class="index-sort-text">
								机构认证审核
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/selfDelete')">
							<view class="index-sort-i" style="background-color: #7a0000;">
								<text class="cuIcon-repairfill"></text>
							</view>
							<view class="index-sort-text">
								注销审核
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/report')">
							<view class="index-sort-i" style="background-color: #00aa7f;">
								<text class="cuIcon-flashbuyfill"></text>
							</view>
							<view class="index-sort-text">
								举报列表
							</view>
						</view>
					</waves>
				</view>
				
				
			</view>
		</view>
		<view class="data-box" v-if="group=='administrator'||group=='editor'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>内容模块
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/contents')">
							<view class="index-sort-i" style="background-color: #009595;">
								<text class="cuIcon-text"></text>
							</view>
							<view class="index-sort-text">
								文章管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/comments')">
							<view class="index-sort-i">
								<text class="cuIcon-favorfill"></text>
							</view>
							<view class="index-sort-text">
								评论管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/shop')">
							<view class="index-sort-i">
								<text class="cuIcon-shop"></text>
							</view>
							<view class="index-sort-text">
								商品管理
							</view>
						</view>
					</waves>
				</view>				
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/ads')">
							<view class="index-sort-i" style="background-color: #7a4ada;">
								<text class="cuIcon-read"></text>
							</view>
							<view class="index-sort-text">
								广告管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/chat')">
							<view class="index-sort-i" style="background-color: #e70073;">
								<text class="cuIcon-weixin"></text>
							</view>
							<view class="index-sort-text">
								聊天室管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/space')">
							<view class="index-sort-i" style="background-color: #eb4d18;">
								<text class="cuIcon-new"></text>
							</view>
							<view class="index-sort-text">
								动态管理
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>圈子模块
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box" v-if="myPurview == 5">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/section')">
							<view class="index-sort-i">
								<text class="cuIcon-skin"></text>
							</view>
							<view class="index-sort-text">
								版块管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/postReview')">
							<view class="index-sort-i" style="background-color: #e72323;">
								<text class="cuIcon-text"></text>
							</view>
							<view class="index-sort-text">
								帖子审核
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="myPurview == 5">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/postComment')">
							<view class="index-sort-i" style="background-color: #0ca471;">
								<text class="cuIcon-commentfill"></text>
							</view>
							<view class="index-sort-text">
								帖子评论
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'||group=='editor'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/moderator')">
							<view class="index-sort-i">
								<text class="cuIcon-selection"></text>
							</view>
							<view class="index-sort-text">
								版主管理
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box" v-if="group=='administrator'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>AI模块
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box" >
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/gpt')">
							<view class="index-sort-i" style="background-color: #148ce7;">
								<text class="cuIcon-vipcard"></text>
							</view>
							<view class="index-sort-text">
								大模型管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" >
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/gptchat')">
							<view class="index-sort-i" style="background-color: #f45da6;">
								<text class="cuIcon-vipcard"></text>
							</view>
							<view class="index-sort-text">
								AI消息管理
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box" v-if="group=='administrator'">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>财务模块
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4">
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/finance')">
							<view class="index-sort-i" style="background-color: #e72323;">
								<text class="cuIcon-vipcard"></text>
							</view>
							<view class="index-sort-text">
								财务中心
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/recharge')">
							<view class="index-sort-i" style="background-color: #1747e6;">
								<text class="cuIcon-pay"></text>
							</view>
							<view class="index-sort-text">
								快捷充扣
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/withdraw')">
							<view class="index-sort-i" style="background-color: #f1a100;">
								<text class="cuIcon-vipcard"></text>
							</view>
							<view class="index-sort-text">
								提现审核
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/tokenpay')">
							<view class="index-sort-i">
								<text class="cuIcon-ticket"></text>
							</view>
							<view class="index-sort-text">
								卡密管理
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" v-if="group=='administrator'">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/manage/giftVIP')">
							<view class="index-sort-i">
								<text class="cuIcon-emojifill"></text>
							</view>
							<view class="index-sort-text">
								VIP赠送
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<block v-if="group=='administrator'">
			<view class="data-box">
				<view class="ruleApi-Info grid col-2" v-if="ruleApiInfo">
					<view class="ruleApi-Info-box">
						<view class="ruleApi-title">客户端最新版本</view>
						<view class="ruleApi-name">RuleApp</view>
						<view class="ruleApi-version text-gray">{{ruleApiInfo.ruleappVersion}}</view>
						<text class="cu-btn bg-blue" @tap="toUrl(ruleApiInfo.ruleappDt)">获取</text>
					</view>
					<view class="ruleApi-Info-box">
						<view class="ruleApi-title">服务端最新版本</view>
						<view class="ruleApi-name">RuleApi</view>
						<view class="ruleApi-version text-gray">{{ruleApiInfo.ruleapiVersion}}</view>
						<text class="cu-btn bg-blue" @tap="toUrl(ruleApiInfo.ruleapiDt)">获取</text>
					</view>
				</view>
			</view>
			<view class="data-box">
				<view class="cu-list menu">
					<view class="cu-item" @tap="toReward">
						<view class="content">
							<text class="cuIcon-presentfill text-red"></text>
							<text>打赏开发者</text>
						</view>
					</view>
				</view>
			</view>
			<view class="data-box">
				<view class="cu-list menu">
					<view class="cu-item" @tap="toWord">
						<view class="content">
							<text class="cuIcon-hotfill text-blue"></text>
							<text>RuleAPP教程文档</text>
						</view>
					</view>
				</view>
			</view>
		</block>
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
				allData:null,
				upcomingTotal:0,
				ruleApiInfo:null,
				
				group:"",
				
				myPurviewList:[],
				isModerator:false,
				myPurview:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");";
				that.group = that.userInfo.group;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.getAllData();
			}
			
			that.getInfo();
			that.userPurview();
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
			getAllData() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.allData(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.allData = res.data.data;
							var data = res.data.data;
							that.upcomingTotal = Number(data.upcomingContents)+Number(data.upcomingComments)+Number(data.upcomingShop)+Number(data.upcomingSpace)+Number(data.upcomingPost)+Number(data.upcomingAds)+Number(data.upcomingWithdraw);
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
			getInfo() {
				var that = this;
				that.$Net.request({
					
					url: "https://www.ruletree.club/ruleApiInfo.php",
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.ruleappVersion){
							that.ruleApiInfo = res.data;
							
						}
						
					},
					fail: function(res) {
						// uni.showToast({
						// 	title: "网络开小差了哦",
						// 	icon: 'none'
						// })
					}
				})
			},
			toUrl(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toReward(){
				var url = "https://www.ruletree.club/sponsor.html";
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toWord(){
				var url = "https://www.ruletree.club/tag/RuleApp/";
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			userPurview(){
				var that = this;
				var uid = 0;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid=userInfo.uid;
				}
				var data = {
					"uid":uid,
				}
				that.$Net.request({
					url: that.$API.userPurview(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						
						if(res.data.code==1){
							that.myPurviewList = res.data.data;
							var list = res.data.data;
							for(var i in list){
								//获取到大版主权限
								if(list[i].purview==5){
									that.myPurview = list[i].purview;
								}
								
							}
							var myInfo = JSON.parse(localStorage.getItem('userinfo'));
							if(myInfo.group=='administrator'||myInfo.group=='editor'){
								that.myPurview = 5;
							}
							if(that.myPurviewList.length>0){
								that.isModerator = true;
							}
						}
					},
					fail: function(res) {
						
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
