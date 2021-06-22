import formProps from './formProps'
import globalProps from './globalProps'
import inputProps from './inputProps'
import hyperlinkProps from './hyperlinkProps'
import stateProps from './stateProps'
import styleProps from './styleProps'
import uiProps from './uiProps'
import validationProps from './validationProps'

export {
  formProps,
  globalProps,
  inputProps,
  hyperlinkProps,
  stateProps,
  styleProps,
  uiProps,
  validationProps
}

export default {
  ...formProps,
  ...globalProps,
  ...inputProps,
  ...hyperlinkProps,
  ...stateProps,
  ...styleProps,
  ...uiProps,
  ...validationProps
}
