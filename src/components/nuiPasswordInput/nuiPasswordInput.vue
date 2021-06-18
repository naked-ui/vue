<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <div :class="`${baseClassname}--wrapper`">
      <input
        ref="input"
        :type="type"
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
      <button :class="`${baseClassname}__show-password`" @click="show = !show">
        {{ show ? 'Hide' : 'Show' }}
      </button>
    </div>
    <div
      :class="`${baseClassname}__password-strength`"
      :style="passwordStrengthStyle"
    />
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import passwordStrengthHandler from './logic/passwordStrengthHandler'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  mixins: [formField(), passwordStrengthHandler],
  name: 'nPasswordInput',
  components: {
    nuiValidationAlerts
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-password-input'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    },
    type() {
      if (this.show) return 'text'
      else return 'password'
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style lang="scss" src="./nuiPasswordInput.scss" />
