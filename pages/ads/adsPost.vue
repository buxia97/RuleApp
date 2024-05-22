<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="post=='add'">发布</block><block v-else>编辑</block>广告
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<block v-if="post=='add'">
				<view class="action" @tap="submit">
					<button class="cu-btn round bg-blue">提交</button>
				</view>
				</block>
				<block v-else>
				<view class="action" @tap="edit">
					<button class="cu-btn round bg-blue">保存</button>
				</view>
				</block>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">广告标题</view>
				<input placeholder="输入广告标题" name="input" v-model="name"  :adjust-position="false" :focus="false"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">广告类型</view>
				<view class="picker">
					<text class="text-blue">{{typeList[type].name}}</text>
					
				</view>
			</view>
			<view class="cu-form-group">
				<textarea placeholder="请输入广告内容" v-model="intro"></textarea>
			</view>
			<view class="cu-form-group">
				<view class="title">缩略图
				</view>
				<input placeholder="" name="input" v-model="imgurl" disabled="disabled"></input>
				<view class="action">
					<text class="cu-btn bg-blue radius" @tap="imgUpload">上传图片</text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">广告跳转链接</view>
				<input placeholder="输入广告跳转链接" name="input" v-model="url"  :adjust-position="false" :focus="false"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">链接跳转类型</view>
				<view class="picker" @click="modalName='urltypeModal'">
					<block v-if="urltype==''" @click="modalName='typeModal'">
						选择跳转类型
					</block>
					<block v-else>
						<text class="text-blue">{{urltypeList[urltype].name}}</text>
					</block>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<block v-if="post=='add'">
				<view class="cu-form-group">
					<view class="title">购买天数</view>
					<input placeholder="输入购买天数" type="number" name="input" v-model="day" @input="day = limit(day,0)"  :adjust-position="false" :focus="false"></input>
					<view class="action">
						<text class="text-red">{{price}}{{currencyName}}/天</text>
					</view>
				</view>
				<view class="form-tips">
					预计金额：<text class="text-blue">{{total(day,price)}}</text> {{currencyName}}
				</view>
			</block>
		</form>
		<view class="cu-modal" :class="modalName=='urltypeModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in urltypeList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="urltype==Number(item.id)?'checked':''" :checked="urltype==Number(item.id)?true:false"
								 :value="item.id"></radio>
							</label>
						</view>
					</view>
				</radio-group>
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
export default {
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar,
			NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
			
			modalName:"",
			token:"",
			
			aid:null,
			name:"",
			intro:"",
			url:"",
			imgurl:"",
			
			type:0,
			urltype:1,
			
			day:"",
			
			price:0,
			
			typeList:[
				{
					name:"文章推流广告",
					id:0
				},
				{
					name:"横幅广告",
					id:1
				},
				{
					name:"启动图广告",
					id:2
				}
			],
			
			urltypeList:[
				{
					name:"APP内打开",
					id:"0"
				},
				{
					name:"浏览器打开",
					id:"1"
				}
			],
			post:'add',
			
			isLoading:0,
			
			currencyName:"",
			
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
		if(localStorage.getItem('token')){
			
			that.token = localStorage.getItem('token');
		}
		if(res.type){
			that.type = res.type;
		}
		if(res.post){
			that.post = res.post;
			if(that.post =='edit'){
				that.aid = res.aid;
				that.getAdsInfo();
			}
		}
		that.getAdsConfig();
		that.currencyName = that.$API.getCurrencyName();
	},
	methods: {
		total(days,price){
			var that = this;
			if(days!=""){
				var total = days * price;
				return total;
			}else{
				return 0;
			}
			
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
		},
		RadioChange(e) {
			this.urltype = e.detail.value;
			this.modalName = null;
		},
		back(){
			uni.navigateBack({
				delta: 1
			});
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
		imgUpload(){
			let that = this				
			uni.chooseImage({
				count: 1,  // 最多可以选择的图片张数，默认9
				sourceType: ['album', 'camera'], 
			    success: function (res) {						
					uni.showLoading({
						title: "加载中"
					});
					const tempFilePaths = res.tempFilePaths;
					const uploadTask = uni.uploadFile({
					  url : that.$API.upload(),
					  filePath: tempFilePaths[0],
					  name: 'file',
					  formData: {
					   'token': that.token
					  },
					  success: function (uploadFileRes) {
						  setTimeout(function () {
						  	uni.hideLoading();
						  }, 1000);
						var data = JSON.parse(uploadFileRes.data);
						//var data = uploadFileRes.data;
						uni.showToast({
							title: data.msg,
							icon: 'none'
						})
						if(data.code==1){
							that.imgurl = data.data.url;
							
							
						}
						},fail:function(){
							setTimeout(function () {
								uni.hideLoading();
							}, 1000);
						}
						
					   
					});
				 
					uploadTask.onProgressUpdate(function (res) {
					  
					 });
				}
			})
		},
		getAdsConfig(){
			var that = this;
			that.$Net.request({
				url: that.$API.adsConfig(),
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					if(res.data.code==1){
						if(that.type==0){
							that.price = res.data.data.pushAdsPrice;
						}
						if(that.type==1){
							that.price = res.data.data.bannerAdsPrice;
						}
						if(that.type==2){
							that.price = res.data.data.startAdsPrice;
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
				}
			})
		},
		getAdsInfo(){
			var that = this;
			var data = {
				"id":that.aid,
				"token":that.token,
			}
			
			that.$Net.request({
				url: that.$API.adsInfo(),
				data:data,
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					uni.stopPullDownRefresh();
					if(res.data.name){
						that.name = res.data.name;
						that.intro = res.data.intro;
						that.url = res.data.url;
						that.imgurl = res.data.img;
						that.type = res.data.type;
						that.urltype = res.data.urltype;
					}
				},
				fail: function(res) {
					uni.stopPullDownRefresh();
				}
			})
		},
		submit(){
			var that = this;
			if (that.name == ""||that.imgurl == ""||that.intro == ""||that.day == ""||that.url == "") {
				uni.showToast({
					title:"请完成表单填写",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				return false
			}
			var data = {
				'name':that.name,
				'type':that.type,
				'img':that.imgurl,
				'intro':that.intro,
				"urltype":that.urltype,
				"url":that.url,
			}
			uni.showLoading({
				title: "加载中"
			});
			that.$Net.request({
				
				url: that.$API.addAds(),
				data:{
					"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
					"day":that.day,
					"token":that.token,
				},
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
						var timer = setTimeout(function() {
							that.back();
						}, 1000)
						
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
					uni.stopPullDownRefresh()
				}
			})
		},
		edit(){
			var that = this;
			if (that.name == ""||that.imgurl == ""||that.intro == ""||that.url == "") {
				uni.showToast({
					title:"请完成表单填写",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				return false
			}
			var data = {
				'aid':that.aid,
				'name':that.name,
				'type':that.type,
				'img':that.imgurl,
				'intro':that.intro,
				"urltype":that.urltype,
				"url":that.url,
			}
			uni.showLoading({
				title: "加载中"
			});
			that.$Net.request({
				
				url: that.$API.editAds(),
				data:{
					"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
					"token":that.token,
				},
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
						var timer = setTimeout(function() {
							that.back();
						}, 1000)
						
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
					uni.stopPullDownRefresh()
				}
			})
		}
	},
}
</script>

<style>
</style>
