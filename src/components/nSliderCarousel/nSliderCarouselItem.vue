<template>
  <li
    :class="[`${baseClassname}__item`]"
    :tabindex="slideIndex"
    :ref="refName"
    :id="`${refName}--${slideIndex}`"
    :style="`
      --visible-items: ${visibleItems};
    `"
  >
    <div :class="[`${baseClassname}__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'nSliderCarouselItem',
  props: {
    refName: {
      type: String,
      required: true
    },
    baseClassname: {
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
