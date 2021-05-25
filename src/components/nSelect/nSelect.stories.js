import nSelect from './nSelect'
import { disabled } from '../../../.storybook/utils/argTypes/stateArgTypes.js'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js'
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes.js'
import validationArgTypes from '../../../.storybook/utils/argTypes/validationArgTypes.js'

const selectArgTypes = {
  optionHoverBackgroundColor: {
    control: 'color',
    defaultValue: '#eee'
  },
  enableNativeSelect: {
    control: 'boolean'
  },
  enableSearchInput: {
    control: 'boolean'
  },
  multiSelectPlaceholder: {
    control: 'text'
  },
  multiple: {
    control: 'boolean'
  }
}

let customArgTypes = {
  disabled,
  ...formFieldArgTypes,
  ...styleArgTypes,
  ...selectArgTypes,
  ...validationArgTypes
}

export default {
  title: 'Form/Select',
  component: nSelect,
  argTypes: customArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nSelect },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({
    selectValue: null
  }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nSelect v-bind="$props" v-model="selectValue" />
      <input style="margin-top: 16px;" type="submit" value="submit">
      <pre>{{ selectValue }}</pre>
    </form>
    `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select label',
  placeholder: 'Select placeholder',
  name: 'select-name',
  id: 'select-id',
  title: 'select-title',
  // customMessages: {
  //   valueMissing: {
  //     text: 'Select option',
  //     color: 'magenta'
  //   }
  // },
  height: '48px',
  width: '280px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  optionHoverBackgroundColor: '#eee',
  options: [
    {
      name: 'Option 1',
      value: 'Option 1'
    },
    {
      name: 'Option 2',
      value: 'Option 2'
    },
    {
      name: 'Option 3',
      value: 'Option 3'
    },
    {
      name: 'Option 4',
      value: 'Option 4'
    }
  ],
  rules: [
    { rule: (val) => !val, text: 'This form field is required.' }
    // {
    //   rule: (val) => val && !(val.length > 1),
    //   text: 'You have to select minimum 2 options.',
    //   forType: 'multi'
    // },
    // {
    //   rule: (val) => val && !(val.length < 3),
    //   text: 'You have to select maximum 3 options.',
    //   forType: 'multi'
    // }
  ]
}
