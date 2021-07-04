
const name = {
  type: [String, Number],
  // required: true
}
const role = {
  type: String,
  default: 'button'
}
const type = {
  type: String,
  default: 'button'
}
const tabindex = {
  type: [Number, String]
}

export { role, tabindex, type }

export default { role, tabindex, type }
