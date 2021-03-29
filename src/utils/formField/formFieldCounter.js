export default {
  data () {
    return {
      totalCharacters: 0,
      value: null
    }
  },
  methods: {
    countCharacters () {
      if (this.value && this.value !== null) {
        this.totalCharacters = this.value.length
      } else this.totalCharacters = 0
    }
  }
}
