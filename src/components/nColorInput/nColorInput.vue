<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <input
      v-if="textValueEnabled"
      pattern="#[a-fA-F\d]+"
      type="text"
      @invalid="onInvalid"
      :value="value"
      @input="onChange"
      @blur.capture="validateFormField"
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      required
      maxlength="7"
      minlength="7"
      :nui-validation="validationEnabled"
    />
    <input
      type="color"
      :value="value"
      pattern="#[a-fA-F\d]+"
      @invalid="onInvalid"
      @change="onChange"
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :disabled="disabled || readonly"
      :name="name"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
    />
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  mixins: [formField()],
  components: {
    nValidationAlerts
  },
  props: {
    value: {
      type: String,
      default: '#000000'
    },
    textValueEnabled: {
      type: Boolean,
      default: true
    },
    baseClassname: {
      type: String,
      default: 'n-form-field'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'n-color-input']
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
      this.validateFormField(e)
    }
  }
}
</script>

<style lang="scss" src="./nColorInput.scss" />
