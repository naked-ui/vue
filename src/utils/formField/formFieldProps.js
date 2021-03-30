export default {
  props: {
    value: null,
    autocorrect: {
      type: String,
      default: null,
      validator: (v) => ['on', 'off'].includes(v)
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
      type: [Number, String],
      required: true
    },
    label: {
      type: String
    },
    max: {
      type: [Number, String],
      default: null
    },
    min: {
      type: [Number, String],
      default: null
    },
    maxlength: {
      type: [Number, String],
      default: null
    },
    minlength: {
      type: [Number, String],
      default: null
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
