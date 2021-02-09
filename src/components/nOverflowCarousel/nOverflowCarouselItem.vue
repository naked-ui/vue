<template>
  <li
    :class="componentClasses"
    :data-name-prefix="namePrefix"
  >
    <div :class="[`${baseClassname}-content`]">
      <slot />
    </div>
  </li>
</template>

<script> 
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nOverflowCarouselItem',
  mixins: [namePrefixMixin],
  props: {
    slideIndex: {
      type: Number,
      required: true,
      default: 0
    },
    refName: {
      type: String,
      default: 'slide'
    },
    baseClassname: {
      type: String,
      default: 'overflow-carousel__item'
    }
  },
  computed: {
    componentClasses () {
      return [
        `${this.baseClassname}`
      ]
    }
  }
}
</script>
