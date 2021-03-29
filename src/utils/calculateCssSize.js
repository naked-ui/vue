export default {
  methods: {
    calculateCssSize(size) {
      if (!size) return null // boolean values are assigned to css variable, `null` - not
      if (isNaN(size) == false) return size + 'px'
      if (
        size.includes('em') ||
        size.includes('ex') ||
        size.includes('px') ||
        size.includes('cm') ||
        size.includes('mm') ||
        size.includes('in') ||
        size.includes('pc') ||
        size.includes('pt') ||
        size.includes('em') ||
        size.includes('rem') ||
        size.includes('vh') ||
        size.includes('vmin') ||
        size.includes('vmax') ||
        size.includes('%')
      ) {
        return size
      }
    }
  }
}
