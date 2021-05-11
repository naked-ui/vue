const matchingTree = {
  multi: ($props) => $props['enableMultiSelect'],
  native: ($props) => $props['enableNativeSelect'],
}

export default {
  props: {
    rules: {
      type: Array,
      default: () => []
    },
  },
  data: () =>  ({
    validationMessages: []
  }),
  computed: {
    isError() {
      return this.validationMessages && this.validationMessages.length
    }
  },
  methods: {
    validateFormField() {
      if (!this.validationEnabled) return

      const currentErrors = []
      for (let rule of this.rules) {
        if (this.matchRule(rule)) continue
        if (rule.rule(this.selected)) currentErrors.push({ content: rule.message })
      }

      this.validationMessages = currentErrors
    },
    matchRule(rule) {
      if (rule && !rule.hasOwnProperty('for')) return false
      else {
        if (matchingTree.hasOwnProperty(rule.for)) return !matchingTree[rule.for](this.$props)
        else return false
      }
    }
  }
}
