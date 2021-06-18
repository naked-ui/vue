export default {
  computed: {
    currentIndex() {
      if (!this.candidate && this.showSearchInput) return -1
      if (this.candidate) return this.filteredOptions.indexOf(this.candidate)
      return -1
    },
    prevOptionIndex() {
      if (!this.currentIndex || this.currentIndex <= 0)
        return this.filteredOptions.length - 1
      return this.currentIndex - 1
    },
    nextOptionIndex() {
      if (!this.currentIndex && this.currentIndex !== 0) return 0
      if (this.currentIndex === this.filteredOptions.length - 1) return 0
      return this.currentIndex + 1
    }
  }
}
