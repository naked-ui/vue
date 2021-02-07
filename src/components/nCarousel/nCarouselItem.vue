<template>
  <li
    :class="[`${namePrefix}carousel__slide`]"
    :tabindex="slideIndex"
    :id="`${ref}--${slideIndex}`"
  >
    <div :class="[`${namePrefix}carousel__navigation`]">
      <a
        :href="`#${ref}--${prevSlide(slideIndex)}`"
        :class="[`${namePrefix}carousel__prev`]"
      />
      <a
        :href="`#${ref}--${nextSlide(slideIndex)}`"
        :class="[`${namePrefix}carousel__next`]"
      />
    </div>
    <div :class="[`${namePrefix}carousel__content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'
import namePrefixMixin from '~/packages/naked-ui/src/utils/namePrefix'

export default {
  name: 'nCarouselItem',
  mixins: [carouselNavigation, namePrefixMixin],
  props: {
    slideIndex: {
      type: Number,
      required: true,
      default: 0
    },
    ref: {
      type: String,
      default: 'slide'
    }
  }
}
</script>
