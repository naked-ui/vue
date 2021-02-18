<template>
  <div
    :class="componentClasses"
    :style="`
      --items-gap: ${itemsGap};
      --viewport-padding: ${viewportPadding};
    `"
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
    },
    itemsGap: {
      type: String,
      default: '0'
    },
    viewportPadding: {
      type: String,
      default: '0'
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
