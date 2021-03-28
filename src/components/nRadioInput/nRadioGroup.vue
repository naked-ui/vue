<template>

  <div
    class="radio-group"
    :nui-namespace="uiNamespace"
     :style="`
      --spacing: ${isNaN(spacing) ? spacing : spacing + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
      --color: ${color};
    `"
  >
    <slot></slot>
    <div
      class="radio-input__alerts"
      :style="`
        --alerts-color: ${alertsColor ? alertsColor : '--'};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'radio-input__alerts-item'
        ]"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
      />
    </div>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'
import formField from '../../utils/formField'
import nRadioInput from './nRadioInput'
export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nRadioGroup',
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    // input attrs
    value: null,
    alertsColor:String,
    required: Boolean,
    color: {
      type: String,
      default: ''
    },
    spacing: {
      type:Number,
      default: null
    }
  },
  components:{ nRadioInput },
  methods:{
    setValidity() {
      // radio(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously, 
      // but the result can be only one
      this.validationMessages = [{
        content: '&cross; This field is required', // or custom message
        color: this.colorInvalid
      }]
    },
    validate(e) {
      // triggered by any radio-input child on value change
      this.$emit('change', e.target.value)
      this.validationMessages = []
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}

</script>

<style lang="scss" src="./nRadioGroup.scss" />