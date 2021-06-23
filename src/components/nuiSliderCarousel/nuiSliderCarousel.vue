<template>
  <div
    :class="componentClasses"
    :ref="refName"
    :id="uiElementID()"
    :style="`
      --amount-to-scroll: ${amountToScroll}
    `"
  >
    <!--SLIDER VIEWPORT -->
    <div :class="`${namespace}__viewport-wrapper`">
      <div :class="`${namespace}__viewport`" :id="`${refName}__viewport`">
        <slot name="default" />
      </div>
    </div>

    <!--SLIDER NAVIGATION -->
    <nav
      v-if="!navigationDisabled"
      :class="[`${namespace}__navigation`]"
      :style="[
        this.navigationAutohide
          ? { '--navigation-initial-opacity': 0 }
          : { '--navigation-initial-opacity': 1 }
      ]"
    >
      <button
        @click.prevent="
          loopEnabled ? prevLoopSlide(slideIndex) : prevSlide(slideIndex)
        "
        :class="[
          `${namespace}__prev`,
          prevDisabled && `${this.namespace}__prev--disabled`
        ]"
        :disabled="prevDisabled"
      >
        <slot name="prev-button">
          <span style="font-size: 42px">&larr;</span>
        </slot>
      </button>
      <button
        @click.prevent="
          loopEnabled ? nextLoopSlide(slideIndex) : nextSlide(slideIndex)
        "
        :class="[
          `${namespace}__next`,
          nextDisabled && `${this.namespace}__next--disabled`
        ]"
        :disabled="nextDisabled"
      >
        <slot name="next-button">
          <span style="font-size: 42px">&rarr;</span>
        </slot>
      </button>
    </nav>

    <!--SLIDER PAGINATION -->
    <!-- <nuiSliderCarouselPagination
      :namespace="namespace"
      :refName="refName"
      :paginationDisabled="paginationDisabled"
      :paginationItems="paginationItems"
    /> -->
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
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import sliderCarouselIndex from './logic/sliderCarouselIndex'
import sliderCarouselNavigation from './logic/sliderCarouselNavigation'
import sliderCarouselPagination from './logic/sliderCarouselPagination'
import sliderCarouselSettings from './logic/sliderCarouselSettings'
// import nuiSliderCarouselPagination from './nuiSliderCarouselPagination'

export default {
  name: 'nuiSliderCarousel',
  mixins: [
    uuID,
    sliderCarouselIndex,
    sliderCarouselNavigation,
    sliderCarouselPagination,
    sliderCarouselSettings
  ],
  props: {
    namespace: {
      type: String,
      default: 'nui-slider-carousel'
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiSliderCarousel.scss" />
