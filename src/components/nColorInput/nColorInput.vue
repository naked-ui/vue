<template>
  <div
    class="color-input"
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
      class="color-input__label"
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      type="color"
      v-model="formFieldValue"
      @change="printColorValue($event); validate();"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
    >
    <input
      pattern="#[a-fA-F\d]+"
      type="text"
      v-model="formFieldValue"
      @keyup="updateColorValue($event)"
    >
    <div
      class="color-input__alerts"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'color-input__alerts-item'
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
  mixins: [ namespaceMixin, formField ],
  data () {
    return {
      formFieldValue: this.color
    }
  },
  props: {
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  methods: {
    updateColorValue (e) {
    	e.target.value = this.formFieldValue
    },
    printColorValue (e) {
    	this.formFieldValue = e.target.value
    }
  }
}

</script>

<style lang="scss" src="./nColorInput.scss" />
