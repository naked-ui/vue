<template>
  <div
    :class="componentClasses"
    :style="`
      --items-gap: ${itemsGap}px;
      --viewport-padding: ${viewportPadding}px;
    `"
    :nui-namespace="uiNamespace"
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
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nOverflowCarousel',
  mixins: [namespaceMixin],
  props: {
    baseClassname: {
      type: String,
      default: 'overflow-carousel'
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
        `overflow-carousel`
      ]
    }
  }
}
</script>

<style lang="scss" src="./nOverflowCarousel.scss" />
