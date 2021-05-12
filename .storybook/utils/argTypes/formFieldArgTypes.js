// States
const readonly = {
  control: 'boolean'
}

// UI Text
const label = {
  defaultValue: 'Label text',
  control: 'text'
}
const placeholder = {
  defaultValue: 'Placeholder text',
  control: 'text'
}

// Meta
const name = {
  defaultValue: 'text-input-name',
  description: '`name` prop is required',
  control: 'text'
}
const id = {
  defaultValue: 'text-input-id',
  description: '`id` prop is required',
  control: 'text'
}
const title = {
  defaultValue: 'text-input-title',
  control: 'text'
}

// Settings
const autocorrect = {
  control: { type: 'select', options: ['off', 'on'] },
  defaultValue: null,
  description: '`autocorrect` prop is Safari only'
}
const autofocus = {
  control: 'boolean'
}
const counterEnabled = {
  control: 'boolean',
  defaultValue: false
}

export {
  readonly,
  label,
  placeholder,
  name,
  id,
  title,
  autocorrect,
  autofocus,
  counterEnabled
}
export default {
  readonly,
  label,
  placeholder,
  name,
  id,
  title,
  autocorrect,
  autofocus,
  counterEnabled
}