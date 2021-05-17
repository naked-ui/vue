export default {
  methods: {
    async handleClickOnSelect() {
      const selectElememt = document.getElementById(this.uiElementID)

      this.showOptions = !this.showOptions
      selectElememt.focus()

      if (this.enableSearchInput && !this.enableNativeSelect)
        this.showSearchInput = true
      if (this.showOptions && !this.enableSearchInput) await this.focusOptions()
    },
    async focusSearchInput() {
      this.candidate = null
      await this.$nextTick(() => this.$refs[this.searchInputRefName].focus())
    },
    async focusOptions() {
      await this.$nextTick(() => this.$refs[this.optionsRefName].focus())
    },
    handleClickOnOption(option) {
      if (this.enableMultiSelect) return this.handleMultiSelect(option)
      this.setSelected(option.value)
      this.closeOptions()
    },
    handleClickOnChip(option) {
      this.handleMultiSelect(option)
    },
    handleClickout() {
      this.closeOptions()
    },
    handleBlurInput(e) {
      if (e.relatedTarget && e.relatedTarget.className === 'nui-select-options')
        return
      this.closeOptions()
    }
  }
}
