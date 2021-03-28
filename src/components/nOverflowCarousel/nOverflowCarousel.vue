<template>
  <div
    :class="componentClasses"
    :style="`
      --items-gap: ${itemsGap}px;
      --viewport-padding: ${viewportPadding}px;
    `"
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

export default {
  name: 'nOverflowCarousel',
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
