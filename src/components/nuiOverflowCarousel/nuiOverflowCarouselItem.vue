<template>
  <li :class="componentClasses" :style="style">
    <div :class="[`${namespace}-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import styleVariables from '@/utils/styleVariables'
import { width, height } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [width, height]

export default {
  name: 'nuiOverflowCarouselItem',
  mixins: [styleVariables(componentStyleVariables)],
  props: {
    namespace: {
      type: String,
      default: 'nui-overflow-carousel__item'
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
      return [`${this.namespace}`]
    }
  }
}
</script>
