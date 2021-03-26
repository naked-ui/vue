<template>

  <div
    class="checkbox-group"
    :nui-namespace="uiNamespace"
     :style="`
      --gap: ${isNaN(gap) ? gap : gap + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --outline-width: ${isNaN(outlineWidth) ? outlineWidth : outlineWidth + 'px'};
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
    `"
  >
    <slot></slot>
    <div
      class="checkbox-input__alerts"
      :style="`
        --alerts-color: ${alertsColor ? alertsColor : '--'};
      `"
    >
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'checkbox-input__alerts-item'
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
export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nCheckboxGroup',
  provide() {
    return {
      checkboxGroup: this
    }
  },
  data(){
    return {
      selectedValue: this.multiple ? [] : null
    }
  },
  props: {
    // input attrs
    value: null,
    alertsColor: String,
    required: Boolean,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  watch:{
    multiple (val) {
      if (val) this.selectedValue = []
      else this.selectedValue = null
      this.select(this.selectedValue)
    }
  },
  methods: {
    select (val) {
      this.$emit('change', val)
    },
    setValidity() {
      // checkbox(-group) has only one validation state: `required`
      // custom `setValidity` is triggered by all inputs simultaneously, 
      // but the result can be only one
      this.validationMessages = [{
        content: '&cross; This field is required', // or custom message
        color: this.colorInvalid
      }]
    },
    checkValidity () {
      if (this.required && (this.multiple && !this.selectedValue.length || !this.selectedValue)) return this.setValidity()
      this.validationMessages = []
    },
    validate(e, value) {
      // triggered by any checkbox-input child on value change
      if (this.multiple) {
        if (this.value.includes(value)) this.selectedValue = this.value.filter(v => v !== value)
        else this.selectedValue = this.value.concat([value])
      } else {
        // do not rely on input's `checked` attribute, its controlled by `value`
        this.selectedValue = this.selectedValue === value ? null : value
      }
      this.checkValidity()
      this.select(this.selectedValue)
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}

</script>

<style lang="scss" src="./nCheckboxGroup.scss" />