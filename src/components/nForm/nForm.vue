<template>
  <form class="nui-form" :class="componentClasses" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'nForm',
  props: {
    baseClassname: {
      type: String,
      default: 'nui'
    },
    validationEnabled: {
      type: Boolean,
      default: false
    }
  },
  provide: {
    nuiForm: true,
  },
  watch: {
    areErrors: {
      immediate: true,
      handler(val) {
        this.$emit('error', val)
      }
    }
  },
  data: () => ({
    validationState: [],
  }),
  computed: {
    componentClasses() {
      return [
        this.baseClassname
      ]
    },
    areErrors() {
      if (!this.validationEnabled) return false
      return this.validationState.some(el => el.state === true)
    }
  },
  methods: {
    onSubmit(e) {
      this.$emit('nui:on-form-submit')

      if (this.areErrors) return
      this.$emit('submit')
    },
    handleErroredField(e) {
      const existingIndex = this.validationState.findIndex(el => el.name === e.name)
      
      if (existingIndex >= 0) 
        this.validationState[existingIndex].state = e.state
      else
        this.validationState.push(e)
    }
  },
  mounted() {
    if (!this.validationEnabled) return
    this.$on('nui:change-field-error-state', this.handleErroredField)
  },
  beforeDestroy() {
    if (!this.validationEnabled) return
    this.$off('nui:change-field-error-state', this.handleErroredField)
  },
}
</script>

<style lang="scss" src="./nForm.scss" />
