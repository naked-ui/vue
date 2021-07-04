import nuiNumberInput from './nuiNumberInput'

export default {
  title: 'NumberInput',
  component: nuiNumberInput,
  argTypes: {
    unit: {
      control: { type: 'text' }
    },
    nativeControls: {
      control: {
        type: 'boolean'
      }
    },
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
    max: {
      control: 'text'
    },
    min: {
      control: 'text'
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

const DefaultTemplate = (args, { argTypes }) => ({
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

export const Default = DefaultTemplate.bind({})

Default.args = {
  gap: 8,
  height: 48,
  width: '140px',
  padding: '10px',
  autofocus: false,
  disabled: false,
  borderWidth: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  pattern: '.*\\S.*',
  name: 'number-input-name',
  id: 'number-input-id',
  title: 'number-input-title',
  label: 'Number input label',
  placeholder: '0',
  autocorrect: 'off',
  required: true
}

const WithUnitTemplate = (args, { argTypes }) => ({
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

export const WithUnit = WithUnitTemplate.bind({})

WithUnit.args = {
  gap: 8,
  height: 48,
  width: '140px',
  unit: 'kg',
  padding: '10px',
  autofocus: false,
  disabled: false,
  borderWidth: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  pattern: '.*\\S.*',
  name: 'number-input-name',
  id: 'number-input-id',
  title: 'number-input-title',
  label: 'Number input label',
  placeholder: '0',
  autocorrect: 'off',
  required: true
}

const MinMaxTemplate = (args, { argTypes }) => ({
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

export const MinMax = MinMaxTemplate.bind({})

MinMax.args = {
  gap: 8,
  height: 48,
  width: '140px',
  padding: '10px',
  autofocus: false,
  disabled: false,
  borderWidth: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  pattern: '.*\\S.*',
  name: 'number-input-name',
  id: 'number-input-id',
  title: 'number-input-title',
  label: 'Number input label',
  placeholder: '0',
  autocorrect: 'off',
  max: 20,
  min: -20,
  required: true
}
