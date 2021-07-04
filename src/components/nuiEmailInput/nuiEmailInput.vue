<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <input
      type="email"
      :value="value"
      @invalid="onInvalid"
      @input="
        $emit('input', $event.target.value)
        validateFormField($event)
      "
      @blur.capture="validateFormField"
      @keyup="checkInputMaxLength"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="IDForLabel"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :maxlength="maxlength"
      :minlength="minlength"
      autocorrect="off"
      :pattern="pattern"
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
import formField from '@/utils/formField'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'
import nuiInputCounter from '@/utils/components/nuiInputCounter.vue'

export default {
  mixins: [uuID, formField()],
  name: 'nuiEmailInput',
  components: {
    nuiValidationAlerts,
    nuiInputCounter
  },
  props: {
    namespace: {
      type: String,
      default: 'nui-email-input'
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>
