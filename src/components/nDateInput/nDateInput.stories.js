import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nDateInput from './nDateInput.vue'

export default {
  title: 'Form/Input/DateInput',
  component: nDateInput,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nDateInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
    <div>
      <form novalidate @submit.prevent="submit">
        <nDateInput
          v-model="val"
          v-bind="$props"
        />
        <input style="margin-top: 16px;" type="submit" value="submit">
      </form>
      <code>{{ val }}</code>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  gap: 8,
  height: 48,
  width: 'auto',
  padding: '10px',
  autofocus: false,
  disabled: false,
  borderWidth: '2px',
  borderStyle: 'solid',
  pattern: '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))'
}
