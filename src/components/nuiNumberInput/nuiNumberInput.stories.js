import nuiNumberInput from './nuiNumberInput'

export default {
  title: 'NumberInput',
  component: nuiNumberInput,
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
      defaultValue: 'number-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'number-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'number-input-title'
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
  components: { nuiNumberInput },
  props: Object.keys(argTypes),
  data: () => ({
    val: 0
  }),
  template: `
        <div>
          <nuiNumberInput v-bind="$props" v-model="val" />
          <pre> {{ val }} </pre>
        </div>
    `
})

export const Default = Template.bind({})
Default.args = {
  gap: 8,
  height: 48,
  width: '280px',
  padding: '10px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  pattern: '.*\\S.*',
  name: 'number-input-name',
  id: 'number-input-id',
  title: 'number-input-title',
  label: 'Text input label',
  placeholder: 'Text input placeholder',
  autocorrect: 'off',
  // customMessages: { valueMissing: 'Not empty!' },
  rules: [
    {
      rule: (value) => !value,
      text: 'Value is missing.'
    },
    {
      rule: (value) => !value.includes('Naked UI'),
      text: 'Value doesn\'t include "Naked UI"'
    }
  ],
  required: true
}
