<template>
  <div
    class="nui-radio-input"
    :style="style"
    :class="componentClasses"
    :id="uiElementID"
  >
    <label
      class="nui-radio-input__label"
      :disabled="disabled"
      :for="IDForLabel"
    >
      <input
        class="nui-radio-input__radio"
        type="radio"
        @invalid="$setValidity"
        @change="$validate"
        :id="IDForLabel"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :required="isRequired"
        :checked="isChecked"
        :value="value"
        :name="name"
        :nui-validation="validationEnabled"
        formnovalidate
        :data-dirty="nui.$$dirty"
      />{{ label }}</label
    >
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import validationHandler from './logic/validationHandler'
import { color } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color]

export default {
  name: 'nRadioInput',
  mixins: [uuID, formField(componentStyleVariables), validationHandler],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-form-field'
    },
    // input attrs
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nRadioInput.scss" />
