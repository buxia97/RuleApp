<template>
	<view>
		<!--文章推流广告区域-->
		<view class="cu-card article no-card" :class="isTop?'topContents':''" v-if="item.isAds" @tap="goAds(item)">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">{{item.name}}</view>
				</view>
				<view class="content article-content" style="position: relative;">
					 <image :src="item.img"
					  mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">{{item.intro}}</view>
						<view class="ads-more">了解更多<text class="cuIcon-right"></text></view>
					</view>
					<text class="ads-ico">AD</text>
				</view>
			</view>
		</view>
		<!--文章推流广告区域结束-->
		<view class="cu-card article no-card"  @tap="toInfo(item)" v-else>
			<view class="cu-item shadow">
				<block v-if="item.images.length==0">
					<view class="content-author content-header">
						<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
						<text class="content-author-name">{{item.authorInfo.name}}</text>
						<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
					</view>
				</block>
				<view class="title">
					<view class="text-cut"><text class="text-red margin-right-xs" v-if="isTop">置顶</text>{{replaceSpecialChar(item.title)}}</view>
				</view>
				<block v-if="item.abcimg == 'mable'">
					
					<view class="article-imgMain grid col-3">
						
						<view class="article-img">
							<image v-if="item.images.length > 0" :src="item.images[0]"
							 mode="aspectFill"></image>
						</view>
						<view class="article-img">
							<image v-if="item.images.length > 1" :src="item.images[1]"
							 mode="aspectFill"></image>
						</view>
						<view class="article-img">
							<image v-if="item.images.length > 2" :src="item.images[2]"
							 mode="aspectFill"></image>
						</view>
					</view>
					<block v-if="item.images.length > 0">
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
				</block>
				<block v-if="item.abcimg == 'bable'">
					
					<view class="content article-content">
						<view class="article-big">
							<image v-if="item.images.length > 0" :src="item.images[0]"
							 mode="aspectFill"></image>
						</view>
						<view class="text-content"> {{subText(item.text,80)}}</view>
					</view>
					<block v-if="item.images.length > 0">
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
				</block>
				<block v-if="item.abcimg == 'able'||!item.abcimg">
					<view class="content article-content">
						
						 <image v-if="item.images.length > 0" :src="item.images[0]"
						  mode="aspectFill"></image>
						 
						<view class="desc">
							<view class="text-content"> {{subText(item.text,80)}}</view>
							<view class="content-author" v-if="item.images.length>0">
								<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
								<text class="content-author-name">{{item.authorInfo.name}}</text>
								<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
							</view>
						</view>
					</view>
				</block>
				
				<view class="article-content-btn article-list-btn">
					<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
					<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
					<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
				
					<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
export default {
    props: {
        item: {
		  type: Object,
		  default: () => ({})
		},
		isTop: {
		  type: Boolean,
		  default: false
		}
    },
	name: "articleItem",
	data() {
		return {
		};
	},
	methods: {
		subText(text,num){
			if(text.length < null){
				return text.substring(0,num)+"……"
			}else{
				return text;
			}
			
		},
		replaceSpecialChar(text) {
		  text = text.replace(/&quot;/g, '"');
		  text = text.replace(/&amp;/g, '&');
		  text = text.replace(/&lt;/g, '<');
		  text = text.replace(/&gt;/g, '>');
		  text = text.replace(/&nbsp;/g, ' ');
		  return text;
		},
		formatDate(datetime) {
			var datetime = new Date(parseInt(datetime * 1000));
			var year = datetime.getFullYear(),
				month = ("0" + (datetime.getMonth() + 1)).slice(-2),
				date = ("0" + datetime.getDate()).slice(-2),
				hour = ("0" + datetime.getHours()).slice(-2),
				minute = ("0" + datetime.getMinutes()).slice(-2);
			var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
			return result;
		},
		formatNumber(num) {
		    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
		},
		toInfo(data){
			var that = this;
			
			uni.navigateTo({
			    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
			});
		},
		goAds(data){
			var that = this;
			var url = data.url;
			var type = data.urltype;
			// #ifdef APP-PLUS
			if(type==1){
				plus.runtime.openURL(url);
			}
			if(type==0){
				plus.runtime.openWeb(url);
			}
			// #endif
			// #ifdef H5
			window.open(url)
			// #endif
		},
	}
}
</script>

<style>
</style>