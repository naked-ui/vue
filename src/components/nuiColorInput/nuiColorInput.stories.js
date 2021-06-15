import nuiColorInput from './nuiColorInput.vue'

import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes };

export default {
  title: 'ColorInput',
  component: nuiColorInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nuiColorInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '#123456' }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiColorInput
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
    patternMismatch: { text: 'Enter valid HEX value' },
    tooShort: { text: 'Enter 6 characters HEX value' },
  },
  rules: [
    {
      rule: (value) => !!value && value.length < 3,
      text: 'This is custom rule message: field not required, but min 3 chars!'
    },
  ],
  height: '48px',
  width: '96px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  required: true
}
