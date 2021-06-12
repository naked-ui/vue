export default {
  methods: {
    checkInputMaxLength(e) {
      if (!this.maxlength) return

      const currentErrors = []
      if (e.target.value.length === this.maxlength)
        currentErrors.push({ content: `Maximum length reached`, color: this.invalidColor })

      this.validationMessages = currentErrors
    }
  }
}
