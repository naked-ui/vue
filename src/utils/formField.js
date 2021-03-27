export default {
  data () {
    return {
      totalCharacters: 0,
      validationMessages: []
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
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
      default: '.*\S.*'
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
    validInputAlertEnabled: {
      type: Boolean,
      default: false
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
    },
    disableOpacity: {
      type: String
    }
  },
  methods: {
    countCharacters () {
      this.totalCharacters = this.value.length
    },
    pushValidationMessage(target, message) {
      target.setCustomValidity(message)
      if (this.validationMessages.includes(message) === false) this.validationMessages.push({
        content: message,
        color: this.colorInvalid
      })
    },
    validate () {
      let formItem = document.getElementById(this.id)
      var validityState = formItem.validity
      
      if(validityState.valueMissing) {
        let alert = '&cross; This field is required'
        this.pushValidationMessage(formItem, alert)
      } else {
        this.validationMessages = []
      }

      if (validityState.patternMismatch && formItem.type == 'email') {
        let alert = 'Provide valid e-mail address'
        this.pushValidationMessage(formItem, alert)
      } 

      if (validityState.patternMismatch && formItem.type == 'tel') {
        let alert = 'Provide valid phone number'
        this.pushValidationMessage(formItem, alert)
      }

      if (validityState.patternMismatch && formItem.type == 'text') {
        let alert = 'Provide valid color value'
        this.pushValidationMessage(formItem, alert)
      }

      if (validityState.tooLong) {
        let alert = 'Value is too long'
        pushValidationMessage(formItem, alert)
      }

      if (validityState.tooShort) {
        let alert = 'Value is too short'
        this.pushValidationMessage(formItem, alert)
      }

      if (formItem.rangeUnderflow) {
        let alert = 'Your value is too low'
        this.pushValidationMessage(formItem, alert)
      }
      if (formItem.rangeOverflow) {
        let alert = 'Your value is too high'
        this.pushValidationMessage(formItem, alert)
      }
      
      else {
        formItem.setCustomValidity('');
      }

      console.dir(validityState)
    }
  }
}
