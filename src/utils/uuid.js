const uuid = () => Math.random().toString(36).substr(2, 9)

export default {
    computed: {
      uiElementID () {
        if (this.customUiNamespace) {
          return `${this.customUiNamespace}_${uuid()}`
        } else return `nui_${uuid()}`
      }
    }
  }
