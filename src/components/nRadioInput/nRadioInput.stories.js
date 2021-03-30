import nRadioInput from './nRadioInput.vue'
import nRadioGroup from './nRadioGroup.vue'

export default {
  title: 'Form/Input/RadioInput',
  component: nRadioInput,
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
  components: { nRadioInput },
  props: Object.keys(argTypes),
  template: `<form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <nRadioInput v-bind="$props" />
      <input type="submit" value="submit">
    </form>`
})

export const Default = Template.bind({})
Default.argTypes = {
  spacing: { table: { disable: true } }
}
Default.args = {
  url: 'https://naked-ui.org/',
  id: 'radio',
  name: 'radio',
  label: 'test label',
  customMessages: { valueMissing: 'Not empty!' },
  gap: 12
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nRadioGroup, nRadioInput },
  props: Object.keys(argTypes),
  data() {
    return {
      val: null
    }
  },
  template: `<form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <div>current val: {{val}}</div>
      <nRadioGroup v-bind="$props" v-model="val">
        <nRadioInput v-for="n in 3"
        name="radios"
        :key="n"
        :id="\`\${n}\`"
        :label="\`Radio \${n}\`"
        :value="n" ></nRadioInput>
      </nRadioGroup>
      <input type="submit" value="submit">
    </form>`
})

export const Group = GroupTemplate.bind({})
Group.args = {
  ...Default.args,
  spacing: 12
}

const GroupRequiredTemplate = (args, { argTypes }) => ({
  components: { nRadioGroup, nRadioInput },
  props: Object.keys(argTypes),
  data() {
    return {
      val: 'undefined'
    }
  },
  template: `<form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <div>current val: {{ val }}</div>
      <nRadioGroup v-bind="$props" required v-model="val">
        <nRadioInput v-for="n in 3"
        name="radios"
        :key="n"
        :id="\`\${n}\`"
        :label="\`Radio \${n}\`"
        :value="n" ></nRadioInput>
      </nRadioGroup>
      <input type="submit" value="submit">
    </form>`
})

export const GroupRequired = GroupRequiredTemplate.bind({})
GroupRequired.args = {
  ...Group.args
}
