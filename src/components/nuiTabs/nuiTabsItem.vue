<template>
  <div v-show="show" :class="`${baseClassname}__tab`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'nuiTabsItem',
  props: {
    baseClassname: {
      type: String,
      default: 'nui-tabs'
    },
    label: {
      type: String,
      required: true
    },
    contentPadding: {
      type: [Number, String],
      default: ''
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    setTab(label) {
      if (label === this.label) this.show = true
      else this.show = false
    }
  },
  created() {
    this.$parent.$emit('nui:add-tab', this.label)
    this.$parent.$on('nui:set-tab', (e) => this.setTab(e))
  }
}
</script>
