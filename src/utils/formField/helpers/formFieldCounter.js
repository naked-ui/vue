export default {
  computed: {
    totalCharacters() {
      return (this.value && this.value.length) || 0
    }
  }
}
