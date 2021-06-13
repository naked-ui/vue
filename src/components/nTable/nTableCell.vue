<template>
  <component :is="tag" :class="`${baseClassname}__cell`" :style="style">
    <slot />
  </component>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import {
  height,
  padding,
  background,
  borderWidth,
  borderStyle,
  borderColor
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  height,
  padding,
  background,
  borderWidth,
  borderStyle,
  borderColor
]

export default {
  name: 'nTableCell',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String]
    },
    padding: {
      type: [Number, String]
    },
    background: {
      type: [Number, String]
    },
    borderWidth: {
      type: [Number, String]
    },
    borderStyle: {
      type: String
    },
    borderColor: {
      type: String
    }
  },
  computed: {
    tag() {
      if (this.isHeader) return 'th'
      return 'td'
    }
  }
}
</script>
