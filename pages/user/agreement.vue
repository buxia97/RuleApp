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
			<view class="agreement-title">一、关于我们</view>
			<view class="agreement-text">{{appname}}是一站式技术服务社区。本协议中的您与用户指任何使用和/或访问本服务的个人。</view>
			<view class="agreement-title">二、协议目的</view>
			<view class="agreement-text">本用户协议、隐私政策及本服务发布的其他 政策（以下合称本协议）是我们为您提供本服务 以供使用及访问所依据的条款。通过本协议，您将了解{{appname}}向您提供本服务的方式、本服务所允 许或禁止的活动、应用问题及其他重要信息，以及相关方的权利义务内容。请您仔细阅读本协议，若您使用本服务，则视为您已经与{{appname}}达成具有法律约束力的协议。若您不接受本协议，请勿使用本服务。</view>
			<view class="agreement-title">三、使用资格</view>
			<view class="agreement-text">您需具有符合适用本服务的法定年龄要求，方可使用本服务。一般指年满18周岁，若您未满18周岁，则需您的父母或法定监护人同意后方可使用。</view>
			<view class="agreement-title">四、使用权限</view>
			<view class="agreement-text">授权您依照本协议访问或使用本服 的有限的、非独家的、不可转授权、不可转让、但可以撤销的使用权限。</view>
			<view class="agreement-title">五、账号注册</view>
			<view class="agreement-text">5.1使用本服务，您需要注册账号，账号注册成功后，{{appname}}将给予您一个用户账号（{{appname}}号），由您自行设置昵称及相应的密码，该账号和 密码由您负责保管；您应当对通过该账号进行的 所有活动和事件承担全部法律责任。</view>
			<view class="agreement-text">5.2用户账号一经注册，除非子频道要求单 独开通权限，您有权利用该账号使用{{appname}}各个 频道的单项服务，当您使用{{appname}}各单项服务时， 您的使用行为视为其对该单项服务的服务条款以 及{{appname}}在该单项服务中发出的各类公告的同意。</view>
			<view class="agreement-text">5.3{{appname}}号（即{{appname}}用户ID)的所有权归 {{appname}}，您完成注册申请手续后，获得{{appname}}号的 使用权。您应提供真实、详尽及准确的个人资料，并不断更新注册资料，符合真实、详尽、准确的要求。您所有原始键入的资料将引用为注册资料。因 您注册信息不真实而引起一切经济及法律责任， 均由您自行承担，{{appname}}不负任何责任。</view>
			<view class="agreement-text">5.4您不应将账号、密码转让、出售或出借予 他人使用，若您授权他人使用账户，应对被授权人 在该账户下发生所有行为负全部责任。</view>
			<view class="agreement-text">5.5{{appname}}的隐私权保护声明说明了{{appname}} 如何收集和使用用户信息。您保证已经充分了解 并同意{{appname}}可以据此处理您的信息。</view>
			<view class="agreement-title">六、服务内容</view>
			<view class="agreement-text">6.1视频观看及增值服务：提供视频浏览及其它增值服务。</view>
			<view class="agreement-text">6.2除非本协议另有其它明示规定，{{appname}} 所推出的新产品、新功能、新服务，均受到本协议 之规范。</view>
			<view class="agreement-text">6.3第三方内容：本应用所呈现的跳转到第三方平台后提供的免费阅读书籍等部分内容由第 三方图书馆及其他公司提供，如果该部分电子书内容（服务）存在版权及其他权属争议，本应用不 承担任何责任，请联系第三方内容（服务）提供商解决。</view>
			<view class="agreement-title">七、购买</view>
			<view class="agreement-text">会员购买：充值成为会员，享受会员服务。</view>
			<view class="agreement-text">单次购买：按服务内容显示价格单次结算购买。</view>
			<view class="agreement-title">八、使用规则</view>
			<view class="agreement-text">8.1用户在使用{{appname}}服务时，应基于合法道德之目的，必须遵守中华人民共和国相关法律法规的规定，用户应同意将不会利用本服务进行 任何违法或不正当的活动，包括但不限于下列行 为：</view>
			<view class="agreement-text">8.1.1上传、展示、张贴、传播或以其它方式传送含有下列内容之一的信息：</view>
			<view class="agreement-text">8.1.1.1危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</view>
			<view class="agreement-text">8.1.1.2损害国家荣誉和利益的；</view>
			<view class="agreement-text">8.1.1.3煽动民族仇恨、民族歧视、破坏民族团结的；</view>
			<view class="agreement-text">8.1.1.4破坏国家宗教政策，宣扬邪教和封建迷信的；</view>
			<view class="agreement-text">8.1.1.5散布谣言，扰乱社会秩序，破坏社会稳定的；</view>
			<view class="agreement-text">8.1.1.6散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</view>
			<view class="agreement-text">8.1.1.7侮辱或者诽谤他人，侵害他人合法权利的；</view>
			<view class="agreement-text">8.1.1.8含有侵害他人版权、商标、专利等合法权利的内容；</view>
			<view class="agreement-text">8.1.1.9含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；</view>
			<view class="agreement-text">8.1.1.10含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的；</view>
			<view class="agreement-text">8.1.2不得为任何非法目的而使用网络服务系统；</view>
			<view class="agreement-text">8.1.3不利用{{appname}}服务从事以下活动：</view>
			<view class="agreement-text">8.1.3.1未经允许，进入计算机信息网络或者使用计算机信息网络资源的；</view>
			<view class="agreement-text">8.1.3.2未经允许，对计算机信息网络功能进行删除、修改或者增加的；</view>
			<view class="agreement-text">8.1.3.3未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、 修改或者增加的；</view>
			<view class="agreement-text">8.1.3.4故意制作、传播计算机病毒等破坏性程序的；</view>
			<view class="agreement-text">8.1.3.5其他危害计算机信息网络安全的行为。</view>
			<view class="agreement-text">8.2用户违反本协议的规定，给{{appname}}造成 损失，或者导致的任何第三方主张的包括合理的律师费、调查费在内的任何索赔、要求或损失，您同意赔偿{{appname}}与合作公司、关联公司，并使之免受损害。对此，{{appname}}有权视用户的行为性质，采取包括但不限于删除用户发布信息内容、暂停使用许可、终止服务、限制使用、回收{{appname}}账号、追究法律责任等措施。对恶意注册{{appname}}账号或利用{{appname}}账号进行违法活动、捣乱、骚扰、欺骗、其他用户以及其他违反本协议的行为，{{appname}} 有权回收其账号。同时，{{appname}}会视司法部门的要求，协助调查。</view>
			<view class="agreement-text">8.3用户不得对本服务任何部分或本服务之 使用或获得，进行复制、拷贝、出售、转售或用于 任何其它商业目的。</view>
			<view class="agreement-text">8.4用户须对自己在使用{{appname}}服务过程中的行为承担法律责任。用户承担法律责任的形式 包括但不限于：停止侵害行为、对受到侵害者进行赔偿，以及在{{appname}}首先承担了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户应给予{{appname}}等额的赔偿。</view>
			<view class="agreement-title">九、知识产权</view>
			<view class="agreement-text">9.1{{appname}}对根据本服务或经本服务获得的所有信息，包括但不限于文本、图片、视频、音 频、图标、应用、设计、软件、脚本、程序、版权、商标、商号、专利等{{appname}}提供的内容保留所有权利。除非本协议另行约定，否则您对本服务的访问、使用并不构成本服务或其中内容的任何所有权或其它权利向您或其他任何人的转移。</view>
			<view class="agreement-text">9.2对您上传、发布及以其它方式传输至本服务或通过本服务传输的的文本、文件、图片、照片、视频、音频或其它信息（如评论、问题与建议）您继续保留上述内容的所有权，并对其负责。若您的评论内容被反映或实际侵犯本协议第8条使用规则的约定，我们可能不经您同意，对您的评论内容做屏蔽、删除等处理。</view>
			<view class="agreement-text">9.3{{appname}}尊重他人知识产权和合法权益， 呼吁用户也要同样尊重知识产权和他人合法权 益。若您认为您的知识产权或其他合法权益被侵 犯，请按照以下说明向{{appname}}提供资料：</view>
			<view class="agreement-text">请注意：如果权利通知的陈述失实，权利通知提交者将承担对由此造成的全部法律责任（包括 但不限于赔偿各种费用及律师费）。如果上述个人或单位不确定网络上可获取的资料是否侵犯了其知识产权和其他合法权益，{{appname}}建议该个人或单位首先咨询专业人士。为了{{appname}}有效处理上述个人或单位的权利通知，请使用以下格式（包括各条款的序号）：</view>
			<view class="agreement-text">9.3.1权利人对涉嫌侵权内容拥有知识产权或其他合法权益和/或依法可以行使知识产权或其他合法权益的权属证明；</view>
			<view class="agreement-text">9.3.2请充分、明确地描述被侵犯了知识产权或其他合法权益的情况并请提供涉嫌侵权的第三方网址（如果有）。</view>
			<view class="agreement-text">9.3.3请指明涉嫌侵权网页的哪些内容侵犯了您的权利。</view>
			<view class="agreement-text">9.3.4请提供权利人具体的联络信息，包括姓名、身份证或护照复印件（对自然人）、单位登记 证明复印件（对单位）、通信地址、电话号码、传真和电子邮件。</view>
			<view class="agreement-text">9.3.5请提供涉嫌侵权内容在信息网络上的位置（如指明您举报的含有侵权内容的出处，即： 指网页地址或网页内的位置）以便我们与您举报 的含有侵权内容的网页的所有权人/管理人联系。</view>
			<view class="agreement-text">9.3.6请在权利通知中加入如下关于通知内容真实性的声明："我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。</view>
			<view class="agreement-text">9.3.7请您签署该文件，如果您是依法成立的机构或组织，请您加盖公章。</view>
			<view class="agreement-text">9.3.8请您按照本协议第13条显示的联系方式告知我们。</view>
			<view class="agreement-title">十、终止服务</view>
			<view class="agreement-text">您同意{{appname}}有权基于其自行之考虑，因任 何理由，包含但不限于长时间未使用，或{{appname}}认为您已经违反本服务协议的文字及精神，终止您的密码、账号或本服务之使用（或服务之任何部分），并将您在本服务内任何内容加以移除并删除。您同意依本注册协议任何规定提供之本服务，无需进行事先通知即可中断或终止，您承认并同意，{{appname}}可立即关闭或删除您的账号及您账号中所有相关信息及文件，及/或禁止继续使用前述文件或本眼务。您已下载到自己可控的指定客户端（设备）上的数据资源，可以继续使用。此外，您同意若本服务之使用被中断或终止或您的账号 及相关信息和文件被关闭或删除，{{appname}}对您或任何第三人均不承担任何责任。</view>
			<view class="agreement-title">十一、一般条款</view>
			<view class="agreement-text">11.1用户明确同意其使用{{appname}}网络服务所 存在的风险将完全由其自己承担。用户理解并接受下载或通过{{appname}}服务取得的任何信息资料取决于用户自己，并由其承担系统受损、资料丟失以 及其它任何风险。{{appname}}对在服务网上得到的任 何商品购物服务、交易进程、招聘信息，都不作担 保。</view>
			<view class="agreement-text">11.2用户须知：{{appname}}提供的各种挖掘推送服务中，推送给用户曾经访问过的网站或资源之链接是基于机器算法自动推出，{{appname}}不对其内容的有效性、安全性、合法性等做任何担保。</view>
			<view class="agreement-text">11.3六个月未登陆的账号，{{appname}}保留关闭的权利。</view>
			<view class="agreement-title">十二、适用法律及管辖</view>
			<view class="agreement-text">本协议适用法律为中华人民共和国法律。您和{{appname}}同意，在合同履行过程中双方如发生纠纷，应协商解决；协商不成的，双方应向协议签订 地有管辖权的人民法院通过诉讼方式解决。</view>
			<view class="agreement-title">十三、联系我们</view>
			<view class="agreement-text">如果您对本协议有任何疑问，请通过如下方式联系我们：</view>
			<view class="agreement-text">邮箱：{{email}}</view>
			<view style="height:150upx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
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
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.appname = API.GetAppName();
			that.email = API.GetAppEmail();
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
