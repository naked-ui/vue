import formFieldValidations from '@/utils/formField/helpers/formFieldValidations'

const prepareExtendedValue = (target) =>
  target.dataset.value && target.dataset.value.includes(',')
    ? target.dataset.value.split(',')
    : target.dataset.value.length > 0
    ? [target.dataset.value]
    : []

const matchingTree = {
  multi: ($props) => $props['multiple'],
  native: ($props) => $props['enableNativeSelect'],
  custom: ($props) => !$props['enableNativeSelect']
}

export default {
  props: {
    minimum: {
      type: [Number, String],
      required: false
    },
    maximum: {
      type: [Number, String],
      required: false
    }
  },
  mixins: [formFieldValidations],
  watch: {
    async showOptions(value) {
      const selectElement = this.$refs[this.selectRefName]
      const extendedValue = this.multiple ? prepareExtendedValue : null
      if (!value && this.validationEnabled)
        await this.$nextTick(() =>
          this.validateFormField({ target: selectElement }, extendedValue)
        )
    }
  },
  computed: {
    includedRules() {
      if (!this.minimum || !this.maximum) return []

      const minimalOptions = {
        rule: (val) => val && !(val.length >= this.minimum),
        text: `You have to select minimum ${this.minimum} options.`,
        forType: 'multi'
      }
      const maximumOptions = {
        rule: (val) => val && !(val.length <= this.maximum),
        text: `You have to select maximum ${this.maximum} options.`,
        forType: 'multi'
      }

      return [minimalOptions, maximumOptions]
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
