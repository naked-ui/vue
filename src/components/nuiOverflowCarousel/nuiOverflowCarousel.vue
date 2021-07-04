<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <div :class="`${namespace}__viewport-wrapper`">
      <ul
        :class="`${namespace}__viewport`"
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

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-overflow-carousel'
  },
  itemsGap: {
    type: [String, Number],
    default: 0
  },
  viewportPadding: {
    type: [String, Number],
    default: 0
  },
  snapItems: {
    type: Boolean,
    default: true
  }
}

export default {
  name: 'nuiOverflowCarousel',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiOverflowCarousel.scss" />
