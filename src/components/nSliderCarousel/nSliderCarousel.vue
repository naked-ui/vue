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

export default {
  name: 'nSliderCarousel',
  mixins: [
    namePrefixMixin
  ],
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
    loopItems: {
      type: Boolean,
      default: false
    },
    slideIdEnabled: {
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
      } else return this.paginationItems.length
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
    navigateToSlide (index, jump = false) {
      const slideElement = document.getElementById(`${this.refName}--${index}`)
      const slidePaginationItem = document.getElementById(`${this.baseClassname}__pagination-input--${index}`)
      if (jump) {
        slideElement.focus()
        slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        return
      }
      slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      // Update slideIndex
      this.slideIndex = index
      // Update pagination
      slidePaginationItem.checked = true;
      // Conditional Slide ID in URL path
      if (!this.slideIdEnabled) return
      history.replaceState(null, null, document.location.pathname + `#${this.refName}--${index}`);
    },
    prevSlide (index) {
      if (index === 1 && this.infiniteScroll) return this.navigateToSlide(this.maxIndex)
      if (index - this.amountToScroll < 1) return this.navigateToSlide(1)
      return this.navigateToSlide(index - this.amountToScroll)
    },
    nextSlide (index) {
      if (index === this.maxIndex && this.infiniteScroll) return this.navigateToSlide(1)
      if (index + this.amountToScroll > this.maxIndex) return this.navigateToSlide(this.maxIndex)
      return this.navigateToSlide(index + this.amountToScroll)
    },
    addCloneBefore () {
      const itemsViewport = document.getElementById(`${this.baseClassname}__viewport`)
      const lastChild = itemsViewport.lastChild
      const lastChildClone = lastChild.cloneNode(true)
      lastChild.remove()
      itemsViewport.prepend(lastChildClone)
    },
    addCloneAfter () {
      const itemsViewport = document.getElementById(`${this.baseClassname}__viewport`)
      const firstChild = itemsViewport.firstChild
      const firstChildClone = firstChild.cloneNode(true)
      firstChild.remove()
      itemsViewport.append(firstChildClone)
    },
    prevLoopSlide (index) {
      const slideIndex = index === 1 ? this.maxIndex : index - this.amountToScroll
      this.addCloneBefore()
      this.navigateToSlide(index, true)
      this.navigateToSlide(slideIndex)
    },
    nextLoopSlide (index) {
      const slideIndex = index === this.maxIndex ? 1 : index + this.amountToScroll
      this.navigateToSlide(slideIndex)
      setTimeout(() => {
        this.addCloneAfter()
        this.navigateToSlide(slideIndex, true)
      }, 500)
    },
    fetchSlideIndexFromUrl () {
      const sliderRegex = new RegExp(`#${this.refName}--(\\d+)`)
      const slideIndexUri = window.location.href.match(sliderRegex)
      if (slideIndexUri && this.slideIdEnabled) {
        this.navigateToSlide(slideIndexUri[1])
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    }
  },
  mounted () {
    this.fetchSlideIndexFromUrl()

    // Check active pagination item
    const slidePaginationItem = document.getElementById(`${this.baseClassname}__pagination-input--${this.slideIndex}`)
    slidePaginationItem.checked = true;
  },
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
