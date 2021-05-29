<template>
  <ul :class="componentClasses" :style="style">
    <!-- <ul :class="`${baseClassname}__items`"> -->
    <template>
      <slot />
    </template>
    <!-- </ul> -->
  </ul>
</template>

<script>
import nIcon from '../nIcon/nIcon'
import styleVariables from '@/utils/styleVariables'
import { width, padding } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  width,
  padding,
  { name: 'transition', type: 'other' }
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
    width: {
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
