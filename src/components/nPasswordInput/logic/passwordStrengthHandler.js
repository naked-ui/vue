import { regexpRules, regexpLabels, regexpStyles, regexpMessages } from './regexpSettings'

export default {
  watch: {
    value() {
      this.validPasswordStrength()
    }
  },
  computed: {
    passwordStrengthValue() {
      if (this.value === '') return 'default'

      let strengthValue = 0
      for (const label of regexpLabels) {
        const regexpRule = new RegExp(regexpRules[label])
        strengthValue += regexpRule.test(this.value) ? 1 : 0
      }

      return strengthValue
    },
    passwordStrengthStyle() {
      return regexpStyles[this.passwordStrengthValue]
    },
    passwordStrengthMessage() {
      return regexpMessages[this.passwordStrengthValue]
    }
  },
  methods: {
    validPasswordStrength() {
      if (this.passwordStrengthMessage === '') {
        this.validationMessages = []
        return
      }

      const message = {
        content: this.passwordStrengthMessage,
        color: this.colorInvalid
      }

      this.validationMessages = [message]
    }
  }
}
