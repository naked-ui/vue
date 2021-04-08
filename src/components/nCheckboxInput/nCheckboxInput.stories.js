import nCheckboxInput from './nCheckboxInput.vue'
import nCheckboxGroup from './nCheckboxGroup.vue'

export default {
  title: 'Form/Input/CheckboxInput',
  component: nCheckboxInput,
  argTypes: {
    color: { control: 'color' },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 20
      }
    },
    spacing: {
      control: {
        type: 'range',
        min: 0,
        max: 20
      }
    },
    customMessages: {
      control: 'object'
    }
  }
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
Default.argTypes = {
  spacing: { table: { disable: true } }
}
Default.args = {
  url: 'https://naked-ui.org/',
  id: 'checkbox-input',
  name: 'checkbox-input',
  label: 'Label text',
  customMessages: { valueMissing: 'Value is required!' },
  gap: 4,
  validationEnabled: true,
  required: true
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nCheckboxInput, nCheckboxGroup },
  props: Object.keys(argTypes),
  data() {
    return {
      val: []
    }
  },
  template: `
    <form novalidate @submit.prevent="e => {if (!e.target.checkValidity()) return}">
      <div>current val: {{val}}</div>
      <nCheckboxGroup v-bind="$props" v-model="val">
        <nCheckboxInput v-for="n in 3"
          name="chbxs"
          :key="n"
          :id="\`\${n}\`"
          :label="\`Checkbox \${n}\`"
          :value="n"
          />
      </nCheckboxGroup>
      <input type="submit" value="submit">
    </form>
  `
})

export const CheckboxGroup = GroupTemplate.bind({})

CheckboxGroup.args = {
  ...Default.args,
  spacing: 12
}
