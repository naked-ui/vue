import formFieldValidations from '@/utils/formField/helpers/formFieldValidations'


const matchingTree = {
  multi: ($props) => $props['enableMultiSelect'],
  native: ($props) => $props['enableNativeSelect'],
  custom: ($props) => !$props['enableNativeSelect'],
}

export default {
  mixins: [formFieldValidations],
  watch: {
    showOptions(value) {
      if (!value && this.validationEnabled) this.validateFormField(this.selected)
    },
    validationMessages(value) {
      if (value.length) this.$refs[this.selectRefName].setCustomValidity(value[0])
    }
  },
  methods: {
    matchRule(forType) {
      if (!forType) return false
      else {
        if (matchingTree.hasOwnProperty(forType)) return !matchingTree[forType](this.$props)
        else return false
      }
    }
  }
}
