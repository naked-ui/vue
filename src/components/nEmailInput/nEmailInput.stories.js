import nEmailInput from './nEmailInput.vue'

export default {
  title: 'Form/Input/EmailInput',
  component: nEmailInput,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    readonly: {
      control: 'boolean'
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    },
    colorValid: {
      control: 'color'
    },
    colorInvalid: {
      control: 'color'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { nEmailInput },
  props: Object.keys(argTypes),
  template: `
    <nEmailInput
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'email-input',
  label: 'Email input label',
  placeholder: 'Email input placeholder',
  gap: 12,
  height: 48,
  width: 'auto',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
