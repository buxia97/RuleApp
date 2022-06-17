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


const fileUploadBox = document.querySelector(".file-upload-box");
const saveBtn = document.querySelector("#save");
const previews = document.querySelectorAll(".preview");
let previewReady = false;
let croppable = false;

document.addEventListener("UniAppJSBridgeReady", Init);

async function Init(params) {
  console.log(`uniAppSDK loaded`);

  const env = await getEnv();
  console.log("当前环境：" + JSON.stringify(env));

  const imgDataUrl = await selectFile(env);

  // hidden input box
  fileUploadBox.style.display = "none";

  // create image
  const image = new Image();
  image.src = imgDataUrl;
  image.crossorigin = true;
  document.querySelector(".img-crop-area").appendChild(image);

  image.onload = function () {
    const options = {
      aspectRatio: aspectRatio,
      autoCropAre: autoCropAre,
      viewMode: 1,
      ready: function () {
        let clone = this.cloneNode();

        clone.className = "";
        clone.style.cssText =
          "display: block;" +
          "width: 100%;" +
          "min-width: 0;" +
          "min-height: 0;" +
          "max-width: none;" +
          "max-height: none;";

        each(previews, function (elem) {
          elem.appendChild(clone.cloneNode());
        });

        croppable = true;
        previewReady = true;
        saveBtn.classList.remove("disabled");

        if (roundedCrop) {
          const elements = document.querySelectorAll(
            ".cropper-view-box, .cropper-face"
          );
          for (let item of elements) {
            item.style.borderRadius = "50%";
          }
        }
      },
      crop: function (event) {
        if (!previewReady) {
          return;
        }

        let data = event.detail;
        let cropper = this.cropper;
        let imageData = cropper.getImageData();
        let previewAspectRatio = data.width / data.height;

        each(previews, function (elem) {
          let previewImage = elem.getElementsByTagName("img").item(0);

          let previewWidth = elem.offsetWidth;
          let previewHeight = previewWidth / previewAspectRatio;
          let imageScaledRatio = data.width / previewWidth;

          if (roundedCrop) {
            elem.style.borderRadius = "50%";
          }

          elem.style.height = previewHeight + "px";
          previewImage.style.width =
            imageData.naturalWidth / imageScaledRatio + "px";
          previewImage.style.height =
            imageData.naturalHeight / imageScaledRatio + "px";
          previewImage.style.marginLeft = -data.x / imageScaledRatio + "px";
          previewImage.style.marginTop = -data.y / imageScaledRatio + "px";
        });
      },
    };

    const cropper = new Cropper(image, options);

    save.addEventListener("click", () => {
      if (!croppable) {
        return;
      }

      let croppedCanvas = cropper.getCroppedCanvas({
        width: croppedWidth,
        height: croppedHeight,
      });

      if (roundedCrop) {
        croppedCanvas = getRoundedCanvas(croppedCanvas);
      }

      const postData = {
        data: {
          type: "croppedData",
          dataUrl: croppedCanvas.toDataURL(),
        },
      };
      if (env.plus) {
        uni.postMessage(postData);
      } else if (env.h5) {
		var h5data= {
		  type: "croppedData",
		  dataUrl: croppedCanvas.toDataURL(),
		}
		localStorage.setItem('toAvatar', JSON.stringify(h5data));
      } else if (env.miniprogram) {
        // 小程序，不设置上传
        //uni.postMessage(postData);
      }

      // back to previous page
      uni.navigateBack({
        delta: 1,
      });
    });
  };
}

function getRoundedCanvas(sourceCanvas) {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  let width = sourceCanvas.width;
  let height = sourceCanvas.height;

  canvas.width = width;
  canvas.height = height;
  context.imageSmoothingEnabled = true;
  context.drawImage(sourceCanvas, 0, 0, width, height);
  context.globalCompositeOperation = "destination-in";
  context.beginPath();
  context.arc(
    width / 2,
    height / 2,
    Math.min(width, height) / 2,
    0,
    2 * Math.PI,
    true
  );
  context.fill();
  return canvas;
}

function each(arr, callback) {
  let length = arr.length;
  let i;

  for (i = 0; i < length; i++) {
    callback.call(arr, arr[i], i, arr);
  }

  return arr;
}

async function selectFile(env) {
  const fileInput = document.querySelector("#my-input");
  return new Promise((resolve, reject) => {
    fileInput.addEventListener("change", async (event) => {
      let result;
      result = await getDataUrlFromReader(event);
      resolve(result);
    });
  });
}

async function getDataUrlFromReader(event) {
  const files = event.target.files;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      resolve(reader.result);
    });
    reader.readAsDataURL(files[0]);
  });
}

async function getEnv() {
  return new Promise((resolve, reject) => {
    uni.getEnv((res) => {
      resolve(res);
    });
  });
}

// TODO:
async function chooseWithPlusApi() {
  const btnArray = [
    {
      title: "拍照",
    },
    {
      title: "从手机相册选择",
    },
  ];

  return new Promise((resolve, reject) => {
    plus.nativeUI.actionSheet(
      {
        cancel: "取消",
        buttons: btnArray,
      },
      function (e) {
        let index = e.index;
        switch (index) {
          case 0:
            break;
          case 1:
            let camera = plus.camera.getCamera();
            camera.captureImage(
              function (file) {
                resolve(file);
              },
              function () {
                console.log("从相机获取照片失败");
                reject("从相机获取照片失败");
              },
              {
                filename: "_doc/photo/",
                index: 1,
              }
            );
            break;
          case 2:
            plus.gallery.pick(
              function (file) {
                resolve(file);
              },
              function () {
                console.log("取消图片选择");
                reject("取消图片选择");
              },
              {
                multiple: false,
              }
            );
            break;
        }
      }
    );
  });
}
