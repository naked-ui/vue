import nDateInput from './nDateInput.vue'

export default {
  title: 'Form/Input/DateInput',
  component: nDateInput,
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
  components: { nDateInput },
  props: Object.keys(argTypes),
  template: `
    <nDateInput v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'date-input',
  label: 'Date input label',
  placeholder: 'Date input placeholder',
  gap: 12,
  height: 48,
  width: 'auto',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}