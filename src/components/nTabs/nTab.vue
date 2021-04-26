<template>
  <div v-show="show" :class="`${componentClasses}__content`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'nTab',
  props: {
    baseClassname: {
      type: String,
      default: 'n-tabs'
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname,
      ]
    },
  },
  data: () => ({
    show: false
  }),
  created () {
    this.$parent.$emit('nui:add-tab', this.label)
    console.log(this.currentTabContent)
  }
}
</script>

<style lang="scss" scoped>

</style>