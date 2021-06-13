<template>
  <div class="nui-radio-group nui-form-field" :style="style">
    <slot></slot>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import groupValidationHandler from './logic/groupValidationHandler'
import { color, spacing } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color, spacing]

export default {
  mixins: [formField(componentStyleVariables), groupValidationHandler],
  name: 'nRadioGroup',
  props: {
    // group attrs
    color: {
      type: String,
      default: null
    },
    spacing: {
      type: [Number, String],
      default: null
    }
  },
}
</script>

<style lang="scss" src="./nRadioGroup.scss" />
