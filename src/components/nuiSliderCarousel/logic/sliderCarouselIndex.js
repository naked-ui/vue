export default {
  data () {
    return {
      slideIndex: 1
    }
  },
  computed: {
    maxIndex () {
      if(this.slideIndex > this.paginationItems.length) {
        return this.paginationItems.length
      } else return this.paginationItems.length
    },
  },
  methods: {
    fetchSlideIndexFromUrl () {
      const sliderRegex = new RegExp(`#${this.refName}--(\\d+)`)
      const slideIndexUri = window.location.href.match(sliderRegex)
      if (slideIndexUri && this.slideIdEnabled) {
        this.navigateToSlide(slideIndexUri[1])
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    },
  },
  mounted () {
    this.fetchSlideIndexFromUrl()
  }
}
