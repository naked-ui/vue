export default {
  computed: {
    hrefIsExternal () {
      if (this.href.includes('http') || this.href.includes('mailto:') || this.href.includes('tel:')) return true
      else return false
    }
  }
}
