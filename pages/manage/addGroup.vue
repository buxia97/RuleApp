<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="postType=='edit'">编辑</block><block v-else>新建</block>群聊
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<block v-if="postType=='edit'">
				<view class="action" @tap="edit">
					<text class="cuIcon-upload"></text>
				</view>
				</block>
				<block v-else>
				<view class="action" @tap="submit">
					<text class="cuIcon-upload"></text>
				</view>
				</block>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<form>
			<view class="user-edit-header margin-top">
				<image :src="avatar"></image>
				<!--  #ifdef H5 || APP-PLUS -->
				<!-- <text class="cu-btn bg-blue radius" @tap="showModal" data-target="DialogModal1">设置头像</text> -->
				<text class="cu-btn bg-blue radius" @tap="toAvatar" >设置头像</text>
				<!--  #endif -->
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">群聊名称</view>
				<input placeholder="输入群聊名称" name="input" v-model="name"  :adjust-position="false" :focus="false"></input>
			</view>
		</form>
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
// #ifdef H5 || APP-PLUS 
import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
// #endif
var API = require('../../utils/api')
var Net = require('../../utils/net')
export default {
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar,
			NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
			
			modalName:"",
			token:"",
			name:"",
			avatar:"",
			avatarNew:"",
			
			post:'add',
			
			isLoading:1,
			
		}
	},
	onPullDownRefresh(){
		var that = this;
		
	},
	onShow(){
		var that = this;
		if(localStorage.getItem('toAvatar')){
			var toAvatar = JSON.parse(localStorage.getItem('toAvatar'));
			that.avatarUpload(toAvatar.dataUrl);
		}else{
			console.log("没有图片缓存")
		}
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
		
		if(res.postType){
			that.postType = res.postType;
			if(that.postType=="edit"){
				if(res.chatid){
					that.chatid = res.chatid;
					that.getGroupInfo(that.chatid)
				}else{
					uni.showToast({
						title: "无参数访问",
						icon: 'none'
					})
				}
				
			}
		}
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
					  url : API.upload(),
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

		submit(){
			var that = this;
			if (that.name == ""||that.avatar == "") {
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
				'pic':that.avatar,
				"token":that.token,
			}
			uni.showLoading({
				title: "加载中"
			});
			Net.request({
				
				url: API.createGroup(),
				data:API.removeObjectEmptyKey(data),
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
			if (that.name == ""||that.avatar == "") {
				uni.showToast({
					title:"请完成表单填写",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				return false
			}
			var data = {
				'id':that.chatid,
				'name':that.name,
				'pic':that.avatar,
				"token":that.token,
			}
			uni.showLoading({
				title: "加载中"
			});
			Net.request({
				
				url: API.editGroup(),
				data:API.removeObjectEmptyKey(data),
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
		avatarUpload(base64){
			
			var that = this;
			base64ToPath(base64)
			  .then(path => {
				var file = path;
				const uploadTask = uni.uploadFile({
				  url : API.upload(),
				  filePath:file,
				 //  header: {
					// "Content-Type": "multipart/form-data",
				 // },
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
						
						
						if(data.code==1){
							// uni.showToast({
							// 	title: data.msg,
							// 	icon: 'none'
							// })
							that.avatar = data.data.url;
							that.avatarNew = data.data.url;
							localStorage.removeItem('toAvatar');
							// that.userEdit();
							//console.log(that.avatar)
							
						}else{
							uni.showToast({
								title: "头像上传失败，请检查接口",
								icon: 'none'
							})
						}
					},fail:function(){
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
					}
					
				   
				});
			  })
			  .catch(error => {
				console.error("失败"+error)
			  })
		},
		getGroupInfo(id){
			var that = this;
			var data = {
				"id":id,
			}
			
			Net.request({
				url: API.groupInfo(),
				data:data,
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					if(res.data.code==1){
						var groupInfo = res.data.data;
						that.avatar = groupInfo.pic;
						that.avatarNew = groupInfo.pic;
						that.name= groupInfo.name;
					}
				},
				fail: function(res) {
				}
			});
		},
		toAvatar(){
			// #ifdef APP-PLUS || H5
			const that = this;
			  uni.navigateTo({
				url: "../../uni_modules/buuug7-img-cropper/pages/cropper",
				events: {
				  imgCropped(event) {
					console.log(event);
				  },
				},
			  });
			// #endif
		},
	},
}
</script>

<style>
</style>
