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
    <div :class="`${baseClassname}-item__content`" :id="uiElementID">
      <slot name="text" />
    </div>
  </li>
</template>

<script>
import styleVariables from '@/utils/styleVariables'
import uuidMixin from '@/utils/uuid'

const componentProps = {
  baseClassname: {
    type: String,
    default: 'nui-accordion'
  },
  // Styling
  contentHeight: {
    type: [String, Number],
    default: ''
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
}

const componentStyleVariables = [
  { name: 'contentHeight', type: 'size' },
  { name: 'contentPadding', type: 'size' },
  { name: 'titleHeight', type: 'size' },
  { name: 'titlePadding', type: 'size' }
]

export default {
  name: 'nuiAccordionitem',
  mixins: [uuidMixin, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  },
  data: () => ({
    active: false
  })
}
</script>

<style lang="scss" src="./nuiAccordion.scss" />
