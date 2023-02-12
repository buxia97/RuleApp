<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="type=='add'">
						添加分类标签
					</block>
					<block v-else>
						分类标签编辑
					</block>
					
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="metaEdit" v-if="type=='edit'">
					<button class="cu-btn round bg-blue">保存</button>
				</view>
				<view class="action" @tap="metaAdd" v-if="type=='add'">
					<button class="cu-btn round bg-blue">提交</button>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top"  v-if="type=='edit'">
				<view class="title">MID</view>
				<input name="input" disabled :value="mid"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">名称</view>
				<input name="input" type="text" v-model="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">缩略名</view>
				<input name="input" type="text" v-model="slug" placeholder="用于url生成,建议英文"></input>
			</view>
			<view class="cu-form-group"  v-if="type=='add'">
				<view class="title">类型</view>
				<view class="action">
					<text class="meta-type" :class="metaType=='category'?'act':''" @tap="metaType='category'">分类</text>
					<text class="meta-type" :class="metaType=='tag'?'act':''" @tap="metaType='tag'">标签</text>
				</view>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">简介</view>
				<textarea v-model="description" placeholder="请输入分类和标签简介"></textarea>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">排序</view>
				<input name="input" type="number" v-model="order" placeholder="数值越大,排序越高"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">缩略图</view>
				<view class="action">
					<text class="cu-btn bg-blue radius" @tap="upload">上传图片</text>
				</view>
			</view>
			<view class="pay-codeImg" v-if="imgurl!=''">
				<image :src="imgurl"></image>
			</view>

		</form>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="metaEdit" v-if="type=='edit'">
			<text class="cuIcon-upload"></text>
		</view>
		<view class="post-update bg-blue" @tap="metaAdd" v-if="type=='add'">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
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
				
				mid:0,
				name:'',
				order:0,
				slug:'',
				imgurl:'',
				description:'',
				metaType:"category",
				
				type:"add"
				
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
			if(res.type){
				that.type = res.type;
			}
			if(res.mid){
				that.mid = res.mid;
				that.geMetaInfo();
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			
			geMetaInfo(){
				var that = this;
				that.$Net.request({
					
					url: that.$API.geMetaInfo(),
					data:{
						"key":that.mid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.name = res.data.data.name;
							that.imgurl = res.data.data.imgurl;
							that.order = res.data.data.orderKey;
							that.description = res.data.data.description;
							that.slug = res.data.data.slug;
						}
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			metaEdit() {
				var that = this;
				if (that.name == "") {
					uni.showToast({
						title:"请输入名称",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					mid:that.mid,
					name:that.name,
					description:that.description,
					imgurl:that.imgurl,
					slug:that.slug,
					orderKey:that.order
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.editMeta(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
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
								clearTimeout('timer')
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
			metaAdd(){
				var that = this;
				if (that.name == "") {
					uni.showToast({
						title:"请输入名称",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					name:that.name,
					description:that.description,
					imgurl:that.imgurl,
					slug:that.slug,
					orderKey:that.order,
					type:that.metaType
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.addMeta(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						if(res.data.code==1){
							uni.showToast({
								title: res.data.msg+"，请等待缓存生效",
								icon: 'none'
							})
							var timer = setTimeout(function() {
								that.back();
								clearTimeout('timer')
							}, 1000)
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			upload(){
				let that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				uni.chooseImage({
					count: 1,  // 最多可以选择的图片张数，默认9
					sourceType: ['album', 'camera'], 
				    success: function (res) {						
						uni.showLoading({
							title: "加载中"
						});
						const tempFilePaths = res.tempFilePaths;
						for(let i = 0;i < tempFilePaths.length; i++) {
							const uploadTask = uni.uploadFile({
							  url : that.$API.upload(),
							  filePath: tempFilePaths[i],
							  name: 'file',
							  formData: {
							   'token': token
							  },
							  success: function (uploadFileRes) {
								  if(i==tempFilePaths.length-1){
									  setTimeout(function () {
									  	uni.hideLoading();
									  }, 1000);
								  }
								  
								var data = JSON.parse(uploadFileRes.data);
								//var data = uploadFileRes.data;
								uni.showToast({
									title: data.msg,
									icon: 'none'
								})
								if(data.code==1){
									   //插入文章
										that.imgurl = data.data.url;
									}
								},fail:function(){
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
								}
								
							   
							});
						}
					}
				})
			},
		}
	}
</script>

<style>
</style>
