<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					全部标签
				</view>
				<view class="action">
				</view>
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
			<view class="tags">
				
				<text class="tags-box" v-for="(item,index) in tagList" :style="item.style" @tap='toCategoryContents("#"+item.name+"#",item.mid)'>
					{{item.name}}
				</text>
				
			</view>
		</view>
		
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
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP-WEIXIN
			that.NavBar = this.CustomBar;
			// #endif
			that.getTagList();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
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
						"limit":10000,
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
								
								localStorage.setItem('tagList',JSON.stringify(that.tagList));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				if(searchText==""){
					that.getTagList();
				}else{
					var list = that.tagList;
					var tagList=[];
					for(var i in list){
						if(list[i].name.indexOf(searchText) != -1){
							tagList.push(list[i]);
						}
					}
					that.tagList = tagList;
				}
				
			}
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
