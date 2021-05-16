<template>
  <div class="nui-checkbox-group nui-form-field" :style="style" :busy="busy">
    <slot></slot>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import formField from '@/utils/formField/index.js'
import { messages } from '@/utils/validation'
import { color, spacing } from '@/utils/styleVariables/helpers/variables'

const customStyleVariables = [color, spacing]

export default {
  mixins: [formField(customStyleVariables)],
  name: 'nCheckboxGroup',
  components: { nValidationAlerts },
  provide() {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    // input attrs
    color: {
      type: String,
      default: null
    },
    spacing: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      selectedValue: []
    }
  },
  computed: {
    errorMessage() {
      if (this.customMessages.hasOwnProperty('valueMissing')) {
        return this.customMessages['valueMissing']
      }
      return messages.valueMissing.default
    }
  },
  methods: {
    setValidity() {
      // checkbox(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously,
      // but the result can be only one
      this.validationMessages = [
        {
          content: this.errorMessage, // or custom message
          color: this.colorInvalid
        }
      ]
    },
    checkValidity() {
      if (this.required && !this.selectedValue.length) return this.setValidity()
      this.validationMessages = []
    },
    validate(e, value) {
      // triggered by any checkbox-input child on value change
      if (this.value.includes(value))
        this.selectedValue = this.value.filter((v) => v !== value)
      else this.selectedValue = this.value.concat([value])
      this.checkValidity()
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

<style lang="scss" src="./nCheckboxGroup.scss" />
