import dataProps from './dataProps'
import formProps from './formProps'
import globalProps from './globalProps'
import inputProps from './inputProps'
import hyperlinkProps from './hyperlinkProps'
import metaProps from './metaProps'
import stateProps from './stateProps'
import styleProps from './styleProps'
import uiProps from './uiProps'
import validationProps from './validationProps'

export {
  dataProps,
  formProps,
  globalProps,
  inputProps,
  hyperlinkProps,
  metaProps,
  stateProps,
  styleProps,
  uiProps,
  validationProps
}

export default {
  ...dataProps,
  ...formProps,
  ...globalProps,
  ...inputProps,
  ...hyperlinkProps,
  ...metaProps,
  ...stateProps,
  ...styleProps,
  ...uiProps,
  ...validationProps
}
