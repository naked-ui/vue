<template>
  <li
    :class="componentClasses"
    :style="style"
  >
    <div :class="[`${baseClassname}-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import styleVariables from '../../utils/styleVariables/index.js'

const defaultStyleVariables = [
  { name: 'width', type: 'size' },
  { name: 'height', type: 'size' }
]

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
    componentClasses () {
      return [
        `${this.baseClassname}`
      ]
    }
  }
}
</script>
