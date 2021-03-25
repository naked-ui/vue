<template>
  <div
    class="radio-input"
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
      class="radio-input__label"
      :disabled="disabled"
      :for="id"
    >
    <input
      class="radio-input__radio"
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
      formnovalidate
    >
      {{ label }}
    </label>
        <div
      class="radio-input__alerts"
      :style="`
        --alerts-color: ${alertsColor ? alertsColor : '--'};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'radio-input__alerts-item'
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
    radioGroup: {
      default: false
    }
  },
  name: 'nRadioInput',
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
      default: 'radio',
      required: true
    },
    name: {
      type: String,
      required: true,
      default: 'radio',
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
      default: 'radio label'
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
      return this.disabled || !!this.radioGroup && this.radioGroup.disabled
    },
    isReadonly () {
      return this.readonly || !!this.radioGroup && this.radioGroup.readonly
    },
    isRequired () {
      return this.required || !!this.radioGroup && this.radioGroup.required
    },
    isChecked(){
      return this.checked || !!this.radioGroup && this.radioGroup.value === this.value
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
      if(this.radioGroup){
        this.radioGroup.validate(e)
      } else {
        this.validate(e)
      }
    }
  }
}

</script>

<style lang="scss" src="./nRadioInput.scss" />
