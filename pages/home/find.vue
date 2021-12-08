<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="toGroup">
					<text class="toGroup">社交</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发现
				</view>
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 排行榜
				</view>
				<view class="action more" @tap='toTopContents("排行榜","commentsNum")'>
					<text>更多热门</text><text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="top">
				<view class="top-box"  v-for="(item,index) in topList" :key="index" @tap="toInfo(item)">
					<text>{{index+1}}</text>{{item.title}}
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 内容分类
				</view>
				<view class="action more" @tap="toAllcategory">
					<text>全部分类</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="category grid col-3">
				<view class="category-box"  v-for="(item,index) in metaList" v-if="item.parent==0" @tap="toCategoryContents(item.name,item.mid)">
					<view class="category-main">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 标签云
				</view>
				<view class="action more" @tap="toAlltag">
					<text>更多标签</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="tags">
				
				<text class="tags-box" v-for="(item,index) in tagList" :style="item.style" @tap='toCategoryContents("#"+item.name+"#",item.mid)'>
					{{item.name}}
				</text>
				
			</view>
		</view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				topList:[],
				metaList:[],
				tagList:[],
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.loading();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.allCache();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			that.loading();
		},
		methods:{
			loading(){
				var that = this;
				that.getTopList();
				that.getMetaList();
				that.getTagList();
			},
			allCache(){
				var that = this;
				if(localStorage.getItem('topList')){
					that.topList = JSON.parse(localStorage.getItem('topList'));
				}
				if(localStorage.getItem('find_metaList')){
					that.metaList = JSON.parse(localStorage.getItem('find_metaList'));
				}
				if(localStorage.getItem('find_tagList')){
					that.tagList = JSON.parse(localStorage.getItem('find_tagList'));
				}
			},
			getTopList(){
				var that = this;
				Net.request({
					url: API.getContentsList(),
					data:{
						"limit":5,
						"page":1,
						"order":"commentsNum"
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
							
								that.topList = list;
								localStorage.setItem('topList',JSON.stringify(list));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			getMetaList(){
				var that = this;
				var data = {
					"type":"category"
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":15,
						"page":1,
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
							
								that.metaList = list;
								localStorage.setItem('find_metaList',JSON.stringify(that.metaList));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			getTagList(){
				var that = this;
				var data = {
					"type":"tag"
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":20,
						"page":1,
						"order":"count"
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
								var tagList = [];
								for(var i in list){
									var arr = list[i];
									arr.style="background-color:"+API.randomHexColor();
									tagList.push(arr);
								}
								that.tagList = tagList;
								
								localStorage.setItem('find_tagList',JSON.stringify(that.tagList));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/search'
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toTopContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type=top&id="+id
				});
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toAlltag(){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/alltag'
				});
			},
			toAllcategory(){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/allcategory'
				});
			},
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>