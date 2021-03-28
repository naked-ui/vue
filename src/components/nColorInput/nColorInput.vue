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
      v-if="textValueEnabled"
      pattern="#[a-fA-F\d]+"
      type="text"
      v-model="value"
      :id="id"
      @change="updateColorValue($event)"
      @input="validate()"
      :placeholder="placeholder"
      :disabled="disabled"
      required
      maxlength="7"
      :nui-validation="validationEnabled"
    >
    <input
      type="color"
      v-model="value"
      pattern="#[a-fA-F\d]+"
      @change="printColorValue($event);"
      :autofocus="autofocus"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
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
  data () {
    return {
      value: this.color
    }
  },
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    textValueEnabled: {
      type: Boolean,
      default: true
    },
    baseClassname: {
      type: String,
      default: 'n-form-input'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname,
        'n-color-input'
      ]
    }
  },
  methods: {
    updateColorValue (e) {
    	e.target.value = this.value
    },
    printColorValue (e) {
    	this.value = e.target.value
    }
  }
}

</script>

<style lang="scss" src="./nColorInput.scss" />
