<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户注册
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="user-form">
			<form>
				<view class="cu-form-group">
					<input name="input" placeholder="请输入用户名(必填)"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="请输入邮箱(必填)"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="请输入验证码"></input>
					<view class="sendcode text-blue">发送</view>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="请输入密码"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="再次输入密码"></input>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-cyan margin-tb-sm lg">立即注册</button>
				</view>
			</form>
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
				
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				
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
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
