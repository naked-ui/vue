import formFieldProps from './formFieldProps'
import formFieldValidations from './formFieldValidations'
import formFieldCounter from './formFieldCounter'
import styleVariables from '../styleVariables'
import { height, width, gap, outlineWidth, padding, colorValid, colorInvalid } from '../styleVariables/variables'

const defaultStyleVariables = [gap, height, width, outlineWidth, padding, colorValid, colorInvalid]

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
