<template>
  <div :class="componentClasses" :style="style">
    <div class="n-number-input--label" v-if="label">
      <label
        :disabled="disabled"
        :for="id"
      >
        {{ label }}
      </label>
    </div>
    <div class="n-number-input__wrapper">
      <input
        class="n-number-input--input"
        type="number"
        v-on="listeners"
        v-model="inputValue"
        :min="min"
        :max="max"
      >
      <div class="n-number-input--buttons">
        <button
          class="n-number-input--buttons__plus"
          :disabled="max === inputValue"
          @click="increase"
        >
          +
        </button>
        <button
          class="n-number-input--buttons__minus"
          :disabled="min === inputValue"
          @click="decrease"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'

export default {
  name: 'nNumberInput',
  mixins: [formField],
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
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
    }
  },
  watch: {
    '$props': {
      immediate: true,
      deep: true,
      handler() {
        this.emitValues()
      }
    }
  },
  data: () => ({
    inputValue: 0
  }),
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: () => this.$emit('input', this.parsedWithUnit),
        change: () => this.$emit('change', this.parsedWithUnit),
      }
    },
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    parsedWithUnit () {
      return `${this.inputValue}${this.unit}`
    }
  },
  methods: {
    emitValues () {
      this.$emit('input', this.parsedWithUnit)
      this.$emit('change', this.parsedWithUnit)
    },
    increase () {
      const newValue = +this.inputValue + this.step
      if (newValue > this.max) return
      this.inputValue = newValue
      this.emitValues()
    },
    decrease () {
      const newValue = +this.inputValue - this.step
      if (newValue < this.min) return
      this.inputValue = newValue
      this.emitValues()
    },
  }
}
</script>

<style lang="scss" src="./nNumberInput.scss" />