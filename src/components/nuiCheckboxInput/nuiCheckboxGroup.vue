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
  name: 'nuiCheckboxGroup',
  mixins: [uuID, formField(componentStyleVariables), groupValidationHandler],
  data() {
    return {
      selectedValue: []
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    baseClassname: {
      type: String,
      default: 'nui-checkbox-group'
    },
    // input attrs
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
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiCheckboxGroup.scss" />
