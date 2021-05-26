const regexpLabels = ['low', 'medium', 'strong']
const regexpRules = {
  low: '(?=.{8,}).*',
  medium:
    '^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
  strong: '^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$'
}
const regexpStyles = {
  default: {
    '--strength-width': '0%',
    '--strength-color': 'red'
  },
  0: {
    '--strength-width': '10%',
    '--strength-color': 'red'
  },
  1: {
    '--strength-width': '30%',
    '--strength-color': 'red'
  },
  2: {
    '--strength-width': '65%',
    '--strength-color': 'orange'
  },
  3: {
    '--strength-width': '100%',
    '--strength-color': 'green'
  }
}

// const regexpMessages = {
// TODO MESSAGES FOR EACH STRENGTH (0-3)
// default - no input
// 1 - at least 8 chars
// 2 - at least 8 chars with big letters and numbers
// 3 - at least 8 chars with big letters, numbers and special chars
// }

export { regexpLabels, regexpRules, regexpStyles }
