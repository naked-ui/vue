export default {
  props: {
    value: null,

    // States

    disabled: {
      type: Boolean,
      default: false
    },
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

    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    padding: {
      type: String
    },
    gap: {
      type: [String, Number]
    },
    color: {
      type: [String, Number]
    },
    backgroundColor: {
      type: [String, Number]
    },
    borderWidth: {
      type: [String, Number]
    },
    borderStyle: {
      type: String
    },
    borderColor: {
      type: String
    },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    },

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

    validationEnabled: {
      type: Boolean,
      default: false
    },
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

    // Validated values

    required: {
      type: Boolean,
      default: false
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
    pattern: {
      type: String,
      // default: '.*\\S.*'
      default: null
    },
  }
}
