export default {
  data () {
    return {
      slideIndex: 1
    }
  },
  computed: {
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
    navigateToSlide (index, loop = false) {
      const slideElement = document.getElementById(`${this.refName}--${index}`)
      const slidePaginationItem = document.getElementById(`${this.refName}__pagination-input--${index}`)
      if (loop) {
        slideElement.focus()
        slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        return
      }
      slideElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      // Update slideIndex
      this.slideIndex = index
      // Update pagination
      if (!this.paginationDisabled) {
        slidePaginationItem.checked = true;
      }
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
    }
  },
  mounted () {
    if (this.autoplayEnabled && !this.nextDisabled && this.infiniteScroll == false) {
      this.paginationItems.forEach((slide, i) => {
        setTimeout(() => {
          this.nextSlide(this.slideIndex)
          console.log('Lel')
        }, i * 1000);
      });
    }

    if (this.autoplayEnabled && this.infiniteScroll) {
      setInterval(() => {
        if (this.slideIndex === this.maxIndex) return this.navigateToSlide(1)
        this.navigateToSlide(this.slideIndex + this.amountToScroll)
      }, 2000)
    }
  }
}
