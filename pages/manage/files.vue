<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					文件管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="search-type grid col-5">
				<view class="search-type-box" :class="type=='all'?'active':''" @tap="setStatus('all')">
					<text>全部</text>
				</view>
				<view class="search-type-box" :class="type=='picture'?'active':''" @tap="setStatus('picture')">
					<text>图片</text>
				</view>
				
				<view class="search-type-box" :class="type=='media'?'active':''" @tap="setStatus('media')">
					<text>媒体</text>
				</view>
				<view class="search-type-box" :class="type=='document'?'active':''" @tap="setStatus('document')">
					<text>文档</text>
				</view>
				<view class="search-type-box" :class="type=='other'?'active':''" @tap="setStatus('other')">
					<text>文档</text>
				</view>
			</view>
			<view class="files-list">
				<view class="no-data" v-if="fileList.length==0">
					<text class="cuIcon-text"></text>
					暂时没有数据
				</view>
				
				<view class="files-list-main grid col-2">
					<view class="files-list-box" v-for="(item,index) in fileList" :key="index">
						<view class="files-list-concent">
							<view class="files-list-box-ico">
								{{item.suffix}}
							</view>
							<view class="files-list-box-title">
								{{item.name}}
							</view>
							<view class="files-list-box-user" v-if="item.userJson">
								<view class="content-author">
									<image :src="item.userJson.avatar" mode="aspectFill"></image>
									<text class="content-author-name">{{item.userJson.name}}</text>
								</view>
							</view>
							<view class="files-list-box-btn">
								<text class="text-green">下载</text>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="load-more" @tap="loadMore" v-if="fileList.length>0">
				<text>{{moreText}}</text>
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
			
			type:'all',
			modalName: null,
			
			adsInfo:null,
			
			searchText:"",
			day:"",

			page:1,
			moreText:"加载更多",
			
			isLoad:0,
			token:"",
			fileList:[],
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
		that.page=1;
		// #ifdef APP-PLUS
		//plus.navigator.setStatusBarStyle("dark")
		// #endif
		if(localStorage.getItem('token')){
			that.page=1;
			that.token = localStorage.getItem('token');
			that.getFileList(false);
		}
		
	},
	onLoad(res) {
		var that = this;
		
		// #ifdef APP-PLUS || MP
		that.NavBar = this.CustomBar;
		// #endif
		that.getFileList(false);
		
	},
	methods: {
		back(){
			uni.navigateBack({
				delta: 1
			});
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
		},
		getType(type){
			var that = this;
			var arr = ["文章推流广告","横幅广告","启动图广告"];
			return arr[type];
		},
		loadMore(){
			var that = this;
			that.moreText="正在加载中...";
			that.isLoad=1;
			that.getFileList(true);
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
		isRealNum(val){
		　　if(val === "" || val ==null){
		        return false;
		　　}
		   if(!isNaN(val)){　　　　
		　　　 return true;
		　　}
		
		　else{
		　　　　return false;
		　　}
		},
		limit(value,num){
		  var that = this;
		  if(that.isRealNum(value)){
		    var newNum = value.toString();
		    if(newNum.indexOf(".")!=-1){
		      var arrbuy = newNum.split(".");
		      var val1 = arrbuy[0];
		      var val2 = arrbuy[1];
		      if(val2.length > num){
		        val2 = val2.slice(0, num);
		      }
		      newNum = Number(val1)+"."+val2;
		      value = newNum;
		    }
		  }else{
		    value = value.substr(0, value.length - 1);
		    if(that.isRealNum(value)){
		      value=value;
		    }else{
		      value="";
		    }
		
		  }
		  return value;
		},
		previewImage(image) {
			var imgArr = [];
			imgArr.push(image);
			//预览图片
			uni.previewImage({
				urls: imgArr,
				current: imgArr[0]
			});
		},
		setStatus(type){
			var that = this;
			that.fileList = [];
			that.type = type;
			that.page = 1;
			that.getFileList(false);
		},
		searchTag(){
			var that = this;
			var searchText = that.searchText;
			that.page=1;
			that.getFileList();
		
		},
		searchClose(){
			var that = this;
			that.searchText = "";
			that.page=1;
			that.getFileList();
		
		},
		getFileList(isPage){
			var that = this;
				
			
			var page = that.page;
			if(isPage){
				page++;
			}
			var data = {
				"type":that.type
			}
			if(that.type=='all'){
				data = {};
			}
			that.$Net.request({
				url: that.$API.fileList(),
				data:{
					"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
					"limit":10,
					"searchKey":that.searchText,
					"page":page,
					"order":"created",
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
								that.fileList = that.fileList.concat(list);
							}else{
								that.fileList = list;
							}
							
						}else{
							that.moreText="没有更多数据了";
							if(!isPage){
								that.fileList = list;
							}
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
					that.moreText="加载更多";
					that.isLoad=0;
				}
			})
		},
		goEdit(data){
			var that = this;
			var type = data.type;
			var aid = data.aid;
			uni.navigateTo({
				url: '/pages/ads/adsPost?post=edit&type='+type+"&aid="+aid
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
			            	url: that.$API.auditAds(),
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
			            			that.getAdsList();
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
		}
		
	},
}
</script>

<style>
</style>
