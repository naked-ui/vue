export default {
  validationEnabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  max: {
    type: [Number, String],
    default: null
  },
  min: {
    type: [Number, String],
    default: null
  },
  maxlength: {
    type: [Number, String],
    default: null
  },
  minlength: {
    type: [Number, String],
    default: null
  },
  pattern: {
    type: String,
    // default: '.*\\S.*'
    default: null
  },
  colorInvalid: {
    type: String,
    default: 'red'
  },
  colorValid: {
    type: String,
    default: 'green'
  },
}
