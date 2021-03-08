<template>
  <li
    :class="[`${baseClassname}__item`]"
    :tabindex="slideIndex"
    :id="`${refName}--${slideIndex}`"
    :style="`
      --visible-items: ${visibleItems};
    `"
    :nui-namespace="uiNamespace"
  >
    <div :class="[`${baseClassname}__item-content`]">
      <slot />
    </div>
  </li>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nSliderCarouselItem',
  mixins: [namespaceMixin],
  props: {
    refName: {
      type: String,
      required: true
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    },
    slideIndex: {
      type: Number,
      required: true,
      default: 1
    },
    visibleItems: {
      type: Number,
      default: 1
    }
  },
}
</script>
