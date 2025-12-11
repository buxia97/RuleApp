<template>
	<view class="header" :style="[{height:CustomBar + 'px'}]" :class="AppStyle">
		<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
			<view class="action" @tap="back">
				<text class="cuIcon-back"></text>
			</view>
			<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
				隐私协议
			</view>
		</view>
		<scroll-view scroll-y class="agreement">
			<view class="agreement-title">《{{appname}}隐私政策》</view>
			
			<view class="agreement-text">欢迎您使用{{appname}}（以下简称“本平台”）。我们深知个人信息对您的重要性，并会尽全力保护您的隐私。本《{{appname}}隐私政策》旨在向您说明我们如何收集、使用、存储、共享及保护您的个人信息。请您在使用本平台前仔细阅读。</view>
			<view class="agreement-title">一、我们收集的信息</view>
			<view class="agreement-text">1. 您在注册或使用服务时主动提供的信息，如账号、昵称、头像、联系方式等。</view>
			<view class="agreement-text">2. 在您使用服务过程中系统自动采集的信息，包括：</view>
			<view class="agreement-text">（1）设备信息：设备型号、系统版本、唯一设备标识等；</view>
			<view class="agreement-text">（2）日志信息：访问时间、浏览记录、操作行为、IP 地址等；</view>
			<view class="agreement-text">（3）位置信息（如您授权）：用于推荐相关内容。</view>
			<view class="agreement-text">3. 您通过发布内容、评论、私信等方式提供的信息。</view>
			<view class="agreement-text">4. 根据法律法规及监管要求需要收集的信息。</view>
			
			<view class="agreement-title">二、我们如何使用您的信息</view>
			<view class="agreement-text">1. 为向您提供基础服务，如账号管理、内容推荐、社区互动等。</view>
			<view class="agreement-text">2. 用于优化、改善平台体验及功能。</view>
			<view class="agreement-text">3. 用于保障平台安全，预防欺诈、违法行为或违规内容。</view>
			<view class="agreement-text">4. 经您授权，向您推送通知、活动信息或个性化推荐。</view>
			<view class="agreement-text">5. 用于符合法律法规的要求，如实名信息核验、监管合规等。</view>
			
			<view class="agreement-title">三、我们如何共享、转让与公开披露您的信息</view>
			<view class="agreement-text">1. 我们不会与任何第三方共享您的个人信息，除非：</view>
			<view class="agreement-text">（1）事先获得您的明确授权；</view>
			<view class="agreement-text">（2）为提供必要的服务，如短信服务、云存储服务等合作方；</view>
			<view class="agreement-text">（3）为履行法律法规规定的义务；</view>
			<view class="agreement-text">（4）为保护本平台或其他用户合法权益。</view>
			<view class="agreement-text">2. 如发生合并、收购等情形，我们会提前告知并确保您的信息继续受到同等保护。</view>
			<view class="agreement-text">3. 本平台不会公开披露您的个人信息，除非法律要求或获得您的同意。</view>
			
			<view class="agreement-title">四、我们如何存储与保护您的信息</view>
			<view class="agreement-text">1. 我们使用符合行业标准的安全措施保护您的数据，如加密传输、防火墙等。</view>
			<view class="agreement-text">2. 我们仅在实现目的所需期间保留您的信息，超期后将进行删除或匿名化处理。</view>
			<view class="agreement-text">3. 虽然我们尽力保障安全，但互联网环境无法保证 100% 安全，请妥善保护您的账号信息。</view>
			
			<view class="agreement-title">五、您的权利</view>
			<view class="agreement-text">1. 您有权访问、更正或删除您的个人信息（法律法规另有规定除外）。</view>
			<view class="agreement-text">2. 您可随时撤回授权，但部分功能可能因此无法使用。</view>
			<view class="agreement-text">3. 您可申请注销账号，注销后我们将删除或匿名化处理您的信息。</view>
			
			<view class="agreement-title">六、未成年人隐私保护</view>
			<view class="agreement-text">1. 未满 18 周岁的用户应在监护人指导下使用平台。</view>
			<view class="agreement-text">2. 若您是监护人并认为未成年人向我们提供了个人信息，请联系平台处理。</view>
			
			<view class="agreement-title">七、第三方服务</view>
			<view class="agreement-text">1. 本平台可能接入第三方服务，其隐私政策由第三方独立提供和承担责任。</view>
			<view class="agreement-text">2. 若您使用第三方服务，请仔细阅读其隐私条款。</view>
			
			<view class="agreement-title">八、信息的跨境传输</view>
			<view class="agreement-text">我们不会将您的个人信息存储在境外服务器，除法律要求或必要业务功能外。</view>
			
			<view class="agreement-title">九、政策更新</view>
			<view class="agreement-text">我们可能适时更新本隐私政策，并在更新后发布公告。若您继续使用本平台，即视为同意更新内容。</view>
			
			<view class="agreement-title">十、联系我们</view>
			<view class="agreement-text">如您对本政策有任何问题、意见或投诉，请通过邮箱 {{email}} 与我们联系，我们将尽快处理。</view>
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
