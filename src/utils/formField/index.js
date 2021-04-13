import formFieldProps from './formFieldProps'
import formFieldValidations from './formFieldValidations'
import formFieldCounter from './formFieldCounter'
import calculateCssSizeMixin from '../calculateCssSize'

export default {
  mixins: [
    formFieldProps,
    formFieldValidations,
    formFieldCounter,
    calculateCssSizeMixin
  ],
  computed: {
    style() {
      return [
        { '--gap': this.gap && this.gap.length > 0 || this.gap && this.gap > 0 ? this.calculateCssSize(this.gap) : '' },
        { '--height': this.height && this.height.length > 0 || this.height && this.height > 0 ? this.calculateCssSize(this.height) : '' },
        { '--width': this.width && this.width.length > 0 || this.width && this.width > 0 ? this.calculateCssSize(this.width) : '' },
        { '--outline-width': this.outlineWidth && this.outlineWidth.length > 0 || this.outlineWidth && this.outlineWidth > 0 ? this.calculateCssSize(this.outlineWidth) : '' },
        { '--padding': this.padding && this.padding.length > 0 || this.padding && this.padding > 0 ? this.calculateCssSize(this.padding) : '' },
        { '--color-valid': this.colorValid && this.colorValid.length > 0 ? this.colorValid : '' },
        { '--color-invalid': this.colorInvalid && this.colorInvalid.length > 0 ? this.colorInvalid : '' },
        { '--resize': this.resize ? this.resize : '' }
      ]
    }
  }
}
