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
      --resize: ${resize};
      --disabled-opacity: ${disableOpacity};
    `"
  >
    <label
      :for="id"
      :disabled="disabled"
    >
      {{ label }}
    </label>
    <textarea
      v-model="value"
      @keyup="countCharacters(); validate();"
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :title="title"
    />
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
    <div
      class="counter"
      v-if="maxlength && counterEnabled"
    >
      <span>{{ totalCharacters }}</span>
      <slot name="counter-separator">/</slot>
      <span>{{ maxlength }}</span>
    </div>
  </div>
</template>

<script>
import formField from '../../utils/formField'

export default {
  mixins: [formField],
  name: 'nTextarea',
  props: {
    baseClassname: {
      type: String,
      default: 'n-textarea'
    }
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

<style lang="scss" src="./nTextarea.scss" />
