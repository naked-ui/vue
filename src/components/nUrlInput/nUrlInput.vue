<template>
  <div :class="componentClasses" :style="style" :busy="busy">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <input
      type="url"
      :value="value"
      @invalid="onInvalid"
      @input="
        $emit('input', $event.target.value)
        validateFormField($event)
      "
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      autocorrect="off"
    />
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import { formFieldProps } from '@/utils/props/formFieldProps'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  mixins: [formField()],
  name: 'nUrlInput',
  components: {
    nValidationAlerts
  },
  props: {
    ...formFieldProps,
    baseClassname: {
      type: String,
      default: 'nui-form-field'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>
