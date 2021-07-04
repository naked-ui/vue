<template>
  <div :class="componentClasses" :style="style" :id="uiElementID()">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <div :class="`${namespace}__wrapper`">
      <button
        :class="`${namespace}__minus`"
        :disabled="min === inputValue"
        @mousedown="uiAction('decrease')"
        @mouseup="onMouseUp"
      >
        <slot name="decrease-symbol"> - </slot>
      </button>
      <div :class="`${namespace}__inner`">
        <input
          :class="`${namespace}__input`"
          type="number"
          :id="id"
          :name="name"
          :title="title"
          v-model.number="inputValue"
          :min="min"
          :max="max"
          :autofocus="autofocus"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          :required="required"
          :nui-validation="validationEnabled"
          :maxlength="maxlength"
          :minlength="minlength"
          @invalid="onInvalid"
          @input="emitValues"
          @change="emitValues"
          @blur.capture="validateFormField"
        />
      </div>
      <button
        :class="`${namespace}__plus`"
        :disabled="max === inputValue"
        @mousedown="uiAction('increase')"
        @mouseup="onMouseUp"
      >
        <slot name="increase-symbol"> + </slot>
      </button>
    </div>
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'
import styleProps from '@/utils/props'
import { min, max } from '@/utils/props/inputProps'

const componentStyleVariables = [{ name: 'unit', type: 'string' }]

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-number-input'
  },
  ...styleProps,
  min,
  max,
  // step,
  step: {
    type: Number,
    default: 1
  },
  nativeControls: {
    type: Boolean,
    default: false
  },
  spinnerInterval: {
    type: Number,
    default: 50
  },
  spinnerTimeout: {
    type: Number,
    default: 150
  },
  unit: {
    type: String,
    default: ''
  }
}

export default {
  name: 'nuiNumberInput',
  mixins: [uuID, formField(componentStyleVariables)],
  components: {
    nuiValidationAlerts
  },
  props: componentProps,
  watch: {
    $props: {
      immediate: true,
      deep: true,
      handler() {
        this.emitValues()
      }
    }
  },
  data: () => ({
    inputValue: '',
    interval: null,
    timeout: null
  }),
  computed: {
    componentClasses() {
      return [
        this.namespace,
        'nui-form-field',
        this.nativeControls ? 'native-controls' : '',
        this.unit.length > 0 ? 'with-unit' : ''
      ]
    },
    parsedWithUnit() {
      if (!this.unit) return `${this.inputValue}`
      return `${this.inputValue}${this.unit}`
    }
  },
  methods: {
    emitValues() {
      this.$emit('input', this.parsedWithUnit)
      this.$emit('change', this.parsedWithUnit)
    },
    increase() {
      const newValue = +this.inputValue + this.step
      if (this.max && newValue > this.max) return
      this.inputValue = newValue
      this.emitValues()
    },
    decrease() {
      const newValue = +this.inputValue - this.step
      if (this.min && newValue < this.min) return
      this.inputValue = newValue
      this.emitValues()
    },
    clearTimeout() {
      clearTimeout(this.timeout)
      this.timeout = null
    },
    clearInterval() {
      clearInterval(this.interval)
      this.interval = null
    },
    onMouseUp() {
      this.clearTimeout()
      this.clearInterval()
    },
    uiAction(direction) {
      if (this.readonly) return
      this.clearInterval()
      if (this.max && +this.inputValue > this.max) this.inputValue = this.max
      else if (this.min && +this.inputValue < this.min)
        this.inputValue = this.min

      this[direction]()

      this.timeout = setTimeout(() => {
        this.interval = setInterval(this[direction], this.spinnerInterval)
      }, this.spinnerTimeout)
    }
  }
}
</script>

<style lang="scss" src="./nuiNumberInput.scss" />
