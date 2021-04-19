import nSearchInput from './nSearchInput.vue'

export default {
  title: 'Form/Input/SearchInput',
  component: nSearchInput,
  argTypes: {
    autocorrect: {
      defaultValue: null,
      description: '`autocorrect` prop is Safari only'
    },
    customMessages: {
      control: 'object'
    },
    rules: {
      control: 'array'
    },
    name: {
      defaultValue: 'search-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'search-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'search-input-title'
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
  components: { nSearchInput },
  props: Object.keys(argTypes),
  data: () => ({ val: '' }),
  template: `
    <nSearchInput
      v-model="val"
      v-bind="$props"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 8,
  height: 48,
  width: '280px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px',
  customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.length > 2 ||
      'This is custom rule message: field not required, but min 3 chars!'
  ]
}