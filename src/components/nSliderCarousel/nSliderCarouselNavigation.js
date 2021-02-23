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
    prevDisabled () {
      if (this.slideIndex > 1 || this.infiniteScroll) return false
      else return true
    },
    nextDisabled () {
      if (this.slideIndex < this.maxIndex || this.infiniteScroll) return false
      else return true
    }
  },
  methods: {
    navigateToSlide (index, jump = false) {
      const slideElement = document.getElementById(`${this.refName}--${index}`)
      const slidePaginationItem = document.getElementById(`${this.baseClassname}__pagination-input--${index}`)
      if (jump) {
        slideElement.focus()
        slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        return
      }
      slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      // Update slideIndex
      this.slideIndex = index
      // Update pagination
      slidePaginationItem.checked = true;
      // Conditional Slide ID in URL path
      if (!this.slideIdEnabled) return
      history.replaceState(null, null, document.location.pathname + `#${this.refName}--${index}`);
    },
    prevSlide (index) {
      if (index === 1 && this.infiniteScroll) return this.navigateToSlide(this.maxIndex)
      if (index - this.amountToScroll < 1) return this.navigateToSlide(1)
      return this.navigateToSlide(index - this.amountToScroll)
    },
    nextSlide (index) {
      if (index === this.maxIndex && this.infiniteScroll) return this.navigateToSlide(1)
      if (index + this.amountToScroll > this.maxIndex) return this.navigateToSlide(this.maxIndex)
      return this.navigateToSlide(index + this.amountToScroll)
    },
    addCloneBefore () {
      const itemsViewport = document.getElementById(`${this.baseClassname}__viewport`)
      const lastChild = itemsViewport.lastChild
      const lastChildClone = lastChild.cloneNode(true)
      lastChild.remove()
      itemsViewport.prepend(lastChildClone)
    },
    addCloneAfter () {
      const itemsViewport = document.getElementById(`${this.baseClassname}__viewport`)
      const firstChild = itemsViewport.firstChild
      const firstChildClone = firstChild.cloneNode(true)
      firstChild.remove()
      itemsViewport.append(firstChildClone)
    },
    prevLoopSlide (index) {
      const slideIndex = index === 1 ? this.maxIndex : index - this.amountToScroll
      this.addCloneBefore()
      this.navigateToSlide(index, true)
      this.navigateToSlide(slideIndex)
    },
    nextLoopSlide (index) {
      const slideIndex = index === this.maxIndex ? 1 : index + this.amountToScroll
      this.navigateToSlide(slideIndex)
      setTimeout(() => {
        this.addCloneAfter()
        this.navigateToSlide(slideIndex, true)
      }, 500)
    },
    fetchSlideIndexFromUrl () {
      const sliderRegex = new RegExp(`#${this.refName}--(\\d+)`)
      const slideIndexUri = window.location.href.match(sliderRegex)
      if (slideIndexUri && this.slideIdEnabled) {
        this.navigateToSlide(slideIndexUri[1])
        return this.slideIndex = parseFloat(slideIndexUri[1])
      }
    },
    setActivePaginationItem () {
      const slidePaginationItem = document.getElementById(`${this.baseClassname}__pagination-input--${this.slideIndex}`)
      slidePaginationItem.checked = true;
    }
  },
  mounted () {
    this.fetchSlideIndexFromUrl()
    this.setActivePaginationItem()
  },
}
