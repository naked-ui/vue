import nRadioGroup from './nRadioGroup.vue'
import nRadioInput from '../nRadioInput/nRadioInput.vue'

export default {
  title: 'Form/Input/RadioGroup',
  component: nRadioGroup
}

const Template = (args, { argTypes }) => ({
  components: { nRadioGroup, nRadioInput },
  props: Object.keys(argTypes),
  data() {
    return {
      val: 1
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

export const Default = Template.bind({})
Default.args = {
  url: 'https://naked-ui.org/'
}

const RequiredTemplate = (args, { argTypes }) => ({
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

export const Required = RequiredTemplate.bind({})
Required.args = {
  url: 'https://naked-ui.org/'
}
