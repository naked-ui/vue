<template>
  <div
    class="nui-checkbox-group nui-form-field"
    :id="uiElementID()"
    :style="style"
  >
    <slot></slot>
    <nValidationAlerts
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

const customStyleVariables = [color, spacing]

export default {
  mixins: [uuID, formField(customStyleVariables), groupValidationHandler],
  name: 'nCheckboxGroup',
  props: {
    value: {
      type: Array,
      required: true
    },
    // input attrs
    color: {
      type: String,
      default: null
    },
    spacing: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      selectedValue: []
    }
  }
}
</script>

<style lang="scss" src="./nCheckboxGroup.scss" />
