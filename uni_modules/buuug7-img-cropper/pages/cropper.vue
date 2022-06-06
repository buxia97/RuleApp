<template>
  <view class="container">
	<view class="header" :style="[{height:CustomBar + 'px'}]">
	<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
		<view class="action" @tap="back">
			<text class="cuIcon-back"></text>
		</view>
		<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
			头像上传
		</view>
	</view>
	</view>
    <web-view
      :webview-styles="webviewStyles"
       @message="sendmessage"
      :src="webviewSrc"
    >
    </web-view>
  </view>
</template>

<script>

export default {
  name: "buuug7-img-cropper",
  data() {
    return {
	StatusBar: this.StatusBar,
	CustomBar: this.CustomBar,
	NavBar:this.StatusBar +  this.CustomBar,
      webviewStyles: {},
      platform: "",
      webviewSrc:
        "/uni_modules/buuug7-img-cropper/hybrid/html/cropper/index.html",
    };
  },
	onLoad() {
		var that = this;
		// #ifdef APP-PLUS || MP
		that.NavBar = this.CustomBar;
		// #endif
	},
  mounted() {
    const { platform } = uni.getSystemInfoSync();
    this.platform = platform;
    console.log(platform);

    // if (platform === "windows" || platform === "mac") {
    //   this.handleH5Message();
    // }
  },

  methods: {
    handleMessage(event) {
		console.log(JSON.stringify(event));
      const platform = this.platform;
      const data = event.detail.data[0];
      //if (platform === "android" || platform === "ios") {
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.emit("imgCropped", { data: data.dataUrl });
      //}
    },
	sendmessage(event){
		console.log(JSON.stringify(event));
	},
	back(){
		uni.navigateBack({
			delta: 1
		});
	},

    // handleH5Message(e) {
    //   console.log(`H5Message`);
    //   window.addEventListener("message", (event) => {
    //     const data = event.data.data;
    //     if (data && data.type === "croppedData") {
    //       const eventChannel = this.getOpenerEventChannel();
    //       eventChannel.emit("imgCropped", { data: data.dataUrl });
    //     }
    //   });
    // },
  },
};
</script>

<style>
	@import "/static/base.css";
</style>
