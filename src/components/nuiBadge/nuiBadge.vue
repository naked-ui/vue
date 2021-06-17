<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <slot />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import styleProps from '@/utils/props/styleProps'

import {
  borderRadius,
  size,
  fontSize,
  padding,
  backgroundColor,
  color
} from '@/utils/styleVariables/helpers/variables'

const componentProps = {
  // UI
  baseClassname: {
    type: String,
    default: 'nui-badge'
  },
  // Styling
  ...styleProps,
  size: {
    type: [String, Number]
  }
}

const componentStyleVariables = [
  borderRadius,
  size,
  fontSize,
  padding,
  backgroundColor,
  color
]

export default {
  name: 'nuiBadge',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nuiBadge.scss" />
