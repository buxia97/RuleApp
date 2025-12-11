<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="type=='add'">
						添加版块大类
					</block>
					<block v-else>
						版块大类编辑
					</block>
					
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="editCategory" v-if="type=='edit'">
					<button class="cu-btn round bg-blue">保存</button>
				</view>
				<view class="action" @tap="addCategory" v-if="type=='add'">
					<button class="cu-btn round bg-blue">提交</button>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			
			<view class="cu-form-group margin-top"  v-if="type=='edit'">
				<view class="title">ID</view>
				<input name="input" disabled :value="id"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">名称</view>
				<input name="input" type="text" v-model="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">排序</view>
				<input name="input" type="number" v-model="order" placeholder="数值越大,排序越高"></input>
			</view>

		</form>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="editCategory" v-if="type=='edit'">
			<text class="cuIcon-upload"></text>
		</view>
		<view class="post-update bg-blue" @tap="addCategory" v-if="type=='add'">
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
				type:"add",
				token:"",
				id:0,
				name:"",
				order:"",
				
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
			if(res.id){
				that.id = res.id;
				that.getSectionInfo();
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			addCategory(){
				var that = this;
				if (that.name == ""||that.order == "") {
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
					'order':that.order,
					'type':"sort",
					"token":that.token,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.addSection(),
					data:that.$API.removeObjectEmptyKey(data),
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
			getSectionInfo(){
				var that = this;
				that.$Net.request({
					
					url: that.$API.sectionInfo(),
					data:{
						"id":that.id
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.name = res.data.data.name;
							that.order = res.data.data.orderKey;
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
			editCategory(){
				var that = this;
				if (that.name == ""||that.order == "") {
					uni.showToast({
						title:"请完成表单填写",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'id':that.id,
					'name':that.name,
					'order':that.order,
					'type':"sort",
					"token":that.token,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.editSection(),
					data:that.$API.removeObjectEmptyKey(data),
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
		}
	}
</script>

<style>
</style>
