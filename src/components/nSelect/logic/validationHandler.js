import formFieldValidations from '@/utils/formField/helpers/formFieldValidations'

const prepareExtendedValue = (target) =>
  target.dataset.value && target.dataset.value.includes(',')
    ? target.dataset.value.split(',')
    : [target.dataset.value]

const matchingTree = {
  multi: ($props) => $props['enableMultiSelect'],
  native: ($props) => $props['enableNativeSelect'],
  custom: ($props) => !$props['enableNativeSelect']
}

export default {
  mixins: [formFieldValidations],
  watch: {
    async showOptions(value) {
      const selectElement = this.$refs[this.selectRefName]
      const extendedValue = this.enableMultiSelect ? prepareExtendedValue : null
      if (!value && this.validationEnabled)
        await this.$nextTick(() =>
          this.validateFormField({ target: selectElement }, extendedValue)
        )
    }
  },
  methods: {
    matchRule(forType) {
      if (!forType) return false
      else {
        if (matchingTree.hasOwnProperty(forType))
          return !matchingTree[forType](this.$props)
        else return false
      }
    }
  }
}
