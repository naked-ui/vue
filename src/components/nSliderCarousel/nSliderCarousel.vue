<template>
  <div
    :class="componentClasses"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :data-name-prefix="namePrefix"
    :paginationDisabled="paginationDisabled"
  >
    <div :class="`${baseClassname}__viewport-wrapper`">
      <div :class="`${baseClassname}__viewport`">
        <slot name="default" />
      </div>
    </div>
    <div
      v-if="!navigationDisabled"
      :class="[`${baseClassname}__navigation`]"
    >
      <button
        @click.prevent="prevSlide(slideIndex)"
        :class="[
          `${baseClassname}__prev`,
          prevDisabled && `${this.baseClassname}__prev--disabled`
        ]"
        :disabled="prevDisabled"
      >
        <slot name="prevButton"></slot>
      </button>
      <button
        @click.prevent="nextSlide(slideIndex)"
        :class="[
          `${baseClassname}__next`,
          nextDisabled && `${this.baseClassname}__next--disabled`
        ]"
        :disabled="nextDisabled"
      >
        <slot name="nextButton"></slot>
      </button>
    </div>
    <aside
      v-if="!paginationDisabled"
      :class="`${baseClassname}__pagination`"
    >
      <ol :class="`${baseClassname}__pagination-list`">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          :class="`${baseClassname}__pagination-item`">
          <a
            @click.prevent="navigateToSlide(index + 1)"
            :class="`${baseClassname}__pagination-button`"
          >
            Go to slide {{ index + 1 }}
          </a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nSliderCarousel',
  mixins: [namePrefixMixin],
  data () {
    return {
      slideIndex: 1
    }
  },
  props: {

    // Data props

    refName: {
      type: String,
      required: true,
      default: 'slide'
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    },
    paginationItems: {
      type: [Array, Number],
      required: true
    },

    // Settings

    navigationDisabled: {
      type: Boolean,
      default: false
    },
    paginationDisabled: {
      type: Boolean,
      default: false
    },
    infiniteScroll: {
      type: Boolean,
      default: true
    },
    slideIdDisabled: {
      type: Boolean,
      default: false
    },
    amountToScroll: {
      type: Number,
      default: 1
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    maxIndex () {
      if(this.slideIndex > this.paginationItems.length) {
        return this.paginationItems.length
      } else return this.paginationItems
    },
    prevDisabled () {
      if (this.slideIndex > 1 || this.infiniteScroll) return false
      else return true
    },
    nextDisabled () {
      if (this.slideIndex < this.maxIndex || this.infiniteScroll) return false
      else return true
    }
  },
  methods: {
    fetchSlideIndexFromUrl () {
      const sliderRegex = new RegExp(`#${this.refName}--(\\d+)`)
      const slideIndexUri = window.location.href.match(sliderRegex)

      if (slideIndexUri && !this.slideIdDisabled) {
        this.navigateToSlide(slideIndexUri[1])
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    },
    navigateToSlide (index) {
      const slideElement = document.getElementById(`${this.refName}--${index}`)
      slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })

      this.slideIndex = index

      if (this.slideIdDisabled) return
      history.replaceState(null, null, document.location.pathname + `#${this.refName}--${index}`);
    },
    prevSlide (index) {
      if (index - this.amountToScroll < 1) return this.navigateToSlide(this.maxIndex)
      return this.navigateToSlide(index - this.amountToScroll)
    },
    nextSlide (index) {
      if (index + this.amountToScroll > this.maxIndex) return this.navigateToSlide(1)
      return this.navigateToSlide(index + this.amountToScroll)
    }
  },
  mounted () {
    this.fetchSlideIndexFromUrl()
  },
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
