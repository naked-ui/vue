import nuiEmailInput from './nuiEmailInput.vue'

import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }

export default {
  title: 'EmailInput',
  component: nuiEmailInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nuiEmailInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiEmailInput
        v-model="val"
        v-bind="$props"
      />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Email input label',
  placeholder: 'Email input placeholder',
  name: 'email-input-name',
  id: 'email-input-id',
  title: 'email-input-title',
  pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$',
  // customMessages: {
  //   valueMissing: {
  //     text: 'Value is required!',
  //     color: 'magenta'
  //   }
  // },
  rules: [
    {
      rule: (value) => !!value && value.length < 3,
      text: 'This is custom rule message: field not required, but min 3 chars!'
    },
  ],
  height: '48px',
  width: '280px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  required: true
}
