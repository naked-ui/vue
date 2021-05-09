import nUrlInput from './nUrlInput.vue'

import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';

const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }

export default {
  title: 'Form/Input/UrlInput',
  component: nUrlInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nUrlInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nUrlInput
      v-bind="$props"
      v-model="val"
    />
    <input style="margin-top: 16px;" type="submit" value="submit">
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Url input label',
  placeholder: 'Url input placeholder',
  name: 'url-input-name',
  id: 'url-input-id',
  title: 'url-input-title',
  pattern: '^(?:(?:https?|HTTPS?|ftp|FTP)://)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-zA-Z¡-￿0-9]-*)*[a-zA-Z¡-￿0-9]+)(?:.(?:[a-zA-Z¡-￿0-9]-*)*[a-zA-Z¡-￿0-9]+)*(?:.(?:[a-zA-Z¡-￿]{2,})).?)(?::d{2,5})?(?:[/?#]S*)?$',
  customMessages: {
    valueMissing: {
      text: 'Value is required!',
      color: 'turqoise'
    }
  },
  rules: [
    (value) =>
      !value ||
      value.length > 2 ||
      'This is custom rule message: field not required, but min 3 chars!'
  ],
  height: '48px',
  width: '280px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid'
}
