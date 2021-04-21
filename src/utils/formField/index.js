import formFieldProps from './formFieldProps'
import formFieldValidations from './formFieldValidations'
import formFieldCounter from './formFieldCounter'
import styleVariables from '../styleVariables/index.js'

const defaultStyleVariables = [
  { name: 'gap', type: 'size'},
  { name: 'height', type: 'size'},
  { name: 'width', type: 'size'},
  { name: 'outlineWidth', type: 'size'},
  { name: 'padding', type: 'size'},
  { name: 'colorValid', type: 'color'},
  { name: 'colorInvalid', type: 'color'},
]

export const formField = (customStyleVariables = []) => {
  return {
    mixins: [
      formFieldProps,
      formFieldValidations,
      formFieldCounter,
      styleVariables(defaultStyleVariables, customStyleVariables)
    ],
  }
}

export default formField
