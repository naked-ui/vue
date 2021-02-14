<template>
  <li
    :class="[`${baseClassname}__item`]"
    :tabindex="slideIndex"
    :id="`${refName}--${slideIndex}`"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
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
    slideIndex: {
      type: Number,
      required: true,
      default: 1
    },
    refName: {
      type: String,
      default: 'slide'
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    }
  }
}
</script>
