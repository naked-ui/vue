<template>
  <tr :class="`${baseClassname}__row`" :id="uiElementID" :style="style">
    <slot />
  </tr>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import {
  width,
  padding,
  height,
  background,
  borderWidth,
  borderStyle,
  borderColor
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  width,
  padding,
  height,
  background,
  borderWidth,
  borderStyle,
  borderColor,
  { name: 'borderBottomWidth', type: 'size' },
  { name: 'borderBottomColor', type: 'color' },
  { name: 'borderBottomStyle', type: 'other' },
  { name: 'columnsAmount', type: 'other' }
]

export default {
  name: 'nuiTableRow',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    },
    width: {
      type: [Number, String],
      default: ''
    },
    height: {
      type: [Number, String],
      default: ''
    },
    padding: {
      type: [Number, String],
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: [Number, String]
    },
    borderStyle: {
      type: String
    },
    borderColor: {
      type: String
    },
    borderBottomWidth: {
      type: [Number, String],
      default: ''
    },
    borderBottomColor: {
      type: String,
      default: ''
    },
    borderBottomStyle: {
      type: String,
      default: ''
    },
    columnsAmount: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    return (this.columnsAmount = document.getElementById(
      this.uiElementID
    ).childElementCount)
  }
}
</script>
