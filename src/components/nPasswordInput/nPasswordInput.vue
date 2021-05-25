<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <div :class="`${componentClasses}--wrapper`">
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
      <button :class="`${componentClasses}__show-password`" @click="show = !show">{{ show ? 'Hide' : 'Show' }}</button>
    </div>
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
  name: 'nPasswordInput',
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

<style lang="scss" src="./nPasswordInput.scss" />
