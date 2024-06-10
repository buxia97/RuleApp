<template>
	<view class="Share">
		<!-- <image v-if="picture2" :src="picture2" mode="widthFix"></image> -->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<view class="Share-bg" @tap="close()"></view>
		<l-painter css="width: 650rpx;"
				@fail="fail"
				@done="done"
				pathType="url"
				ref="poster"
				performance
				>
			<l-painter-view css="padding: 0rpx; box-sizing: border-box; background: #ffffff; width: 650rpx;">
				<l-painter-image :src="imgUrl"  css="object-fit: cover; object-position: 50% 50%; width: 650rpx;height: 440rpx;"/>
				<l-painter-view css="margin-top: 20rpx;padding:0rpx 30rpx; display: flex" >
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000; line-height: 1.8em; font-size: 22rpx;flex:1;" 
						:text="time"></l-painter-text>
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000;text-align:right; line-height: 1.8em; font-size: 22rpx;flex:1;"
						:text="'作者: '+name"></l-painter-text>
				</l-painter-view>
				<l-painter-view css="margin-top: 16rpx;padding:0rpx 30rpx; box-sizing: border-box;display: block" >
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000; line-height: 1.5em; font-size: 32rpx;width:100%" 
						:text="title"></l-painter-text>
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 3; color: #666;margin-top: 20rpx; line-height: 1.6em; font-size: 26rpx;"
						:text="intro"></l-painter-text>
				</l-painter-view>
				
				<l-painter-view css="margin-top: 40rpx; display: flex;padding:0rpx 30rpx 30rpx 30rpx;">
					<l-painter-view css="text-indent: calc(tag.width + 10rpx); flex: 1; display: flex; box-sizing: border-box; line-clamp: 2; color: #333333; line-height: 1.6em; font-size: 36rpx;">
						<l-painter-image css="width: 100rpx; height: 100rpx;" src="@/static/share-ico.png"/>
						<l-painter-view css="flex: 1;padding-left: 30rpx;">
							<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #666;margin-top: 6rpx; line-height: 1.6em; font-size: 24rpx;display:block;"
								text="长按识别二维码查看"></l-painter-text>
							<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #666;margin-top: 6rpx; line-height: 1.8em; font-size: 24rpx;display:block"
									:text="webName"></l-painter-text>
						</l-painter-view>
						
					</l-painter-view>
					<l-painter-qrcode css="width: 100rpx; height: 100rpx;" :text="href"></l-painter-qrcode>
				</l-painter-view>
			</l-painter-view>
		</l-painter>
		
		<!--  #ifdef APP-PLUS -->
		<view class="share-btn grid col-2 text-center" v-if="isLoading==1">
			<view class="share-btn-box" @tap="share">
				<text class="cuIcon-share" style="background:#d7efe4;color: #39b54a;"></text>
			</view>
			<view class="share-btn-box" @tap="save">
				<text class="cuIcon-down" style="background: #d9ecff;color: #0081ff;"></text>
			</view>
		</view>
		<!--  #endif -->
		<!--  #ifdef H5 -->
		<!-- <view class="share-tips text-center" v-if="isLoading==1">
			长按或右键保存图片
		</view> -->
		<view class="share-btn grid col-1 text-center" v-if="isLoading==1">
			<view class="share-btn-box" @tap="save">
				<text class="cuIcon-down" style="background: #d9ecff;color: #0081ff;"></text>
			</view>
		</view>
		<!--  #endif -->
		<!-- <button type="default" @click="save">保存图片</button> -->
		
	</view>
</template>

<script>
	export default {
		//用户名称、内容图片、内容标题、内容简介、内容链接、网站标题、时间
		props: {
		    name: String,
			title: String,
			intro:String,
			time: String,
			imgUrl:String,
			href: String,
			webName: String,
		},
		data: () => ({
			isLoading:0,
			picture: '',
			picture2: '',
			show: false,
		}),
		mounted() {
			// #ifndef H5
			this.$refs.poster.canvasToTempFilePathSync({
				fileType: 'jpg',
				quality: 1,
				success: (res) => {
					console.log(`mounted`, res.tempFilePath)
					this.picture2 = res.tempFilePath
					this.saveImage()
				}
			})
			// #endif
		},
		methods: {
			close() {
				this.$emit('closeImgShare', 1);
			},
			fail(v) {
				console.log(v)
			},
			done(v) {
				this.isLoading = 1;
				console.log('绘制完成:')
			},
			share(){
				var that = this;

				uni.shareWithSystem({
				  type:"image",
				  href: that.href,
				  imageUrl:that.picture2,
				  summary:that.intro,
				  success(){
					// 分享完成，请注意此时不一定是成功分享
					uni.hideLoading();
				  },
				  fail(){
					// 分享失败
					uni.hideLoading();
				  }
				})
			},
			save() {
				this.$refs.poster.canvasToTempFilePathSync({
					fileType: 'jpg',
					quality: 1,
					success: (res) => {
						console.log(res.tempFilePath)
						this.picture2 = res.tempFilePath
						this.saveImage()
					},
					fail(e) {
						console.log('???????????',e)
					}
				})
				
			},
			// 保存图征
			saveImage() {
				// #ifdef H5
					window.open(this.picture2);
				// #endif
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.picture2,
					success(res) {
						uni.showToast({
							title: '已保存到相册',
							icon: 'success',
							duration: 2000
						});
					},
				});
				// #endif
			}
		}
	};
</script>

<style lang="stylus" scoped>

</style>
