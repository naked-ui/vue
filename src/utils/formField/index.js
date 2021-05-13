import styleVariables from '../styleVariables'
import formFieldProps from '../props/formFieldProps'
import formFieldCounter from './helpers/formFieldCounter'
import formFieldValidations from './helpers/formFieldValidations'
import {
  height,
  width,
  gap,
  backgroundColor,
  padding,
  colorValid,
  colorInvalid,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
} from '../styleVariables/helpers/variables'

const defaultStyleVariables = [
  gap,
  height,
  width,
  backgroundColor,
  padding,
  colorValid,
  colorInvalid,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
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
