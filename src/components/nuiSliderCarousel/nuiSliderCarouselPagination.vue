<template>
  <nav
    v-if="!paginationDisabled"
    :class="`${namespace}__pagination`"
    :style="[
      this.paginationAutohide
        ? { '--pagination-initial-opacity': 0 }
        : { '--pagination-initial-opacity': 1 }
    ]"
  >
    <ol :class="`${namespace}__pagination-list`">
      <li
        v-for="(item, index) in paginationItems"
        :key="index"
        :class="`${namespace}__pagination-item`"
      >
        <input
          type="radio"
          :name="`${refName}__pagination-input`"
          @click="navigateToSlide(index + 1)"
          :value="index + 1"
          :id="`${refName}__pagination-input--${index + 1}`"
          :class="[`${namespace}__pagination-input`]"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </li>
    </ol>
  </nav>
</template>

<script>
import sliderCarouselNavigation from './logic/sliderCarouselNavigation'

export default {
  mixins: [sliderCarouselNavigation],
  props: {
    namespace: {
      type: String,
      default: 'slider-carousel',
      required: true
    },
    refName: {
      type: String,
      required: true
    },
    paginationDisabled: {
      type: Boolean,
      default: false,
      required: false
    },
    paginationItems: {
      type: [Array, Number],
      required: true
    },
    paginationAutohide: {
      type: Boolean,
      default: false
    }
  }
}
</script>
