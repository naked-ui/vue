<template>
<div
    class="checkbox-input"
    :nui-namespace="uiNamespace"
     :style="`
      --gap: ${isNaN(gap) ? gap : gap + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --outline-width: ${isNaN(outlineWidth) ? outlineWidth : outlineWidth + 'px'};
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
    `"
  >
    <label
      class="checkbox-input__label"
      :disabled="disabled"
      :for="id"
    >
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
      formnovalidate
    >
      {{ label }}
    </label>
        <div
      class="checkbox-input__alerts"
      :style="`
        --alerts-color: ${alertsColor ? alertsColor : '--'};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'checkbox-input__alerts-item'
        ]"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
      />
    </div>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'
import formField from '../../utils/formField'
export default {
  mixins: [namespaceMixin, formField],
  inject: {
    checkboxGroup: {
      default: false
    }
  },
  name: 'nCheckboxInput',
    props: {
    // input attrs
    value: null,
    checked: {
      type: Boolean,
      default: false
    },
    disabled: { // ???
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'checkbox',
      required: true
    },
    name: {
      type: String,
      required: true,
      default: 'checkbox',
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    // Settings
    counterEnabled: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'checkbox label'
    },
    alertsColor: String,
    // Styling
    gap: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    },
  },
  computed:{
    isDisabled () {
      return this.disabled || !!this.checkboxGroup && this.checkboxGroup.disabled
    },
    isReadonly () {
      return this.readonly || !!this.checkboxGroup && this.checkboxGroup.readonly
    },
    isRequired () {
      return this.required || !!this.checkboxGroup && this.checkboxGroup.required
    },
    isChecked(){
      // if (this.checked) return this.checked
      if (this.checkboxGroup) {
        const { value, multiple } = this.checkboxGroup
        if (multiple) {
          return value.includes(this.value)
        }
        return value == this.value
      }
      return false
    }
  },
  methods: {
    $setValidity(e) {
      if (this.checkboxGroup) {
        this.checkboxGroup.checkValidity()
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.checkboxGroup) {
        // send value to compare equal values (e.g. checkbox `value` attribute converts numers to string)
        this.checkboxGroup.validate(e, this.value)
      } else {
        this.validate(e)
      }
    }
  }
}
</script>