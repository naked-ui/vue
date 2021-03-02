<template>
  <component
    :is="tag"
    v-bind="attrs"
    :target="target"
    class="hyperlink"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'nHyperlink',
  props: {
    url: {
      type: String,
      required: true,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    tag () {
      if (!this.url) return
      if (
        this.url.includes('http') ||
        this.url.includes('mailto:') ||
        this.url.includes('tel:')
      ) return 'a'
      else return 'nuxt-link'
    },
    attrs () {
      if (!this.url) return
      if (
        this.url.includes('http') ||
        this.url.includes('mailto:') ||
        this.url.includes('tel:')
      ) return { href: this.url }
      else return { to: this.url }
    },
  }
}
</script>
