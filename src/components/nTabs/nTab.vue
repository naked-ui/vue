<template>
  <Transition mode="out-in" name="fade-in">
      <div v-show="show" :class="`${componentClasses}__content`">
        <slot />
      </div>
  </Transition>
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
    this.$parent.$on('nui:set-tab', e => {
      if (e === this.label) this.show = true
      else this.show = false
    })
  }
}
</script>

<style lang="scss" scoped>

</style>