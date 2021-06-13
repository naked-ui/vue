import { messages } from '@/utils/validation'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  components: { nValidationAlerts },
  provide() {
    return {
      checkboxGroup: {
        required: this.required,
        readonly: this.readonly,
        disabled: this.disabled,
        value: this.value
      }
    }
  },
  computed: {
    errorMessage() {
      if (this.customMessages.hasOwnProperty('valueMissing')) {
        return this.customMessages['valueMissing']
      }
      return messages.valueMissing
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
    },
    onValidate ({ e, value }) {
      this.validate(e, value)
    }
  },
  mounted() {
    this.$on('nui:validate-checkbox-group', (e) => {
      this.onValidate(e)
    })
    this.$on('nui:set-validity-checkbox-group', (e) => {
      this.setValidity(e)
    })
  },
  destroyed() {
    this.$off('nui:validate-checkbox-group', (e) => {
      this.onValidate(e)
    })
    this.$off('nui:set-validity-checkbox-group', (e) => {
      this.setValidity(e)
    })
  }
}
