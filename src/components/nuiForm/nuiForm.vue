<template>
  <form
    :class="componentClasses"
    :id="uiElementID()"
    @submit.prevent="onSubmit"
    :style="style"
    :action="action"
    :accept-charset="acceptCharset"
    :autocomplete="autocomplete"
    :enctype="enctype"
    :method="method"
    :name="name"
    :novalidate="novalidate"
    :rel="rel"
    :target="target"
  >
    <slot />
  </form>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables'
import { gap, width } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [gap, width]

export default {
  name: 'nuiForm',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    namespace: {
      type: String,
      default: 'nui-form'
    },
    gap: {
      type: [Number, String],
      default: ''
    },
    width: {
      type: [Number, String],
      default: ''
    },
    action: {
      type: String
    },
    acceptCharset: {
      type: String
    },
    autocomplete: {
      type: String
    },
    enctype: {
      type: String
    },
    method: {
      type: String
    },
    name: {
      type: String
    },
    novalidate: {
      type: String
    },
    rel: {
      type: String
    },
    target: {
      type: String
    }
  },
  provide: {
    nuiForm: true
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
    validationState: []
  }),
  computed: {
    componentClasses() {
      return [this.namespace]
    },
    areErrors() {
      if (this.novalidate) return false
      return this.validationState.some((el) => el.state === true)
    }
  },
  methods: {
    onSubmit(e) {
      this.$emit('nui:on-form-submit')

      if (this.areErrors) return
      this.$emit('submit')
    },
    handleErroredField(e) {
      const existingIndex = this.validationState.findIndex(
        (el) => el.name === e.name
      )

      if (existingIndex >= 0)
        this.validationState[existingIndex].state = e.state
      else this.validationState.push(e)
    }
  },
  mounted() {
    if (this.novalidate) return
    this.$on('nui:change-field-error-state', this.handleErroredField)
  },
  beforeDestroy() {
    if (this.novalidate) return
    this.$off('nui:change-field-error-state', this.handleErroredField)
  }
}
</script>

<style lang="scss" src="./nuiForm.scss" />
