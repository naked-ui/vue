<template>
  <ul :class="componentClasses" :style="style">
    <template>
      <slot />
    </template>
  </ul>
</template>

<script>
import nIcon from '../nIcon/nIcon'
import styleVariables from '@/utils/styleVariables'
import { maxWidth, padding } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  maxWidth,
  padding,
  { name: 'transition', type: 'other' },
  { name: 'contentPadding', type: 'size' },
  { name: 'titleHeight', type: 'size' },
  { name: 'titlePadding', type: 'size' }
]

export default {
  name: 'nAccordion',
  mixins: [styleVariables(componentStyleVariables)],
  components: { nIcon },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-accordion'
    },
    items: {
      type: Array,
      required: false
    },
    maxWidth: {
      type: [Number, String],
      default: ''
    },
    padding: {
      type: [Number, String],
      default: ''
    },
    contentPadding: {
      type: [Number, String],
      default: ''
    },
    titleHeight: {
      type: [Number, String],
      default: ''
    },
    titlePadding: {
      type: [Number, String],
      default: ''
    },
    transition: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  },
  data: () => ({
    accordionItems: []
  }),
  mounted() {
    if (this.areItemsProvided) {
      this.accordionItems = this.items.map((item) => ({
        ...item,
        active: false
      }))
    }
  }
}
</script>

<style lang="scss" src="./nAccordion.scss" />
