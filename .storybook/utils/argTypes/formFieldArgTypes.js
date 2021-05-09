export default {

  // States

  disabled: {
    control: 'boolean'
  },
  readonly: {
    control: 'boolean'
  },

  // UI Text

  label: {
    defaultValue: 'Label text'
  },
  placeholder: {
    defaultValue: 'Placeholder text'
  },

  // Styling

  color: {
    control: 'color'
  },
  backgroundColor: {
    control: 'color'
  },
  height: {
    control: 'text'
  },
  width: {
    control: 'text'
  },
  padding: {
    control: 'text'
  },
  gap: {
    control: 'text'
  },
  borderWidth: {
    control: 'text'
  },
  borderStyle: {
    control: 'text'
  },
  borderColor: {
    control: 'color'
  },
  colorValid: {
    control: 'color'
  },
  colorInvalid: {
    control: 'color'
  },

  // Meta

  name: {
    defaultValue: 'text-input-name',
    description: '`name` prop is required'
  },
  id: {
    defaultValue: 'text-input-id',
    description: '`id` prop is required'
  },
  title: {
    defaultValue: 'text-input-title'
  },

  // Validated values

  required: {
    control: 'boolean'
  },
  pattern: {
    control: 'text'
  },
  minlength: {
    control: { type: 'number' }
  },
  maxlength: {
    control: { type: 'number' }
  },

  // Settings

  autocorrect: {
    control: { type: 'select', options: ['off', 'on'] },
    defaultValue: null,
    description: '`autocorrect` prop is Safari only'
  },
  autofocus: {
    control: 'boolean'
  },
  counterEnabled: {
    control: 'boolean',
    defaultValue: false
  },
  validationEnabled: {
    control: 'boolean',
    defaultValue: true
  },
  resize: {
    control: {
      type: 'select',
      options: ['both', 'horizontal', 'vertical', 'none']
    }
  },

  // Validation settings

  customMessages: {
    control: 'object'
  },
  rules: {
    control: 'array'
  },

}
