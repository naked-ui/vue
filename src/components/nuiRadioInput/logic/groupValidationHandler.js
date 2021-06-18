import { messages } from '@/utils/validation'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  components: { nuiValidationAlerts },
  provide() {
    return {
      radioGroup: {
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
    setValidity(e) {
      // radio(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously,
      // but the result can be only one
      this.validationMessages = [
        {
          content: this.errorMessage, // or custom message
          color: this.colorInvalid
        }
      ]
    },
    validate(e) {
      // triggered by any radio-input child on value change
      this.$emit('input', e.target.value)
      this.validationMessages = []
    }
  },
  mounted() {
    this.$on('nui:validate-radio-group', (e) => {
      this.validate(e)
    })
    this.$on('nui:set-validity-radio-group', (e) => {
      this.setValidity(e)
    })
  },
  destroyed() {
    this.$off('nui:validate-radio-group', (e) => {
      this.validate(e)
    })
    this.$off('nui:set-validity-radio-group', (e) => {
      this.setValidity(e)
    })
  }
}
