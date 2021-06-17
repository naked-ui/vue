<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <slot />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import {
  borderRadius,
  size,
  fontSize,
  padding,
  background,
  color
} from '@/utils/styleVariables/helpers/variables'
import styleProps from '@/utils/props/styleProps'
import { disabled, busy } from '@/utils/props/stateProps'

const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-badge'
  },
  // Styling
  ...styleProps,
  // States
  disabled,
  busy
}

const componentStyleVariables = [
  borderRadius,
  size,
  fontSize,
  padding,
  background,
  color
]

export default {
  name: 'nuiBadge',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiBadge.scss" />
