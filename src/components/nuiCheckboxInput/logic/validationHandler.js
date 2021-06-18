import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'


export default {
  components: { nuiValidationAlerts },
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  computed: {
    isDisabled() {
      return (
        this.disabled || (!!this.checkboxGroup && this.checkboxGroup.disabled)
      )
    },
    isReadonly() {
      return (
        this.readonly || (!!this.checkboxGroup && this.checkboxGroup.readonly)
      )
    },
    isRequired() {
      return (
        this.required || (!!this.checkboxGroup && this.checkboxGroup.required)
      )
    },
    isChecked() {
      if (this.checked) return this.checked
      else if (this.checkboxGroup) {
        const { value } = this.checkboxGroup
        return value.includes(this.value)
      }
      return false
    }
  },
  methods: {
    $setValidity(e) {
      if (this.checkboxGroup) {
        this.$parent.$emit('nui:set-validity-checkbox-group', e)
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.checkboxGroup) {
        // send value to compare equal values (e.g. checkbox `value` attribute converts numers to string)
        this.$parent.$emit('nui:validate-checkbox-group', {
          e,
          value: this.value
        })
      } else {
        this.validateFormField(e)
      }
    }
  }
}
