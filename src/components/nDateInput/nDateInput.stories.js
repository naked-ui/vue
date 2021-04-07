import nDateInput from './nDateInput.vue'

export default {
  title: 'Form/Input/DateInput',
  component: nDateInput,
  argTypes: {
    name: {
      defaultValue: 'date-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'date-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'date-input-title'
    },
    label: {
      defaultValue: 'Label text'
    },
    placeholder: {
      defaultValue: 'YYYY-MM-DD'
    },
    min: {
      control: 'text',
      defaultValue: '2020-06-15'
    },
    max: {
      control: 'text',
      defaultValue: '2022-06-15'
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
  components: { nDateInput },
  props: Object.keys(argTypes),
  data: () => ({ val: '' }),
  template: `
    <nDateInput
      v-model="val"
      v-bind="$props"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 12,
  height: 48,
  width: 'auto',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
