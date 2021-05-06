import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nEmailInput from './nEmailInput.vue'

export default {
  title: 'Form/Input/EmailInput',
  component: nEmailInput,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nEmailInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nEmailInput
        v-model="val"
        v-bind="$props"
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
  borderStyle: 'solid',
  // customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.length > 2 ||
      'This is custom rule message: field not required, but min 3 chars!'
  ],
  // pattern: '*'
  pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
}
