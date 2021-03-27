<template>
  <div
    class="form-field"
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
      class="form-field__label"
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      type="date"
      v-model="formFieldValue"
      @keyup="countCharacters(); validate()"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :max="max"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      class="form-field__input-box"
    >
    <div
      class="form-field__alerts"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'form-field__alerts-item'
        ]"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
      />
    </div>
    <div
      class="form-field__counter"
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
import formField from '../../utils/formField'

export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nTextInput'
}

</script>

<style lang="scss" src="./nDateInput.scss" />
