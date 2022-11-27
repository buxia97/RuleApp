<template>
	<view class="userpost">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]" >
					十年之约
				</view>
				<view class="action">
					<text class="cuIcon-question foreverblog-ico"  @tap="showModal" data-target="DialogModal1"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="no-data" v-if="contentsList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-list menu-avatar comment foreverblog" v-for="(item,index) in contentsList" @tap="toPage(item.link)" :key="index">
				<view class="cu-item">
					<view class="cu-avatar round"  :style="item.style"></view>
					<view class="content">
						<view class="text-grey">{{item.author}}</view>
						<view class="text-gray text-content text-df foreverblog-title">
							{{item.title}}
						</view>
						<view class="padding-sm radius margin-top-sm  text-sm foreverblog-text">
							<view class="flex">
								{{item.desc}}
							</view>
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">{{item.created_at}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
			<text>{{moreText}}</text>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">十年之约</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl  text-left">
					<view>十年之约是一个记录、展示独立博客的平台，即从加入这个活动起，我们的博客10年不关闭或者更久，保持更新和活力。把博客从爱好变成一种习惯，坚持10年，是一项很有意义的活动，我们希望更多的博主加入！</view>
					<view>此页面将获取加入十年之约博客的最新文章，用于共同阅读分享。</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="toForeverblog">前往加入</button>
		
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
				
				contentsList:[],
				modalName: null,
				isLoading:0,
				
				page:1,
				
				moreText:"加载更多",
				
				isLoad:0,
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
		onPullDownRefresh(){
			var that = this;
			that.getContentsList();
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
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			reload(){
				var that = this;
				that.getContentsList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getContentsList(true);
			},
			getContentsList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {
					"page":page,
				}

				Net.request({
					url: API.getForeverblog(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data.data;
							if(list.length>0){
								
								var contentsList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].avatar+");"
									contentsList.push(arr);
								}
								if(isPage){
									that.contentsList = that.contentsList.concat(contentsList);
								}else{
									that.contentsList = contentsList;
								}
								
								
								
							}else{
								that.moreText="没有更多文章了";
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
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
			toPost(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post'
				});
			},
			toEdit(cid){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post?type=edit'+'&cid='+cid
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
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toPage(href){
				var that = this;
				// 跳转页面
				// #ifdef H5
				window.open(href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
				  data: href,
				  success: () =>
				    uni.showToast({
				      title: '链接已复制'
				    })
				})
				// #endif
				// #ifdef APP-PLUS
				plus.runtime.openWeb(href)
				// #endif
			},
			toForeverblog(){
				var that = this;
				that.hideModal();
				var url = "https://www.foreverblog.cn";
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
</style>
