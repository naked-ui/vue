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
    <slot />
  </li>
</template>

<script>
import carouselNavigation from './carouselNavigation'

export default {
  name: 'CarouselItem',
  mixins: [carouselNavigation],
  props: {
    slideIndex: {
      type: String,
      required: true,
      default: ''
    },
    carouselKey: {
      type: String,
      default: 'slide'
    }
  }
}
</script>
