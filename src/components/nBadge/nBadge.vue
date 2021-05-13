<template>
  <div class="n-badge" :style="style">
    <slot />
  </div>
</template>

<script>
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
    default: 'n-badge'
  },
  ...styleProps,
  size: {
    type: [String, Number]
  }
}

export default {
  props: componentProps,
  mixins: [styleVariables(componentStyleVariables)],
  computed: {
    copmonentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nBadge.scss" />
