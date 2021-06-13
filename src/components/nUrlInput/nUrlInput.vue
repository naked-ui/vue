<template>
  <div :class="componentClasses" :style="style">
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
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  mixins: [formField()],
  name: 'nUrlInput',
  components: {
    nValidationAlerts
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
