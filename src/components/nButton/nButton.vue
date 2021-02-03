<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses"
    :noPadding="noPadding"
    :disabled="disabled"
    :busy="busy"
  >
    <div
      v-if="$slots['button-icon--left']"
      class="n-button__slot-icon--left"
    >
      <slot name="button-icon--left">
      </slot>
    </div>
    <span
      v-if="$slots.default"
      class="n-button__text"
    >
      <slot />
    </span>
     <div
      v-if="$slots['button-icon--solo']"
      class="n-button__slot-icon--solo"
    >
      <slot name="button-icon--solo" />
    </div>
    <div
      v-if="$slots['button-icon--right']"
      class="n-button__slot-icon--right"
    >
      <slot name="button-icon--right" />
    </div>
  </component>
</template>

<script>
export default {
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
        'n-button',
        this.kind === 'primary' && 'n-button--primary',
        this.kind === 'secondary' && 'n-button--secondary',
        this.kind === 'tertiary' && 'n-button--tertiary',
        this.kind === 'ghost' && 'n-button--ghost',
        this.kind === 'danger' && 'n-button--danger',
        this.kind === 'success' && 'n-button--success',
        this.kind === 'warning' && 'n-button--warning',
        this.disabled && 'n-button--disabled',
        this.busy && 'n-button--busy',
        this.noPadding && 'n-button--no-padding',
        !this.$slots.default && 'n-button--no-text',
        this.size === 'small' && 'n-button--small',
        this.size === 'big' && 'n-button--big'
      ]
    }
  }
};
</script>
