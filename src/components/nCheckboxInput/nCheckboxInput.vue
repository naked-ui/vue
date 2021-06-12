<template>
  <div class="checkbox-input" :style="style" :class="componentClasses">
    <label class="checkbox-input__label" :disabled="disabled" :for="id">
      <input
        class="checkbox-input__checkbox"
        type="checkbox"
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
        :data-dirty="nui.$$dirty"
      />
      {{ label }}
    </label>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index'
import validationHandler from './logic/validationHandler'
import { color } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color]

export default {
  mixins: [formField(componentStyleVariables), validationHandler],
  name: 'nCheckboxInput',
  props: {
    baseClassname: {
      type: String,
      default: 'nui-form-field'
    },
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
  },
}
</script>

<style lang="scss" src="./nCheckboxInput.scss" />
