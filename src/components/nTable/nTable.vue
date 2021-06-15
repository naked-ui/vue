<template>
  <table :class="componentClasses" :id="uiElementID()" :style="style">
    <caption v-if="$slots['caption']">
      <slot name="caption" />
    </caption>
    <thead
      v-if="$slots['thead']"
      @click="bodyIsCollapsable ? collapseBody() : false"
      :style="bodyIsCollapsable ? 'cursor: pointer;' : ''"
    >
      <slot name="thead" />
    </thead>
    <tbody v-if="$slots['tbody']" v-show="!bodyCollapsed">
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
import {
  width,
  borderWidth,
  borderStyle,
  borderColor
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  width,
  width,
  borderWidth,
  borderStyle,
  borderColor,
  { name: 'bodyMaxHeight', type: 'size' }
]

export default {
  name: 'Table',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  data() {
    return {
      bodyCollapsed: false
    }
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    },
    width: {
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
    },
    bodyIsCollapsable: {
      type: Boolean,
      default: false
    },
    bodyMaxHeight: {
      type: [Number, String]
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, this.bodyMaxHeight ? 'scrollable' : '']
    }
  },
  methods: {
    collapseBody() {
      this.bodyCollapsed = !this.bodyCollapsed
    }
  }
}
</script>

<style lang="scss" src="./nTable.scss" />
