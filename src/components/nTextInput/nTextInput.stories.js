import nTextInput from './nTextInput.vue'

export default {
  title: 'Form/Input/TextInput',
  component: nTextInput,
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
    // type: {
    //   control: {
    //     type: 'select',
    //     options: ['text', 'email', 'tel', 'date', 'time']
    //   },
    //   defaultValue: 'text'
    // },
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
    alertsColor: {
      control: 'color'
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
  components: { nTextInput },
  props: Object.keys(argTypes),
  template: `
    <nTextInput v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'text-input',
  label: 'Text input label',
  placeholder: 'Text input placeholder',
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
  counterEnabled: true
}