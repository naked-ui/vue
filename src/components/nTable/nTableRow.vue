<template>
  <tr :class="`${baseClassname}__row`" :id="uiElementID" :style="style">
    <slot />
  </tr>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import { width } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  width,
  { name: 'borderBottomWidth', type: 'size' },
  { name: 'borderBottomColor', type: 'color' },
  { name: 'borderBottomStyle', type: 'other' },
  { name: 'columnsAmount', type: 'other' }
]

export default {
  name: 'nTableRow',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    },
    borderBottomWidth: {
      type: [Number, String],
      default: '1px'
    },
    borderBottomColor: {
      type: String
    },
    borderBottomStyle: {
      type: String,
      default: 'solid'
    },
    columnsAmount: {
      type: Number
    }
  },
  mounted() {
    return (this.columnsAmount = document.getElementById(
      this.uiElementID
    ).childElementCount)
  }
}
</script>

<style lang="scss">
tr {
  border-bottom-width: var(--border-bottom-width);
  border-bottom-style: var(--border-bottom-style);
  border-bottom-color: var(--border-bottom-color);
}

th,
td {
  width: calc(100% / var(--columns));
}
</style>
