
const colorInvalid = {
  type: String,
  default: 'red'
}
const colorValid = {
  type: String,
  default: 'green'
}
const max = {
  type: [Number, String],
  default: null
}
const maxlength = {
  type: [Number, String],
  default: null
}
const min = {
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
const required = {
  type: Boolean,
  default: false
}
const validationEnabled = {
  type: Boolean,
  default: false
}

export {
  colorInvalid,
  colorValid,
  max,
  maxlength,
  min,
  minlength,
  pattern,
  required,
  validationEnabled
}
export default {
  colorInvalid,
  colorValid,
  max,
  maxlength,
  min,
  minlength,
  pattern,
  required,
  validationEnabled
}
