import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nColorInput from './nColorInput.vue'

export default {
  title: 'Form/Input/ColorInput',
  component: nColorInput,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nColorInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '#123456' }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nColorInput
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
  width: '96px',
  padding: '10px',
  autofocus: false,
  disabled: false,
  borderWidth: '2px',
  borderStyle: 'solid',
  // customMessages: {
  //   patternMismatch: { text: 'Enter valid HEX value', color: 'magenta' },
  //   tooShort: { text: 'Enter 6 characters HEX value', color: 'indigo' }
  // }
}
