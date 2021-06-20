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

const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-radio-input'
  },
  // States
  checked: {
    type: Boolean,
    default: false
  }
}

export default {
  name: 'nuiRadioInput',
  mixins: [uuID, formField(), validationHandler],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiRadioInput.scss" />
