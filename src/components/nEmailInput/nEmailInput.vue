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
      type="email"
      autocorrect="off"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      v-model="value"
      @keyup="countCharacters(); validate()"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
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
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'
import formField from '../../utils/formField'

export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nEmailInput'
}

</script>

<style lang="scss" src="./nEmailInput.scss" />
