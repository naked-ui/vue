<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      <div :class="`${namespace}__switch`">
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
        <span :class="[`${namespace}__handle`, { rounded }]" />
      </div>
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
import {
  background,
  color,
  width,
  height
} from '@/utils/styleVariables/helpers/variables'
import styleProps from '@/utils/props/styleProps'

const componentStyleVariables = [
  background,
  color,
  width,
  height,
  { name: 'labelColor', type: 'color' },
  { name: 'backgroundToggled', type: 'color' },
  { name: 'handleContent0', type: 'string' },
  { name: 'handleContent1', type: 'string' }
]

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-toggle'
  },
  checked: {
    type: Boolean,
    default: false
  },
  labelColor: {
    type: String
  },
  backgroundToggled: {
    type: String
  },
  rounded: {
    type: Boolean,
    default: true
  },
  handleContent0: {
    type: String,
    default: ''
  },
  handleContent1: {
    type: String,
    default: ''
  },
  ...styleProps
}

export default {
  name: 'nuiToggle',
  mixins: [uuID, formField(componentStyleVariables), validationHandler],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-checkable-input', 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiToggle.scss" />
