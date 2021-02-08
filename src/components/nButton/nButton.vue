<template>
  <component
    v-bind="attrs"
    :is="tag"
    :class="componentClasses"
    :noPadding="noPadding"
    :disabled="disabled"
    :busy="busy"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
  >
    <div
      v-if="$slots['button-icon--left']"
      class="nui-button__slot-icon--left"
    >
      <slot name="button-icon--left">
      </slot>
    </div>
    <span
      v-if="$slots.default"
      class="nui-button__text"
    >
      <slot />
    </span>
     <div
      v-if="$slots['button-icon--solo']"
      class="nui-button__slot-icon--solo"
    >
      <slot name="button-icon--solo" />
    </div>
    <div
      v-if="$slots['button-icon--right']"
      class="nui-button__slot-icon--right"
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
        baseClassname,
        this.kind === 'primary' && `${baseClassname}--primary`,
        this.kind === 'secondary' && `${baseClassname}--secondary`,
        this.kind === 'tertiary' && `${baseClassname}--tertiary`,
        this.kind === 'ghost' && `${baseClassname}--ghost`,
        this.kind === 'danger' && `${baseClassname}--danger`,
        this.kind === 'success' && `${baseClassname}--success`,
        this.kind === 'warning' && `${baseClassname}--warning`,
        this.disabled && `${baseClassname}--disabled`,
        this.busy && `${baseClassname}--busy`,
        this.noPadding && `${baseClassname}--no-padding`,
        !this.$slots.default && `${baseClassname}--no-text`,
        this.size === 'small' && `${baseClassname}--small`,
        this.size === 'big' && `${baseClassname}--bi`
      ]
    }
  }
};
</script>
