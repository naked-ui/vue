import styleVariables from '../styleVariables'
import formFieldProps from '../props/formFieldProps'
import formFieldCounter from './helpers/formFieldCounter'
import formFieldMaxLength from './helpers/formFieldMaxLength'
import formFieldValidations from './helpers/formFieldValidations'
import {
  gap,
  width,
  height,
  padding,
  colorValid,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  colorInvalid,
  backgroundColor,
} from '../styleVariables/helpers/variables'

const defaultStyleVariables = [
  gap,
  width,
  height,
  padding,
  colorValid,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  colorInvalid,
  backgroundColor,
]

export const formField = (customStyleVariables = []) => {
  return {
    mixins: [
      formFieldProps,
      formFieldCounter,
      formFieldMaxLength,
      formFieldValidations,
      styleVariables(defaultStyleVariables, customStyleVariables)
    ],
  }
}

export default formField
