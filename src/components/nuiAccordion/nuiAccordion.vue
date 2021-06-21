<template>
  <ul :class="componentClasses" :style="style" :id="uiElementID()">
    <template>
      <slot />
    </template>
  </ul>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import {
  maxWidth,
  padding,
  transition
} from '@/utils/styleVariables/helpers/variables'
import styleProps from '@/utils/props'

const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-accordion'
  },
  // Styling
  ...styleProps,
  contentPadding: {
    type: [Number, String]
  },
  titleHeight: {
    type: [Number, String]
  },
  titlePadding: {
    type: [Number, String]
  }
}

const componentStyleVariables = [
  maxWidth,
  padding,
  transition,
  { name: 'contentPadding', type: 'size' },
  { name: 'titleHeight', type: 'size' },
  { name: 'titlePadding', type: 'size' }
]

export default {
  name: 'nuiAccordion',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiAccordion.scss" />
