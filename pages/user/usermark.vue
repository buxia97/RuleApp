<template>
	<view class="usermarks" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的收藏
				</view>
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="all-box">
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType('article')" :class="type=='article'?'active':''">
					<text>文章</text>
				</view>
				<view class="search-type-box" @tap="toType('forum')" :class="type=='forum'?'active':''">
					<text>帖子</text>
				</view>
			</view>
			<block v-if="type=='article'">
				<view class="no-data" v-if="contentsList.length==0">
					<text class="cuIcon-text"></text>暂时没有数据
				</view>
				<view class="cu-card article no-card" v-for="(item,index) in contentsList" :key="index"  @tap="toInfo(item)">
					<view class="cu-item shadow">
						<view class="title">
							<view class="text-cut">{{item.title}}</view>
						</view>
						<view class="content">
							<image v-if="item.images.length>0" :src="item.images[0]"
							 mode="aspectFill"></image>
							<view class="desc">
								<view class="text-content"> {{subText(item.text,80)}}</view>
								<view>
									<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
									<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
									<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
									<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
					<text>{{moreText}}</text>
				</view>
			</block>
			<block v-if="type=='forum'">
				<view class="no-data" v-if="forumList.length==0">
					<text class="cuIcon-text"></text>暂时没有数据
				</view>
				<block v-for="(item,index) in forumList" :key="index">
					<forumItem :item="item" :myPurview="0"></forumItem>
				</block>
				<view class="load-more" @tap="loadMore" v-if="forumList.length>0">
					<text>{{moreText}}</text>
				</view>
			</block>
			
			

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
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				token:"",
				contentsList:[],
				forumList:[],
				isLoading:0,
				type:"article"
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.getContentsList(false);
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
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
				that.getContentsList(false);
			}
			that.page = 1;
			
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
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.type=='article'){
					that.getContentsList(true);
				}else{
					that.getPostMarkList(true);
				}
			},
			toType(type){
				var that = this;
				that.type = type;
				that.page = 1;
				that.moreText="加载更多";
				if(that.type=='article'){
					that.getContentsList(false);
				}else{
					that.getPostMarkList(false);
				}
				
			},
			getContentsList(isPage){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.getMarkList(),
					data:{
						"limit":8,
						"page":page,
						"token":that.token,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(list);
								}else{
									that.contentsList = list;
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
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getPostMarkList(isPage){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.postMarkList(),
					data:{
						"limit":8,
						"page":page,
						"token":that.token,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								for(var i in list){
									list[i].isAds = 0;
								}
								if(isPage){
									that.page++;
									that.forumList = that.forumList.concat(list);
								}else{
									that.forumList = list;
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
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
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
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
		}
	}
</script>

<style>

</style>
