import styleVariables from '../styleVariables'
import formFieldProps from './helpers/formFieldProps'
import formFieldCounter from './helpers/formFieldCounter'
import formFieldValidations from './helpers/formFieldValidations'
import {
  height,
  width,
  gap,
  borderWidth,
  padding,
  colorValid,
  colorInvalid
} from '../styleVariables/helpers/variables'

const defaultStyleVariables = [
  gap,
  height,
  width,
  borderWidth,
  padding,
  colorValid,
  colorInvalid
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
