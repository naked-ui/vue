import stateProps from '@/utils/props/stateProps'
import styleProps from '@/utils/props/styleProps'
import validationProps from '@/utils/props/validationProps'

const formFieldProps = {
  value: null,

  // States

  ...stateProps,

  // UI Text

  label: {
    type: String
  },
  placeholder: {
    type: String
  },

  // Meta

  id: {
    type: String,
    required: true
  },
  form: {
    type: String
  },

  // Styling

  ...styleProps,

  // General settings

  counterEnabled: {
    type: Boolean,
    default: false
  },

  // Native attributes

  autocomplete: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  autocorrect: {
    type: String,
    default: null,
    validator: (v) => ['on', 'off'].includes(v)
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

  // Validation

  ...validationProps
}

export {
  formFieldProps
}

export default {
  formFieldProps
}
