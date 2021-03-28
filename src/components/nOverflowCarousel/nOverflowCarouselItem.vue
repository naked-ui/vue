<template>
  <li
    :class="componentClasses"
    :nui-namespace="uiNamespace"
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
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nOverflowCarouselItem',
  mixins: [namespaceMixin],
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
