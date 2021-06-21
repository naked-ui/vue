import nuiPasswordInput from './nuiPasswordInput.vue'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js'
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js'
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js'
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js'
const customArgTypes = {
  ...stateArgTypes,
  ...formFieldArgTypes,
  ...styleArgTypes,
  ...validationArgTypes
}

export default {
  title: 'PasswordInput',
  component: nuiPasswordInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nuiPasswordInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nuiPasswordInput
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
  borderStyle: 'solid',
  pattern: '.*\\S.*',
  name: 'password-input-name',
  id: 'password-input-id',
  title: 'password-input-title',
  label: 'Password input label',
  placeholder: 'Password input placeholder',
  autocorrect: 'off',
  // customMessages: { valueMissing: 'Not empty!' },
  rules: []
}
