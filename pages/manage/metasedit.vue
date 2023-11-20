<template>
	<view class="user" :class="$store.state.AppStyle">
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
			<view class="cu-form-group" v-if="metaType=='category'">
				<view class="title">上级分类</view>
				<view class="action"  @tap="showModal" data-target="parentList">
					<text class="text-blue" v-if="curMid==0">选择分类</text>
					<text class="text-blue" v-else>{{curName}}</text>
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
		
		<view class="cu-modal" :class="modalName=='parentList'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="midRadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in parentList" :key="index">
							<label class="flex justify-between align-center flex-sub" @tap="setMid(item.mid)">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="curMid==item.mid?'checked':''" :checked="curMid==item.mid?true:false"></radio>
							</label>
						</view>
					</view>
				</radio-group>
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
				
				mid:0,
				name:'',
				order:0,
				slug:'',
				imgurl:'',
				description:'',
				metaType:"category",
				
				type:"add",
				
				curMid:0,
				curName:"",
				parentList:[],
				modalName: null,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
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
			}else{
				that.getMetaList();
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			midRadioChange(e){
				this.curMid = e.detail.value;
				
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			setMid(id){
				let that = this	
				that.curMid = id;
				var list = that.parentList;
				for(var i in list){
					if(list[i].mid==that.curMid){
						that.curName = list[i].name;
					}
				}
				that.hideModal();
			},
			getMetaList(){
				var that = this;
				var data = {
					"type":"category",
					"parent":0
				}
				that.$Net.request({
					url: that.$API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":50,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							that.parentList = list;
							if(that.curMid!=0){
								for(var i in list){
									if(list[i].mid == that.curMid){
										that.curName = list[i].name;
									}
								}
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh()
					}
				})
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
							that.curMid = res.data.data.parent;
							that.getMetaList();
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
				if(that.metaType == 'category'){
					data.parent = that.curMid;
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
				if(that.metaType == 'category'){
					data.parent = that.curMid;
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
