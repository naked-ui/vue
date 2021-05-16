import stateProps from '@/utils/props/stateProps'
import styleProps from '@/utils/props/styleProps'
import validationProps from '@/utils/props/validationProps'

const formFieldProps = {
  value: null,
  // UI
  label: {
    type: String
  },
  placeholder: {
    type: String
  },
  counterEnabled: {
    type: Boolean,
    default: false
  },
  // Meta
  id: {
    type: String,
    required: true
  },
  // States
  ...stateProps,
  // Styling
  ...styleProps,
  // Validation
  ...validationProps,
  // Native attributes
  autocomplete: {
    type: String,
    default: ''
  },
  autocorrect: {
    type: String,
    default: null,
    validator: (v) => ['on', 'off'].includes(v)
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  form: {
    type: String,
    default: ''
  },
  list: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  // Tabindex
  tabindex: {
    type: [Number, String],
    default: 0
  },
}

export {
  formFieldProps
}

export default {
  formFieldProps
}
