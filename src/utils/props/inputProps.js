const autocapitalize = {
  type: String
}
const contenteditable = {
  type: Boolean,
  default: true
}
const counterEnabled = {
  type: Boolean,
  default: false
}
const autofocus = {
  type: Boolean,
  default: false
}
const autocorrect = {
  type: String,
  default: null,
  validator: (v) => ['on', 'off'].includes(v)
}
const form = {
  type: [String, Number],
}
const inputmode = {
  type: String
}
const label = {
  type: String
}
const max = {
  type: [Number, String]
}
const maxlength = {
  type: [Number, String]
}
const min = {
  type: [Number, String]
}
const minlength = {
  type: [Number, String]
}
const placeholder = {
  type: String
}
const spellcheck = {
  type: Boolean
}
const value = {
  type: [Number, String, Array]
}

export {
  autocapitalize,
  autofocus,
  autocorrect,
  contenteditable,
  counterEnabled,
  form,
  inputmode,
  label,
  max,
  maxlength,
  min,
  minlength,
  placeholder,
  spellcheck,
  value
}

export default {
  autocapitalize,
  autofocus,
  autocorrect,
  contenteditable,
  counterEnabled,
  form,
  inputmode,
  label,
  max,
  maxlength,
  min,
  minlength,
  placeholder,
  spellcheck,
  value
}
