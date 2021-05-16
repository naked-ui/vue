// UI
const label = {
  defaultValue: 'Label text',
  control: 'text'
}
const placeholder = {
  defaultValue: 'Placeholder text',
  control: 'text'
}
const counterEnabled = {
  control: 'boolean',
  defaultValue: false
}
// Meta
const id = {
  defaultValue: 'text-input-id',
  description: '`id` prop is required',
  control: 'text'
}
// States
import stateArgTypes from './stateArgTypes'
// Styling
import styleArgTypes from './styleArgTypes'
// Validation
import validationArgTypes from './validationArgTypes'
//Native attributes
const autocomplete = {
  control: { type: 'select', options: ['off', 'on'] },
  defaultValue: null,
}
const autocorrect = {
  control: { type: 'select', options: ['off', 'on'] },
  defaultValue: null,
  description: '`autocorrect` prop is Safari only'
}
const autofocus = {
  control: 'boolean'
}
const form = {
  control: 'text'
}
const list = {
  control: 'text'
}
const name = {
  defaultValue: 'text-input-name',
  description: '`name` prop is required',
  control: 'text'
}
const readonly = {
  control: 'boolean'
}
const tabindex = {
  control: 'number'
}

export {
  label,
  placeholder,
  counterEnabled,
  id,
  validationArgTypes,
  autocomplete,
  autocorrect,
  autofocus,
  form,
  list,
  name,
  readonly,
}

export default {
  label,
  placeholder,
  counterEnabled,
  id,
  ...stateArgTypes,
  ...styleArgTypes,
  validationArgTypes,
  autocomplete,
  autocorrect,
  autofocus,
  form,
  list,
  name,
  readonly,
}