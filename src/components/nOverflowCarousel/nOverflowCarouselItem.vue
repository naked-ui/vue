<template>
  <li
    :class="componentClasses"
    :data-name-prefix="namePrefix"
    :style="`
      --width: ${width};
      --height: ${height};
    `"
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
    baseClassname: {
      type: String,
      default: 'overflow-carousel__item'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
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
