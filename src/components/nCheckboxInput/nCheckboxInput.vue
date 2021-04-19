<template>
  <div class="checkbox-input" :style="style" :class="componentClasses">
    <label class="checkbox-input__label" :disabled="disabled" :for="id">
      <input
        class="checkbox-input__checkbox"
        type="checkbox"
        @invalid="$setValidity"
        @change="$validate"
        :id="id"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :required="isRequired"
        :checked="isChecked"
        :value="value"
        :name="name"
        :nui-validation="validationEnabled"
      />
      {{ label }}
    </label>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import formField from '@/utils/formField/index'

export default {
  mixins: [formField],
  name: 'nCheckboxInput',
  components: { nValidationAlerts },
  inject: {
    checkboxGroup: {
      default: false
    }
  },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
    },
    // input attrs
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
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
    },
    style() {
      return [...this.$super(formField).style(), , { '--color': this.color }]
    },
    componentClasses() {
      return [this.baseClassname]
    }
  },
  methods: {
    $setValidity(e) {
      if (this.checkboxGroup) {
        this.checkboxGroup.checkValidity()
      } else {
        this.setValidity(e)
      }
    },
    $validate(e) {
      if (this.checkboxGroup) {
        // send value to compare equal values (e.g. checkbox `value` attribute converts numers to string)
        this.checkboxGroup.validate(e, this.value)
      } else {
        this.validateFormField(e)
      }
    }
  }
}
</script>

<style lang="scss" src="./nCheckboxInput.scss" />
