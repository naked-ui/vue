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
    urlIsExternal () {
      if (this.url.includes('http') || this.url.includes('mailto:') || this.url.includes('tel:')) return true
      else return false
    },
    tag () {
      if (!this.url) return
      if (this.urlIsExternal) return 'a'
      else return 'nuxt-link'
    },
    attrs () {
      if (!this.url) return
      if (this.urlIsExternal) return {
        href: this.url,
        rel: 'noreferrer'
      }
      else return { to: this.url }
    }
  }
}
</script>
