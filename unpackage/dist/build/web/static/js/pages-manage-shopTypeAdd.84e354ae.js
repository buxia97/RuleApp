(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shopTypeAdd"],{"0469":function(e,t,n){"use strict";n.r(t);var i=n("0bf0"),a=n("9f57");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"9e7879b8",null,!1,i["a"],void 0);t["default"]=u.exports},"0bc5":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4e82"),n("e9c4");var i=n("625a"),a=n("bfa7"),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,token:"",sort:"未选择大类",parent:0,id:0,name:"",order:1,pic:"",picNew:"",text:"",type:"add",modalName:null}},onPullDownRefresh:function(){},onShow:function(){if(i.localStorage.getItem("toAvatar")){var e=JSON.parse(i.localStorage.getItem("toAvatar"));this.avatarUpload(e.dataUrl)}else console.log("没有图片缓存")},onLoad:function(e){i.localStorage.getItem("token")&&(this.token=i.localStorage.getItem("token")),e.type&&(this.type=e.type),e.sort&&(this.sort=e.sort),e.parent&&(this.parent=e.parent),e.name&&(this.sort=e.name),e.id&&(this.id=e.id,this.getShopTypeInfo())},methods:{back:function(){uni.navigateBack({delta:1})},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},setRestrict:function(e){this.restrict=e,this.hideModal()},imgUpload:function(){var e=this;uni.chooseImage({count:1,sourceType:["album","camera"],success:function(t){uni.showLoading({title:"加载中"});var n=t.tempFilePaths,i=uni.uploadFile({url:e.$API.upload(),filePath:n[0],name:"file",formData:{token:e.token},success:function(t){setTimeout((function(){uni.hideLoading()}),1e3);var n=JSON.parse(t.data);uni.showToast({title:n.msg,icon:"none"}),1==n.code&&(e.bg=n.data.url)},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}});i.onProgressUpdate((function(e){}))}})},avatarUpload:function(e){var t=this;(0,a.base64ToPath)(e).then((function(e){var n=e;uni.uploadFile({url:t.$API.upload(),filePath:n,name:"file",formData:{token:t.token},success:function(e){setTimeout((function(){uni.hideLoading()}),1e3);var n=JSON.parse(e.data);1==n.code?(t.pic=n.data.url,t.picNew=n.data.url,i.localStorage.removeItem("toAvatar")):uni.showToast({title:"图片上传失败，请检查接口",icon:"none"})},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}})})).catch((function(e){console.error("失败"+e)}))},add:function(){var e=this;if(""==e.name||""==e.order)return uni.showToast({title:"请完成表单填写",icon:"none",duration:1e3,position:"bottom"}),!1;var t={name:e.name,orderKey:e.order,parent:e.parent,intro:e.text,pic:e.pic};uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.addShopType(),data:{params:JSON.stringify(e.$API.removeObjectEmptyKey(t)),token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code)setTimeout((function(){e.back()}),1e3)},fail:function(e){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},getShopTypeInfo:function(){var e=this;e.$Net.request({url:e.$API.shopTypeInfo(),data:{id:e.id},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){1==t.data.code&&(e.name=t.data.data.name,e.order=t.data.data.orderKey,e.pic=t.data.data.pic,e.picNew=t.data.data.pic,e.text=t.data.data.intro)},fail:function(e){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},edit:function(){var e=this;if(""==e.name||""==e.order)return uni.showToast({title:"请完成表单填写",icon:"none",duration:1e3,position:"bottom"}),!1;var t={id:e.id,name:e.name,orderKey:e.order,parent:e.parent,intro:e.text,pic:e.pic};uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.editShopType(),data:{params:JSON.stringify(e.$API.removeObjectEmptyKey(t)),token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code)setTimeout((function(){e.back()}),1e3)},fail:function(e){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},toAvatar:function(){uni.navigateTo({url:"../../uni_modules/buuug7-img-cropper/pages/cropper",events:{imgCropped:function(e){console.log(e)}}})}}};t.default=o},"0bf0":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"user",class:e.$store.state.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:e.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:e.CustomBar+"px","padding-top":e.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:e.StatusBar+"px"}]},["add"==e.type?[e._v("添加商品分类")]:[e._v("商品分类编辑")]],2),"edit"==e.type?n("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.edit.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"cu-btn round bg-blue"},[e._v("保存")])],1):e._e(),"add"==e.type?n("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"cu-btn round bg-blue"},[e._v("提交")])],1):e._e()],1)],1),n("v-uni-view",{style:[{padding:e.NavBar+"px 10px 0px 10px"}]}),n("v-uni-form",[n("v-uni-view",{staticClass:"user-edit-header margin-top"},[n("v-uni-image",{attrs:{src:e.pic}}),n("v-uni-text",{staticClass:"cu-btn bg-blue radius",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAvatar.apply(void 0,arguments)}}},[e._v("设置分类图标")])],1),"edit"==e.type?n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[e._v("ID")]),n("v-uni-input",{attrs:{name:"input",disabled:!0,value:e.id}})],1):e._e(),e.parent>0?n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[e._v("所在大类")]),n("v-uni-input",{attrs:{name:"input",type:"text",value:e.sort,disabled:"disabled"}})],1):e._e(),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[e._v("名称")]),n("v-uni-input",{attrs:{name:"input",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-uni-view",{staticClass:"cu-form-group align-start"},[n("v-uni-view",{staticClass:"title"},[e._v("简介")]),n("v-uni-textarea",{attrs:{placeholder:"请输入分类和标签简介"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[e._v("排序")]),n("v-uni-input",{attrs:{name:"input",type:"number",placeholder:"数值越大,排序越高"},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}})],1)],1)],1)},a=[]},"9f57":function(e,t,n){"use strict";n.r(t);var i=n("0bc5"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},bfa7:function(e,t,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToPath=function(e){return new Promise((function(t,n){if("object"===("undefined"===typeof window?"undefined":(0,a.default)(window))&&"document"in window){e=e.split(",");var i=e[0].match(/:(.*?);/)[1],u=atob(e[1]),s=u.length,c=new Uint8Array(s);while(s--)c[s]=u.charCodeAt(s);return t((window.URL||window.webkitURL).createObjectURL(new Blob([c],{type:i})))}var d=e.split(",")[0].match(/data\:\S+\/(\S+);/);d?d=d[1]:n(new Error("base64 error"));var l=function(){return Date.now()+String(r++)}()+"."+d;if("object"!==("undefined"===typeof plus?"undefined":(0,a.default)(plus)))if("object"===("undefined"===typeof wx?"undefined":(0,a.default)(wx))&&wx.canIUse("getFileSystemManager")){f=wx.env.USER_DATA_PATH+"/"+l;wx.getFileSystemManager().writeFile({filePath:f,data:o(e),encoding:"base64",success:function(){t(f)},fail:function(e){n(e)}})}else n(new Error("not support"));else{var f="_doc/uniapp_temp/"+l;if(!function(e,t){for(var n=e.split("."),i=t.split("."),a=!1,o=0;o<i.length;o++){var r=n[o]-i[o];if(0!==r){a=r>0;break}}return a}("Android"===plus.os.name?"1.9.9.80627":"1.9.9.80472",plus.runtime.innerVersion))return void plus.io.resolveLocalFileSystemURL("_doc",(function(i){i.getDirectory("uniapp_temp",{create:!0,exclusive:!1},(function(i){i.getFile(l,{create:!0,exclusive:!1},(function(i){i.createWriter((function(i){i.onwrite=function(){t(f)},i.onerror=n,i.seek(0),i.writeAsBinary(o(e))}),n)}),n)}),n)}),n);var p=new plus.nativeObj.Bitmap(l);p.loadBase64Data(e,(function(){p.save(f,{},(function(){p.clear(),t(f)}),(function(e){p.clear(),n(e)}))}),(function(e){p.clear(),n(e)}))}}))},t.pathToBase64=function(e){return new Promise((function(t,n){if("object"===("undefined"===typeof window?"undefined":(0,a.default)(window))&&"document"in window){if("function"===typeof FileReader){var i=new XMLHttpRequest;return i.open("GET",e,!0),i.responseType="blob",i.onload=function(){if(200===this.status){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=n,e.readAsDataURL(this.response)}},i.onerror=n,void i.send()}var o=document.createElement("canvas"),r=o.getContext("2d"),u=new Image;return u.onload=function(){o.width=u.width,o.height=u.height,r.drawImage(u,0,0),t(o.toDataURL()),o.height=o.width=0},u.onerror=n,void(u.src=e)}"object"!==("undefined"===typeof plus?"undefined":(0,a.default)(plus))?"object"===("undefined"===typeof wx?"undefined":(0,a.default)(wx))&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(e){t("data:image/png;base64,"+e.data)},fail:function(e){n(e)}}):n(new Error("not support")):plus.io.resolveLocalFileSystemURL(function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e}(e),(function(e){e.file((function(e){var i=new plus.io.FileReader;i.onload=function(e){t(e.target.result)},i.onerror=function(e){n(e)},i.readAsDataURL(e)}),(function(e){n(e)}))}),(function(e){n(e)}))}))};var a=i(n("0122"));function o(e){var t=e.split(",");return t[t.length-1]}n("c975"),n("d3b7"),n("d9e2"),n("d401"),n("ac1f"),n("466d"),n("81b2"),n("0eb6"),n("b7ef"),n("8bd4"),n("ace4"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("986a"),n("1d02"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("b39a"),n("72f7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var r=0}}]);