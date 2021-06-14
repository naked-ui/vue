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
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import nInputCounter from '@/utils/components/nInputCounter.vue'
import { resize } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [resize]

export default {
  mixins: [uuID, formField(componentStyleVariables)],
  name: 'nTextarea',
  components: {
    nValidationAlerts,
    nInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-textarea'
    },
    resize: {
      type: String
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>
