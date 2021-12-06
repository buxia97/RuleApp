<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发布文章
				</view>
				<view class="action">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">文章标题</view>
				<input placeholder="输入文章标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">选择分类</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'选择发布的分类'}}
					</view>
				</picker>
			</view>
			<view class="edit-tool">
				<text>B</text>
				<text>I</text>
				<text class="cuIcon-picfill"></text>
				<text class="cuIcon-font"></text>
				<text class="cuIcon-link"></text>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" @input="textareaAInput" placeholder="文章内容"></textarea>
			</view>
		</form>
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
