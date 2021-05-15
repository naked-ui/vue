import styleVariables from '@/utils/styleVariables'
import formFieldCounter from './helpers/formFieldCounter'
import formFieldValidations from './helpers/formFieldValidations'
import {
  height,
  width,
  gap,
  backgroundColor,
  padding,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
} from '@/utils/styleVariables/helpers/variables'

const formFieldStyleVariables = [
  height,
  width,
  gap,
  backgroundColor,
  padding,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  { name: 'colorValid', type: 'color' },
  { name: 'colorInvalid', type: 'color' },
]

export const formField = () => {
  return {
    mixins: [
      formFieldValidations,
      formFieldCounter,
      styleVariables(formFieldStyleVariables)
    ],
  }
}

export default formField
