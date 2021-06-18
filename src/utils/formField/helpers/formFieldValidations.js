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
  inject: {
    nuiForm: {
      default: false
    }
  },
  data() {
    return {
      validationMessages: [],
      nui: {
        '$$dirty': false,
        '$$error': false
      }
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
    validateCustomRules(target, extendedValue) {
      const customRules = this.includedRules
        ? [...this.rules, ...this.includedRules]
        : this.rules
      const currentErrors = []
      
      for (const rule of customRules) {
        const {
          text: content,
          color = this.colorInvalid,
          forType = null
        } = rule

        if (forType && this.matchRule(forType)) continue

        const value = extendedValue
          ? extendedValue(target)
          : target.dataset.value || target.value

        if (rule.rule(value)) currentErrors.push({ content, color })
      }

      this.validationMessages = currentErrors
      this.setError(currentErrors.length)
      if (currentErrors.length) target.setCustomValidity(currentErrors[0])
    },
    getValidationMessage(error) {
      // custom message provided
      const customMessage = this.customMessages.hasOwnProperty(error)
        ? this.customMessages[error]
        : null
      if (customMessage && customMessage.hasOwnProperty('text')) {
        const { text, color = this.colorInvalid } = customMessage

        return { text, color }
      }

      // use default
      const { color } = customMessage
        ? customMessage
        : { color: this.colorInvalid }
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
    validateFormField(e, extendedValue = null) {
      if (!this.validationEnabled) return

      this.setDirty()
      const { target } = e
      this.resetValidation(e)

      const htmlValid = target.checkValidity() // triggers `invalid` input event
      // TODO custom rules not work on `submit`

      // base validation passed
      if (htmlValid)
        this.validateCustomRules(target, extendedValue)
      else
        this.setError(true)

      console.dir(target.validity)
    },
    onInvalid(e) {
      this.setValidity(e)
    },
    setDirty() {
      this.nui.$$dirty = true
    },
    setError(state) {
      this.nui.$error = !!state

      if (!this.nuiForm) return
      this.$parent.$emit('nui:change-field-error-state', { name: this.name, state: !!state })
    }
  },
  mounted() {
    this.$parent.$on('nui:on-form-submit', this.setDirty)
  },
  beforeDestroy() {
    this.$parent.$off('nui:on-form-submit', this.setDirty)
  }
}
