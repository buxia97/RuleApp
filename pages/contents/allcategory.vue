<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					全部分类<block v-if="type=='edit'">(多选)</block>
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
			<view class="no-data" v-if="metaList.length==0">
				暂时没有数据
			</view>
			<view class="category grid col-3">
				<view class="category-box"  v-for="(item,index) in metaList" @tap="toCategoryContents(item.name,item.mid,index)" :class="item.active==1?'active':''" :key="index">
					<view class="category-main">
						{{item.name}}
					</view>
				</view>
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
				
				metaList:[],
				searchText:"",
				
				isLoading:0,
				
				type:"all",
				curNum:0,
				
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
			that.getMetaList();
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
			getMetaList(){
				var that = this;
				var data = {
					"type":"category"
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":100,
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

								var newList = [];
								for(var i in list){
									list[i].active = 0;
									if(that.type=="edit"){
										if(localStorage.getItem('clist')){
											var clist= localStorage.getItem('clist');
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
								
								
								that.metaList = newList;
								
								localStorage.setItem('find_metaList',JSON.stringify(that.metaList));
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
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
			toCategoryContents(title,id,index){
				var that = this;
				if(that.type=="all"){
					var type="meta";
					uni.navigateTo({
					    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
					});
				}else{
					
					if(that.metaList[index].active==1){
						that.curNum--;
						that.metaList[index].active=0;
					}else{
						if(that.curNum>2){
							uni.showToast({
								title: "最多选择三个分类",
								icon: 'none'
							});
							return false;
						}
						that.curNum++;
						that.metaList[index].active=1;
					}
					
				}
				
			},
			submit(){
				var that = this;
				var clist ="";
				var list = that.metaList;
				for(var i in list){
					if(list[i].active==1){
						clist += ","+list[i].mid;
					}
				}
				if(clist==""){
					uni.showToast({
						title: "请选择分类",
						icon: 'none'
					});
					return false;
				}
				localStorage.setItem('clist',clist);
				//存入本地缓存后，恢复原本
				var old_list = that.metaList;
				for(var i in list){
					that.metaList[i].active=0;
				}
				that.back();
				
			},

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
