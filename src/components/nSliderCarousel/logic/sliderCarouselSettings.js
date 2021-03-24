export default {
  props: {
    // Data props
    refName: {
      type: String,
      required: true,
      default: 'slider-carousel'
    },
    baseClassname: {
      type: String,
      default: 'slider-carousel'
    },
    paginationItems: {
      type: [Array, Number],
      required: true
    },
    // Settings
    visibleItems: {
      type: Number,
      default: 1
    },
    amountToScroll: {
      type: Number,
      default: 1
    },
    navigationDisabled: {
      type: Boolean,
      default: false
    },
    navigationAutohide: {
      type: Boolean,
      default: false
    },
    paginationDisabled: {
      type: Boolean,
      default: false
    },
    paginationAutohide: {
      type: Boolean,
      default: false
    },
    infiniteScroll: {
      type: Boolean,
      default: true
    },
    loopEnabled: {
      type: Boolean,
      default: false
    },
    autoplayEnabled: {
      type: Boolean,
      default: false
    },
    autoplayInterval: {
      type: Number,
      default: 3000
    },
    slideIdEnabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    }
  }
}
