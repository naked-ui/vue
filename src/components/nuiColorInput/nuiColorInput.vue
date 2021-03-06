<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <input
      v-if="textInputEnabled"
      pattern="#[a-fA-F\d]+"
      type="text"
      @invalid="onInvalid"
      :value="value"
      @input="onChange"
      @blur.capture="validateFormField"
      :id="IDForLabel"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      required
      maxlength="7"
      minlength="7"
      :nui-validation="validationEnabled"
      :data-dirty="nui.$$dirty"
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
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
const componentProps = {
  // UI
  namespace: {
    type: String,
    default: 'nui-color-input'
  },
  value: {
    type: String,
    default: '#000000'
  },
  textInputEnabled: {
    type: Boolean,
    default: true
  }
}
import uuID from '@/utils/uuid'
import formField from '@/utils/formField'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  name: 'nuiColorInput',
  mixins: [uuID, formField()],
  components: {
    nuiValidationAlerts
  },
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
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

<style lang="scss" src="./nuiColorInput.scss" />
