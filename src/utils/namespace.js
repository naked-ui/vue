export default {
  computed: {
    uiNamespace () {
      if (this.customUiNamespace) {
        return this.customUiNamespace
      } else return 'nui'
    }
  }
}
