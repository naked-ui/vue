<template>
  <component :is="tag" v-bind="attrs" :target="target" class="hyperlink">
    <slot />
  </component>
</template>

<script>
import hrefIsExternalMixin from '@/utils/hrefIsExternal'

export default {
  name: 'nHyperlink',
  mixins: [hrefIsExternalMixin],
  props: {
    href: {
      type: String,
      required: true,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    tag() {
      if (!this.href) return
      if (this.hrefIsExternal) return 'a'
      else return 'router-link'
    },
    attrs() {
      if (!this.href) return
      if (this.hrefIsExternal)
        return {
          href: this.href,
          rel: 'noreferrer'
        }
      else return { to: this.href }
    }
  }
}
</script>
