import styleVariables from '@/utils/styleVariables'

import {
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  lineHeight,
  gap,
  padding,
  borderColor,
  borderWidth,
  borderStyle,
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  lineHeight,
  gap,
  padding,
  borderColor,
  borderWidth,
  borderStyle,
  { name: 'colorValid', type: 'color' },
  { name: 'colorInvalid', type: 'color' },
  { name: 'optionHoverBackgroundColor', type: 'color' }
]

const styleHandler = styleVariables(componentStyleVariables)

export default styleHandler
