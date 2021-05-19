export default {
  props: {
    enableMultiSelect: {
      type: Boolean,
      default: false
    },
    multiSelectPlaceholder: {
      type: String,
      default: 'Select options'
    },
  },
  watch: {
    enableMultiSelect(value) {
      if (value) this.selected = []
      else this.selected = null
    }
  },
  methods: {
    handleMultiSelect(option) {
      if (!this.enableMultiSelect) return
      if (
        this.selected &&
        this.selected.length &&
        this.selected.includes(option)
      ) this.selected = this.selected.filter((el) => el.value !== option.value)
      else this.selected.push(option)

      this.searchInputValue = ''
      this.emitInput()
    }
  },
  created() {
    if (this.enableMultiSelect) this.selected = []
  },
  mounted() {
    if (this.enableNativeSelect && this.enableMultiSelect)
      console.error(
        `You can't use multi select feature with native select enabled.`
      )
    if (this.emitOnlyValue && this.enableMultiSelect)
      console.error(
        `You can't use multi select feature with emit only value enabled.`
      )
  }
}
