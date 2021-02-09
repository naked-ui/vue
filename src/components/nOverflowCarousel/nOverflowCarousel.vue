<template>
  <div
    :class="componentClasses"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :data-name-prefix="namePrefix"
  >
    <div :class="`${baseClassname}__viewport-wrapper`">
      <div :class="`${baseClassname}__viewport`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nOverflowCarousel',
  mixins: [namePrefixMixin],
  props: {
    baseClassname: {
      type: String,
      default: 'overflow-carousel'
    }
  },
  computed: {
    componentClasses () {
      return [
        `overflow-carousel`
      ]
    }
  }
}
</script>

<style lang="scss" src="./nOverflowCarousel.scss" />
