<template>
  <div :class="componentClasses" :style="style" :id="uiElementID()">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <div :class="`${namespace}__wrapper`">
      <button
        :class="`${namespace}__minus`"
        :disabled="min === inputValue"
        @mousedown="action('decrease')"
        @mouseup="onMouseUp"
      >
        -
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
        @mousedown="action('increase')"
        @mouseup="onMouseUp"
      >
        +
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
import { outlineWidth } from '@/utils/styleVariables/helpers/variables'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

const componentStyleVariables = [outlineWidth, { name: 'unit', type: 'unit' }]

export default {
  name: 'nuiNumberInput',
  mixins: [uuID, formField(componentStyleVariables)],
  components: {
    nuiValidationAlerts
  },
  props: {
    namespace: {
      type: String,
      default: 'nui-number-input'
    },
    outlineWidth: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 1
    },
    unit: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    nativeControls: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    },
    spinnerInterval: {
      type: Number,
      default: 150
    }
  },
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
    interval: null
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
    action(direction) {
      this.clearInterval()
      if (+this.inputValue > this.max) this.inputValue = this.max
      else if (+this.inputValue < this.min) this.inputValue = this.min

      this[direction]()

      this.interval = setInterval(this[direction], this.spinnerInterval)
    },
    increase() {
      const newValue = +this.inputValue + this.step
      if (newValue > this.max) return
      this.inputValue = newValue
      this.emitValues()
    },
    decrease() {
      const newValue = +this.inputValue - this.step
      if (newValue < this.min) return
      this.inputValue = newValue
      this.emitValues()
    },
    clearInterval() {
      clearInterval(this.interval)
      this.interval = null
    },
    onMouseUp() {
      this.clearInterval()
    }
  }
  // mounted() {
  //   this.inputValue = this.value
  //     ? typeof this.value === 'string'
  //       ? this.value.replace(',', '.')
  //       : this.value
  //     : ''
  // }
}
</script>

<style lang="scss" src="./nuiNumberInput.scss" />
