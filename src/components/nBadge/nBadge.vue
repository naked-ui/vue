<template>
  <div :class="componentClasses" :id="uiElementID" :style="style">
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

const componentStyleVariables = [
  borderRadius,
  size,
  fontSize,
  padding,
  backgroundColor,
  color
]

const componentProps = {
  baseClassname: {
    type: String,
    default: 'nui-badge'
  },
  ...styleProps,
  size: {
    type: [String, Number]
  }
}

export default {
  props: componentProps,
  mixins: [uuID, styleVariables(componentStyleVariables)],
  computed: {
    copmonentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nBadge.scss" />
