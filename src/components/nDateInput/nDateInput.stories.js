import nDateInput from './nDateInput.vue'

import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }

export default {
  title: 'Form/Input/DateInput',
  component: nDateInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nDateInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
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
  label: 'Date input label',
  placeholder: 'YYYY-MM-DD',
  name: 'date-input-name',
  id: 'date-input-id',
  title: 'date-input-title',
  pattern: '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))',
  customMessages: {
    valueMissing: {
      text: 'Value is required!',
    }
  },
  gap: '8px',
  height: '48px',
  width: 'auto',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  required: true
}
