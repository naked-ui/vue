export default {
  methods: {
    calculateSize(value) {
      return isNaN(value) ? value : value + 'px'
    }
  }
}
