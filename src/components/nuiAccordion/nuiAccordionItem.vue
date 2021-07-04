<template>
  <li
    :class="[`${namespace}-item`, active ? `${namespace}-item--active` : '']"
    :style="style"
  >
    <span :class="`${namespace}-item__title`" @click="active = !active">
      <slot name="title" />
    </span>
    <div :class="`${namespace}-item__content`" :id="uiElementID">
      <slot name="text" />
    </div>
  </li>
</template>

<script>
import styleVariables from '@/utils/styleVariables'
import uuidMixin from '@/utils/uuid'

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-accordion'
  },
  // Styling
  contentHeight: {
    type: [String, Number]
  },
  contentPadding: {
    type: [String, Number]
  },
  titleHeight: {
    type: [String, Number],
    default: '100%'
  },
  titlePadding: {
    type: [String, Number]
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
      return [this.namespace]
    }
  },
  data: () => ({
    active: false
  })
}
</script>

<style lang="scss" src="./nuiAccordion.scss" />
