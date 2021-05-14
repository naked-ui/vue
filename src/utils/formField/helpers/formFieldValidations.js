import { messages as defaultMessages } from '../../validation/index'

const isDOM = el => el instanceof Element

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
        const { text: content, color = this.colorInvalid, forType = null } = rule
        if (this.matchRule(forType)) continue
        const value = isDOM(target) ? target.value : target
        if (rule.rule(value)) currentErrors.push({ content, color })
      }

      this.validationMessages = currentErrors
      if (currentErrors.length && isDOM(target)) target.setCustomValidity(currentErrors[0])
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
      if (!e || !isDOM(e.target)) return this.validateCustomRules(e)

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
