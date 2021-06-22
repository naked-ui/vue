import { formProps, globalProps, inputProps, stateProps, styleProps, validationProps } from '@/utils/props'

const props = {
  value: null,
  ...formProps,
  ...globalProps,
  ...inputProps,
  ...stateProps,
  ...styleProps,
  ...validationProps
}

export default {
  props: props
}
