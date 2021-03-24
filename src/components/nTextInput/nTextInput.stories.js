import nTextInput from './nTextInput.vue'

export default {
  title: 'Form/Input/TextInput',
  component: nTextInput,
  argTypes: {
    validationColor: {
      control: 'color'
    }
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
  id: 'your-id-here',
  label: 'Input label',
  placeholder: 'Input placeholder',
  gap: 12,
  height: 48,
  width: 320,
  autofocus: false,
  disabled: false,
  maxlength: 24,
  minlength: 1,
  outlineWidth: '2px',
  validationMessages: [
    '&cross; Validation message'
  ]
}