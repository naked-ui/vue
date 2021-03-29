import nTextInput from './nTextInput.vue'

export default {
  title: 'Form/Input/TextInput',
  component: nTextInput,
  argTypes: {
    name: {
      defaultValue: 'text-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'text-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'text-input-title'
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
  components: { nTextInput },
  props: Object.keys(argTypes),
  template: `
  <form novalidate @submit.prevent="e => {if (!e.target.checkValidity()) return}">
    <nTextInput
      v-bind="$props"
    />
    <input type="submit" value="submit">
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 12,
  height: 48,
  width: '280px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px',
  pattern: '.*\\S.*',
  rules: [
    (value) =>
      value.length > 2 ||
      'This is custom rule message: field not required, but min 3 chars!'
  ]
}
