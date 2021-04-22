import { calculateCssSize } from './helpers/calculateCssSize'
import { parseCamelToKebab } from './helpers/parseCamelToKebab'


const fillStylingObject = ($$props, styleVariables) => {
  if (!styleVariables) return

  const types = {
    size: (val) => calculateCssSize(val),
    color: (val) => val,
    other: (val) => val ? val : ''
  }

  let style = new Object()
  for (let styleVariable of styleVariables) {
    const variableName = `--${parseCamelToKebab(styleVariable.name)}`

    style[variableName] = types[styleVariable.type]($$props[styleVariable.name])
  }

  return style
}

const styleVariables = (defaultStyleVariables, customStyleVariables = []) => ({
  computed: {
    style () {
      const defaultVariables = fillStylingObject(this.$props, defaultStyleVariables)
      const customVariables = fillStylingObject(this.$props, customStyleVariables)

      return {...defaultVariables, customVariables}
    }
  }
})

export default styleVariables