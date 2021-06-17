<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      <input
        type="checkbox"
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
        :data-dirty="nui.$$dirty"
      />
      {{ label }}
    </label>
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index'
import validationHandler from './logic/validationHandler'

const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-checkbox-input'
  },
  //Styling
  orientation: {
    type: String,
    default: 'horizontal'
  },
  // States
  checked: {
    type: Boolean,
    default: false
  }
}

export default {
  name: 'nuiCheckboxInput',
  mixins: [uuID, formField(), validationHandler],
  props: componentProps,
  computed: {
    componentClasses() {
      return [
        this.namespace,
        'nui-form-field',
        'nui-checkable-input',
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

<style lang="scss" src="./nuiCheckboxInput.scss" />
