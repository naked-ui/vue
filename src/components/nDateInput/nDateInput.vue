<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <input
      type="date"
      :value="value"
      @invalid="onInvalid"
      @input="
        $emit('input', $event.target.value)
        validateFormField($event)
      "
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="IDForLabel"
      :max="max"
      :min="min"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :data-dirty="nui.$$dirty"
    />
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  mixins: [uuID, formField()],
  components: {
    nValidationAlerts
  },
  name: 'nDateInput',
  props: {
    baseClassname: {
      type: String,
      default: 'nui-date-input'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>
