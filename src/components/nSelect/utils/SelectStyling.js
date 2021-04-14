export default {
  props: {
    width: {
      type: String,
      default: '20rem'
    },
    height: {
      type: String,
      default: '3rem'
    },
    paddingSelect: {
      type: String,
      default: '0.5rem'
    },
    paddingOption: {
      type: String,
      default: '0.3rem'
    },
    lineHeight: {
      type: String,
      default: '3rem'
    },
    textSize: {
      type: String,
      default: '1rem'
    },
    textColor: {
      type: String,
      default: '#FFF'
    },
    textHoverColor: {
      type: String,
      default: '#FFF'
    },
    backgroundColor: {
      type: String,
      default: '#333'
    },
    borderRadius: {
      type: String,
      default: '0rem'
    },
    borderColor: {
      type: String,
      default: '#222'
    },
    borderHoverColor: {
      type: String,
      default: '#444'
    },
    optionHoverColor: {
      type: String,
      default: '#555'
    },
    optionSelectedColor: {
      type: String,
      default: '#444'
    },
    optionBorderColor: {
      type: String,
      default: '#444'
    },
    chipBackgroundColor: {
      type: String,
      default: '#444'
    },
    chipHoverColor: {
      type: String,
      default: '#555'
    },
    chipFontSize: {
      type: String,
      default: '0.8rem'
    },
    chipPadding: {
      type: String,
      default: '0.2rem 0.3rem'
    },
    chipMargin: {
      type: String,
      default: '0 0.1rem'
    },
    chipBorderColor: {
      type: String,
      default: '#555'
    }
  },
  computed: {
    styleVariables () {
      const width = this.width ? `--width: ${this.width};` : ''
      const height = this.height ? `--height: ${this.height};` : ''
      const paddingSelect = this.paddingSelect ? `--padding-select: ${this.paddingSelect};` : ''
      const paddingOption = this.paddingOption ? `--padding-option: ${this.paddingOption};` : ''
      const lineHeight = this.lineHeight ? `--line-height: ${this.lineHeight};` : ''
      const textSize = this.textSize ? `--text-size: ${this.textSize};` : ''
      const textColor = this.textColor ? `--text-color: ${this.textColor};` : ''
      const textHoverColor = this.textHoverColor ? `--text-hover-color: ${this.textHoverColor};` : ''
      const backgroundColor = this.backgroundColor ? `--background-color: ${this.backgroundColor};` : ''
      const borderRadius = this.borderRadius ? `--border-radius: ${this.borderRadius};` : ''
      const borderColor = this.borderColor ? `--border-color: ${this.borderColor};` : ''
      const borderHoverColor = this.borderHoverColor ? `--border-hover-color: ${this.borderHoverColor};` : ''
      const optionHoverColor = this.optionHoverColor ? `--option-hover-color: ${this.optionHoverColor};` : ''
      const optionSelectedColor = this.optionSelectedColor ? `--option-selected-color: ${this.optionSelectedColor};` : ''
      const optionBorderColor = this.optionBorderColor ? `--option-border-color: ${this.optionBorderColor};` : ''
      const chipBackgroundColor = this.chipBackgroundColor ? `--chip-background-color: ${this.chipBackgroundColor};` : ''
      const chipHoverColor = this.chipHoverColor ? `--chip-hover-color: ${this.chipHoverColor};` : ''
      const chipFontSize = this.chipFontSize ? `--chip-font-size: ${this.chipFontSize};` : ''
      const chipPadding = this.chipPadding ? `--chip-padding: ${this.chipPadding};` : ''
      const chipMargin = this.chipMargin ? `--chip-margin: ${this.chipMargin};` : ''
      const chipBorderColor = this.chipBorderColor ? `--chip-border-color: ${this.chipBorderColor};` : ''

      return width + height + paddingSelect + paddingOption + lineHeight + textSize +
              textColor + textHoverColor + backgroundColor + borderRadius + borderColor +
              borderHoverColor + optionHoverColor + optionSelectedColor + optionBorderColor +
              chipBackgroundColor + chipHoverColor + chipFontSize + chipPadding + chipMargin +
              chipBorderColor
    },
  }
}