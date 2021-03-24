<template>
  <div
    class="text-input"
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
      class="text-input__label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :readonly="readonly"
      :title="title"
      :type="type"
    >
    <div
      v-if="validationMessages.length > 0"
      class="text-input__validations"
      :style="`
        --validation-color: ${validationColor};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
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

export default {
  mixins: [namespaceMixin],
  name: 'nTextInput',
  props: {
    // Settings props
    autocorrect: {
      type: String,
      default: 'on'
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
      default: ''
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
  },
}

</script>

<style lang="scss" src="./TextInput.scss" />
