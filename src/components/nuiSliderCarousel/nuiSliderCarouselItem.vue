<template>
  <li
    :class="[`${namespace}__item`]"
    :tabindex="slideIndex"
    :ref="refName"
    :id="`${refName}--${slideIndex}`"
    :style="`
      --visible-items: ${visibleItems};
    `"
  >
    <div :class="[`${namespace}__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'nuiSliderCarouselItem',
  props: {
    refName: {
      type: String,
      required: true
    },
    namespace: {
      type: String,
      default: 'nui-slider-carousel'
    },
    slideIndex: {
      type: Number,
      required: true,
      default: 1
    },
    visibleItems: {
      type: Number,
      default: 1
    }
  }
}
</script>
