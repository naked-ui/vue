<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses"
    :noPadding="noPadding"
    :disabled="disabled"
    :busy="busy"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :nui-namespace="uiNamespace"
  >
    <div
      v-if="$slots['button-icon--left']"
      class="button__slot-icon--left"
    >
      <slot name="button-icon--left">
      </slot>
    </div>
    <span
      v-if="$slots.default"
      class="button__text"
    >
      <slot />
    </span>
     <div
      v-if="$slots['button-icon--solo']"
      class="button__slot-icon--solo"
    >
      <slot name="button-icon--solo" />
    </div>
    <div
      v-if="$slots['button-icon--right']"
      class="button__slot-icon--right"
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
    kind: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'regular'
    },
    type: {
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
    noPadding: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '',
      required: false
    },
    baseClassname: {
      type: String,
      default: 'button'
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
        this.disabled && `${this.baseClassname}--disabled`,
        this.busy && `${this.baseClassname}--busy`,
        this.noPadding && `${this.baseClassname}--no-padding`,
        !this.$slots.default && `${this.baseClassname}--no-text`,
        this.size === 'small' && `${this.baseClassname}--small`,
        this.size === 'big' && `${this.baseClassname}--big`
      ]
    }
  }
};
</script>
