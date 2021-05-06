import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nTextarea from './nTextarea.vue'

export default {
  title: 'Form/Textarea',
  component: nTextarea,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nTextarea },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nTextarea v-bind="$props" v-model="val" />
    <input style="margin-top: 16px;" type="submit" value="submit">
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  id: 'textarea',
  name: 'textarea',
  label: 'Label text',
  placeholder: 'Placeholder text',
  gap: 8,
  height: 80,
  width: 280,
  maxlength: 24,
  minlength: 3,
  borderWidth: '2px',
  borderStyle: 'solid',
  padding: '10px',
  resize: 'both',
  counterEnabled: true,
  customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.length >= 5 ||
      'This is custom rule message: field not required, but min 5 chars!'
  ]
}
