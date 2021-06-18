<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      <input
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
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import validationHandler from './logic/validationHandler'
// import { color } from '@/utils/styleVariables/helpers/variables'

// const componentStyleVariables = [color]

export default {
  name: 'nuiRadioInput',
  mixins: [uuID, formField(), validationHandler],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-radio-input'
    },
    // input attrs
    checked: {
      type: Boolean,
      default: false
    }
    // color: {
    //   type: String,
    //   default: null
    // }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiRadioInput.scss" />
