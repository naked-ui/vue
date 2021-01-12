<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses"
    :noPadding="noPadding"
    :disabled="disabled"
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
      <slot v-if="!busy" />
      <slot
        v-if="busy"
        name="button__text--busy"
      />
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
export default {
  name: 'Button',
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
        'button',
        this.kind === 'primary' && 'button--primary',
        this.kind === 'secondary' && 'button--secondary',
        this.kind === 'tertiary' && 'button--tertiary',
        this.kind === 'ghost' && 'button--ghost',
        this.kind === 'danger' && 'button--danger',
        this.kind === 'success' && 'button--success',
        this.kind === 'warning' && 'button--warning',
        this.disabled && 'button--disabled',
        this.busy && 'button--busy',
        this.noPadding && 'button--no-padding',
        !this.$slots.default && 'button--no-text',
        this.size === 'small' && 'button--small',
        this.size === 'big' && 'button--big'
      ]
    }
  }
};
</script>
