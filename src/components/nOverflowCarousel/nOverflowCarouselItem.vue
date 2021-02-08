<template>
  <li
    :class="[`overflow-carousel__item`]"
    :tabindex="slideIndex"
    :id="`${refName}--${slideIndex}`"
    :data-name-prefix="namePrefix"
  >
    <div :class="[`overflow-carousel__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nOverflowCarouselItem',
  mixins: [carouselNavigation, namePrefixMixin],
  props: {
    slideIndex: {
      type: Number,
      required: true,
      default: 0
    },
    refName: {
      type: String,
      default: 'slide'
    }
  }
}
</script>
