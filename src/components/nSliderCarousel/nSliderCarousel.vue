<template>
  <div
    :class="componentClasses"
    :style="`
      --amount-to-scroll: ${amountToScroll}
    `"
    :data-name-prefix="namePrefix"
    :paginationDisabled="paginationDisabled"
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
            :name="`${baseClassname}__pagination-input`"
            @click="navigateToSlide(index + amountToScroll)"
            :value="index + amountToScroll"
            :id="`${baseClassname}__pagination-input--${index + amountToScroll}`"
            :class="[
              `${baseClassname}__pagination-input`
            ]"
            :aria-label="`Go to slide ${index + amountToScroll}`"
          />
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import namePrefixMixin from '../../utils/namePrefix'
import nSliderCarousel from './nSliderCarousel'

export default {
  name: 'nSliderCarousel',
  mixins: [
    namePrefixMixin,
    nSliderCarousel
  ]
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
