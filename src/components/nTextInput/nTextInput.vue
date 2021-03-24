<template>
  <div
    class="text-input"
    :nui-namespace="uiNamespace"
    :style="`
      --gap: ${isNaN(gap) ? gap : gap + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --outline-width: ${
        isNaN(outlineWidth) ? outlineWidth : outlineWidth + 'px'
      };
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
    `"
  >
    <label class="text-input__label" :for="id">
      {{ label }}
    </label>
    <input
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      :title="title"
      :type="type"
      :value="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :max="max"
      :min="min"
      :required="required"
      :pattern="pattern"
      @input="$emit('input', $event.target.value)"
      v-on="$_validationEvents"
      formnovalidate
    />
    <div
      v-if="validationErrors.length"
      class="text-input__validations"
      :style="`
        --validation-color: ${validationColor};
      `"
    >
      <span
        v-for="(message, index) in validationErrors"
        :key="index"
        :class="[
          'text-input__validations__message',
          `text-input__validations__message--${valid}`
        ]"
        v-html="message"
      />
    </div>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'
import inputValidation from '../../utils/inputValidation'

export default {
  mixins: [namespaceMixin, inputValidation],
  name: 'nTextInput',
  props: {
    valid: {
      type: String,
      default: ''
    },
    value: String,
    // Settings props
    autocorrect: {
      type: String,
      default: 'on'
    },
    autocomplete: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    // Styling props
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
      default: '0 16px'
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    // Validation
    validationMessages: {
      type: Array,
      default: () => []
    },
    validationColor: {
      type: String,
      default: 'red'
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" src="./TextInput.scss" />
