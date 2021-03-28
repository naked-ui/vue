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
      v-model="value"
      @keyup="countCharacters(value); validate();"
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
import formField from '../../utils/formField'
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'
import nInputCounter from '../../utils/components/nInputCounter.vue'

export default {
  mixins: [formField],
  name: 'nTextarea',
  components: {
    nValidationAlerts,
    nInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-input'
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
