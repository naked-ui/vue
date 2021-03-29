export default {
  props: {
    value: null,
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
      type: String
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    max: {
      type: [Number, Boolean],
      default: false
    },
    min: {
      type: [Number, Boolean],
      default: false
    },
    maxlength: {
      type: [Number, Boolean],
      default: false
    },
    minlength: {
      type: [Number, Boolean],
      default: false
    },
    name: {
      type: String,
      required: true
    },
    pattern: {
      type: String,
      // default: '.*\\S.*'
      default: null
    },
    placeholder: {
      type: String
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
      type: String
    },
    validationEnabled: {
      type: Boolean,
      default: false
    },
    // Styling
    gap: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    padding: {
      type: String
    },
    outlineWidth: {
      type: [String, Number]
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
