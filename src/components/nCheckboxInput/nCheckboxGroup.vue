<template>
  <div class="checkbox-group" :style="groupStyle">
    <slot></slot>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>
<script>
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'
import formField from '../../utils/formField/index.js'
export default {
  mixins: [formField],
  name: 'nCheckboxGroup',
  components: { nValidationAlerts },
  provide() {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    // input attrs
    color: {
      type: String,
      default: null
    },
    spacing: {
      type: Number
    }
  },
  data() {
    return {
      selectedValue: []
    }
  },
  computed: {
    groupStyle() {
      return [
        ...this.style,
        {
          '--spacing': this.calculateCssSize(this.spacing),
          '--color': this.color
        }
      ]
    }
  },
  methods: {
    setValidity() {
      // checkbox(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously,
      // but the result can be only one
      this.validationMessages = [
        {
          content: '&cross; This field is required', // or custom message
          color: this.colorInvalid
        }
      ]
    },
    checkValidity() {
      if (this.required && !this.selectedValue.length) return this.setValidity()
      this.validationMessages = []
    },
    validate(e, value) {
      // triggered by any checkbox-input child on value change
      if (this.value.includes(value))
        this.selectedValue = this.value.filter((v) => v !== value)
      else this.selectedValue = this.value.concat([value])
      this.checkValidity()
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

<style lang="scss" src="./nCheckboxGroup.scss" />
