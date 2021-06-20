const uuid = () => Math.random().toString(36).substr(2, 9)

export default {
  methods: {
    uiElementID(name) {
      if (name) return `${name}_${uuid()}`
      else return `nui_${uuid()}`
    }
  }
}
