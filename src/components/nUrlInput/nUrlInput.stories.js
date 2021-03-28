import nUrlInput from './nUrlInput.vue'

export default {
  title: 'Form/Input/UrlInput',
  component: nUrlInput,
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
    colorValid: {
      control: 'color'
    },
    colorInvalid: {
      control: 'color'
    }
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
  id: 'url-input',
  label: 'URL input label',
  placeholder: 'URL input placeholder',
  gap: 12,
  height: 48,
  width: '320px',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
