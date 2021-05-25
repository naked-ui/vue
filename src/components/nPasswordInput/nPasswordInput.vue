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
      <button
        :class="`${componentClasses}__show-password`"
        @click="show = !show"
      >
        {{ show ? 'Hide' : 'Show' }}
      </button>
      <div
        :class="`${componentClasses}__password-strength`"
        :style="passwordStrength"
      ></div>
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
    },
    passwordStrength() {
      const strongRegexp = new RegExp(
        '^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
        'g'
      )
      const mediumRegexp = new RegExp(
        '^(?=.{4,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
        'g'
      )

      const weakRegexp = new RegExp('(?=.{8,}).*', 'g')

      const checkStrength = (value) => {
        const styles = [
          {
            '--strength-width': '10%',
            '--strength-color': 'red'
          },
          {
            '--strength-width': '30%',
            '--strength-color': 'red'
          },
          {
            '--strength-width': '65%',
            '--strength-color': 'orange'
          },
          {
            '--strength-width': '100%',
            '--strength-color': 'green'
          }
        ]

        const strong = strongRegexp.test(value) ? 1 : 0
        const medium = mediumRegexp.test(value) ? 1 : 0
        const weak = weakRegexp.test(value) ? 1 : 0

        return styles[strong + medium + weak]
      }

      return this.value
        ? checkStrength(this.value)
        : {
            '--strength-width': '0%',
            '--strength-color': 'red'
          }
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style lang="scss" src="./nPasswordInput.scss" />
