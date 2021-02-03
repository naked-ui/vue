<template>
  <div
    :class="componentClasses"
    :paginationEnabled="paginationEnabled"
  >
    <div class="n-carousel__viewport-wrapper">
      <div class="n-carousel__viewport">
        <slot />
      </div>
    </div>
    <aside
      v-if="paginationEnabled"
      class="n-carousel__pagination"
    >
      <ol class="n-carousel__pagination-list">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          class="n-carousel__pagination-item">
          <a
            :href="`#${ref}--${index}`"
            class="n-carousel__pagination-button"
          >Go to slide {{ index }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'

export default {
  name: 'nCarousel',
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
    ref: {
      type: String,
      required: true,
      default: 'slide'
    },
    kind: {
      type: String,
      default: undefined
    }
  },
  computed: {
    componentClasses () {
      return [
        'carousel',
        this.kind === 'overflow' && 'carousel--overflow',
        this.kind === 'overflow-desktop' && 'carousel--overflow-desktop',
        this.kind === 'overflow-tablet' && 'carousel--overflow-tablet',
        this.kind === 'overflow-mobile' && 'carousel--overflow-mobile',
      ]
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
