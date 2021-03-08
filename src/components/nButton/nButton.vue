<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses"
    :disabled="disabled || busy"
    :busy="busy"
    :style="style"
    :nui-namespace="uiNamespace"
  >
    <div
      v-if="$slots['button-icon--left']"
      class="button__icon button__icon--left"
    >
      <slot name="button-icon--left">
      </slot>
    </div>
    <span
      v-if="$slots.default"
      class="button__text"
    >
      <slot v-if="!busy">
        Button text
      </slot>
      <slot v-else name="button-busy-text">
        Button busy text
      </slot>
    </span>
     <div
      v-if="$slots['button-icon--solo']"
      class="button__slot-icon--solo"
    >
      <slot name="button-icon--solo" />
    </div>
    <div
      v-if="$slots['button-icon--right']"
      class="button__icon button__icon--right"
    >
      <slot name="button-icon--right" />
    </div>
  </component>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nButton',
  props: {
    baseClassname: {
      type: String,
      default: 'button'
    },
    kind: {
      type: String,
      default: 'primary'
    },
    backgroundColor: {
      type: String,
      default: '#333'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    size: {
      type: String,
      default: 'regular'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    tag () {
      if (!this.link) {
        return 'button'
      } else if (
        this.link.includes('http') ||
        this.link.includes('mailto:') ||
        this.link.includes('tel:')
      ) return 'a'
      else return 'router-link'
    },
    attrs () {
      if (!this.link) {
        return { type: this.type }
      } else if (
        this.link.includes('http') ||
        this.link.includes('mailto:') ||
        this.link.includes('tel:')
      ) return { href: this.link }
      else return { to: this.link }
    },
    style () {
      return [
        {
          '--button-text-color' : this.textColor,
          '--button-background-color' : this.backgroundColor
        },
        {
          'padding' : this.noPadding ? '0' : false
        }
      ]
    },
    iconPosition () {
      if(this.$slots['button-icon--left']) {
        return 'left'
      }
      if(this.$slots['button-icon--solo']) {
        return 'solo'
      }
      if(this.$slots['button-icon--right']) {
        return 'right'
      }
    },
    componentClasses () {
      return [
        this.baseClassname,
        this.kind === 'primary' && `${this.baseClassname}--primary`,
        this.kind === 'secondary' && `${this.baseClassname}--secondary`,
        this.kind === 'tertiary' && `${this.baseClassname}--tertiary`,
        this.kind === 'ghost' && `${this.baseClassname}--ghost`,
        this.kind === 'danger' && `${this.baseClassname}--danger`,
        this.kind === 'success' && `${this.baseClassname}--success`,
        this.kind === 'warning' && `${this.baseClassname}--warning`,
        this.size === 'small' && `${this.baseClassname}--small`,
        this.size === 'big' && `${this.baseClassname}--big`,
        this.busy && `${this.baseClassname}--busy`,
      ]
    }
  }
};
</script>

<style lang="scss" src="./nButton.scss" scoped />
