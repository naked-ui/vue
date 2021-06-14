const uuid = () => Math.random().toString(36).substr(2, 9)

export default {
  // computed: {
  //   uiElementID() {
  //     // if (this.id) return this.id
  //     if (this.baseClassname) {
  //       return `${this.baseClassname}_${uuid()}`
  //     } else return `nui_${uuid()}`
  //   }
  // },
  methods: {
    uiElementID(name) {
      if (name && this.id) return `${this.id}_${uuid()}`
      // if (this.baseClassname) {
      //   return `${this.baseClassname}_${uuid()}`
      // }
      else return `nui_${uuid()}`
    }
  }
}