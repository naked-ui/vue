import { messages as defaultMessages } from '../../validation/index'

function isObject(obj) {
  return obj === Object(obj)
}

export default {
  props: {
    rules: {
      type: Array,
      default: () => [] // e.g. (val) => !!val || 'This field is required'
    },
    customMessages: {
      // custom error messages for default rules
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      validationMessages: []
    }
  },
  methods: {
    pushValidationMessage(message) {
      this.validationMessages.push({
        content: message,
        color: this.colorInvalid
      })
    },
    validateCustomRules(target) {
      let hasErrors = false
      // validate custom rules
      // TODO use `this.value` to allow validate non-primitive values
      this.rules.forEach((rule) => {
        const message = rule(target.value) // pass `value` to custom rule argument
        if (message !== true) {
          this.pushValidationMessage(message)
          hasErrors = message
        }
      })
      if (hasErrors) target.setCustomValidity(hasErrors) // report `customError` only once
    },
    getValidationMessage(error, field) {
      // custom message provided
      if (this.customMessages.hasOwnProperty(error)) {
        return this.customMessages[error]
      }
      // use default
      const msg = defaultMessages[error]

      if (isObject(msg)) return msg[field.type] || msg.default
      return msg || defaultMessages.default
    },
    setValidity(e) {
      if (!this.validationEnabled) return
      // handle `invalid` input event
      const {
        target: { validity },
        target
      } = e

      if (validity.customError || validity.valid) return
      this.resetValidation(e)

      for (let errorType in validity) {
        const hasError = validity[errorType]
        if (hasError) {
          const msg = this.getValidationMessage(errorType, target)
          this.pushValidationMessage(msg)
        }
      }
    },
    resetValidation(e) {
      e.target.setCustomValidity('')
      this.validationMessages = []
    },
    validateFormField(e) {
      if (!this.validationEnabled) return

      const { target } = e
      // const target = this.$refs.input
      // clear validations every time
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
