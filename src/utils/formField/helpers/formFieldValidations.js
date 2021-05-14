import { messages as defaultMessages } from '../../validation/index'

export default {
  props: {
    rules: {
      type: Array,
      default: () => []
    },
    customMessages: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      validationMessages: []
    }
  },
  computed: {
    isInvalid() {
      return this.validationMessages.length
    },
    isValid() {
      return !this.validationMessages.length
    }
  },
  methods: {
    validateCustomRules(target) {
      const currentErrors = []
      // validate custom rules
      // TODO use `this.value` to allow validate non-primitive values
      for (const rule of this.rules) {
        const { text: content, color = this.colorInvalid } = rule
        if (rule.rule(target.value)) currentErrors.push({ content, color })
      }

      this.validationMessages = currentErrors
      if (currentErrors && currentErrors.length) target.setCustomValidity(currentErrors[0])
    },
    getValidationMessage(error) {
      // custom message provided
      const customMessage = this.customMessages.hasOwnProperty(error) ? this.customMessages[error] : null
      if (customMessage && customMessage.hasOwnProperty('text')) {
        const { text, color = this.colorInvalid } = customMessage

        return { text, color }
      }

      // use default
      const { color } = customMessage ? customMessage : { color: this.colorInvalid }
      return { text: defaultMessages[error] || defaultMessages.default, color }
    },
    setValidity(e) {
      if (!this.validationEnabled) return
      // handle `invalid` input event
      const {
        target: { validity }
      } = e

      const currentErrors = []

      if (validity.customError || validity.valid) return
      this.resetValidation(e)

      for (let errorType in validity) {
        const hasError = validity[errorType]
        if (hasError) {
          const { text: content, color } = this.getValidationMessage(errorType)
          currentErrors.push({ content, color })
        }
      }

      this.validationMessages = currentErrors
    },
    resetValidation(e) {
      e.target.setCustomValidity('')
      this.validationMessages = []
    },
    validateFormField(e) {
      if (!this.validationEnabled) return

      const { target } = e
      this.resetValidation(e)

      const htmlValid = target.checkValidity() // triggers `invalid` input event
      // TODO custom rules not work on `submit`
      // base validation passed
      if (htmlValid) {
        // check custom validation rules
        this.validateCustomRules(target)
      }

      console.dir(target.validity)
    },
    onInvalid(e) {
      this.setValidity(e)
    }
  }
}
