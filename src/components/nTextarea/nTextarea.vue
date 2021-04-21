<template>
  <div
    :class="componentClasses"
    :style="style"
  >
    <label
      :for="id"
      :disabled="disabled"
    >
      {{ label }}
    </label>
    <textarea
      :value="value"
      @invalid="onInvalid"
      @input="$emit('input', $event.target.value);validateFormField($event)"
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
    />
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
    <nInputCounter
      v-if="counterEnabled"
      :totalCharacters="totalCharacters"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'
import nInputCounter from '../../utils/components/nInputCounter.vue'
import { resize } from '../../utils/styleVariables/variables'

const customStyleVariables = [resize]

export default {
  mixins: [formField(customStyleVariables)],
  name: 'nTextarea',
  components: {
    nValidationAlerts,
    nInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
    },
    resize: {
      type: String
    },
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
  },
}
</script>
