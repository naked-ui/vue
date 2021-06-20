import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  components: { nuiValidationAlerts },
  inject: {
    toggleGroup: {
      default: null
    }
  },
  computed: {
    isDisabled() {
      return this.disabled || (!!this.toggleGroup && this.toggleGroup.disabled)
    },
    isReadonly() {
      return this.readonly || (!!this.toggleGroup && this.toggleGroup.readonly)
    },
    isRequired() {
      return this.required || (!!this.toggleGroup && this.toggleGroup.required)
    },
    isChecked() {
      if (this.checked) return this.checked
      else if (this.toggleGroup) {
        const { value } = this.toggleGroup
        return value.includes(this.value)
      }
      return false
    }
  },
  methods: {
    $setValidity(e) {
      if (this.toggleGroup) {
        this.$parent.$emit('nui:set-validity-toggle-group', e)
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.toggleGroup) {
        // send value to compare equal values (e.g. toggle `value` attribute converts numers to string)
        this.$parent.$emit('nui:validate-toggle-group', {
          e,
          value: this.value
        })
      } else {
        this.validateFormField(e)
      }
    }
  }
}
