<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					{{title}}
				</view>
				<view class="action">
					<text class="cuIcon-search"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<scroll-view scroll-x class="bg-white nav metaList" scroll-with-animation :scroll-left="scrollLeft" style="margin-top: 20upx;" v-if="type=='all'">
			<view class="cu-item" :class="item.mid==TabCur?'text-blue cur':''" v-for="(item,index) in metaList" :key="index" @tap="tabSelect" :data-id="item.mid" v-if="item.parent==0">
				{{item.name}}
			</view>
		</scroll-view>
		<view class="cu-card article no-card" style="margin-top: 20upx;">
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
								<view class="cu-tag data-author"><text class="cuIcon-message"></text>{{item.commentsNum}}</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
				<text>{{moreText}}</text>
			</view>
			<view class="no-data" v-if="contentsList.length==0">
				暂时没有数据
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
				
				title:"",
				type:"",
				id:0,
				
				contentsList:[],
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				
				metaList:[
					{
						mid:0,
						name:"全部",
						parent:0
					}
				],
				TabCur: 0,
				scrollLeft: 0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
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
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			that.title = res.title;
			that.type =  res.type;
			//user根据用户查询 meta根据分类和标签查询，all显示分类查询全部，search根据搜索关键词查询
			that.id =  res.id;
			if(res.type!=""){
				if(that.type=="meta"){
					
					that.getMetaContents(false,that.id);
				}else{
					that.getContentsList(false,that.type,that.id);
				}
			}
			if(res.type=="all"){
				
				that.getMetaList();
			}
			
		},
		methods:{
			allCache(){
				var that = this;
				var meta = that.TabCur;
				
			},
			tabSelect(e) {
				var that = this;
				that.TabCur = e.currentTarget.dataset.id;
				that.id = e.currentTarget.dataset.id;
				that.page = 1;
				that.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				if(that.TabCur==0){
					that.getContentsList(false,"all",0);
				}else{
					that.getMetaContents(false,that.TabCur);
				}
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.type=="meta"){
					
					that.getMetaContents(true,that.id);
				}else if(that.type=="all"){
					if(that.id==0){
						that.getContentsList(true,that.type,that.id);
					}else{
						that.getMetaContents(true,that.id);
					}
				}else{
					that.getContentsList(true,that.type,that.id);
				}
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/info?cid='+data.cid+"&title="+data.title
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
							
								that.metaList = that.metaList.concat(list);
							
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			getContentsList(isPage,type,id){
				var that = this;
				var info = {
					"type":"post"
				}
				if(type=="user"){
					info = {
						"type":"post",
						"authorId":that.id
					}
				}
				
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {
					"searchParams":JSON.stringify(API.removeObjectEmptyKey(info)),
					"limit":5,
					"page":page,
					"order":"created"
				};
				Net.request({
					url: API.getContentsList(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						that.isLoad=0;
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
					},
					fail: function(res) {
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
			},
			getMetaContents(isPage,meta){
				var that = this;
				var data = {
					"mid":meta
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						that.isLoad=0;
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
								
								
								localStorage.setItem('contentsList_'+meta,JSON.stringify(that.contentsList));
							}else{
								that.moreText="没有更多文章了";
							}
						}
					},
					fail: function(res) {
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
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
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
