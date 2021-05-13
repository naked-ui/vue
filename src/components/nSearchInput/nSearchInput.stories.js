import nSearchInput from './nSearchInput.vue'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes.js';
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js';
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js';
const customArgTypes = { ...stateArgTypes, ...formFieldArgTypes, ...styleArgTypes, ...validationArgTypes }


export default {
  title: 'Form/Input/SearchInput',
  component: nSearchInput,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nSearchInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nSearchInput
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
  name: 'search-input-name',
  id: 'search-input-id',
  title: 'search-input-title',
  label: 'Search input label',
  placeholder: 'Search input placeholder',
  autocorrect: false,
  list: 'search-input-list',
  suggestions: [
    'Suggestion 1',
    'Suggestion 2',
    'Suggestion 3',
    'Suggestion 4',
    'Suggestion 5'
  ],
  // customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.includes('Naked UI') ||
      'Value doesn\'t include \"Naked UI\"'
  ]
}
