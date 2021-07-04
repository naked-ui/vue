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
import { hyperlinkProps } from '@/utils/props'

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-hyperlink'
  },
  ...hyperlinkProps
}

export default {
  name: 'nuiHyperlink',
  mixins: [uuID, hrefIsExternalMixin],
  props: componentProps,
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
      return [this.namespace]
    }
  }
}
</script>
