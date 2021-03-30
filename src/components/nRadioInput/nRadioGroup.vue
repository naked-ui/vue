<template>
  <div class="radio-group" :style="groupStyle">
    <slot></slot>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'

export default {
  mixins: [formField],
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
      type: Number
    }
  },
  computed: {
    groupStyle() {
      return [
        ...this.style,
        {
          '--spacing': this.calculateCssSize(this.spacing),
          '--color': this.color
        }
      ]
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
