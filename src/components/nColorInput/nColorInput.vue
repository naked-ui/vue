<template>
  <div
    :class="componentClasses"
    :style="style"
  >
    <label
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      v-if="textValueEnabled"
      pattern="#[a-fA-F\d]+"
      type="text"
      v-model="value"
      :id="id"
      @change="updateColorValue($event)"
      @input="validateFormField()"
      :placeholder="placeholder"
      :disabled="disabled"
      required
      maxlength="7"
      :nui-validation="validationEnabled"
    >
    <input
      type="color"
      v-model="value"
      pattern="#[a-fA-F\d]+"
      @change="printColorValue($event);"
      :autofocus="autofocus"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
    >
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
  mixins: [formField],
  components: {
    nValidationAlerts
  },
  data () {
    return {
      value: this.color
    }
  },
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    textValueEnabled: {
      type: Boolean,
      default: true
    },
    baseClassname: {
      type: String,
      default: 'n-form-field'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname,
        'n-color-input'
      ]
    },
  },
  methods: {
    updateColorValue (e) {
    	e.target.value = this.value
    },
    printColorValue (e) {
    	this.value = e.target.value
    }
  }
}

</script>

<style lang="scss" src="./nColorInput.scss" />
