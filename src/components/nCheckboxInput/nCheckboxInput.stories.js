import nCheckboxInput from './nCheckboxInput.vue'
import nCheckboxGroup from './nCheckboxGroup.vue'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes'

export default {
  title: 'Form/Input/CheckboxInput',
  component: nCheckboxInput,
  argTypes: formFieldArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nCheckboxInput },
  props: Object.keys(argTypes),
  template: `
    <form novalidate @submit.prevent="e => {if (!e.target.checkValidity()) return}">
      <nCheckboxInput v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = Template.bind({})
Default.argTypes = {
  spacing: { table: { disable: true } }
}

Default.args = {
  label: 'Checkbox input label',
  name: 'email-input-name',
  id: 'email-input-id',
  title: 'email-input-title',
  gap: '8px'
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
      <nCheckboxGroup v-bind="$props" v-model="val">
        <nCheckboxInput v-for="n in 3"
          name="chbxs"
          :key="n"
          :id="\`checkbox\-input\-\${n}\`"
          :label="\`Checkbox \${n}\`"
          :value="n"
          />
      </nCheckboxGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const CheckboxGroup = GroupTemplate.bind({})
