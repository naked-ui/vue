<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses.length > 0 ? componentClasses : false"
    :disabled="disabled || busy"
    :busy="busy"
    :style="style"
    :buttonBusyText="buttonBusyText"
  >
    <div
      v-if="$slots['icon--left']"
      :class="
        baseClassname
          ? `${baseClassname}__icon ${baseClassname}__icon--left`
          : false
      "
    >
      <slot name="icon--left" />
    </div>
    <span
      v-if="$slots.default"
      :class="baseClassname ? `${baseClassname}__text` : false"
    >
      <slot v-if="!busy" />
      <slot v-else name="busy-text" />
    </span>
    <div
      v-if="$slots['icon--right']"
      :class="
        baseClassname
          ? `${baseClassname}__icon ${baseClassname}__icon--right`
          : false
      "
    >
      <slot name="icon--right" />
    </div>
  </component>
</template>

<script>
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
import hyperlinkProps from '@/utils/props/hyperlinkProps'
import { disabled, busy } from '@/utils/props/stateProps'
import styleProps from '@/utils/props/styleProps'

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

const componentProps = {
  ...hyperlinkProps,
  type: {
    type: String,
    default: 'button'
  },
  role: {
    type: String,
    default: 'button'
  },
  disabled,
  busy,
  buttonBusyText: {
    type: String
  },
  ...styleProps,
  baseClassname: {
    type: String,
    default: 'n-button'
  }
}

export default {
  name: 'nButton',
  mixins: [hrefIsExternalMixin, styleVariables(componentStyleVariables)],
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
        if (!this.disabled || !this.busy) {
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
      if (this.baseClassname.length > 0) return [this.baseClassname]
      else return false
    }
  }
}
</script>

<style lang="scss" src="./nButton.scss" />
