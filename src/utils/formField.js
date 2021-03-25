export default {
  data() {
    return {
      formFieldContent: '',
      // validity: 'lelelel',
      totalCharacters: 0,
      validationMessages: []
    }
  },
  props: {
    value: null,
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
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, Boolean],
      default: false
    },
    minlength: {
      type: [Number, Boolean],
      default: false
    },
    pattern: {
      type: String,
      default: '.*S.*'
    },
    placeholder: {
      type: String,
      default: ''
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
      type: String,
      default: ''
    },
    // Styling
    gap: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    },
    alertsColor: String
  },
  computed: {
    inputEvents() {
      return {
        input: (e) => this.$emit('input', e.target.value),
        keyup: (e) => {
          this.countCharacters(e)
          this.validate(e)
        }
      }
    },
    inputProps() {
      return {
        // value: this.value
      }
    }
  },
  methods: {
    countCharacters(e) {
      this.totalCharacters = e.target.value.length
    },
    validate(e) {
      const formItem = e.target
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

      console.dir(validityState)
    }
  }
  // computed: {
  //   validity () {
  //     const element = document.getElementsByTagName('input')
  //     return element.checkValidity()
  //   }
  // }
}
