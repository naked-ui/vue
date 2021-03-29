import nUrlInput from './nUrlInput.vue'

export default {
  title: 'Form/Input/UrlInput',
  component: nUrlInput,
  argTypes: {
    name: {
      defaultValue: 'url-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'url-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'url-input-title'
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
    },
  }
}

const Template = (args, { argTypes }) => ({
  components: { nUrlInput },
  props: Object.keys(argTypes),
  template: `
    <nUrlInput
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  gap: 12,
  height: 48,
  width: '280px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
