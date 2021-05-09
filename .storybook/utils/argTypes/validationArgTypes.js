export default {
  validationEnabled: {
    control: 'boolean',
    defaultValue: true
  },
  required: {
    control: 'boolean'
  },
  pattern: {
    control: 'text'
  },
  minlength: {
    control: 'number'
  },
  maxlength: {
    control: 'number'
  },
  min: {
    control: 'number'
  },
  max: {
    control: 'number'
  },
  customMessages: {
    control: 'object'
  },
  rules: {
    control: 'array'
  },
  colorValid: {
    control: 'color'
  },
  colorInvalid: {
    control: 'color'
  },
}
