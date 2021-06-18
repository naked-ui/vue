import nuiToggleInput from './nuiToggleInput.vue'
import nuiToggleGroup from './nuiToggleGroup.vue'

export default {
  title: 'ToggleInput',
  component: nuiToggleInput,
  argTypes: {
    color: { control: 'color' },
    dotColor: { control: 'color' },
    toggledColor: { control: 'color' },
    untoggledColor: { control: 'color' },
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
  components: { nuiToggleInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiToggleInput v-bind="$props" />
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
  id: 'toggle-input-id',
  name: 'toggle-input-name',
  label: 'Label text',
  gap: 8,
  validationEnabled: true,
  required: true,
  dotColor: 'white',
  toggledColor: 'green',
  untoggledColor: 'red'
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nuiToggleInput, nuiToggleGroup },
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
      <nuiToggleGroup v-bind="$props" v-model="val">
        <nuiToggleInput v-for="n in 3"
          :nname="name"
          :key="n"
          :id="id"
          :label="label"
          :value="n"
          />
      </nuiToggleGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const CheckboxGroup = GroupTemplate.bind({})

CheckboxGroup.args = {
  ...Default.args,
  spacing: 12,
  baseClassname: 'nui-toggle-group'
}
