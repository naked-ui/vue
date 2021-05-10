export default {

  // States

  readonly: {
    control: 'boolean'
  },

  // UI Text

  label: {
    defaultValue: 'Label text',
    control: 'text'
  },
  placeholder: {
    defaultValue: 'Placeholder text',
    control: 'text'
  },

  // Meta

  name: {
    defaultValue: 'text-input-name',
    description: '`name` prop is required',
    control: 'text'
  },
  id: {
    defaultValue: 'text-input-id',
    description: '`id` prop is required',
    control: 'text'
  },
  title: {
    defaultValue: 'text-input-title',
    control: 'text'
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
}
