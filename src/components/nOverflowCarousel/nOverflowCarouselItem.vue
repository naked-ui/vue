<template>
  <li
    :class="componentClasses"
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
export default {
  name: 'nOverflowCarouselItem',
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
