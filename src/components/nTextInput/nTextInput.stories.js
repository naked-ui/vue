import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nTextInput from './nTextInput.vue'

export default {
  title: 'Form/Input/TextInput',
  component: nTextInput,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nTextInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nTextInput
      v-bind="$props"
      v-model="val"
    />
    <input style="margin-top: 16px;" type="submit" value="submit">
  </form>
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
  borderWidth: '2px',
  pattern: '.*\\S.*',
  name: 'text-input-name',
  id: 'text-input-id',
  title: 'text-input-title',
  label: 'Text input label',
  placeholder: 'Text input placeholder',
  autocorrect: false,
  // customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.includes('Naked UI') ||
      'Value doesn\'t include \"Naked UI\"'
  ]
}
