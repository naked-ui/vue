const defaultMessages = (type, field) => {
  const messages = {
    valueMissing: () => 'Please fill out this field.',
    typeMismatch: (field) => {
      // Email
      if (field.type === 'email') return 'Please enter an email address.'

      // URL
      if (field.type === 'url') return 'Please enter a URL.'
      return 'Please enter an valid data.'
    },
    tooShort: (field) =>
      'Please lengthen this text to ' +
      field.getAttribute('minLength') +
      ' characters or more. You are currently using ' +
      field.value.length +
      ' characters.',
    tooLong: (field) =>
      'Please shorten this text to no more than ' +
      field.getAttribute('maxLength') +
      ' characters. You are currently using ' +
      field.value.length +
      ' characters.',
    badInput: () => 'Please enter a number.',
    stepMismatch: () => 'Please select a valid value.',
    rangeOverflow: (field) =>
      'Please select a value that is no more than ' +
      field.getAttribute('max') +
      '.',
    rangeUnderflow: (field) =>
      'Please select a value that is no less than ' +
      field.getAttribute('min') +
      '.',
    patternMismatch: (field) => {
      // If pattern info is included, return custom error
      if (field.title) return field.getAttribute('title')
      // Otherwise, generic error
      return 'Please match the requested format.'
    },
    default: () => 'The value you entered for this field is invalid.'
  }
  return (messages[type] || messages['default'])(field)
}

// Validate the field
const hasError = function (field) {
  // Don't validate submits, buttons, file and reset inputs, and disabled fields
  if (
    field.disabled ||
    field.type === 'file' ||
    field.type === 'reset' ||
    field.type === 'submit' ||
    field.type === 'button'
  )
    return false

  // Get validity
  const validity = field.validity

  // If valid, return null
  if (validity.valid) return false
  return true
}

// Show an error message
var showError = function (field, error) {
  // Add error class to field
  field.classList.add('error')

  // If the field is a radio button and part of a group, error all and get the last item in the group
  if (field.type === 'radio' && field.name) {
    var group = document.getElementsByName(field.name)
    if (group.length > 0) {
      for (var i = 0; i < group.length; i++) {
        // Only check fields in current form
        if (group[i].form !== field.form) continue
        group[i].classList.add('error')
      }
      field = group[group.length - 1]
    }
  }

  // Get field id or name
  var id = field.id || field.name
  if (!id) return

  // Check if error message field already exists
  // If not, create one
  var message = field.form.querySelector('.error-message#error-for-' + id)
  if (!message) {
    message = document.createElement('div')
    message.className = 'error-message'
    message.id = 'error-for-' + id

    // If the field is a radio button or checkbox, insert error after the label
    var label
    if (field.type === 'radio' || field.type === 'checkbox') {
      label =
        field.form.querySelector('label[for="' + id + '"]') || field.parentNode
      if (label) {
        label.parentNode.insertBefore(message, label.nextSibling)
      }
    }

    // Otherwise, insert it after the field
    if (!label) {
      field.parentNode.insertBefore(message, field.nextSibling)
    }
  }

  // Add ARIA role to the field
  field.setAttribute('aria-describedby', 'error-for-' + id)

  // Update error message
  message.innerHTML = error

  // Show error message
  message.style.display = 'block'
  message.style.visibility = 'visible'
}

// Remove the error message
var removeError = function (field) {
  // Remove error class to field
  field.classList.remove('error')

  // Remove ARIA role from the field
  field.removeAttribute('aria-describedby')

  // If the field is a radio button and part of a group, remove error from all and get the last item in the group
  if (field.type === 'radio' && field.name) {
    var group = document.getElementsByName(field.name)
    if (group.length > 0) {
      for (var i = 0; i < group.length; i++) {
        // Only check fields in current form
        if (group[i].form !== field.form) continue
        group[i].classList.remove('error')
      }
      field = group[group.length - 1]
    }
  }

  // Get field id or name
  var id = field.id || field.name
  if (!id) return

  // Check if an error message is in the DOM
  var message = field.form.querySelector('.error-message#error-for-' + id + '')
  if (!message) return

  // If so, hide it
  message.innerHTML = ''
  message.style.display = 'none'
  message.style.visibility = 'hidden'
}

// todo custom validation rules: (match field)
// todo bind multiple handlers to `input` events

const defaultRules = {
  // eg password match
  match: function (field, matchedWith = '[data-match]') {
    let parentNode = document,
      matchField
    const selector = field.getAttribute(matchedWith)
    if (!selector) return false

    if (field.form) {
      parentNode = field.form
    }
    matchField = parentNode.querySelector(selector)
    if (!matchField) return false
    return field.value !== matchField.value
  },
  // just for testing for one field
  onlyLarge: function (field) {
    return /^[A-Z]*$/.test(field.value)
  }
}

export default {
  props: {
    validationRules_: {
      type: Object,
      default: () => ({}),
      required: false
    },
    validationErrorMessages_: {
      type: Object,
      default: () => ({})
    },
    validationEvents: {
      type: [Array, String],
      default: ['blur', 'input']
    },
    errorsPopup: {
      type: Boolean,
      default: true
    },
    errorsMessage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      err: [],
      validationErrors: [],
      validationRules: { onlyLarge: defaultRules.onlyLarge },
      validationErrorMessages: { onlyLarge: 'Only Large allowed!' }
    }
  },
  computed: {
    $_validationEvents(e) {
      const events = this.validationEvents
      const validate = this.$_validate
      let handlers
      if (Array.isArray(events)) {
        handlers = events.reduce((acc, e) => {
          acc[e] = this.$_validate
          return acc
        }, {})
      } else {
        handlers = { [events]: validate }
      }
      console.error(e, handlers)
      return handlers
    }
  },
  methods: {
    $_validate(e) {
      const { target } = e
      // this.validationErrors = []
      // console.log(this.validationErrors)
      target.setCustomValidity('') // resets custom errors
      target.checkValidity() // tigger built-in validation
      const errors = this.$_validateCustom(target)

      if (!target.validity.valid || errors.length) {
        this.$_setErrors(target, errors)
        target.reportValidity() // tigger errors
      }
    },
    $_getValidationMessage(type, field) {
      const msghandler = this.validationErrorMessages[type]
      if (!msghandler) return defaultMessages(type, field)
      if (typeof msghandler === 'function') {
        return msghandler(field)
      }
      if (typeof msghandler === 'string') {
        return msghandler
      }
      return defaultMessages(type, field)
    },
    $_validateCustom(field) {
      const errors = []
      for (let [type, handler] of Object.entries(this.validationRules)) {
        if (typeof handler !== 'function') continue
        if (!handler(field)) {
          const msg = this.$_getValidationMessage(type)
          errors.push(msg)
        }
      }
      return errors
    },
    $_setErrors(target, customErrors = []) {
      const errors = customErrors.slice(0)
      for (let key in target.validity) {
        if (key === 'valid' || key === 'customError') continue
        const val = target.validity[key]
        if (val) {
          const msg = this.$_getValidationMessage(key, target)
          errors.push(msg)
        }
      }
      if (this.errorsMessage) {
        // this.validationErrors = errors.slice(0)
      }
      if (this.errorsPopup) {
        errors.forEach((msg) => {
          target.setCustomValidity(msg)
        })
      }
    }
  }
}
