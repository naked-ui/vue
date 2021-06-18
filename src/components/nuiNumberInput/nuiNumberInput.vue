<template>
  <div :class="componentClasses" :style="style" :id="uiElementID()">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <div :class="`${baseClassname}--wrapper`">
      <input
        :class="`${baseClassname}--input`"
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
        @input="
          emitValues
          validateFormField($event)
        "
        @blur.capture="validateFormField"
      />
      <div :class="`${baseClassname}--buttons`">
        <button
          :class="`${baseClassname}--buttons__plus`"
          :disabled="max === inputValue"
          @click="action('increase')"
        >
          +
        </button>
        <button
          :class="`${baseClassname}--buttons__minus`"
          :disabled="min === inputValue"
          @click="action('decrease')"
        >
          -
        </button>
      </div>
    </div>
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '../../utils/formField/index.js'
import { outlineWidth } from '@/utils/styleVariables/helpers/variables'
import nuiValidationAlerts from '../../utils/components/nuiValidationAlerts.vue'

export default {
  name: 'nuiNumberInput',
  mixins: [uuID, formField([outlineWidth])],
  components: {
    nuiValidationAlerts
  },
  props: {
    baseClassname: {
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
    enableEmitWithUnit: {
      type: Boolean,
      default: false
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
    inputValue: ''
  }),
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    },
    parsedWithUnit() {
      if (!this.enableEmitWithUnit) return `${this.inputValue}`
      return `${this.inputValue}${this.unit}`
    }
  },
  methods: {
    emitValues() {
      this.$emit('input', this.parsedWithUnit)
      this.$emit('change', this.parsedWithUnit)
    },
    action(direction) {
      if (+this.inputValue > this.max) this.inputValue = this.max
      else if (+this.inputValue < this.min) this.inputValue = this.min

      return direction === 'increase' ? this.increase() : this.decrease()
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
    }
  },
  mounted() {
    this.inputValue = this.value
      ? typeof this.value === 'string'
        ? this.value.replace(',', '.')
        : this.value
      : ''
  }
}
</script>

<style lang="scss" src="./nuiNumberInput.scss" />
