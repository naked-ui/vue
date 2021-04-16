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
    <div class="n-number-input--wrapper">
      <input
        class="n-number-input--input"
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
        @invalid="onInvalid"
        @input="emitValues;validateFormField($event)"
        @blur.capture="validateFormField"
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
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'


export default {
  name: 'nNumberInput',
  mixins: [formField],
  components: {
    nValidationAlerts
  },
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
    },
    enableEmitWithUnit: {
      type: Boolean,
      default: false
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
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    parsedWithUnit () {
      if (!this.enableEmitWithUnit) return `${this.inputValue}`
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
  },
  mounted () {
    this.inputValue = this.value
                      ? typeof this.value === 'string'
                        ? this.value.replace(',', '.')
                        : this.value
                      : 0
  }
}
</script>

<style lang="scss" src="./nNumberInput.scss" />