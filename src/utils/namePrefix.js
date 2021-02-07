export default {
  computed: {
    namePrefix () {
      if (this.nakedUiCustomNamePrefix) {
        return `${this.nakedUiCustomNamePrefix}-`
      } else return 'nui-'
    }
  }
}
