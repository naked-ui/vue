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
    style () {
      return [
        {
          '--gap': this.calculateCssSize(this.gap),
          '--height': this.calculateCssSize(this.height),
          '--width': this.calculateCssSize(this.width),
          '--outline-width': this.calculateCssSize(this.outlineWidth),
          '--padding': this.padding,
          '--color-valid': this.colorValid,
          '--color-invalid': this.colorInvalid,
        },
        { '--resize' : this.resize ? this.resize : '' }
      ]
    }
  }
}
