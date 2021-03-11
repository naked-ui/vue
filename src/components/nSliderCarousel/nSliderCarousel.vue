<template>
  <div
    :nui-namespace="uiNamespace"
    :class="componentClasses"
    :ref="refName"
    :style="`
      --amount-to-scroll: ${amountToScroll}
    `"
  >

    <!--SLIDER VIEWPORT -->
    <div :class="`${baseClassname}__viewport-wrapper`">
      <div
        :class="`${baseClassname}__viewport`"
        :id="`${refName}__viewport`"
      >
        <slot name="default" />
      </div>
    </div>

    <!--SLIDER NAVIGATION -->
    <nav
      v-if="!navigationDisabled"
      :class="[
        `${baseClassname}__navigation`
      ]"
      :style="[this.navigationAutohide ? {'--navigation-initial-opacity': 0} : {'--navigation-initial-opacity': 1}]"
    >
      <button
        @click.prevent="loopEnabled ? prevLoopSlide(slideIndex) : prevSlide(slideIndex)"
        :class="[
          `${baseClassname}__prev`,
          prevDisabled && `${this.baseClassname}__prev--disabled`
        ]"
        :disabled="prevDisabled"
      >
        <slot name="prev-button">
          <span style="font-size:42px;">&larr;</span>
        </slot>
      </button>
      <button
        @click.prevent="loopEnabled ? nextLoopSlide(slideIndex) : nextSlide(slideIndex)"
        :class="[
          `${baseClassname}__next`,
          nextDisabled && `${this.baseClassname}__next--disabled`
        ]"
        :disabled="nextDisabled"
      >
        <slot name="next-button">
          <span style="font-size:42px;">&rarr;</span>
        </slot>
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
      :style="[this.paginationAutohide ? {'--pagination-initial-opacity': 0} : {'--pagination-initial-opacity': 1}]"
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
import namespaceMixin from '../../utils/namespace'
import sliderCarouselIndex from './logic/sliderCarouselIndex'
import sliderCarouselNavigation from './logic/sliderCarouselNavigation'
import sliderCarouselPagination from './logic/sliderCarouselPagination'
import sliderCarouselSettings from './logic/sliderCarouselSettings'
// import nSliderCarouselPagination from './nSliderCarouselPagination'

export default {
  name: 'nSliderCarousel',
  mixins: [
    namespaceMixin,
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
