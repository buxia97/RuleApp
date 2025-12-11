<template>
	<view class="header" :style="[{height:CustomBar + 'px'}]" :class="AppStyle">
		<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
			<view class="action" @tap="back">
				<text class="cuIcon-back"></text>
			</view>
			<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
				用户协议
			</view>
		</view>
		<scroll-view scroll-y class="agreement">
			<view class="agreement-title">《{{appname}}用户协议》</view>
			<view class="agreement-text">欢迎您使用{{appname}}（以下简称“本平台”）提供的各项服务。为保障您的合法权益，请在注册、登录及使用本平台服务之前，仔细阅读本《{{appname}}用户协议》（以下简称“本协议”）。当您点击“同意”或实际使用本平台，即视为您已充分理解并接受本协议的全部内容。</view>
			<view class="agreement-title">一、协议的确认与接受</view>
			<view class="agreement-text">1. 本协议由您与{{appname}}共同缔结，具有合同效力。</view>
			<view class="agreement-text">2. 若您不同意协议条款，您应立即停止注册或使用本平台服务。</view>
			<view class="agreement-text">3. 本平台有权在必要时修改本协议，并在更新后通过公告方式提示。若您继续使用服务，即视为接受更新后的协议。</view>
			<view class="agreement-title">二、账户注册与使用</view>
			<view class="agreement-text">1. 您在使用本平台前需注册账号，并提供真实、准确、完整的注册信息。</view>
			<view class="agreement-text">2. 您应妥善保管账号及密码，不得将账号出借、转让或售卖给第三方。</view>
			<view class="agreement-text">3. 若您发现账号被盗用或异常登录，应立即通知本平台处理，否则因此造成的损失由您自行承担。</view>
			<view class="agreement-title">三、用户行为规范</view>
			<view class="agreement-text">1. 您在使用本平台服务时不得发布、传播、上传包含以下内容的信息：</view>
			<view class="agreement-text">（1）违反法律法规、社会公序良俗的内容；</view>
			<view class="agreement-text">（2）涉及暴力、色情、赌博、恐怖主义等内容；</view>
			<view class="agreement-text">（3）侵犯他人知识产权、隐私权、名誉权或其他合法权益的内容；</view>
			<view class="agreement-text">（4）虚假、误导性、恶意诋毁等内容；</view>
			<view class="agreement-text">（5）含有恶意代码、病毒或可能危害平台安全的内容。</view>
			<view class="agreement-text">2. 您不得利用本平台进行任何形式的违法活动，包括但不限于诈骗、洗钱等。</view>
			<view class="agreement-text">3. 您应对自己在本平台上发布的内容承担全部责任。</view>
			<view class="agreement-title">四、内容发布与版权</view>
			<view class="agreement-text">1. 您在本平台发布的文本、图片、音视频等内容，其知识产权仍归属于您或原权利人。</view>
			<view class="agreement-text">2. 您授予{{appname}}全球范围内的、免费的、非独占的许可权，用于展示、传播、推广与平台运营相关的用途。</view>
			<view class="agreement-text">3. 本平台尊重知识产权，如发现侵权内容，可向平台举报，我们将及时处理。</view>
			<view class="agreement-title">五、隐私保护</view>
			<view class="agreement-text">1. 本平台依法保护您的个人隐私信息，不会泄露、出售或非法共享。</view>
			<view class="agreement-text">2. 为保障服务正常运行，平台可能会收集设备信息、操作日志等基础信息。</view>
			<view class="agreement-text">3. 因法律法规要求或司法机关请求，本平台可能会提供必要信息。</view>
			<view class="agreement-title">六、服务的变更、中断与终止</view>
			<view class="agreement-text">1. 本平台有权根据运营情况对服务内容进行调整、中断或终止。</view>
			<view class="agreement-text">2. 若您严重违反本协议，本平台有权冻结或永久封禁您的账号。</view>
			<view class="agreement-text">3. 对于服务中断或终止可能带来的损失，本平台不承担责任。</view>
			<view class="agreement-title">七、免责声明</view>
			<view class="agreement-text">1. 本平台不对用户内容的真实性、准确性负责。</view>
			<view class="agreement-text">2. 因不可抗力导致服务中断的，本平台不承担责任。</view>
			<view class="agreement-text">3. 因用户自身原因导致的损失由用户自行承担。</view>
			<view class="agreement-title">八、未成年人使用条款</view>
			<view class="agreement-text">1. 若您为未成年人，应在监护人指导下使用本平台服务。</view>
			<view class="agreement-text">2. 未成年人应增强安全意识，避免接触不良内容。</view>
			<view class="agreement-title">九、法律适用与争议解决</view>
			<view class="agreement-text">1. 本协议适用平台运营所在地的法律法规。</view>
			<view class="agreement-text">2. 因本协议产生的争议，双方应尽量友好协商解决；协商不成的，提交平台所在地有管辖权的法院解决。</view>
			<view class="agreement-title">十、附则</view>
			<view class="agreement-text">1. 本协议自您开始使用{{appname}}服务时生效。</view>
			<view class="agreement-text">2. 本平台保留对协议条款最终解释权。</view>
			<view style="height:150upx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
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
				url:'',
				
				appname:"",
				email:"",
				
				token:''
				
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
			that.appname = that.$API.GetAppName();
			that.email = that.$API.GetAppEmail();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>


<style>
</style>
