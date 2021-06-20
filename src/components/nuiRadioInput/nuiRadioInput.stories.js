import nuiRadioInput from './nuiRadioInput.vue'
import nuiRadioGroup from './nuiRadioGroup.vue'

export default {
  title: 'RadioInput',
  component: nuiRadioInput,
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
  components: { nuiRadioInput },
  props: Object.keys(argTypes),
  template: `
    <form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <nuiRadioInput v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = Template.bind({})
Default.argTypes = {
  spacing: { table: { disable: true } }
}
Default.args = {
  id: 'radio-input-id',
  name: 'radio-input-name',
  label: 'Radio input label',
  gap: 8,
  validationEnabled: true,
  required: true
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nuiRadioGroup, nuiRadioInput },
  props: Object.keys(argTypes),
  data() {
    return {
      val: null
    }
  },
  template: `
    <form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <nuiRadioGroup v-bind="$props" v-model="val">
        <nuiRadioInput v-for="n in 3"
          name="radios"
          :key="n"
          :id="\`radio\-input\-\${n}\`"
          :label="\`Radio \${n}\`"
          :value="n"
        />
      </nuiRadioGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const Group = GroupTemplate.bind({})
Group.args = {
  ...Default.args,
  spacing: 12,
  namespace: 'nui-radio-group'
}