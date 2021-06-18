const validationEnabled = {
  type: Boolean,
  default: false
}
const required = {
  type: Boolean,
  default: false
}
const max = {
  type: [Number, String],
  default: null
}
const min = {
  type: [Number, String],
  default: null
}
const maxlength = {
  type: [Number, String],
  default: null
}
const minlength = {
  type: [Number, String],
  default: null
}
const pattern = {
  type: String,
  // default: '.*\\S.*'
  default: null
}
const colorInvalid = {
  type: String,
  default: 'red'
}
const colorValid = {
  type: String,
  default: 'green'
}

export {
  validationEnabled,
  required,
  max,
  min,
  maxlength,
  minlength,
  pattern,
  colorInvalid,
  colorValid
}
export default {
  validationEnabled,
  required,
  max,
  min,
  maxlength,
  minlength,
  pattern,
  colorInvalid,
  colorValid
}
