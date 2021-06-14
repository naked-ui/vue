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

export default {
  mixins: [uuID, formField()],
  name: 'nEmailInput',
  components: {
    nValidationAlerts,
    nInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-email-input'
    }
    // pattern: {
    //   type: String,
    //   default: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
    // }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>
