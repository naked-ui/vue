<template>
  <li
    :class="[`${baseClassname}__item`]"
    :tabindex="slideIndex"
    :id="`${refName}--${slideIndex}`"
    :style="`
      --visible-items: ${visibleItems};
    `"
    :data-name-prefix="namePrefix"
  >
    <div :class="[`${baseClassname}__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nSliderCarouselItem',
  mixins: [namePrefixMixin],
  props: {
    refName: {
      type: String,
      required: true
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
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
  },
}
</script>
