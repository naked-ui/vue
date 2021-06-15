<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <div :class="`${baseClassname}__viewport-wrapper`">
      <ul
        :class="`${baseClassname}__viewport`"
        :style="!snapItems ? `scroll-snap-type: none !important;` : false"
      >
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import {
  itemsGap,
  viewportPadding
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [itemsGap, viewportPadding]

export default {
  name: 'nOverflowCarousel',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-overflow-carousel'
    },
    itemsGap: {
      type: Number,
      default: 0
    },
    viewportPadding: {
      type: Number,
      default: 0
    },
    snapItems: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nOverflowCarousel.scss" />
