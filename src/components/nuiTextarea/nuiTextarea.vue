<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :for="IDForLabel" :disabled="disabled">
      {{ label }}
    </label>
    <textarea
      :value="value"
      @invalid="onInvalid"
      @input="
        $emit('input', $event.target.value)
        validateFormField($event)
      "
      @blur.capture="validateFormField"
      @keyup="checkInputMaxLength"
      :autofocus="autofocus"
      :autocorrect="autocorrect"
      :disabled="disabled"
      :id="IDForLabel"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :data-dirty="nui.$$dirty"
    />
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
    <nuiInputCounter
      v-if="counterEnabled"
      :totalCharacters="totalCharacters"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'
import nuiInputCounter from '@/utils/components/nuiInputCounter.vue'
import { resize } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [resize]

export default {
  name: 'nuiTextarea',
  mixins: [uuID, formField(componentStyleVariables)],
  components: {
    nuiValidationAlerts,
    nuiInputCounter
  },
  props: {
    namespace: {
      type: String,
      default: 'nui-textarea'
    },
    resize: {
      type: String
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>
