<template>
	<view class="userpost" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					全部推荐专题
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="topic grid col-2">
				<view class="topic-box" v-for="(item,index) in Topic" @tap="toCategoryContents(item.name,item.mid)" :key="index">
					<view class="topic-main">
						<image :src="item.imgurl" mode="aspectFill"></image>
						<view class="topic-text" v-if="item.type=='tag'">#{{replaceSpecialChar(item.name)}}#</view>
						<view class="topic-text" v-else>{{replaceSpecialChar(item.name)}}</view>
					</view>
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="Topic.length>0">
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
			AppStyle:this.$store.state.AppStyle,
				Topic:[],
				moreText:"加载更多",
				page:1,
				
				isLoading:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getTopPic(false);
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
				if(that.isLoad==0){
					that.getTopPic(true);
				}
			},
			getTopPic(isPage){
				var that = this;
				var data = {
					"isrecommend":"1"
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":14,
						"order":"order",
						"page":page,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var Topic = list;
								if(isPage){
									that.page++;
									that.Topic = that.Topic.concat(Topic);
								}else{
									that.Topic = Topic;
								}
							}else{
								that.moreText="没有更多数据了";
							}
							
						}
					},
					fail: function(res) {
						that.isLoading=1;
						that.isLoad=0;
						that.moreText="加载更多";
					}
				})
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
		}
	}
</script>

<style>
</style>
