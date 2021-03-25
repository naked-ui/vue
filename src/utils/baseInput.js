// base props for all inputs
export default {
  props: {
    value: null,
    // Settings
    autocorrect: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    counterEnabled: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, Boolean],
      default: false
    },
    minlength: {
      type: [Number, Boolean],
      default: false
    },
    pattern: {
      type: String,
      default: '.*S.*'
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    // Styling
    gap: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    }
  }
}
