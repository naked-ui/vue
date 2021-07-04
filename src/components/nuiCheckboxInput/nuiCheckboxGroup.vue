<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <slot />
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField'
import groupValidationHandler from './logic/groupValidationHandler'
import { color, direction, gap } from '@/utils/styleVariables/helpers/variables'
import { dataProps, styleProps } from '@/utils/props'

const componentStyleVariables = [color, direction, gap]

const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-checkbox-group'
  },
  // Data
  ...dataProps,
  // Styling
  ...styleProps
}

export default {
  name: 'nuiCheckboxGroup',
  mixins: [uuID, formField(componentStyleVariables), groupValidationHandler],
  data() {
    return {
      selectedValue: []
    }
  },
  props: componentProps,
  computed: {
    componentClasses() {
      return [
        this.namespace,
        'nui-form-field',
        this.orientation === 'vertical'
          ? 'vertical'
          : this.orientation === 'horizontal'
          ? 'horizontal'
          : ''
      ]
    }
  }
}
</script>

<style lang="scss" src="./nuiCheckboxGroup.scss" />
