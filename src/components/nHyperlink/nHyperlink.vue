<template>
  <component
    :is="tag"
    v-bind="attrs"
    :download="download"
    :hreflang="hreflang"
    :ping="ping"
    :rel="rel"
    :target="target"
    :class="componentClasses"
    :id="uiElementID()"
  >
    <slot />
  </component>
</template>

<script>
import uuID from '@/utils/uuid'
import hrefIsExternalMixin from '@/utils/hrefIsExternal'

export default {
  name: 'nHyperlink',
  mixins: [uuID, hrefIsExternalMixin],
  props: {
    href: {
      type: String,
      required: true,
      default: ''
    },
    hreflang: {
      type: String
    },
    download: {
      type: String
    },
    ping: {
      type: String
    },
    rel: {
      type: String
    },
    target: {
      type: String,
      required: false
    },
    baseClassname: {
      type: String,
      default: 'nui-hyperlink'
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
      if (this.hrefIsExternal) {
        this.rel = 'noreferrer'
        return {
          href: this.href
        }
      } else return { to: this.href }
    },
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>
