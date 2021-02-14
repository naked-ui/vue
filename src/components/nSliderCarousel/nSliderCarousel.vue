<template>
  <div
    :class="componentClasses"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :data-name-prefix="namePrefix"
    :paginationEnabled="paginationEnabled"
  >
    <div :class="`${baseClassname}__viewport-wrapper`">
      <div :class="`${baseClassname}__viewport`">
        <slot />
      </div>
    </div>
    <div :class="[`${baseClassname}__navigation`]">
      <a
        @click="prevSlide(slideIndex)"
        :class="[
          `${baseClassname}__prev`,
          prevDisabled && `${this.baseClassname}__prev--disabled`
        ]"
      />
      <a
        @click="nextSlide(slideIndex)"
        :class="[
          `${baseClassname}__next`,
          nextDisabled && `${this.baseClassname}__next--disabled`
        ]"
      />
    </div>
    <aside
      v-if="paginationEnabled"
      :class="`${baseClassname}__pagination`"
    >
      <ol :class="`${baseClassname}__pagination-list`">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          :class="`${baseClassname}__pagination-item`">
          <a
            @click="navigateToSlide(index)"
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

    paginationEnabled: {
      type: Boolean,
      default: true
    },
    infiniteScroll: {
      type: Boolean,
      default: true
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
      if (this.slideIndex > 1) {
        return false
      } else return true
    },
    nextDisabled () {
      if (this.slideIndex < this.maxIndex) {
        return false
      } else return true
    }
  },
  methods: {
    fetchSlideIndexFromUrl () {
      var slideIndexUri = window.location.href.match(/#slider-carousel--(\d+)/) // 'slider-carousel' should be a dynamic value that is a String coming from refName property
      if (slideIndexUri) { 
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    },
    navigateToSlide (index) {
      window.location.replace(`#${this.refName}--${index + 1}`)
      this.slideIndex = index + 1
    },
    prevSlide (index) {
      if (index > 1) {
        this.navigateToSlide(index - 2)
      }
    },
    nextSlide (index) {
      if (index < this.maxIndex) {
        this.navigateToSlide(index)
      }
    }
  },
  mounted () {
    this.fetchSlideIndexFromUrl()
  },
}
</script>

<style lang="scss" src="./nSliderCarousel.scss" />
