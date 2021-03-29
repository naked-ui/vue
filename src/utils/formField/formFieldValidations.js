const defaults = {
  patterns: {
    email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
    url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
    number: /^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
    time: /^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,
    month: /^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/
  },
  messages: {
    valueMissing: {
      checkbox: 'This field is required.',
      radio: 'Please select a value.',
      select: 'Please select a value.',
      'select-multiple': 'Please select at least one value.',
      default: '&cross; This field is required.'
    },
    typeMismatch: {
      email: 'Please provide a valid E-mail',
      url: 'Please provide a valid URL',
      default: 'Please provide a valid value'
    },
    patternMismatch: {
      email: 'Please enter a valid email address.',
      url: 'Please enter a URL.',
      number: 'Please enter a number',
      color: 'Please match the following format: #rrggbb',
      date: 'Please use the YYYY-MM-DD format',
      time: 'Please use the 24-hour time format. Ex. 23:00',
      month: 'Please use the YYYY-MM format',
      default: 'Please match the requested format.'
    },
    badInput: 'Please provide a valid value.',
    stepMismatch: 'Your value is out of range',
    rangeUnderflow: 'Your value is too low',
    rangeOverflow: 'Your value is too high',
    tooLong: 'Your value is too low',
    tooShort: 'Your value is too short',
    default: 'There was an error with this field.'
  }
}

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
      default: () => {}
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
      // let hasErrors = false
      // validate custom rules
      this.rules.forEach((rule) => {
        const message = rule(this.value) // pass `value` to custom rule argument
        if (message !== true) {
          this.pushValidationMessage(message)
          target.setCustomValidity(message)
          // hasErrors = true
        }
      })
      // if (hasErrors) target.reportValidity()
    },
    getValidationMessage(error, field) {
      // custom message provided
      if (this.customMessages.hasOwnProperty(error)) {
        return this.customMessages[error]
      }
      // use default
      const msg = defaults.messages[error]
      if (isObject(msg)) return msg[field.type] || msg.default
      return msg || msg.default
    },
    setValidity(e) {
      // handle `invalid` input event
      const {
        target: { validity },
        target
      } = e

      for (let error in validity) {
        if (error === 'customError') continue
        const val = validity[error]
        if (val) {
          const msg = this.getValidationMessage(error, target)
          this.pushValidationMessage(msg)
        }
      }
    },
    validateFormField(e) {
      if (!this.validationEnabled) return
      let formItem = e.target
      // clear validations every time
      formItem.setCustomValidity('')
      this.validationMessages = []

      formItem.checkValidity() // triggers `invalid` input event

      if (formItem.validity.valid) {
        // base validation passed
        this.validateCustomRules(formItem) // check custom validation rules
      }
      console.dir(formItem.validity)
    }
  }
}
