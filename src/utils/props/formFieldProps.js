import stateProps from '@/utils/props/stateProps'
import styleProps from '@/utils/props/styleProps'
import validationProps from '@/utils/props/validationProps'

const constructedProps = {
  value: null,

  // States

  ...stateProps,
  readonly: {
    type: Boolean,
    default: false
  },

  // UI Text

  label: {
    type: String
  },
  placeholder: {
    type: String
  },

  // Styling

  ...styleProps,

  // Meta

  id: {
    type: String,
    required: true
  },
  form: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String
  },

  // General settings

  counterEnabled: {
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
  tabindex: {
    type: [Number, String],
    default: 0
  },

  // Validation

  ...validationProps
}

export default {
  props: constructedProps
}
