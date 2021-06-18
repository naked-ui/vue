import { messages } from '@/utils/validation'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  components: { nuiValidationAlerts },
  provide() {
    return {
      toggleGroup: {
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
      // toggle(-group) has only one validation state: `required`
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
      // triggered by any toggle-input child on value change
      if (this.value.includes(value))
        this.selectedValue = this.value.filter((v) => v !== value)
      else this.selectedValue = this.value.concat([value])
      this.checkValidity()
      this.$emit('input', this.selectedValue)
    },
    onValidate({ e, value }) {
      this.validate(e, value)
    }
  },
  mounted() {
    this.$on('nui:validate-toggle-group', (e) => {
      this.onValidate(e)
    })
    this.$on('nui:set-validity-toggle-group', (e) => {
      this.setValidity(e)
    })
  },
  destroyed() {
    this.$off('nui:validate-toggle-group', (e) => {
      this.onValidate(e)
    })
    this.$off('nui:set-validity-toggle-group', (e) => {
      this.setValidity(e)
    })
  }
}
