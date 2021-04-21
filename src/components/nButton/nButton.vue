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
      :class="baseClassname ? `${baseClassname}__icon ${baseClassname}__icon--left` : false"
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
      :class="baseClassname ? `${baseClassname}__icon ${baseClassname}__icon--right` : false"
    >
      <slot name="icon--right" />
    </div>
  </component>
</template>

<script>
import hrefIsExternalMixin from '../../utils/hrefIsExternal'
import styleVariables from '../../utils/styleVariables/index.js'

const defaultStyleVariables = [
  { name: 'textColor', type: 'color' },
  { name: 'backgroundColor', type: 'color' },
  { name: 'padding', type: 'size' },
  { name: 'height', type: 'size' },
  { name: 'gap', type: 'size' },
]

export default {
  name: 'nButton',
  mixins: [hrefIsExternalMixin, styleVariables(defaultStyleVariables)],
  props: {
    // Settings
    baseClassname: {
      type: String,
      default: 'n-button'
    },
    href: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: 'button'
    },
    role: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: ''
    },
    // Styles
    backgroundColor: {
      type: String,
      default: '#333'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    padding: {
      type: [String, Number],
      default: '0 16px'
    },
    height: {
      type: [String, Number],
      default: '48px'
    },
    gap: {
      type: [String, Number],
      default: '8px'
    },
    buttonBusyText: {
      type: String
    }
  },
  computed: {
    tag () {
      if (!this.href) {
        return 'button'
      } else if (
        this.href.includes('http') ||
        this.href.includes('mailto:') ||
        this.href.includes('tel:')
      ) return 'a'
      else return 'router-link'
    },
    attrs () {
      if (!this.href) {
        return {
          type: this.type
        }
      } else if (
        this.href.includes('http') ||
        this.href.includes('mailto:') ||
        this.href.includes('tel:')
      ) {
        if (!this.disabled) {
          return {
            href: this.href,
            target: this.target,
            role: this.role
          }
        } else return {
          role: this.role
        }
      }
      else return {
        to: this.href,
        role: this.role
      }
    },
    iconPosition () {
      if(this.$slots['icon--left']) {
        return 'left'
      }
      if(this.$slots['icon--solo']) {
        return 'solo'
      }
      if(this.$slots['icon--right']) {
        return 'right'
      }
    },
    componentClasses () {
      if (this.baseClassname.length > 0) return [
        this.baseClassname
      ]
      else return false
    }
  }
}
</script>

<style lang="scss" src="./nButton.scss" />
