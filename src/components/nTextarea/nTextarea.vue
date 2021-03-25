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
      v-model="formFieldContent"
      @keyup="countCharacters(); validate();"
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
      class="textarea__alerts"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'textarea__alerts-item'
        ]"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
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
import formField from '../../utils/formField'

export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nTextarea'
}

</script>

<style lang="scss" src="./nTextarea.scss" />
