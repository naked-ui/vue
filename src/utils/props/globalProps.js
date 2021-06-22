const dir = {
  type: String,
  validator: (v) => ['auto', 'ltr', 'rtl'].includes(v)
}
const draggable = {
  type: Boolean,
  default: false
}
const enterkeyhint = {
  type: String
}
const id = {
  type: String
}
const tabindex = {
  type: [Number, String],
  default: 0
}
const title = {
  type: [String, Number],
}
const translate = {
  type: String
}

export { tabindex, title }

export default { tabindex, title }