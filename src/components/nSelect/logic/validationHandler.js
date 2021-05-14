const matchingTree = {
  multi: ($props) => $props['enableMultiSelect'],
  native: ($props) => $props['enableNativeSelect'],
  custom: ($props) => !$props['enableNativeSelect'],
}

export default {
  props: {
    rules: {
      type: Array,
      default: () => []
    },
  },
  data: () => ({
    validationMessages: []
  }),
  computed: {
    isError() {
      return this.validationMessages && this.validationMessages.length
    }
  },
  methods: {
    validateFormField(e = undefined) {
      if (!this.validationEnabled) return

      const currentErrors = []
      for (let rule of this.rules) {
        if (this.matchRule(rule)) continue
        const { text: content, color = this.colorInvalid } = rule
        if (rule.rule(this.selected)) currentErrors.push({ content, color })
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
