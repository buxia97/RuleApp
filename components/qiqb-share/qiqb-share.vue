<template>
	<view class="qiqb-ctx" v-bind:class="{'on':show==true}">
		<view class="qiqb-ctx-box">
			<text @click="show=false"></text>
			<canvas canvas-id="ctx" style="width:230px;height:400px" v-show="img_show"></canvas>
		</view>
		<view class="qiqb-ctx-btns u-border-bottom">
			<view>分享至</view>
			<view>长按海报可转发分享</view>
			<view><text @click="share">微信好友</text><text>分享朋友圈</text><text @click="down">保存图片</text></view>
		</view>
		<view class="qiqb-ctx-close" @click="show=false">取消</view>
	</view>
</template>

<script>
	export default {
		name:"share",
		data() {
			return {
				show:false,
				img_show:true,
				mode:'img'
			}
		},
		methods:{
			init(opt){ // 通过opt传参数
				let self = this
				let ctx = uni.createCanvasContext('ctx')
				// 绘制背景 宽度 高度 圆角 颜色
				self.drawBg(ctx,230,400,8,'#fff')
				
				// 需要用到的图片提前循环下载好，本地除外
				uni.downloadFile({url:'http://banbai.oss-cn-beijing.aliyuncs.com/20230524/96e80fb572e35d4acebdce67dbd41f30.jpg',success:function(e){
					let img = e.tempFilePath // 封面图
					uni.downloadFile({url:'http://banbai.oss-cn-beijing.aliyuncs.com/20230524/96e80fb572e35d4acebdce67dbd41f30.jpg',success:function(e){
						let photo = e.tempFilePath // 头像
						uni.downloadFile({url:'http://banbai.oss-cn-beijing.aliyuncs.com/20230606/f0738e1ff432c08b369ca5e4b906a34a.png',success:function(e){
							let qrcode = e.tempFilePath // 二维码
								// 绘制圆角头像 图片地址 距离左边 距离上边 宽度 高度 圆角
								self.drawImg(ctx,photo,10,8,40,40,20)
								
								// 绘制封面图 图片地址 距离左边 距离上边 宽度 高度 圆角
								self.drawImg(ctx,img,10,55,210,210,8)
								
								// 绘制二维码 图片地址 距离左边 距离上边 宽度 高度 圆角
								self.drawImg(ctx,qrcode,174,325,50,50,0)
								
								// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
								self.drawTxtOne(ctx,'雨过天晴',60,24,80,'#222',13,true)
								
								// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
								self.drawTxtOne(ctx,'邀请您一起购好物',60,40,100,'#666',9,false)
								
								// 绘制两行文字 图片地址 距离左边 距离上边 宽度 行高 颜色 字号
								self.drawTxtTwo(ctx,'鼻炎星人表示超爱这个纸!',15,290,190,20,'#222',12)
								
								// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
								self.drawTxtOne(ctx,'安全·超薄·零触感',15,310,100,'#666',11,false)
								
								// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
								self.drawTxtOne(ctx,'今日特价：￥',15,350,100,'#ED3327',11,false)
								
								// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
								self.drawTxtOne(ctx,'86.00',82,350,100,'#ED3327',11,true)
								
								// 绘制删除文字 图片地址 距离左边 距离上边 行高 颜色 字号 加粗
								self.drawTxtDel(ctx,'原价:20',15,370,4,'#818181',10,false)
						
								// 结束绘制
								ctx.draw()
								self.show = true
						}})
					}})
				}})
			},
			down(){
				uni.showLoading({title:'生成中'})
				uni.canvasToTempFilePath({
					canvasId: 'ctx',
					quality: 1,
					success: (res) => {
						uni.hideLoading()
						console.log(res)
						this.$emit('down',res)
						this.show = false
						// 保存到相册 自定义实现
						/*uni.saveImageToPhotosAlbum({
							filePath:res.tempFilePath,
							success:(res) => {

							}
						})*/
					}
				})
			},
			// 绘制背景 宽度 高度 圆角 颜色
			drawBg(ctx,w,h,r,color){
				let x = 0
				let y = 0
				ctx.setFillStyle(color)
				ctx.save()
				ctx.beginPath()
				ctx.moveTo(x + r, y)
				ctx.arcTo(x + w, y, x + w, y + h, r)
				ctx.arcTo(x + w, y + h, x, y + h, r)
				ctx.arcTo(x, y + h, x, y, r)
				ctx.arcTo(x, y, x + w, y, r)
				ctx.closePath()
				ctx.fill()
			},
			// 绘制图片 图片地址 距离左边 距离上边 宽度 高度 圆角
			drawImg(ctx,img,x,y,w,h,r) {
				let self = this
			  ctx.save()
			  ctx.beginPath()
			  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)
			  ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)
			  ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)
			  ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)
			  ctx.clip()
				ctx.drawImage(img,x,y,w,h)
				ctx.restore()
			},
			// 绘制单行文字 图片地址 距离左边 距离上边 宽度 颜色 字号 加粗
			drawTxtOne(ctx,text,x,y,maxWidth,color,size,bold){
			  ctx.save()
				ctx.beginPath()
				let chr =text.split("")
				let temp = ""
				let row = []
				ctx.setFontSize(size)
				ctx.setFillStyle(color)
				for (let a=0;a<chr.length;a++) {
					if(ctx.measureText(temp).width<maxWidth) {
						temp += chr[a]
					}
				}
				row.push(temp)
				if(ctx.measureText(temp).width>maxWidth) row[0] = row[0]+'...'
				
				for (var b = 0; b < row.length; b++) {
					ctx.fillStyle = color
					if(bold){
						ctx.font = 'normal bold '+size+'px sans-serif'
					}else{
						ctx.font = 'normal '+size+'px sans-serif'
					} 
					ctx.fillText(row[b],x,y)
				}
			},
			// 绘制两行文字 图片地址 距离左边 距离上边 宽度 行高 颜色 字号
			drawTxtTwo(ctx,text,x,y,maxWidth,lineHeight,color,size) {
				ctx.save()
				ctx.beginPath()
				let chr =text.split("")
				let temp = ""
				let row = []
				ctx.setFontSize(size)
				ctx.setFillStyle(color)
				for (let a=0;a<chr.length;a++) {
					if(ctx.measureText(temp).width<maxWidth) {
						temp += chr[a];
					}else{
						a--
						row.push(temp)
						temp = ""
					}
				}
				row.push(temp)
				if (row.length > 2) {
					let rowCut = row.slice(0, 2)
					let rowPart = rowCut[1]
					let test = ""
					let empty = []
					for (var a = 0; a < rowPart.length; a++) {
						if(ctx.measureText(test).width < maxWidth) {
							test += rowPart[a]
						}else{
							break
						}
					}
					empty.push(test)
					var group = empty[0] + "..."
					rowCut.splice(1, 1, group)
					row = rowCut
				}
				for (var b = 0; b < row.length; b++) {
					ctx.fillStyle = color
					ctx.font = 'normal '+size+'px sans-serif'
					ctx.fillText(row[b],x,y+b*lineHeight,300)
				}
			},
			// 绘制删除线文字 图片地址 距离左边 距离上边 行高 颜色 字号 加粗
			drawTxtDel(ctx,txt,x,y,h,color,size){
				ctx.fillStyle = color
				ctx.font = 'normal '+size+'px sans-serif'
				ctx.fillText(txt,x,y)
	
				ctx.beginPath()
				let width = ctx.measureText(txt).width;
				ctx.rect(x,y-h,width,1)
				ctx.fillStyle = color
				ctx.fill()    
			}
		}
	}
</script>

<style>
.qiqb-ctx{position:fixed;top:0;right:0;bottom:0;bottom:0;left:0;z-index:-1;display:flex;background:rgba(0,0,0,.6);opacity:0;transition:all .3s;flex-direction:column;align-items:flex-end;justify-content:flex-end}
.qiqb-ctx.on{z-index:2000;opacity:1}
.qiqb-ctx-box{position:relative;display:flex;padding:30upx 0 40upx;width:750upx;justify-content:center}
.qiqb-ctx-box text{position:absolute;top:-40upx;right:145upx;display:inline-flex;width:47upx;height:47upx;background:url(img/close.png);background-size:100% 100%}
.qiqb-ctx-btns{display:flex;width:750upx;height:330upx;border-radius:20upx 20upx 0 0;background:#fff;flex-direction:row;flex-direction:column;align-items:center}
.qiqb-ctx-btns view:nth-child(1){display:flex;padding-top:10upx;height:80upx;font-weight:700;font-size:30upx;align-items:center}
.qiqb-ctx-btns view:nth-child(2){height:80upx;color:#666;font-size:24upx}
.qiqb-ctx-btns view:nth-child(3){display:flex;padding-bottom:30upx;font-size:26upx;flex-direction:row;align-items:center}
.qiqb-ctx-btns view:nth-child(3) text{display:flex;width:250upx;flex-direction:column;align-items:center;justify-content:center}
.qiqb-ctx-btns view:nth-child(3) text:nth-child(1)::before{display:inline-flex;margin-bottom:20upx;width:86upx;height:86upx;background:url(img/1.png);background-size:100% 100%;content:''}
.qiqb-ctx-btns view:nth-child(3) text:nth-child(2)::before{display:inline-flex;margin-bottom:20upx;width:86upx;height:86upx;background:url(img/2.png);background-size:100% 100%;content:''}
.qiqb-ctx-btns view:nth-child(3) text:nth-child(3)::before{display:inline-flex;margin-bottom:20upx;width:86upx;height:86upx;background:url(img/3.png);background-size:100% 100%;content:''}
.qiqb-ctx-close{display:flex;padding-bottom:50upx;width:100%;height:150upx;background:#fff;font-size:32upx;align-items:center;justify-content:center}
</style>