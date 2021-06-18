<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
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
      @keyup="checkInputMaxLength"
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
      :minlength="minlength"
      :maxlength="maxlength"
      autocorrect="off"
      :data-dirty="nui.$$dirty"
    />
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  mixins: [uuID, formField()],
  name: 'nuiUrlInput',
  components: {
    nuiValidationAlerts
  },
  props: {
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
