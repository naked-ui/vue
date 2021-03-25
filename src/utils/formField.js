export default {
  data() {
    return {
      formFieldValue: '',
      // validity: 'lelelel',
      totalCharacters: 0,
      validationMessages: []
    }
  },
  props: {
    // Settings
    autocorrect: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    counterEnabled: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    form: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    maxlength: {
      type: [Number, Boolean],
      default: false
    },
    minlength: {
      type: [Number, Boolean],
      default: false
    },
    name: {
      type: String,
      required: true
    },
    pattern: {
      type: String,
      default: '.*S.*'
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    // Styling
    gap: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    padding: {
      type: String
    },
    outlineWidth: {
      type: [String, Number]
    },
    resize: {
      type: String
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    }
  },
  methods: {
    countCharacters() {
      this.totalCharacters = this.formFieldValue.length
    },
    setValidity(e) {
      const formItem = e.target
      this.validationMessages = []
      var validityState = formItem.validity
      if (validityState.valueMissing) {
        formItem.setCustomValidity("This field can't be empty")
        this.validationMessages.push({
          content: '&cross; This field is required',
          color: this.colorInvalid
        })
      } else {
        this.validationMessages = []
      }

      if (validityState.patternMismatch && formItem.type == 'email') {
        formItem.setCustomValidity('Provide valid e-mail address')
        this.validationMessages.push({
          content: '&cross; Provide valid e-mail address',
          color: this.colorInvalid
        })
      }

      if (validityState.patternMismatch && formItem.type == 'tel') {
        formItem.setCustomValidity('Provide valid phone number')
        this.validationMessages.push({
          content: '&cross; Provide valid phone number',
          color: this.colorInvalid
        })
      }

      if (validityState.tooLong) {
        formItem.setCustomValidity('Value is too long')
        this.validationMessages.push({
          content: '&cross; Value is too long',
          color: this.colorInvalid
        })
      }

      if (validityState.tooShort) {
        formItem.setCustomValidity('Value is too short')
        this.validationMessages.push({
          content: '&cross; Value is too short',
          color: this.colorInvalid
        })
      }

      if (formItem.rangeUnderflow) {
        formItem.setCustomValidity('Your value is too low')
      }
      if (formItem.rangeOverflow) {
        formItem.setCustomValidity('Your value is too high')
      } else {
        formItem.setCustomValidity('')
      }
    },
    validate(e) {
      const formItem = e.target
      if (formItem.validity.valid) return
      this.setValidity(e)
    }
  }
  // computed: {
  //   validity () {
  //     const element = document.getElementsByTagName('input')
  //     return element.checkValidity()
  //   }
  // }
}
