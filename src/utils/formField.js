export default {
  data () {
    return {
      formFieldContent: '',
      // validity: 'lelelel',
      totalCharacters: 0,
      validationMessages: []
    }
  },
  props: {
    // Settings props
    autocorrect: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    counterEnabled: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, Boolean],
      default: false
    },
    minlength: {
      type: [Number, Boolean],
      default: false
    },
    pattern: {
      type: String,
      default: '.*\S.*'
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    // type: {
    //   type: String,
    //   default: ''
    // },
    // Styling props
    // alertsColor: {
    //   type: String,
    //   default: 'red'
    // },
    gap: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    outlineWidth: {
      type: [String, Number],
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    // Validation
    // validationMessages: {
    //   type: Array,
    //   default: () => []
    // },
    colorInvalid: {
      type: String,
      default: 'red'
    },
    colorValid: {
      type: String,
      default: 'green'
    },
  },
  methods: {
    countCharacters () {
      this.totalCharacters = this.formFieldContent.length
    },
    validate () {
      let input = document.getElementById(this.id);
      var validityState = input.validity;

      if(validityState.valueMissing) {
        input.setCustomValidity('This field can\'t be empty');
        this.validationMessages.push(
          {
            content: '&cross; This field is required',
            color: this.colorInvalid
          }
        )
      } else {
        this.validationMessages = []
      }

      if (validityState.patternMismatch && input.type == 'email') {
        input.setCustomValidity('Provide valid e-mail address');
        this.validationMessages.push(
          {
            content: '&cross; Provide valid e-mail address',
            color: this.colorInvalid
          }
        )
      }

      if (validityState.patternMismatch && input.type == 'tel') {
        input.setCustomValidity('Provide valid phone number');
        this.validationMessages.push(
          {
            content: '&cross; Provide valid phone number',
            color: this.colorInvalid
          }
        )
      }

      if (validityState.tooLong) {
        input.setCustomValidity('Value is too long');
        this.validationMessages.push(
          {
            content: '&cross; Value is too long',
            color: this.colorInvalid
          }
        )
      }

      if (validityState.tooShort) {
        input.setCustomValidity('Value is too short');
        this.validationMessages.push(
          {
            content: '&cross; Value is too short',
            color: this.colorInvalid
          }
        )
      }

      if (input.rangeUnderflow) {
        input.setCustomValidity('Your value is too low');
      }
      if (input.rangeOverflow) {
        input.setCustomValidity('Your value is too high');
      } else {
        input.setCustomValidity('');
      }

      console.dir(validityState)
    }
  },
  // computed: {
  //   validity () {
  //     const element = document.getElementsByTagName('input')
  //     return element.checkValidity()
  //   }
  // }
}
