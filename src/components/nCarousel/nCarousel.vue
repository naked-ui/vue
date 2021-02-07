<template>
  <div
    :class="componentClasses"
    :paginationEnabled="paginationEnabled"
  >
    <div class="nui-carousel__viewport-wrapper">
      <div class="nui-carousel__viewport">
        <slot />
      </div>
    </div>
    <aside
      v-if="paginationEnabled"
      class="nui-carousel__pagination"
    >
      <ol class="nui-carousel__pagination-list">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          class="nui-carousel__pagination-item">
          <a
            :href="`#${refName}--${index}`"
            class="nui-carousel__pagination-button"
          >Go to slide {{ index }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'
import namePrefixMixin from '~/packages/naked-ui/src/utils/namePrefix'

export default {
  name: 'nCarousel',
  mixins: [carouselNavigation, namePrefixMixin],
  props: { 
    paginationItems: {
      type: Array,
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
    }
  },
  computed: {
    componentClasses () {
      return [
        `${this.namePrefix}carousel`,
        this.kind === 'overflow' && `${this.namePrefix}carousel--overflow`,
        this.kind === 'overflow-desktop' && `${this.namePrefix}carousel--overflow-desktop`,
        this.kind === 'overflow-tablet' && `${this.namePrefix}carousel--overflow-tablet`,
        this.kind === 'overflow-mobile' && `${this.namePrefix}carousel--overflow-mobile`,
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
