<template>
	<view class="page">
		<!-- <image v-if="picture2" :src="picture2" mode="widthFix"></image> -->
		<l-painter css="width: 750rpx;" 
				@fail="fail"
				@done="done"
				pathType="url"
				ref="poster"
				performance
				>
			<l-painter-view css="padding: 0rpx; box-sizing: border-box; background: #ffffff; width: 750rpx;">
				<l-painter-image src="https://cdn.ruletree.club/usr/uploads/2022/04/1650707479.jpg"  css="object-fit: cover; object-position: 50% 50%; width: 750rpx;height: 440rpx;"/>
				<l-painter-view css="margin-top: 20rpx;padding:0rpx 30rpx; display: flex" >
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000; line-height: 1.8em; font-size: 22rpx;flex:1;" 
						text="2024-01-29"></l-painter-text>
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000;text-align:right; line-height: 1.8em; font-size: 22rpx;flex:1;"
						text="作者: 不暇"></l-painter-text>
				</l-painter-view>
				<l-painter-view css="margin-top: 16rpx;padding:0rpx 30rpx;" >
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #000; line-height: 1.5em; font-size: 32rpx;" 
						text="文章的标题信息,文章的标题很有意思文章的标题信息,文章的标题很有意思"></l-painter-text>
					<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 3; color: #666;margin-top: 20rpx; line-height: 1.6em; font-size: 26rpx;"
						text="文章的简介信息,可能会比较长.文章的简介信息,可能会比较长.文章的简介信息,可能会比较长.文章的简介信息,可能会比较长."></l-painter-text>
				</l-painter-view>
				<l-painter-view css="margin-top: 40rpx; display: flex;padding:0rpx 30rpx 30rpx 30rpx;">
					<l-painter-view css="text-indent: calc(tag.width + 10rpx); flex: 1; display: flex; box-sizing: border-box; line-clamp: 2; color: #333333; line-height: 1.6em; font-size: 36rpx;">
						<l-painter-image css="width: 100rpx; height: 100rpx;" src="@/static/share-ico.png"/>
						<l-painter-view css="flex: 1;padding-left: 30rpx;">
							<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #666;margin-top: 6rpx; line-height: 1.6em; font-size: 24rpx;display:block;"
								text="长按识别二维码查看"></l-painter-text>
							<l-painter-text css="text-indent: calc(tag.width + 10rpx); box-sizing: border-box; line-clamp: 2; color: #666;margin-top: 6rpx; line-height: 1.8em; font-size: 24rpx;display:block"
									text="规则之树"></l-painter-text>
						</l-painter-view>
						
					</l-painter-view>
					<l-painter-qrcode css="width: 100rpx; height: 100rpx;" text="limeui.qcoon.cn"></l-painter-qrcode>
				</l-painter-view>
			</l-painter-view>
		</l-painter>
		<button type="default" @click="save">保存图片</button>
	</view>
</template>

<script>
	export default {
		data: () => ({
			picture: '',
			picture2: '',
			show: false,
		}),
		mounted() {
			this.$refs.poster.canvasToTempFilePathSync({
				fileType: 'jpg',
				quality: 1,
				success: (res) => {
					console.log(`mounted`, res.tempFilePath)
					this.picture2 = res.tempFilePath
					this.saveImage()
				}
			})
		},
		methods: {
			close() {
				this.show = false
			},
			fail(v) {
				console.log(v)
			},
			done(v) {
				console.log('绘制完成:')
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
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.picture,
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
