<template functional>
  <li
    :class="`${props.namespace}__item`"
    :style="`--width: ${props.width}; --height: ${props.height};`"
  >
    <div :class="[`${props.namespace}-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'nuiOverflowCarouselItem',
  props: {
    namespace: {
      type: String,
      default: 'nui-overflow-carousel'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
  }
}
</script>
