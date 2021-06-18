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

const regexpMessages = {
  default: 'Password is missing small and big letters, numbers or special chars.',
  1: 'Password is missing big letters, numbers or special chars.',
  2: 'Password is missing big letters or special chars.',
  3: ''
}

export { regexpLabels, regexpRules, regexpStyles, regexpMessages }
