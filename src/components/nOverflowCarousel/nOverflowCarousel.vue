<template>
  <div
    :class="componentClasses"
    :style="style"
  >
    <div :class="`${baseClassname}__viewport-wrapper`">
      <ul
        :class="`${baseClassname}__viewport`"
        :style="
          !snapItems ? `scroll-snap-type: none !important;` : false
        "
      >
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import styleVariables from '../../utils/styleVariables/index.js'

const defaultStyleVariables = [
  { name: 'itemsGap', type: 'size' },
  { name: 'viewportPadding', type: 'size' }
]

export default {
  name: 'nOverflowCarousel',
  mixins: [styleVariables(defaultStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'n-overflow-carousel'
    },
    itemsGap: {
      type: Number,
      default: 0
    },
    viewportPadding: {
      type: Number,
      default: 0
    },
    snapItems: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    }
  }
}
</script>

<style lang="scss" src="./nOverflowCarousel.scss" />
