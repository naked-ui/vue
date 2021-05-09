import nColorInput from './nColorInput.vue'

import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes };

export default {
  title: 'Form/Input/ColorInput',
  component: nColorInput,
  argTypes: customArgTypes
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
  label: 'Color input label',
  placeholder: 'Color input placeholder',
  name: 'color-name',
  id: 'color-id',
  title: 'color-title',
  customMessages: {
    patternMismatch: { text: 'Enter valid HEX value', color: 'magenta' },
    tooShort: { text: 'Enter 6 characters HEX value', color: 'indigo' },
  },
  rules: [
    (value) =>
      !value ||
      value.length > 2 ||
      'This is custom rule message: field not required, but min 3 chars!'
  ],
  height: '48px',
  width: '96px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid'
}
