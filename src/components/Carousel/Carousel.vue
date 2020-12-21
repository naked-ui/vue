<template>
  <div
    class="carousel"
    :paginationEnabled="paginationEnabled"
  >
    <div class="carousel__viewport">
      <slot />
    </div>
    <aside
      v-if="paginationEnabled"
      class="carousel__pagination"
    >
      <ol class="carousel__pagination-list">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          class="carousel__pagination-item">
          <a
            :href="`#${carouselKey}--${index}`"
            class="carousel__pagination-button"
          >Go to slide {{ index }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from './carouselNavigation'

export default {
  name: 'Carousel',
  mixins: [carouselNavigation],
  props: { 
    paginationItems: {
      type: Array,
      required: true
    },
    paginationEnabled: {
      type: Boolean,
      default: true
    },
    carouselKey: {
      type: String,
      required: true,
      default: 'slide'
    }
  },
  methods: {
    prevSlide (index) {
      return index - 1
    },
    nextSlide (index) {
      return index + 1
    }
  }
}
</script>
