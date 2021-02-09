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
            :href="`#${refName}--${index + 1}`"
            :class="`${baseClassname}__pagination-button`"
          >Go to slide {{ index + 1 }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from '../../utils/carouselNavigation'
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nSliderCarousel',
  mixins: [carouselNavigation, namePrefixMixin],
  props: { 
    paginationItems: {
      type: [Array, Number],
      required: true
    },
    paginationEnabled: {
      type: Boolean,
      default: true
    },
    refName: {
      type: String,
      required: true,
      default: 'slide'
    },
    kind: {
      type: String,
      default: undefined
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
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

<style lang="scss" src="./nSliderCarousel.scss" />
