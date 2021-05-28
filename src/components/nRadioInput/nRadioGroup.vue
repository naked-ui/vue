<template>
  <div class="nui-radio-group nui-form-field" :style="style">
    <slot></slot>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import { color, spacing } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [color, spacing]

export default {
  mixins: [formField(componentStyleVariables)],
  name: 'nRadioGroup',
  components: { nValidationAlerts },
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    // group attrs
    color: {
      type: String,
      default: null
    },
    spacing: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    setValidity() {
      // radio(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously,
      // but the result can be only one
      this.validationMessages = [
        {
          content: '&cross; This field is required', // or custom message
          color: this.colorInvalid
        }
      ]
    },
    validate(e) {
      // triggered by any radio-input child on value change
      this.$emit('input', e.target.value)
      this.validationMessages = []
    }
  }
}
</script>

<style lang="scss" src="./nRadioGroup.scss" />
