const uuid = () => Math.random().toString(36).substr(2, 9)

export default {
    computed: {
      uiElementID () {
        if (this.id) {
          return `${this.id}_${uuid()}`
        } else return `nui_${uuid()}`
      }
    }
  }
