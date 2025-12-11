<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					举报列表
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
			<view class="search-type grid col-3">
				<view class="search-type-box" @tap="toStatus(0)" :class="status==0?'active':''">
					<text>待处理</text>
				</view>
				<view class="search-type-box" @tap="toStatus(1)" :class="status==1?'active':''">
					<text>已发布</text>
				</view>
				<view class="search-type-box" @tap="toStatus(-1)" :class="status==-1?'active':''">
					<text>不通过</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-list menu-avatar comment">
					<view class="no-data" v-if="reportList.length==0">
						暂时没有评论
					</view>
					<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
						<view class="cu-item" v-for="(item,index) in reportList" :key="index" v-if="reportList.length>0">
							<view class="cu-list menu-avatar comment">
								<view class="cu-item">
									<view class="cu-avatar round" :style="item.style"></view>
									<view class="content">
										<view class="text-black">{{item.userJson.name}}
										<!--  #ifdef H5 || APP-PLUS -->
										<text class="userlv" :style="getLvStyle(item.userJson.experience)">{{getLv(item.userJson.experience)}}</text>
										<!--  #endif -->
										<text class="userlv customize" v-if="item.userJson.customize&&item.userJson.customize!=''">{{item.userJson.customize}}</text>
										</view>
										<view class="text-content text-df break-all">
											<rich-text :nodes="markHtml(item.text)"></rich-text>
										</view>
										<view class="margin-top-sm flex justify-between">
											<view class="text-gray text-df">{{formatDate(item.created)}}</view>
											<view v-if="status==0">
												<text class="text-green" @tap="toAudit(item.id)">确认处理</text><text class="text-red margin-left-sm" @tap="refuse(item.id)">不通过</text>
											</view>
											
										</view>
									</view>
								
								</view>
					
								
							</view>
						</view>
					</view>
					
					<view class="load-more" @tap="loadMore" v-if="reportList.length>0">
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
		<view class="cu-modal" :class="modalName=='refuse'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">处理理由</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding text-left refuse-input">
					<textarea maxlength="300" placeholder="请输入拒绝理由" v-model="remarks"></textarea>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="refuse(curId)">确定</button>
		
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
				
				reportList:[],
				
				curId:0,
				remarks:"",
				moreText:"加载更多",
				page:1,
				
				
				status:0,
				
				isLoading:0,
				
				group:"",
				
				modalName:null,
				
				//数据提交拦截，防止重复提交
				submitStatus:false,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getReport(false);
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
			that.page = 1;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
			}
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			that.getReport(false);
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			hideModal(e) {
				this.modalName = null
			},
			markHtml(text){
				var that = this;
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			getUserLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankList = that.$API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getReport(true);
				}
			},
			toInfo(id){
				var that = this;
				uni.navigateTo({
					url: '/pages/forum/info?id='+id
				});
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getReport();
			
			},
			getReport(isPage){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"status":that.status
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.reportList(),
					data:{
						"type":that.status,
						"limit":5,
						"page":page,
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
								var reportList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].userJson.avatar+");"
									reportList.push(arr);
								}
								if(isPage){
									that.page++;
									that.reportList = that.reportList.concat(reportList);
								}else{
									that.reportList = reportList;
								}
							}else{
								that.moreText="没有更多评论了";
								if(!isPage){
									that.reportList = list;
								}
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
			toStatus(i){
				var that = this;
				that.status=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.reportList = [];
				that.getReport(false);
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
			toDelete(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该评论吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.postCommentDelete(),
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
				            			that.getReport();
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
			toAudit(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"type":1,
					"token":token
				}
				uni.showModal({
				    title: '确定要通过审核吗？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.reportAudit(),
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
										that.moreText="加载更多";
										that.isLoad=0;
				            			that.getReport();
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
			refuse(id){
				var that = this;
				var token = "";
				that.curId = id;
				if(that.modalName==null){
					that.modalName = "refuse";
					return false;
				}
				if(that.remarks==""){
					uni.showToast({
						title:"请输入拒绝理由",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.submitStatus){
					return false;
				}
				that.submitStatus = true;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"type":-1,
					"token":token,
					"remarks":that.remarks
				}
				uni.showLoading({
					title: "加载中"
				});
				
				that.$Net.request({
					url: that.$API.reportAudit(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.submitStatus = false;
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						
						if(res.data.code==1){
							that.remarks = "";
							that.hideModal();
							that.page=1;
							that.moreText="加载更多";
							that.isLoad=0;
							that.getReport();
							
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
			},
			replaceSpecialChar(text) {
				if(!text){
					return false;
				}
				text = text.replace(/&quot;/g, '"');
				text = text.replace(/&amp;/g, '&');
				text = text.replace(/&lt;/g, '<');
				text = text.replace(/&gt;/g, '>');
				text = text.replace(/&nbsp;/g, ' ');
				return text;
			},
			getLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var leverList = that.$API.GetLeverList();
				return leverList[lv];
			},
			getLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[lv];
				return userlvStyle;
			},
		}
	}
</script>

<style>
</style>
