<script>
	import './index.css'
	import {
		pageIndexSetting
	} from './setting.js'
	export default {
		// #ifdef H5
		onLaunch: function() {
			this.pageAnimation = false;
			this.pageAnimationName = '';
			this.pageBefore = '';
			this.pageAfter = '';
			this.pageIn = 'no';
			this.pageOut = 'no';
			this.isBack = false;
			window.addEventListener("popstate", (e) => {
				this.isBack = true;
			}, false);
			this.show()
			this.$router.beforeEach((toPage, fromPage, next) => {
				this.hide(next);
			})
			this.$router.afterEach(() => {
				setTimeout(this.show, 50)
			});
		},
		methods: {
			hide(callback) {
				let $this = this
				this.pageBefore = this.isBack ? this.pageAnimationName + '-back-enter' : this.pageAnimationName +
					'-enter';
				this.pageAfter = this.isBack ? this.pageAnimationName + '-back-leave' : this.pageAnimationName + '-leave';
				this.isBack = false;
				this.pageAnimationName = '';
				setTimeout(() => {
					const classList = document.querySelector('uni-page').classList
					classList.add($this.pageOut, $this.pageBefore)
					classList.remove('page-show')
					setTimeout(() => {
						classList.remove($this.pageOut, $this.pageBefore)
						callback && callback();
					}, 300);
				}, 20)
			},
			show() {
				let $this = this
				let pagePath = window.location.hash;
				const classList = document.querySelector('uni-page').classList
				pageIndexSetting.forEach(page => {
					if ('#/' + page.path == pagePath) {
						$this.pageAnimation = true;
						if (page.animaName) {
							$this.pageAnimationName = page.animaName;
						}
						if (page.pageIn && page.pageIn == false) {
							$this.pageIn = 'no'
						} else {
							$this.pageIn = 'page-animation-enter';
						}
						if (page.pageOut && page.pageOut == false) {
							$this.pageOut = 'no'
						} else {
							$this.pageOut = 'page-animation-leave';
						}
						return;
					}
				})
				//页面未配置动画和首次打开页面 都无动画效果
				if (pagePath == '#/' || $this.pageAnimation != true || !$this.pageBefore) {
					classList.add('page-show')
					return false
				}
				classList.add($this.pageBefore)
				setTimeout(() => {
					classList.add($this.pageIn, $this.pageAfter, 'page-show')
					setTimeout(() => {
						classList.remove($this.pageIn, $this.pageBefore, $this.pageAfter)
					}, 300)
				}, 20);
				$this.pageAnimation = false;
			},
		},

		// #endif
	}
</script>
