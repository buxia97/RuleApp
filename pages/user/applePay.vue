<template>
  <view class="user" :class="AppStyle">
  	<view class="header" :style="[{height:CustomBar + 'px'}]">
  		<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
  			<view class="action" @tap="back">
  				<text class="cuIcon-back"></text>
  			</view>
  			<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
  				Apple在线充值
  			</view>
  			<view class="action">
  			</view>
  		</view>
  	</view>
	<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
	
	<view class="data-box userrecharge">
		<view class="payPackage grid col-3">
			<view class="payPackage-box" v-for="item in productList" :key="item.id" @click="applePriceChange(item.productid)" :class="item.productid==productId?'active':''">
				<view class="payPackage-box-main" >
					<view class="payPackage-box-title text-blue">
						{{ item.price }}元
					</view>
					<view class="payPackage-box-num">
						{{ item.title }}
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="applePay grid col-2">
			<view class="apple-product" v-for="item in productList" :key="item.id">
				<view class="apple-product-main" @click="applePriceChange(item.productid)" :class="item.productid==productId?'act':''">
					<view class="apple-product-name text-blue">{{ item.title }}</view>
					<view class="price margin-bottom-xs">{{ item.price }} CNY</view>
				</view>
			</view>
		</view> -->
		<!-- <view class="recharge-bottom-btn"  v-if="payType==1||payType==0">
			<button class="cu-btn bg-blue " @tap="pay">立即充值{{num}}元</button>
		</view> -->
		<view class="recharge-bottom-btn">
		  <button class="cu-btn bg-blue" @click="payment" :loading="loading" :disabled="disabled">确认充值</button>
		</view>
		<view class="userrecharge-intro">
			<view class="userrecharge-intro-title">
				充值注意：
			</view>
			<view class="userrecharge-intro-text">
				1.如果支付软件未成功开启，可检查设备网络是否正常。
			</view>
			<view class="userrecharge-intro-text">
				2.充值金额与网站积分的比例为<text class="text-red text-bold"> 1:{{scale}} </text>元。
			</view>
			<view class="userrecharge-intro-text">
				3.如果充值金额未到账，请立即反馈。
			</view>
		</view>
	</view>
    
  </view>
</template>

<script>
  import {
    Iap,
    IapTransactionState
  } from "../../utils/iap.js"
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
  export default {
    data() {
      return {
		  StatusBar: this.StatusBar,
		  CustomBar: this.CustomBar,
		  NavBar:this.StatusBar +  this.CustomBar,
		  AppStyle:this.$store.state.AppStyle,
		  scale:0,
		  currencyName:"",
		  _iap: null,
		  
			title: "iap",
			loading: false,
			disabled: true,
			productId: "",
			productList: [],

			uid:-1,
      }
    },
    onLoad: function() {
		var that = this;
		// #ifdef APP-PLUS || MP
		that.NavBar = this.CustomBar;
		// #endif
		that.currencyName = that.$API.getCurrencyName();
		that.getVipInfo();
		if(localStorage.getItem('userinfo')){
			
			var userInfo = JSON.parse(localStorage.getItem('userinfo'));
			that.uid = userInfo.uid;
		}
      
	  that.getPayPackageList();
    },
    onShow() {
      // 避免 _iap 为空时报错
	  if (this._iap && this._iap.ready) {
		this.restore();
	  }
    },
    onUnload() {},
    methods: {
		getPayPackageList() {
		  var that = this;
		  that.$Net.request({
		    url: that.$API.payPackageList(),
		    header: {
		      'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    method: "get",
		    dataType: 'json',
		    success(res) {
		      try {
		        if (res.data.code == 1) {
		          const payPackageList = res.data.data || [];
		          const productIds = payPackageList
		            .map(item => item.appleProductId)
		            .filter(id => id && id.trim() !== '');
		          that.payPackageList = payPackageList;
		
		          if (productIds.length > 0) {
		            try {
		              that._iap = new Iap({
		                products: productIds
		              });
		              console.log('IAP 对象创建成功:', productIds);
		              that.init(); // 这里不要加 await
		            } catch (e) {
		              console.error('IAP 创建失败:', e);
		              uni.showModal({
		                title: 'IAP 创建失败',
		                content: e.message || JSON.stringify(e),
		                showCancel: false
		              });
		            }
		          } else {
		            console.warn('无有效的 appleProductId');
		          }
		        } else {
		          console.warn('接口返回错误:', res.data);
		        }
		      } catch (e) {
		        console.error('处理返回数据出错:', e);
		      } finally {
		        setTimeout(() => {
		          that.isLoading = 1;
		        }, 300);
		      }
		    },
		    fail(err) {
		      console.error('请求失败:', err);
		      setTimeout(() => {
		        that.isLoading = 1;
		      }, 300);
		    }
		  });
		},

		back(){
			uni.navigateBack({
				delta: 1
			});
		},
      async init() {
        uni.showLoading({
          title: '检测支付环境...'
        });

        try {
          // 初始化，获取iap支付通道
          await this._iap.init();

          // 从苹果服务器获取产品列表
          this.productList = await this._iap.getProduct();
          this.productList[0].checked = true;
          this.productId = this.productList[0].productid;

          // 填充产品列表，启用界面
          this.disabled = false;
        } catch (e) {
          uni.showModal({
            title: "init",
            content: e.message,
            showCancel: false
          });
        } finally {
          uni.hideLoading();
        }

        if (this._iap.ready) {
          this.restore();
        }
      },
      async restore() {
        // 检查上次用户已支付且未关闭的订单，可能出现原因：首次绑卡，网络中断等异常

        // 在此处检查用户是否登陆

        uni.showLoading({
          title: '正在检测已支付且未关闭的订单...'
        });

        try {
          // 从苹果服务器检查未关闭的订单，可选根据 username 过滤，和调用支付时透传的值一致
          const transactions = await this._iap.restoreCompletedTransactions({
            username: ""
          });

          if (!transactions.length) {
            return;
          }

          // 开发者业务逻辑，从服务器获取当前用户未完成的订单列表，和本地的比较
          // 此处省略

          switch (transaction.transactionState) {
            case IapTransactionState.purchased:
              // 用户已付款，在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
              //let result = await this.validatePaymentResult();
			
              // //验证通过，交易结束，关闭订单
              // if (result) {
              //   await this._iap.finishTransaction(transaction);
              // }
              break;
            case IapTransactionState.failed:
              // 关闭未支付的订单
              await this._iap.finishTransaction(transaction);
              break;
            default:
              break;
          }
        } catch (e) {
		  console.error('IAP错误:', e)
		  uni.showModal({
			title: '支付错误',
			content: e.message || JSON.stringify(e),
			showCancel: false
		  })
		} finally {
          uni.hideLoading();
        }
      },
      async payment() {
		  if(this.uid==-1){
		  	uni.showToast({ title: '请先登录', icon: 'none' })
		  	return
		  }
		  var uid = this.uid;
        if (this.loading == true) {
          return;
        }
        this.loading = true;
		
        uni.showLoading({
          title: '支付处理中...'
        });

        try {
          // 从开发者服务器创建订单
          // const orderId = await this.createOrder({
          //   productId: this.productId
          // });

          // 请求苹果支付
          const transaction = await this._iap.requestPayment({
            productid: this.productId,
            manualFinishTransaction: true,
            username:uid
          });
		await this.verifyReceipt(transaction.receiptData || transaction.transactionReceipt, this.productId,this.uid);
          // 在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
          // await this.validatePaymentResult({
          //   orderId: orderId,
          //   username: username,
          //   transactionReceipt: transaction.transactionReceipt, // 不可作为订单唯一标识
          //   transactionIdentifier: transaction.transactionIdentifier
          // });

          // 验证成功后关闭订单
          await this._iap.finishTransaction(transaction);

          // 支付成功
        } catch (e) {
		  console.error('IAP恢复交易错误:', e);

		  const code = e?.code || e?.errCode || '';
		  let msg = '';

		  switch (code) {
			case 2: // SKErrorPaymentCancelled
			case 'SKErrorPaymentCancelled':
			  msg = '您已取消恢复操作';
			  uni.showToast({ title: msg, icon: 'none' });
			  return;
			case 1:
			case 'SKErrorClientInvalid':
			  msg = '无法恢复：用户无权进行操作';
			  break;
			case 3:
			case 'SKErrorPaymentInvalid':
			  msg = '恢复请求无效';
			  break;
			case 4:
			case 'SKErrorPaymentNotAllowed':
			  msg = '设备不允许恢复购买';
			  break;
			default:
			  msg = e?.message || `恢复失败 (${code || '未知错误'})`;
			  break;
		  }

		  uni.showModal({
			title: '恢复购买失败',
			content: msg,
			showCancel: false
		  });
		} finally {
          this.loading = false;
          uni.hideLoading();
        }
      },
      createOrder({
        productId
      }) {
        return new Promise((resolve, reject) => {})
      },
      validatePaymentResult(data) {
        return new Promise((resolve, reject) => {});
      },
      applePriceChange(productid) {
		  this.productId = productid;
		},
	  // === 向后端验证 ===
	  async verifyReceipt(receiptData, productId,userId) {
	  	
	  	
	    try {
	      const [err, res] = await uni.request({
	        url: this.$API.verifyReceipt(),
	        method: 'POST',
	        data: {
	          receipt: receiptData,
	          productId: productId,
				userId:userId
	        },
	      })
	  
	  
	      console.log('验证结果：', res)
	  
	  
	      if (res.data && res.data.success) {
	        uni.showToast({
	          title: '购买成功！',
	          icon: 'success',
	        })
	      } else {
	        uni.showToast({
	          title: '验证失败'+JSON.stringify(res),
	          icon: 'none',
	        })
	      }
	    } catch (e) {
		  console.error('IAP支付错误详情:', e);

		  // 苹果 IAP 错误码对照表
		  const code = e?.code || e?.errCode || '';
		  let msg = '';

		  switch (code) {
			case 2: // SKErrorPaymentCancelled
			case 'SKErrorPaymentCancelled':
			  msg = '您已取消支付';
			  uni.showToast({ title: msg, icon: 'none' });
			  return; // ✅ 不弹窗，不报错
			case 1:
			case 'SKErrorClientInvalid':
			  msg = '用户无权进行支付操作';
			  break;
			case 3:
			case 'SKErrorPaymentInvalid':
			  msg = '支付请求无效';
			  break;
			case 4:
			case 'SKErrorPaymentNotAllowed':
			  msg = '设备不允许支付';
			  break;
			default:
			  msg = e?.message || `支付失败(${code || '未知错误'})`;
			  break;
		  }

		  uni.showModal({
			title: '支付错误',
			content: msg,
			showCancel: false
		  });
		}
	  },
	  getVipInfo(){
	  	var that = this;
	  	that.$Net.request({
	  		url: that.$API.getVipInfo(),
	  		header:{
	  			'Content-Type':'application/x-www-form-urlencoded'
	  		},
	  		method: "get",
	  		dataType: 'json',
	  		success: function(res) {
	  			if(res.data.code==1){
	  				that.scale=res.data.data.scale;
	  			}
	  		},
	  		fail: function(res) {
	  		}
	  	})
	  },
    }
  }
</script>

<style>

  button {
    background-color: #007aff;
    color: #ffffff;
  }

  .uni-list-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  

  .price {
    margin-left: 10px;
  }

  .btn-pay {
    margin-top: 30px;
  }
  
  .apple-product-main.act{
  	  box-shadow:0px 0px 10upx #007aff;
	  border-color: #007aff;
	  background: rgba(0, 122, 255, 0.3);
  }
</style>
