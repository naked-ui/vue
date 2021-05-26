import { regexpRules, regexpLabels, regexpStyles } from './regexpSettings'

export default {
  computed: {
    passwordStrengthValue() {
      if (this.value === '') return regexpStyles['default']

      let strengthValue = 0
      for (const label of regexpLabels) {
        const regexpRule = new RegExp(regexpRules[label])
        strengthValue += regexpRule.test(this.value) ? 1 : 0
      }

      return strengthValue
    },
    passwordStrengthStyle() {
      return regexpStyles[this.passwordStrengthValue]
    }
    // TODO
    // passwordStrengthMessage() {
    //   return regexpMessages[this.passwordStrengthStyle]
    // }
  }
}
