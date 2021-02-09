<template>
  <li
    :class="[`${baseClassname}__item`]"
    :tabindex="slideIndex"
    :id="`${refName}--${slideIndex}`"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :data-name-prefix="namePrefix"
  >
    <div :class="[`${baseClassname}__navigation`]">
      <a
        :href="`#${refName}--${prevSlide(slideIndex)}`"
        :class="[`${baseClassname}__prev`]"
      />
      <a
        :href="`#${refName}--${nextSlide(slideIndex)}`"
        :class="[`${baseClassname}__next`]"
      />
    </div>
    <div :class="[`${baseClassname}__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import carouselNavigation from '../../utils/carouselNavigation'
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nSliderCarouselItem',
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
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    }
  }
}
</script>
