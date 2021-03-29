import nColorInput from './nColorInput.vue'

export default {
  title: 'Form/Input/ColorInput',
  component: nColorInput,
  argTypes: {
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
      defaultValue: 'Placeholder text'
    },
    pattern: {
      control: 'text'
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
  data: () => ({ val: '' }),
  template: `
    <nColorInput
      v-bind="$props"
      v-model="val"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 12,
  height: 48,
  width: '96px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
