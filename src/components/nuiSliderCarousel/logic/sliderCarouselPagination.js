export default {
  methods: {
    setActivePaginationItem() {
      if (this.paginationDisabled) return
      const slidePaginationItem = document.getElementById(
        `${this.refName}__pagination-input--${this.slideIndex}`
      )

      if (!slidePaginationItem) return
      slidePaginationItem.checked = true
    }
  },
  mounted() {
    this.setActivePaginationItem()
  }
}
