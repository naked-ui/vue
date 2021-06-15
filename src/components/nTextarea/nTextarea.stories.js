import nTextarea from './nTextarea.vue'

import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const textareaArgTypes = {
  resize: {
    control: {
      type: 'select',
      options: ['both', 'horizontal', 'vertical', 'none']
    }
  },
}

const customArgTypes = { ...stateArgTypes, ...textareaArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }

export default {
  title: 'Textarea',
  component: nTextarea,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nTextarea },
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
    <nTextarea v-bind="$props" v-model="val" />
    <input style="margin-top: 16px;" type="submit" value="submit">
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Textarea label',
  placeholder: 'Textarea placeholder',
  name: 'textarea-name',
  id: 'textarea-id',
  title: 'textarea-title',
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
  height: '96px',
  width: '280px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  required: true
}
