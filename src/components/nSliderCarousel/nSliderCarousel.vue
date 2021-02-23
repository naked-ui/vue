<template>
  <div
    :data-name-prefix="namePrefix"
    :class="componentClasses"
    :style="`
      --amount-to-scroll: ${amountToScroll}
    `"
  >

    <!--SLIDER VIEWPORT -->
    <div :class="`${baseClassname}__viewport-wrapper`">
      <div
        :class="`${baseClassname}__viewport`"
        :id="`${baseClassname}__viewport`"
      >
        <slot name="default" />
      </div>
    </div>

    <!--SLIDER NAVIGATION -->
    <nav
      v-if="!navigationDisabled"
      :class="[`${baseClassname}__navigation`]"
    >
      <button
        @click.prevent="loopItems ? prevLoopSlide(slideIndex) : prevSlide(slideIndex)"
        :class="[
          `${baseClassname}__prev`,
          prevDisabled && `${this.baseClassname}__prev--disabled`
        ]"
        :disabled="prevDisabled"
      >
        <slot name="prev-button">Prev</slot>
      </button>
      <button
        @click.prevent="loopItems ? nextLoopSlide(slideIndex) : nextSlide(slideIndex)"
        :class="[
          `${baseClassname}__next`,
          nextDisabled && `${this.baseClassname}__next--disabled`
        ]"
        :disabled="nextDisabled"
      >
        <slot name="next-button">Next</slot>
      </button>
    </nav>

    <!--SLIDER PAGINATION -->
    <!-- <nSliderCarouselPagination
      :baseClassname="baseClassname"
      :refName="refName"
      :paginationDisabled="paginationDisabled"
      :paginationItems="paginationItems"
    /> -->
    <nav
      v-if="!paginationDisabled"
      :class="`${baseClassname}__pagination`"
    >
      <ol :class="`${baseClassname}__pagination-list`">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          :class="`${baseClassname}__pagination-item`">
          <input
            type="radio"
            :name="`${refName}__pagination-input`"
            @click="navigateToSlide(index + 1)"
            :value="index + 1"
            :id="`${refName}__pagination-input--${index + 1}`"
            :class="[
              `${baseClassname}__pagination-input`
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import namePrefixMixin from '../../utils/namePrefix'
import sliderCarouselIndex from './logic/sliderCarouselIndex'
import sliderCarouselNavigation from './logic/sliderCarouselNavigation'
import sliderCarouselPagination from './logic/sliderCarouselPagination'
import sliderCarouselSettings from './logic/sliderCarouselSettings'
// import nSliderCarouselPagination from './nSliderCarouselPagination'

export default {
  name: 'nSliderCarousel',
  mixins: [
    namePrefixMixin,
    sliderCarouselIndex,
    sliderCarouselNavigation,
    sliderCarouselPagination,
    sliderCarouselSettings
  ],
  // components: {
  //   nSliderCarouselPagination
  // }
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
