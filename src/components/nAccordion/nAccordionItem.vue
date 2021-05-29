<template>
  <li
    :class="[
      `${baseClassname}-item`,
      active ? `${baseClassname}-item--active` : ''
    ]"
    :style="style"
  >
    <span :class="`${baseClassname}-item__title`" @click="active = !active">
      <slot name="title" />
    </span>
    <div
      :class="[
        `${baseClassname}-item__content`,
        active ? `${baseClassname}-item__content--active` : ''
      ]"
      :id="uiElementID"
    >
      <slot name="text" />
    </div>
  </li>
</template>

<script>
import styleVariables from '@/utils/styleVariables'
import uuidMixin from '@/utils/uuid'

const componentStyleVariables = [
  { name: 'contentHeight', type: 'size' },
  { name: 'contentPadding', type: 'size' },
  { name: 'headingHeight', type: 'size' },
  { name: 'headingPadding', type: 'size' }
]

const uuid = () => Math.random().toString(36).substr(2, 9)

export default {
  name: 'nAccordionitem',
  mixins: [styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-accordion'
    },
    contentHeight: {
      type: [String, Number],
      default: '0'
    },
    contentPadding: {
      type: [String, Number],
      default: ''
    },
    titleHeight: {
      type: [String, Number],
      default: '100%'
    },
    titlePadding: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    },
    uiElementID() {
      if (this.id) {
        return `${this.id}_${uuid()}`
      } else return `nui_${uuid()}`
    },
    contentHeight() {
      this.contentHeight = document.getElementById(
        this.uiElementID
      ).clientHeight
    }
  },
  data: () => ({
    active: false
  })
}
</script>

<style lang="scss" src="./nAccordion.scss" />
