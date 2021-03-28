<template>
  <div
    :class="componentClasses"
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
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      type="url"
      autocorrect="off"
      v-model="value"
      @keyup="validate()"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
    >
    <div
      class="n-validation-alerts"
      v-if="validationMessages.length > 0"
    >
      <span
        class="n-validation-alert"
        v-for="(message, index) in validationMessages"
        :key="index"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
      />
    </div>
  </div>
</template>

<script>
import formField from '../../utils/formField'

export default {
  mixins: [formField],
  name: 'nUrlInput',
  props: {
    baseClassname: {
      type: String,
      default: 'n-url-input'
    },
    httpRequired: {
      type: Boolean,
      default: false
    },
    httpsRequired: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    }
  },
}

</script>
