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
            :class="[
              `${baseClassname}__pagination-button`,
              index + 1 === slideIndex && `${baseClassname}__pagination-button--active`,
            ]"
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
    fetchSlideIndexFromUrl () {
      const sliderRegex = new RegExp(`#${this.refName}--(\\d+)`)
      const slideIndexUri = window.location.href.match(sliderRegex)

      if (slideIndexUri && this.slideIdEnabled) {
        this.navigateToSlide(slideIndexUri[1])
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    },
    navigateToSlide (index, jump = false) {
      const slideElement = document.getElementById(`${this.refName}--${index}`)

      if (jump) {
        slideElement.focus()
        slideElement.scrollIntoView()
        return
      }

      slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })

      this.slideIndex = index

      if (!this.slideIdEnabled) return
      history.replaceState(null, null, document.location.pathname + `#${this.refName}--${index}`);
    },
    prevSlide (index) {
      if (index === 1 && this.infiniteScroll) return this.navigateToSlide(this.maxIndex)
      if (index - this.amountToScroll < 1) return this.navigateToSlide(1)
      return this.navigateToSlide(index - this.amountToScroll)
    },
    prevLoopSlide (index) {
      this.addCloneBefore()
      this.navigateToSlide(index, true)
      const slideIndex = index === 1 ? this.maxIndex : index - this.amountToScroll
      this.navigateToSlide(slideIndex)
    },
    nextSlide (index) {
      if (index === this.maxIndex && this.infiniteScroll) return this.navigateToSlide(1)
      if (index + this.amountToScroll > this.maxIndex) return this.navigateToSlide(this.maxIndex)
      return this.navigateToSlide(index + this.amountToScroll)
    },
    nextLoopSlide (index) {
      const slideIndex = index === this.maxIndex ? 1 : index + this.amountToScroll
      this.navigateToSlide(slideIndex)
      setTimeout(() => {
        this.addCloneAfter()
        this.navigateToSlide(slideIndex, true)
      }, 500)
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
    }
  },
  mounted () {
    this.fetchSlideIndexFromUrl()
  },
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
