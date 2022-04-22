<template>
	
    <view class="tabbar" :style="{'padding-bottom': paddingBottomHeight + 'upx'}">
		<block  v-for="(item, index) in list" 
			    :key="index">
			
			<view class="tabbar-item" @tap="tabbarChange(item.path)">
			    <image class="item-img" :src="item.icon_a" v-if="current == index"></image>
			    <image class="item-img" :src="item.icon" v-else></image>
			    <view class="item-name" :class="{'tabbarActive': current == index}" v-if="item.text">{{item.text}}</view>
			</view>
			<view class="tabbar-item addPost" v-if="index==1"   @tap="toLink('../user/post?type=add')">
				<view class="addPost-main">
					<view class="addPost-i">
						 +
					</view>
				</view>
			</view>
		</block>
    </view>
</template>

<script>
import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
export default {
	
    props: {
        current: Number
    },
    data() {
        return {
            paddingBottomHeight: 0,  //苹果X以上手机底部适配高度
            list: [{
                    text: '首页',  
                    icon: '/static/tabbar/home.png',  //未选中图标
                    icon_a: '/static/tabbar/home_cur.png',  //选中图片
                    path: "/pages/home/home",  //页面路径
                },{
                    text: '发现',
                    icon: '/static/tabbar/find.png',
                    icon_a: '/static/tabbar/find_cur.png',
                    path: "/pages/home/find",
                }
                ,{
                    text: '工具',
                    icon: '/static/tabbar/tool.png',
                    icon_a: '/static/tabbar/tool_cur.png',
                    path: '/pages/home/tool',
                },{
                    text: '我的',
                    icon: '/static/tabbar/user.png',
                    icon_a: '/static/tabbar/user_cur.png',
                    path: "/pages/home/user",
                },
            ]
        };
    },
    created() {
        let that = this;
        uni.getSystemInfo({
            success: function (res) {
                let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
                model.forEach(item => {
                    //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
                    if(res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
                        that.paddingBottomHeight = 40;
                    }
                })
            }
        });
    },
    methods: {
        tabbarChange(path) {
            uni.switchTab({
                url: path
            })
        },
		toLink(text){
			var that = this;
			
			if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
				uni.showToast({
					title: "请先登录哦",
					icon: 'none'
				})
				return false;
			}
			uni.navigateTo({
				url: text
			});
		},
    }
};
</script>

<style>
    .tabbarActive{
        color: #0081FF !important;
    }
	.tabbar view{
		overflow: initial;
		display: block;
	}
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
		z-index: 1000;
		overflow: initial;
        display: block;
        width: 100%;
        height: 100upx;
        background-color: #ffffff;
		border-top: solid 1px #f6f6f6;
		box-sizing: border-box;
    }
	.tabbar-item{
	    display: block;
	    height: 100upx;
		float: left;
		width: calc(25% - 31upx);
		text-align: center;
	    height: 100upx;
		overflow: hidden;
		border: none;
		margin: 0;
		box-sizing: border-box;
	}
	.tabbar-item .item-img{
	    width: 46upx;
	    height: 46upx;
		display: block;
		
		margin: 0 auto;
		margin-top: 10upx;
		text-align: center;
	}
	.tabbar-item .item-name{
	    font-size: 24upx;
		margin-top: 4upx;
	    color: #333;
	}
	.tabbar-item.addPost{
		width: 120upx;
		height: 120upx;
		padding: 0;
		position: relative;
		
		overflow: initial;
	}
	.tabbar-item.addPost .addPost-main{
		position: absolute;
		top: -30upx;
		background-color: #fff;
		width: 100%;
		height: 100%;
		padding: 10upx;
		border-radius: 50%;
		border: solid 1px #f9f9f9;
	}
	.addPost-i{
		background-color: #0081FF;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		line-height: 95upx;
		text-align: center;
		font-size: 70upx;
		color: #fff;
		font-weight: bold;
	}
</style>
