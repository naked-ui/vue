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
      control: 'object',
      table: { disable: true }
    },
    rules: {
      table: { disable: true }
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
      defaultValue: false,
      table: { disable: true }
    },
    validationEnabled: {
      control: 'boolean',
      defaultValue: false,
      table: { disable: true }
    },
    colorValid: {
      control: 'color',
      table: { disable: true }
    },
    colorInvalid: {
      control: 'color',
      table: { disable: true }
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
    <div>
      <nSearchInput
        v-model="val"
        v-bind="$props"
      />
      <pre>{{ val }}</pre>
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
  list: ['mango', 'cherry', 'apple', 'watermelon']
}
