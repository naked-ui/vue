<template>
  <div
    class="textarea"
    :nui-namespace="uiNamespace"
    :style="`
      --gap: ${isNaN(gap) ? gap : gap + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --outline-width: ${isNaN(outlineWidth) ? outlineWidth : outlineWidth + 'px'};
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
      --resize: ${resize};
    `"
  >
    <label
      class="textarea__label"
      :for="id"
      :disabled="disabled"
    >
      {{ label }}
    </label>
    <textarea
      v-model="textareaContent"
      @keyup="countCharacters() && spawnValidationMessage()"
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :title="title"
    />
    <div
      class="textarea__validations"
      :style="`
        --validation-color: ${validationColor};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'textarea__validations__message'
        ]"
        v-html="message"
      />
    </div>
    <div
      class="textarea__counter"
      v-if="maxlength && counterEnabled"
    >
      <span>{{ totalCharacters }}</span>
      <slot name="counter-separator">/</slot>
      <span>{{ maxlength }}</span>
    </div>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nTextarea',
  data () {
    return {
      textareaContent: '',
      totalCharacters: 0
    }
  },
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
    counterEnabled: {
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
      default: false
    },
    minlength: {
      type: Number,
      default: false
    },
    pattern: {
      type: String,
      default: '.*\S.*'
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
      default: '12px 16px'
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
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
  methods: {
    countCharacters () {
      this.totalCharacters = this.textareaContent.length
    }
  }
}

</script>

<style lang="scss" src="./nTextarea.scss" />
