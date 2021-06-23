import { formProps, globalProps, inputProps, metaProps, stateProps, styleProps, validationProps } from '@/utils/props'

const props = {
  value: null,
  ...formProps,
  ...globalProps,
  ...inputProps,
  ...metaProps,
  ...stateProps,
  ...styleProps,
  ...validationProps
}

export default {
  props: props
}
