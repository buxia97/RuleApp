<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					邀请码管理
				</view>
				<view class="action">
					<text class="cu-btn bg-green radius"  @tap="showModal" data-target="tokenExcel">导出</text>
					<text class="cu-btn bg-blue radius margin-left-sm"  @tap="showModal" data-target="tokenModal">生成</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType(0)" :class="status==0?'active':''">
					<text>未使用</text>
				</view>
				<view class="search-type-box" @tap="toType(1)" :class="status==1?'active':''">
					<text>已使用</text>
				</view>
			</view>
			<view class="no-data" v-if="invitationList.length==0">
				暂时没有数据
			</view>
			<view class="cu-item tokenList-box" v-for="(item,index) in invitationList" :key="index" >
				<view class="content">
					<text class="text-bold">{{item.code}}</text>
				</view>
				<view class="tokenList-info">
					<text class="tokenDate">
						{{formatDate(item.created)}}
					</text>
					<text class="cu-btn text-blue" @tap="ToCopy(item.code)">复制</text>
					
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="invitationList.length>0">
				<text>{{moreText}}</text>
			</view>
		</view>
		
		<view class="cu-modal LinksModal" :class="modalName=='tokenModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">生成充值码</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input placeholder="邀请码数量,一次最大100" type="number" v-model="num"/>
				</view>
				
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="toMade">确定</button>
		
					</view>
				</view>
			</view>
		</view>
		<view class="cu-modal LinksModal" :class="modalName=='tokenExcel'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">导出邀请码</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<text class="text-red">将导出未使用的邀请码为Excel表格，填入过多条数可能导致数据库卡顿</text>
					<input placeholder="导出条数" type="number"  v-model="tokenNum"/>
				</view>
				
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="toExcel">确定</button>
		
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
				
				invitationList:[],
				page:1,
				moreText:"加载更多",
				isLoad:0,
				searchText:"",
				
				isLoading:0,
				
				status:0,
				token:'',
				price:"",
				num:"",
				
				modalName:"",
				tokenNum:"",
			}
		},
		onPullDownRefresh(){
			var that = this;
			
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
			that.getInvitationList();
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
				that.invitationList = [];
				that.page=1;
				that.getInvitationList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getInvitationList(true);
				}
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			toMade(){
				var that = this;
				if (that.num == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					'num':that.num,
					'token':token
				}
				uni.showLoading({
					title: "加载中"
				});
				
				Net.request({
					
					url: API.madeInvitation(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						console.log(JSON.stringify(res));
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000,
							position:'bottom',
						})
						if(res.data.code==1){
							that.status=0;
							that.invitationList = [];
							that.page=1;
							that.getInvitationList();
							that.hideModal();
							
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
			getInvitationList(isPage){
				var that = this;
				var page = that.page;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"status":that.status,
				}
				if(isPage){
					page++;
				}
				Net.request({
					url: API.invitationList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":20,
						"page":page,
						"searchKey":that.searchText,
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
								
								var invitationList = list;
								if(isPage){
									that.page++;
									that.invitationList = that.invitationList.concat(invitationList);
								}else{
									that.invitationList = invitationList;
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
			ToCopy(text) {
				var that = this;
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: text,
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: "复制成功"
						})
					}
				});
				// #endif
				// #ifdef H5 
				uni.showToast({ //提示
					title: "复制成功"
				})
				let textarea = document.createElement("textarea");
				textarea.value = text;
				textarea.readOnly = "readOnly";
				document.body.appendChild(textarea);
				textarea.select();
				textarea.setSelectionRange(0, text.length) ;
				
				var result = document.execCommand("copy") 
				textarea.remove();
				
				// #endif
			},
			toExcel(){
				var that = this;
				var token = "";
				if(that.tokenNum==""||that.tokenNum<1){
					uni.showToast({
						title:"请输入正确的条数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
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
					return false
				}
				var url = API.invitationExcel()+"?limit="+that.tokenNum+"&token="+token;
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			}
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>

