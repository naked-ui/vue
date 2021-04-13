import nColorInput from './nColorInput.vue'

export default {
  title: 'Form/Input/ColorInput',
  component: nColorInput,
  argTypes: {
    customMessages: {
      control: 'object'
    },
    name: {
      defaultValue: 'color-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'color-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'color-input-title'
    },
    label: {
      defaultValue: 'Label text'
    },
    placeholder: {
      defaultValue: '#1b2b3c'
    },
    pattern: {
      control: 'text',
      defaultValue: '/0x[\da-f]/i'
    },
    required: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    autofocus: {
      control: 'boolean'
    },
    readonly: {
      control: 'boolean'
    },
    counterEnabled: {
      defaultValue: false
    },
    validationEnabled: {
      control: 'boolean',
      defaultValue: true
    },
    colorValid: {
      control: 'color'
    },
    colorInvalid: {
      control: 'color'
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { nColorInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '#123456' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nColorInput
      v-bind="$props"
      v-model="val"
    />
    <input style="margin-top: 16px;" type="submit" value="submit">
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 8,
  height: 48,
  width: '96px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px',
  customMessages: {
    patternMismatch: { text: 'Enter valid HEX value', color: 'magenta' },
    tooShort: { text: 'Enter 6 characters HEX value', color: 'indigo' }
  }
}
