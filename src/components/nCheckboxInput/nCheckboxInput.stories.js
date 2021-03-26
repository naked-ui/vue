import nCheckboxInput from './nCheckboxInput.vue'
import nCheckboxGroup from './nCheckboxGroup.vue'

export default {
  title: 'Form/Input/CheckboxInput',
  component: nCheckboxInput
}

const Template = (args, { argTypes }) => ({
  components: { nCheckboxInput },
  props: Object.keys(argTypes),
  template: `
    <form novalidate @submit.prevent="e => {if (!e.target.checkValidity()) return}">
      <nCheckboxInput v-bind="$props" />
    <input type="submit" value="submit"></form>
    `
})

export const Default = Template.bind({})
Default.args = {
  url: 'https://naked-ui.org/'
}
const GroupTemplate = (args, { argTypes }) => ({
  components: { nCheckboxInput, nCheckboxGroup },
  props: Object.keys(argTypes),
  data() {
    return {
      val: null,
      multiple: false
    }
  },
  template: `
    <form novalidate @submit.prevent="e => {if (!e.target.checkValidity()) return}">
      <div>current val: {{val}}</div> 
      <label> multiple 
        <input type="checkbox" v-model="multiple" />
      </label>
      <nCheckboxGroup v-bind="$props" v-model="val" :multiple="multiple">
        <nCheckboxInput v-for="n in 3"
          name="chbxs"
          :key="n"
          :id="\`\${n}\`"
          :label="\`Checkbox \${n}\`"
          :value="n" 
          checked
          />
      </nCheckboxGroup>
      <input type="submit" value="submit">
    </form>
    `
})

export const CheckboxGroup = GroupTemplate.bind({})
Default.args = {
  url: 'https://naked-ui.org/'
}
