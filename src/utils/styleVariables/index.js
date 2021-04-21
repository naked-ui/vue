import { calculateCssSize } from './calculateCssSize'

const camelToKebab = (string) => string.replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2').toLowerCase()

const fillStylingObject = ($$props, styleVariables) => {
  if (!styleVariables) return

  const types = {
    size: (val) => calculateCssSize(val),
    color: (val) => val,
    other: (val) => val ? val : ''
  }

  let style = new Object()
  for (let styleVariable of styleVariables) {
    const variableName = `--${camelToKebab(styleVariable.name)}`

    style[variableName] = types[styleVariable.type]($$props[styleVariable.name])
  }

  return style
}

export const styleVariables = (defaultStyleVariables, customStyleVariables = []) => ({
  computed: {
    style () {
      const defaultVariables = fillStylingObject(this.$props, defaultStyleVariables)
      const customVariables = fillStylingObject(this.$props, customStyleVariables)

      return {...defaultVariables, customVariables}
    }
  }
})

export default styleVariables