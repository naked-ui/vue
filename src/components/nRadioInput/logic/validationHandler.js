import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  components: { nValidationAlerts },
  inject: {
    radioGroup: {
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled || (!!this.radioGroup && this.radioGroup.disabled)
    },
    isReadonly() {
      return this.readonly || (!!this.radioGroup && this.radioGroup.readonly)
    },
    isRequired() {
      return this.required || (!!this.radioGroup && this.radioGroup.required)
    },
    isChecked() {
      return (
        this.checked ||
        (!!this.radioGroup && this.radioGroup.value === this.value)
      )
    }
  },
  methods: {
    $setValidity(e) {
      if (this.radioGroup && !e.target.validity.valid) {
        this.$parent.$emit('nui:set-validity-radio-group')
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.radioGroup) {
        this.$parent.$emit('nui:validate-radio-group', e)
      } else {
        this.validateFormField(e)
      }
    }
  }
}
