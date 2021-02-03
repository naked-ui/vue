<template>
  <li
    class="n-carousel__slide"
    :tabindex="slideIndex"
    :id="`${ref}--${slideIndex}`"
  >
    <div class="n-carousel__navigation">
      <a
        :href="`#${ref}--${prevSlide(slideIndex)}`"
        class="n-carousel__prev"
      />
      <a
        :href="`#${ref}--${nextSlide(slideIndex)}`"
        class="n-carousel__next"
      />
    </div>
    <div class="n-carousel__slide-content">
      <slot />
    </div>
  </li>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'

export default {
  name: 'nCarouselItem',
  mixins: [carouselNavigation],
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
