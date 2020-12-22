<template>
  <li
    class="carousel__slide"
    :tabindex="slideIndex"
    :id="`${carouselKey}--${slideIndex}`"
  >
    <div class="carousel__snapper">
      <a
        :href="`#${carouselKey}--${prevSlide(slideIndex)}`"
        class="carousel__prev"
      />
      <a
        :href="`#${carouselKey}--${nextSlide(slideIndex)}`"
        class="carousel__next"
      />
    </div>
    <div class="carousel__slide-content">
      <slot />
    </div>
  </li>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'

export default {
  name: 'CarouselItem',
  mixins: [carouselNavigation],
  props: {
    slideIndex: {
      type: Number,
      required: true,
      default: 0
    },
    carouselKey: {
      type: String,
      default: 'slide'
    }
  }
}
</script>
