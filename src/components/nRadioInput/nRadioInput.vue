<template>
  <div class="nui-radio-input" :style="style" :class="componentClasses">
    <label class="nui-radio-input__label" :disabled="disabled" :for="id">
      <input
        class="nui-radio-input__radio"
        type="radio"
        @invalid="$setValidity"
        @change="$validate"
        :id="id"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :required="isRequired"
        :checked="isChecked"
        :value="value"
        :name="name"
        :nui-validation="validationEnabled"
        formnovalidate
      />{{ label }}</label
    >
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import { color } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color]

export default {
  mixins: [formField(componentStyleVariables)],
  name: 'nRadioInput',
  components: { nValidationAlerts },
  inject: {
    radioGroup: {
      default: false
    }
  },
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
    isDisabled() {
      return this.disabled || (!!this.radioGroup && this.radioGroup.disabled)
    },
    isReadonly() {
      return this.readonly || (!!this.radioGroup && this.radioGroup.readonly)
    },
    isRequired() {
      return this.required || (!!this.radioGroup && this.radioGroup.required)
    },
    isChecked() {
      return (
        this.checked ||
        (!!this.radioGroup && this.radioGroup.value === this.value)
      )
    },
    componentClasses() {
      return [this.baseClassname]
    }
  },
  methods: {
    $setValidity(e) {
      if (this.radioGroup && !e.target.validity.valid) {
        this.radioGroup.setValidity()
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.radioGroup) {
        this.radioGroup.validate(e)
      } else {
        this.validateFormField(e)
      }
    }
  }
}
</script>

<style lang="scss" src="./nRadioInput.scss" />
