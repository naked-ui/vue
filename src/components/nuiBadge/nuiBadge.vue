<template>
  <div
    :class="componentClasses"
    :id="uiElementID()"
    :style="style"
    :disabled="disabled"
  >
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
import { styleProps, stateProps, uiProps } from '@/utils/props'

const componentProps = {
  // UI
  namespace: {
    default: 'nui-badge',
    type: String
  },
  // Styling
  ...styleProps,
  // States
  ...stateProps,
  // UI
  ...uiProps
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
