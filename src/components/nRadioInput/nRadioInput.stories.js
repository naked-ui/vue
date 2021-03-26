import nRadioInput from './nRadioInput.vue'
import nRadioGroup from './nRadioGroup.vue'

export default {
  title: 'Form/Input/RadioInput',
  component: nRadioInput
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
Default.args = {
  url: 'https://naked-ui.org/'
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
  url: 'https://naked-ui.org/'
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
  url: 'https://naked-ui.org/'
}
