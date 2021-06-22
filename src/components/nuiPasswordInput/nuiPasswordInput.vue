<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <div :class="`${baseClassname}__wrapper`">
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
        :id="IDForLabel"
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
      <span :class="`${baseClassname}__toggle`" @click="show = !show">
        {{ show ? 'Hide' : 'Show' }}
      </span>
    </div>
    <div :class="`${baseClassname}__strength`" :style="passwordStrengthStyle" />
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import passwordStrengthHandler from './logic/passwordStrengthHandler'
import nuiValidationAlerts from '@/utils/components/nuiValidationAlerts.vue'

export default {
  mixins: [uuID, formField(), passwordStrengthHandler],
  name: 'nuiPasswordInput',
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
