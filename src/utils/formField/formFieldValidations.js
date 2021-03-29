export default {
  data() {
    return {
      validationMessages: []
    }
  },
  methods: {
    pushValidationMessage(target, message) {
      target.setCustomValidity(message)
      if (this.validationMessages.includes(message) === false)
        this.validationMessages.push({
          content: message,
          color: this.colorInvalid
        })
    },
    validateFormField() {
      if (!this.validationEnabled) return
      this.validationMessages = []
      let formItem = document.getElementById(this.id) // why not pass input `event` as method argument?
      var validityState = formItem.validity

      if (validityState.valueMissing) {
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

      if (!validityState.patternMismatch && formItem.type == 'text') {
        this.validationMessages = []
      }

      if (validityState.typeMismatch && formItem.type == 'url') {
        let alert = 'Provide valid URL'
        this.pushValidationMessage(formItem, alert)
      }

      if (validityState.tooLong) {
        let alert = 'Value is too long'
        this.pushValidationMessage(formItem, alert)
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
      } else {
        formItem.setCustomValidity('')
      }

      console.dir(validityState)
    }
  }
}
