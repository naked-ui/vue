<template>
  <component
    :is="iconType"
    :to="iconType === 'router-link' ? href : false"
    :href="iconType === 'a' ? href : false"
    :class="componentClasses"
    type="button"
    :target="href && href.includes('http') ? '_blank' : false"
    :alt="title"
    :aria-label="title"
    :title="title"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :aria-label="alt"
      class="icon__image"
      :height="height || size"
      :width="width || size"
      :style="{ fill : iconColor }"
    >

    <slot
      v-else
      name="icon"
      class="icon__slot-icon"
    >
    </slot>

    <span
      v-if="isTextProvided"
      class="icon__slot-text"
      :class="textPositionClass"
    >
      <slot>
      </slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    src: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    focus: {
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: String,
      default: undefined,
      required: false
    },
    width: {
      type: String,
      default: undefined,
      required: false
    },
    size: {
      type: String,
      default: undefined,
      required: false
    },
    iconColor: {
      type: String,
      default: '#000000'
    },
    textPosition: {
      type: String,
      default: 'after'
    }
  },
  computed: {
    iconType () {
      if (this.href) {
        return this.href.includes('http') || this.$route.path === '/error' ? 'a' : 'router-link';
      } else {
        return 'span';
      }
    },
    componentClasses () {
      return [
        'icon',
        this.textPositionClass,
        this.focus ? '' : 'icon--no-focus'
      ]
    },
    isTextProvided () {
      return this.$slots && Object.values(this.$slots).length >= 2
    },
    heightValue () {
      return `${this.height}`.includes('px') ? `${this.height}`.slice(0, -2) : this.heightValue = this.height
    },
    textPositionClass () {
      return `icon--text-${this.textPosition}`
    }
  }
};
</script>

