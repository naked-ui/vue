export default {
  methods: {
    handleKeyupEsc() {
      this.closeOptions()
    },
    handleKeyupEnter() {
      if (this.enableMultiSelect) return this.handleMultiSelect(this.candidate)
      this.setSelected(this.candidate.value)
      this.closeOptions()
    },
    handleKeyupUp() {
      if (
        this.isAbleToFocusSearchInput &&
        this.prevOptionIndex === this.filteredOptions.length - 1
      )
        return this.focusSearchInput()

      this.candidate = this.filteredOptions[this.prevOptionIndex]
    },
    handleKeyupDown() {
      if (this.isAbleToFocusSearchInput && this.nextOptionIndex === 0)
        return this.focusSearchInput()

      this.candidate = this.filteredOptions[this.nextOptionIndex]
    },
    async handleInputKeyupUp() {
      await this.focusOptions()
      this.handleKeyupUp()
    },
    async handleInputKeyupDown() {
      await this.focusOptions()
      this.handleKeyupDown()
    }
  }
}
