<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					个人设置
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="userEdit">
					<button class="cu-btn round bg-blue">保存</button>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="user-edit-header margin-top">
				<image :src="avatar"></image>
				<!--  #ifdef H5 || APP-PLUS -->
				<!-- <text class="cu-btn bg-blue radius" @tap="showModal" data-target="DialogModal1">设置头像</text> -->
				<text class="cu-btn bg-gradual-blue radius" @tap="toAvatar" >设置头像</text>
				<!--  #endif -->
			</view>
			<view class="cu-form-group">
				<view class="title">用户名</view>
				<input name="input" disabled="disabled" :value="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">昵称</view>
				<input placeholder="请输入昵称" name="input" v-model="screenName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input placeholder="未设置" disabled="disabled" name="input" :value="mail"></input>
				<view class="text-blue" @tap="toEmail">修改</view>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号</view>
				<input placeholder="未设置" disabled="disabled" name="input" :value="phone"></input>
				<view class="text-blue" @tap="toPhone">修改</view>
			</view>
			<view class="cu-form-group">
				<view class="title">网址</view>
				<input placeholder="请输入网址" name="input" v-model="url"></input>
			</view>
			
			<view class="cu-form-group align-start">
				<view class="title">个人简介</view>
				<textarea v-model="introduce"  placeholder="输入个人简介"></textarea>
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<radio-group v-model="gender"  @change="onChange">
				  <radio class="blue radio" color="#000000" :checked="gender=='0'?true:false" value="0">保密</radio>
				  <radio class="blue radio margin-left-sm" color="#007AFF"  :checked="gender=='1'?true:false" value="1">男性</radio>
				  <radio class="blue radio margin-left-sm" color="#ff2c80"  :checked="gender=='2'?true:false" value="2">女性</radio>
				</radio-group>
			</view>
			<view class="cu-form-group">
				<view class="title">生日</view>
				<picker mode="date" :value="birthday" start="1900-01-01" end="2050-01-01" @change="DateChange">
					<view class="picker">
						<template v-if="birthday==null">
							还未设置
						</template>
						<template v-else>
							{{birthday}}
						</template>
						
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">所在地</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						<template v-if="region==0||region==''">
							请选择地区
						</template>
						<template v-else>
							{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
						</template>
						
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">密码</view>
				<input placeholder="请输入密码,不填则不修改" v-model="password" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input placeholder="请再次输入密码" v-model="repassword" name="input"></input>
			</view>
		</form>
		<!--  #ifdef H5 || APP-PLUS -->
		<view class="cu-list menu">
			<view class="cu-item margin-top" @tap="toBg">
				<view class="content">
					<text>主页背景图</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="toBind">
				<view class="content">
					<text>社会化登陆绑定</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="toAddress">
				<view class="content">
					<text>收货地址设置</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item" @tap="toPay">
				<view class="content">
					<text>账户设置</text>
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		<!--  #endif -->
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">设置头像</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					<view>Gravatar是全球最大的头像库，属于Wordpress旗下。它广泛应用于国内外各类网站和程序，包括知名的Github。在Gravatar通过您的邮箱注册用户，并设置头像后，您在所有支持Gravatar的网站使用邮箱，都会显示您的头像。</view>
					<view>或者，您可以将将邮箱设置成QQ邮箱，将自动获取您的QQ头像。</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-green margin-left" @tap="toGravatar">前往Gravatar</button>
		
					</view>
				</view>
			</view>
		</view>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="userEdit">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	// #ifdef H5 || APP-PLUS 
	import { pathToBase64, base64ToPath } from '../../js_sdk/mmmm-image-tools/index.js'
	// #endif
	
	import regionData from '../../utils/pca-code.json';
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				uid:0,
				name:'',
				screenName:'',
				password:'',
				repassword:'',
				mail:'',
				phone:"",
				url:'',
				avatar:"",
				avatarNew:"",
				regionData:regionData,
				introduce:"",
				gender: '0',
				birthday: null,
				
				modalName: null,
				
				token:'',
				styleIndex:"",
				
				multiArray: [],
				objectMultiArray: [],
				multiIndex: [0, 0, 0],
				region:"",
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			that.userStatus();
			
			if(localStorage.getItem('toAvatar')){
				var toAvatar = JSON.parse(localStorage.getItem('toAvatar'));
				that.avatarUpload(toAvatar.dataUrl);
			}else{
				console.log("没有头像缓存")
			}
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.styleIndex = that.$API.GetStyleIndex();
			
			//获取默认地址数据
			that.getRegionList();
			
			
		},
		methods: {
			
			

			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			onChange(e) {
				console.log('选中变化:', e.detail.value)
				this.gender = e.detail.value
			},
			DateChange(e) {
				this.birthday = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			validatePassword(password) {
			  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
			  return regex.test(password);
			},
			timestampToDate(timestamp) {
				const date = new Date(timestamp * 1000);
				const Y = date.getFullYear();
				const M = (date.getMonth() + 1).toString().padStart(2, '0');
				const D = date.getDate().toString().padStart(2, '0');
				return `${Y}-${M}-${D}`;
			  },
			userStatus() {
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					
					url: that.$API.userStatus(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.uid=res.data.data.uid;
							that.screenName=res.data.data.screenName;
							that.name=res.data.data.name;
							that.mail=res.data.data.mail;
							that.url=res.data.data.url;
							that.token=res.data.data.token;
							that.avatar=res.data.data.avatar;
							that.introduce = res.data.data.introduce;
							that.phone = res.data.data.phone;
							if(res.data.data.birthday&&res.data.data.birthday!=0){
								let birthday = res.data.data.birthday;
								that.birthday = that.timestampToDate(birthday);
							}
							
							that.region = res.data.data.region;
							that.gender = res.data.data.gender+'';
							if (that.region) {
								that.setRegionFromString();
							}
							if(localStorage.getItem('userinfo')){
								
								var userInfo = JSON.parse(localStorage.getItem('userinfo'));
								if(userInfo.screenName){
									that.screenName = userInfo.screenName;
								}else{
									that.screenName = userInfo.name;
								}
								if(res.data.data.customize){
									userInfo.customize = res.data.data.customize;
								}
								if(res.data.data.lv){
									userInfo.lv = res.data.data.lv;
								}
								if(res.data.data.isvip){
									userInfo.isvip = res.data.data.isvip;
								}
								if(res.data.data.vip){
									userInfo.vip = res.data.data.vip;
								}
								if(res.data.data.experience){
									userInfo.experience = res.data.data.experience;
								}
								localStorage.setItem('userinfo',JSON.stringify(userInfo));
								// if(res.data.data.avatar){
								// 	that.userInfo = res.data.data.avatar;
								// }
								
							}
							
						}
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			validateString(str) {
			  // 判断是否包含空格或中文空格
			  if (/\s|　/.test(str)) {
			    return false;
			  }
			  // 判断是否只包含空格
			  if (/^\s+$/.test(str)) {
			    return false;
			  }
			  return true;
			},
			userEdit() {
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				if (that.password != "") {
					if(!that.validatePassword(that.password)){
						uni.showToast({
							title:"密码必须包含字母、数字和特殊符号，且长度必须大于8",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false
					}
					if (that.password != that.repassword) {
						uni.showToast({
						    title:"两次密码不一致",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false
					}
					
				}
				if(that.isValidString(that.screenName)){
					uni.showToast({
					    title:"昵称不能包含空格",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.region==0||that.region==''){
					uni.showToast({
					    title:"请选择地区",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				const birthday = that.birthday;
				const timeStampBirthday = Math.floor(new Date(birthday.replace(/-/g, '/')).getTime() / 1000);
				var data = {
					uid:that.uid,
					name:that.name,
					screenName:that.screenName,
					password:that.password,
					introduce:that.introduce,
					url:that.url,
					region:that.region,
					gender:that.gender,
					birthday:timeStampBirthday
				}
				if(that.avatarNew!=''){
					data.avatar = that.avatarNew;
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.userEdit(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							//保存用户信息
							if(that.password!=""){
								localStorage.removeItem('userinfo');
								localStorage.removeItem('token');
								var timer = setTimeout(function() {
									var styleIndex = that.styleIndex;
									uni.redirectTo({
										url: '/pages/home/'+styleIndex
									});
									clearTimeout('timer')
								}, 1000)
							}else{
								var userInfo = JSON.parse(localStorage.getItem('userinfo'));
								userInfo.screenName=that.screenName;
								userInfo.url=that.url;
								userInfo.introduce = that.introduce;
								if(that.avatarNew!=''){
									userInfo.avatar = that.avatarNew;
								}
								that.avatarNew = '';
								localStorage.setItem('userinfo',JSON.stringify(userInfo));
								//that.getCacheInfo();
							}
							
						}
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			toEmail(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/mailedit'
				});
			},
			toPhone(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/phoneedit'
				});
			},
			toAddress(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/address'
				});
			},
			toPay(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/pay'
				});
			},
			toBg(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/userBg'
				});
			},
			toBind(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/userbind'
				});
			},
			toGravatar(){
				var that = this;
				that.hideModal();
				var url = "https://cn.gravatar.com/";
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toAvatar(){
				// #ifdef APP-PLUS || H5
				const that = this;
				  uni.navigateTo({
					url: "../../uni_modules/buuug7-img-cropper/pages/cropper",
					events: {
					  imgCropped(event) {
						console.log(event);
					  },
					},
				  });
				// #endif
			},
			avatarUpload(base64){
				
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				base64ToPath(base64)
				  .then(path => {
					var file = path;
					const uploadTask = uni.uploadFile({
					  url : that.$API.upload(),
					  filePath:file,
					 //  header: {
						// "Content-Type": "multipart/form-data",
					 // },
					  name: 'file',
					  formData: {
					   'token': token
					  },
					  success: function (uploadFileRes) {
						  setTimeout(function () {
						  	uni.hideLoading();
						  }, 1000);
						  
							var data = JSON.parse(uploadFileRes.data);
							//var data = uploadFileRes.data;
							
							
							if(data.code==1){
								// uni.showToast({
								// 	title: data.msg,
								// 	icon: 'none'
								// })
								that.avatar = data.data.url;
								that.avatarNew = data.data.url;
								localStorage.removeItem('toAvatar');
								that.userEdit();
								//console.log(that.avatar)
								
							}else{
								uni.showToast({
									title: "头像上传失败，请检查接口",
									icon: 'none'
								})
							}
						},fail:function(){
							setTimeout(function () {
								uni.hideLoading();
							}, 1000);
						}
						
					   
					});
				  })
				  .catch(error => {
					console.error("失败"+error)
				  })
			},
			isValidString(str) {
			  return /\s/g.test(str);
			},
			getRegionList() {
			  let regionData = this.regionData;
			  if (!regionData || !regionData.length) return;
			
			  // 一级（省）
			  const list1 = regionData.map(e => ({ id: e.code, name: e.name }));
			  const sort1 = list1.map(e => e.name);
			
			  // 二级（默认选第一个省）
			  const children1 = regionData[0].children || [];
			  const list2 = children1.map(e => ({ id: e.code, name: e.name }));
			  const sort2 = list2.map(e => e.name);
			
			  // 三级（默认选第一个市）
			  const children2 = children1[0]?.children || [];
			  const list3 = children2.map(e => ({ id: e.code, name: e.name }));
			  const sort3 = list3.map(e => e.name);
			
			  this.multiArray = [sort1, sort2, sort3];
			  this.objectMultiArray = [list1, list2, list3];
			  this.multiIndex = [0, 0, 0];
			},
			MultiChange(e) {
			  this.multiIndex = e.detail.value;
			
			  const provinceIndex = this.multiIndex[0];
			  const cityIndex = this.multiIndex[1];
			  const districtIndex = this.multiIndex[2];
			
			  const province = this.multiArray[0][provinceIndex] || '';
			  const city = this.multiArray[1][cityIndex] || '';
			  const district = this.multiArray[2][districtIndex] || '';
			
			  this.region = `${province}||${city}||${district}`;
			},
			setRegionFromString() {
			  if (!this.region || !this.region.includes('||')) return;
			  const [provinceName, cityName, districtName] = this.region.split('||');
			
			  const provinceIndex = this.regionData.findIndex(p => p.name === provinceName);
			  if (provinceIndex === -1) return;
			
			  const province = this.regionData[provinceIndex];
			  const cityList = province.children || [];
			  const cityIndex = cityList.findIndex(c => c.name === cityName);
			  const city = cityList[cityIndex] || {};
			
			  const districtList = city.children || [];
			  const districtIndex = districtList.findIndex(d => d.name === districtName);
			
			  // 更新 multiArray
			  const list1 = this.regionData.map(e => e.name);
			  const list2 = cityList.map(e => e.name);
			  const list3 = districtList.map(e => e.name);
			
			  this.multiArray = [list1, list2, list3];
			  this.multiIndex = [
			    provinceIndex >= 0 ? provinceIndex : 0,
			    cityIndex >= 0 ? cityIndex : 0,
			    districtIndex >= 0 ? districtIndex : 0
			  ];
			
			  // 同步 objectMultiArray 方便取 ID 等
			  this.objectMultiArray = [
			    this.regionData.map(e => ({ id: e.code, name: e.name })),
			    cityList.map(e => ({ id: e.code, name: e.name })),
			    districtList.map(e => ({ id: e.code, name: e.name }))
			  ];
			},

			MultiColumnChange(e) {
			  const column = e.detail.column;
			  const value = e.detail.value;
			  const data = {
			    multiArray: this.multiArray,
			    multiIndex: this.multiIndex,
			  };
			
			  data.multiIndex[column] = value;
			
			  // 更新联动数据
			  switch (column) {
			    case 0: {
			      // 改变了省份 -> 重新加载城市、区
			      const cityList = this.regionData[value].children || [];
			      data.multiArray[1] = cityList.map(e => e.name);
			      data.multiIndex[1] = 0;
			
			      const districtList = cityList[0]?.children || [];
			      data.multiArray[2] = districtList.map(e => e.name);
			      data.multiIndex[2] = 0;
			      break;
			    }
			
			    case 1: {
			      // 改变了城市 -> 重新加载区县
			      const provinceIndex = data.multiIndex[0];
			      const cityList = this.regionData[provinceIndex].children || [];
			      const districtList = cityList[value]?.children || [];
			      data.multiArray[2] = districtList.map(e => e.name);
			      data.multiIndex[2] = 0;
			      break;
			    }
			
			    case 2:
			      // 改变区县，不需要动数据结构
			      break;
			  }
			
			  this.multiArray = data.multiArray;
			  this.multiIndex = data.multiIndex;
			}


		}
	}
</script>

<style>
</style>
