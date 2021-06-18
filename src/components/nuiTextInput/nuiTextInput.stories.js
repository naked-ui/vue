import nuiTextInput from './nuiTextInput.vue'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }


export default {
  title: 'TextInput',
  component: nuiTextInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nuiTextInput },
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
    <nuiTextInput
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
  name: 'text-input-name',
  id: 'text-input-id',
  title: 'text-input-title',
  label: 'Text input label',
  placeholder: 'Text input placeholder',
  autocorrect: "off",
  // customMessages: { valueMissing: 'Not empty!' },
  rules: [
    {
      rule: (value) => !value,
      text: 'Value is missing.'
    },
    {
      rule: (value) => !value.includes('Naked UI'),
      text: 'Value doesn\'t include \"Naked UI\"'
    },
  ],
  required: true
}
