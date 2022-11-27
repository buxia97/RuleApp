<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					全部标签<block v-if="type=='edit'">(多选)</block>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<block v-if="type=='edit'">
				<view class="action" @tap="submit">
					<text class="cu-btn bg-blue text-sm radius">确定</text>
				</view>
				</block>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索标签" v-model="searchText"  @input="searchTag"></input>
				</view>
			</view>
			<view class="no-data" v-if="tagList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="tags">
				
				<text class="tags-box" v-for="(item,index) in tagList"  @tap='toCategoryContents("#"+item.name+"#",item.mid,index)' :class="item.active==1?'active':''" :key="index">
					{{item.name}}
				</text>
				
			</view>
			<view class="load-more" @tap="loadMore" v-if="tagList.length>0">
				<text>{{moreText}}</text>
			</view>
		</view>
		<!--  #ifdef MP -->
		<block v-if="type=='edit'">
		<view class="post-update bg-blue" @tap="submit">
			<text class="cuIcon-upload"></text>
		</view>
		</block>
		<!--  #endif -->
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
				
				tagList:[],
				searchText:"",
				
				isLoading:0,
				type:"all",
				curNum:0,
				moreText:"加载更多",
				page:1,
				
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
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getTagList(false);
			if(res.type){
				that.type = res.type;
			}
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
					that.getTagList(true);
				}
			},
			getTagList(isPage){
				var that = this;
				var data = {
					"type":"tag"
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":50,
						"page":page,
						"searchKey":that.searchText,
						"order":"count"
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
								var newList = [];
								for(var i in list){
									list[i].active = 0;
									if(that.type=="edit"){
										if(localStorage.getItem('ctag')){
											var clist= localStorage.getItem('ctag');
											var arr = clist.split(",");
											
											for(var j in arr){
												if(arr[j]!=""){
													var index = Number(arr[j]);
													if(list[i].mid == index){
														list[i].active=1;
														that.curNum++;
													}
													
												}
											}
										}
										
									}
									newList.push(list[i]);
								}
								//that.tagList = newList;
								
								if(isPage){
									that.page++;
									that.tagList = that.tagList.concat(newList);
								}else{
									that.tagList = newList;
								}
								that.moreText="加载更多";
								
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
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						that.isLoading=1;
						that.isLoad=0;
						that.moreText="加载更多";
					}
				})
			},
			toCategoryContents(title,id,index){
				var that = this;
				if(that.type=="all"){
					var type="meta";
					uni.navigateTo({
						url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
					});
				}else{
					
					if(that.tagList[index].active==1){
						that.curNum--;
						that.tagList[index].active=0;
					}else{
						if(that.curNum>4){
							uni.showToast({
								title: "最多选择五个标签",
								icon: 'none'
							});
							return false;
						}
						that.curNum++;
						that.tagList[index].active=1;
					}
					
				}
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getTagList();
			},
			submit(){
				var that = this;
				var ctag ="";
				var list = that.tagList;
				for(var i in list){
					if(list[i].active==1){
						ctag += ","+list[i].mid;
					}
				}
				if(ctag==""){
					uni.showToast({
						title: "请选择分类",
						icon: 'none'
					});
					return false;
				}
				localStorage.setItem('ctag',ctag);
				//存入本地缓存后，恢复原本
				var old_list = that.tagList;
				for(var i in list){
					that.tagList[i].active=0;
				}
				that.back();
				
			},
		}
	}
</script>

<style>
</style>
