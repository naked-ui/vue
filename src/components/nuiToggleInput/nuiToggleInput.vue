<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    {{ label }}
    <div :class="`${baseClassname}--wrapper`">
      <label
        :class="`${baseClassname}--switch`"
        :disabled="disabled"
        :for="IDForLabel"
      >
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
        <span :class="[`${baseClassname}--slider`, { rounded }]" />
        <span :class="`${baseClassname}--fake-label`">{{ label }}</span>
      </label>
    </div>
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
import { color } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  color,
  { name: 'dotColor', type: 'color' },
  { name: 'toggledColor', type: 'color' },
  { name: 'untoggledColor', type: 'color' }
]

export default {
  name: 'nuiToggleInput',
  mixins: [uuID, formField(componentStyleVariables), validationHandler],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-toggle-input'
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    dotColor: {
      type: String,
      default: 'white'
    },
    toggledColor: {
      type: String,
      default: 'green'
    },
    untoggledColor: {
      type: String,
      default: 'red'
    },
    rounded: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiToggleInput.scss" />
