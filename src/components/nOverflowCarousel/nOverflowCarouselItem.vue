<template>
  <li :class="componentClasses" :style="style">
    <div :class="[`${baseClassname}-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import styleVariables from '@/utils/styleVariables'
import { width, height } from '@/utils/styleVariables/helpers/variables'

const defaultStyleVariables = [width, height]

export default {
  name: 'nOverflowCarouselItem',
  mixins: [styleVariables(defaultStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'n-overflow-carousel__item'
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
    componentClasses() {
      return [`${this.baseClassname}`]
    }
  }
}
</script>
