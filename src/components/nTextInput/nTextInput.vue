<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <input
      ref="input"
      type="text"
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
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocorrect="autocorrect"
      :pattern="pattern"
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
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import nInputCounter from '@/utils/components/nInputCounter.vue'

export default {
  mixins: [formField()],
  name: 'nTextInput',
  components: {
    nValidationAlerts,
    nInputCounter
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

<style lang="scss" src="./nTextInput.scss" />
