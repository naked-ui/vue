import nNumberInput from './nNumberInput'

export default {
    title: 'Form/Input/NumberInput',
    component: nNumberInput,
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
    components: { nNumberInput },
    props: Object.keys(argTypes),
    data: () => ({
        val: 0
    }),
    template: `
        <div>
          <nNumberInput v-bind="$props" v-model="val" />
          <pre> {{ val }} </pre>
        </div>
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
        'This is custom rule message: field not required, but min 3 chars!'
    ]
  }