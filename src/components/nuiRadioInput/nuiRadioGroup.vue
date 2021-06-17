<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <slot></slot>
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import groupValidationHandler from './logic/groupValidationHandler'
import { color, spacing } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color, spacing]

export default {
  mixins: [uuID, formField(componentStyleVariables), groupValidationHandler],
  name: 'nuiRadioGroup',
  props: {
    namespace: {
      type: String,
      default: 'nui-radio-group'
    },
    // group attrs
    color: {
      type: String,
      default: ''
    },
    spacing: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiRadioGroup.scss" />
