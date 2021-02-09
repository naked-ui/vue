export default {
  computed: {
    namePrefix () {
      if (this.customNamePrefix) {
        return this.customNamePrefix
      } else return 'nui'
    }
  }
}
