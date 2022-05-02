# uni-app 图片裁剪插件

[uni-app](https://github.com/dcloudio/uni-app) 图片裁剪插件. 该插件基于[Cropper.js](https://github.com/fengyuanchen/cropperjs), 感谢 cropper.js 优秀又强大的功能, 让裁剪图片变得容易, 本人使用 webview 的方式集成 cropper.js 跟 uni-app 进行数据交互, 可以满足图片裁剪的基本需求.

- 支持裁剪预览
- 支持设置长宽比
- 支持设置裁剪大小
- 支持放大缩小
- 支持圆形裁剪
- 导出支持 base64(dataUrl) 以及 blob 格式导出

> 我们都知道 uni-app 中是无法操作 DOM, 而好多基于 DOM 的优秀库无法在 uni-app 中直接使用, 如果要移植代价高昂(有些根本移植不了), 使用 webview 的方式去整合不妨是一种快捷的途径.

## screenshot

<p>
  <img align=top src="https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/ee108ae0-fe10-11eb-8b54-a9dfd3be275d_0.png?1629140763" width="300px" height="auto">
  <img align=top src="https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/ee108ae0-fe10-11eb-8b54-a9dfd3be275d_1.png?1629140738" width="300px" height="auto">
</p>

## 支持

- App 5+
- h5
- 小程序

## 微信小程序

微信小程序需要将 webview 中加载的 html 设置为从网络加载, 并加入微信白名单, 详情见 [web-view](https://uniapp.dcloud.net.cn/component/web-view?id=web-view), 通常你需要将 `uni_modules\buuug7-img-cropper\hybrid\html\cropper` 目录复制到你 webserver 中, 然后修改 `uni_modules/buuug7-img-cropper/pages/cropper.vue` 中 `<web-view>` 组件 src 属性为你部署后访问的地址.

```vue
<template>
  <view class="container">
    <web-view
      :webview-styles="webviewStyles"
      @message="handleMessage"
      :src="http://some-domain/cropper/index.html"
    >
    </web-view>
  </view>
</template>
```

## 安装

推荐从[dcloud 插件市场](https://ext.dcloud.net.cn/plugin?id=5907) 安装插件

## 用法

在你项目中 `pages.json` 新增`uni_modules/buuug7-img-cropper/pages/cropper`页面配置

```json
{
  "pages": [
    {
      "path": "uni_modules/buuug7-img-cropper/pages/cropper",
      "style": {
        "navigationBarTitleText": "图片裁剪"
      }
    }
  ]
}
```

在 template 中：

在模板中你可以绑定给任何事件, 比如通过点击按钮来选择上传并裁剪图片

```vue
<template>
  <view>
    <view style="width: 10rem; margin: 1rem auto;">
      <button type="default" plain="true" @click="chooseImg">
        choose image
      </button>
    </view>

    <view
      style="display: flex;justify-content: center;align-items: center;margin-top: 1rem;"
    >
      <image :src="imgDataUrl" mode="aspectFit"></image>
    </view>
  </view>
</template>
```

在 script 中：

```javascript
export default {
  data() {
    return {
      // 储存最后裁剪的数据 base64
      imgDataUrl: "",
    };
  },

  methods: {
    chooseImg() {
      const that = this;
      uni.navigateTo({
        url: "../../uni_modules/buuug7-img-cropper/pages/cropper",
        events: {
          imgCropped(event) {
            // 监听裁剪完成
            // 返回的 event 中包含了已经裁剪好图片的base64编码字符串
            // 你可以使用 <image :src="imgDataUrl" mode="aspectFit"></image> 组件来展示裁剪后的图片
            // 或者你可以将该字符串通过接口上传给服务器用来保存
            console.log(event);
            that.imgDataUrl = event.data;
            // do whatever you want
            // upload to server
          },
        },
      });
    },
  },
};
```

## 属性说明

在 `uni_modules\buuug7-img-cropper\hybrid\html\cropper\index.js` 文件中, 你可以设置所有与 cropper.js 相关的选项, 下面是一些最常用的选项

```javascript
// 宽高比
const aspectRatio = 1 / 1;
// 自动裁剪区域, 默认为 50%
const autoCropAre = 0.5;
// 裁剪宽度
const croppedWidth = 200;
// 裁剪高度
const croppedHeight = croppedWidth * aspectRatio;
// 是否裁剪为圆形
const roundedCrop = true;
```

## TODO

- 通过给 webview 传参来控制 cropper.js 更多行为
