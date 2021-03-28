export default {
  methods: {
    calculateCssSize(value) {
      return isNaN(value) ? value : value + 'px'
    }
  }
}
