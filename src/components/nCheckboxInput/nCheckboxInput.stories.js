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
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
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
  url: 'https://naked-ui.org/',
  id: 'checkbox-input',
  name: 'checkbox-input',
  label: 'Label text',
  // customMessages: {
  //   valueMissing: {
  //     text: 'Value is required!',
  //     color: 'magenta'
  //   }
  // },
  gap: 8,
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
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
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

CheckboxGroup.args = {
  ...Default.args,
  spacing: 12
}
