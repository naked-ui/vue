import nTimeInput from './nTimeInput.vue'

export default {
  title: 'Form/Input/TimeInput',
  component: nTimeInput,
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
    counterEnabled: {
      control: 'boolean',
      defaultValue: true
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
    minlength: {
      control: {
        type: 'range',
        min: 3,
        max: 80
      }
    },
    maxlength: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    },
    autocorrect: {
      control: {
        type: 'select',
        options: [ 'on', 'off' ]
      }
    },
  }
}

const Template = (args, { argTypes }) => ({
  components: { nTimeInput },
  props: Object.keys(argTypes),
  template: `
    <nTimeInput v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'Time-input',
  label: 'Time input label',
  placeholder: 'Time input placeholder',
  gap: 12,
  height: 48,
  width: 'auto',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  maxlength: 24,
  minlength: 1,
  outlineWidth: '2px',
  validationMessages: [
    '&cross; Validation message'
  ],
  counterEnabled: true,
  validInputAlertEnabled: true
}
