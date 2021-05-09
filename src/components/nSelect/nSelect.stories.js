import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';
import nSelect from './nSelect'

const selectArgTypes = {
  optionHoverBackgroundColor: {
    control: 'color',
    defaultValue: '#eee'
  }
}

let customArgTypes = { ...formFieldArgTypes, ...selectArgTypes };

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
    </form>
    `
})

export const Default = Template.bind({})
Default.args = {
  width: 280,
  height: 48,
  gap: 8,
  padding: 10,
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
    },
  ]
}