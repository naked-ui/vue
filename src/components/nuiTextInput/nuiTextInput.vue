<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <input
      type="text"
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
      ref="input"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocorrect="autocorrect"
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
import formField from '@/utils/formField/index.js'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'
import nuiInputCounter from '@/utils/components/nuiInputCounter.vue'

export default {
  name: 'nuiTextInput',
  mixins: [uuID, formField()],
  components: {
    nuiValidationAlerts,
    nuiInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-text-input'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiTextInput.scss" />
