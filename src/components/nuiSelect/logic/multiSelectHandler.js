export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    multiSelectPlaceholder: {
      type: String,
      default: 'Select options'
    },
  },
  watch: {
    multiple(value) {
      if (value) {
        this.selected = []
        this.dummySelected = []
      }
      else {
        this.selected = ''
        this.dummySelected = ''
      }
    }
  },
  methods: {
    handleMultiSelect(option) {
      if (!this.multiple) return
      if (
        this.selected &&
        this.selected.length &&
        this.selected.includes(option)
      ) this.selected = this.selected.filter((el) => el.value !== option.value)
      else this.selected.push(option)

      this.searchInputValue = ''
      this.dummySelected = this.selected.map(el => el.value)
      this.emitInput()
    }
  },
  created() {
    if (this.multiple) {
      this.selected = []
      this.dummySelected = []
    }
  },
  mounted() {
    if (this.enableNativeSelect && this.multiple)
      console.error(
        `You can't use multi select feature with native select enabled.`
      )
    if (this.emitOnlyValue && this.multiple)
      console.error(
        `You can't use multi select feature with emit only value enabled.`
      )
  }
}
