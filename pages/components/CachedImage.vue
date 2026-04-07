<template>
  <image
    :src="finalSrc"
    :mode="mode"
    :lazy-load="lazyLoad"
    :show-menu-by-longpress="showMenu"
    @load="handleLoad"
    @error="handleError"
    @click="$emit('click')"
  />
</template>

<script>
import { cacheImage } from '@/utils/imageCache.js'

export default {
  name: 'CachedImage',

  props: {
    src: { type: String, required: true, default: '' },
    mode: { type: String, default: 'widthFix' },
    maxSize: { type: Number, default: 1000 },
    useCache: { type: Boolean, default: true },
    needSize: { type: Boolean, default: false },
    lazyLoad: { type: Boolean, default: false },
    showMenu: { type: Boolean, default: false }
  },

  data() {
    return {
      finalSrc: '',
      currentSrc: ''
    }
  },

  watch: {
    src: {
      immediate: true,
      handler() {
        this.loadImage()
      }
    }
  },

  methods: {
    async loadImage() {
      if (!this.src) return

      const src = this.src
      this.currentSrc = src

      if (!this.useCache) {
        this.finalSrc = src
        return
      }

      try {
        const res = await cacheImage(src, this.maxSize)

        if (this.currentSrc !== src) return

        this.finalSrc = res
      } catch (e) {
        this.finalSrc = src
      }
    },

    // ✅ 关键：无条件向外抛 load
    handleLoad(e) {
      this.$emit('load', {
        src: this.finalSrc,
        detail: e.detail || {}
      })
    },

    handleError(e) {
      this.$emit('error', e)
      this.finalSrc = this.src
    }
  }
}
</script>