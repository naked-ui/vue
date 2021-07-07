<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses.length > 0 ? componentClasses : false"
    :id="uiElementID()"
    :style="style"
    :disabled="disabled || busy"
    :busy="busy"
    :busyLabel="busyLabel"
  >
    <div
      v-if="$slots['icon--left']"
      :class="namespace ? `${namespace}__icon ${namespace}__icon--left` : false"
    >
      <slot name="icon--left" />
    </div>
    <span
      v-if="$slots.default || $slots['busy-text']"
      :class="namespace ? `${namespace}__text` : false"
    >
      <slot />
      <slot name="busy-text" />
    </span>
    <div
      v-if="$slots['icon--right']"
      :class="
        namespace ? `${namespace}__icon ${namespace}__icon--right` : false
      "
    >
      <slot name="icon--right" />
    </div>
  </component>
</template>

<script>
import uuID from '@/utils/uuid'
import hrefIsExternalMixin from '@/utils/hrefIsExternal'
import styleVariables from '@/utils/styleVariables'
import {
  color,
  backgroundColor,
  padding,
  height,
  width,
  gap,
  borderWidth,
  borderStyle,
  borderColor,
  fontSize
} from '@/utils/styleVariables/helpers/variables'
import {
  hyperlinkProps,
  metaProps,
  stateProps,
  styleProps
} from '@/utils/props'

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-button'
  },
  // Hyperlink
  ...hyperlinkProps,
  // Meta
  ...metaProps,
  // States
  ...stateProps,
  // Styling
  ...styleProps,
  // Other
  busyLabel: {
    type: String
  }
}

const componentStyleVariables = [
  color,
  backgroundColor,
  padding,
  height,
  width,
  gap,
  borderWidth,
  borderStyle,
  borderColor,
  fontSize
]

export default {
  name: 'nuiButton',
  mixins: [uuID, hrefIsExternalMixin, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    tag() {
      if (!this.href) {
        return 'button'
      } else if (
        this.href.includes('http') ||
        this.href.includes('mailto:') ||
        this.href.includes('tel:')
      )
        return 'a'
      else return 'router-link'
    },
    attrs() {
      if (!this.href) {
        return {
          type: this.type
        }
      } else if (
        this.href.includes('http') ||
        this.href.includes('mailto:') ||
        this.href.includes('tel:')
      ) {
        if (!this.disabled && !this.busy) {
          return {
            href: this.href,
            target: this.target,
            role: this.role
          }
        } else
          return {
            role: this.role
          }
      } else
        return {
          to: this.href,
          role: this.role
        }
    },
    iconPosition() {
      if (this.$slots['icon--left']) {
        return 'left'
      }
      if (this.$slots['icon--solo']) {
        return 'solo'
      }
      if (this.$slots['icon--right']) {
        return 'right'
      }
    },
    componentClasses() {
      if (this.namespace.length > 0) return [this.namespace]
      else return false
    }
  }
}
</script>

<style lang="scss" src="./nuiButton.scss" scoped />
