import nRadioInput from './nRadioInput.vue'

export default {
  title: 'Form/Input/RadioInput',
  component: nRadioInput
}

const Template = (args, { argTypes }) => ({
  components: { nRadioInput },
  props: Object.keys(argTypes),
  template:
    '<form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}"><nRadioInput v-bind="$props" />  <input type="submit" value="submit"></form>'
})

export const Default = Template.bind({})
Default.args = {
  url: 'https://naked-ui.org/'
}
