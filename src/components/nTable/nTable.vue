<template>
  <table :class="componentClasses" :id="uiElementID" :style="style">
    <caption v-if="$slots['caption']">
      <slot name="caption" />
    </caption>
    <thead v-if="$slots['thead']">
      <slot name="thead" />
    </thead>
    <tbody v-if="$slots['tbody']">
      <slot name="tbody" />
    </tbody>
    <tfoot v-if="$slots['tfoot']">
      <slot name="tfoot" />
    </tfoot>
    <slot />
  </table>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import { width } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [width]

export default {
  name: 'Table',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    },
    width: {
      type: [Number, String]
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nTable.scss" />
