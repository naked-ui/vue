import nuiToggle from './nuiToggle.vue'
import nuiToggleGroup from './nuiToggleGroup.vue'

export default {
  title: 'Toggle',
  component: nuiToggle,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    handleContentOne: { control: 'text' },
    handleContentTwo: { control: 'text' },
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

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nuiToggle },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiToggle v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = DefaultTemplate.bind({})

Default.argTypes = {
  spacing: { table: { disable: true } }
}
Default.args = {
  url: 'https://naked-ui.org/',
  id: 'toggle-id',
  name: 'toggle-name',
  label: 'Label text',
  gap: 8,
  validationEnabled: true,
  required: true,
  dotColor: 'white',
  toggledColor: '#999',
  untoggledColor: '#eee'
}

const HandleContentTemplate = (args, { argTypes }) => ({
  components: { nuiToggle },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiToggle v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const HandleContent = HandleContentTemplate.bind({})
HandleContent.argTypes = {
  spacing: { table: { disable: true } }
}
HandleContent.args = {
  ...Default.args,
  width: '160px',
  handleContentOne: 'Off',
  handleContentTwo: 'On'
}

const ToggleGroupTemplate = (args, { argTypes }) => ({
  components: { nuiToggle, nuiToggleGroup },
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
        <nuiToggle v-bind="$props" v-for="n in 3"
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

export const ToggleGroup = ToggleGroupTemplate.bind({})

ToggleGroupTemplate.args = {
  ...Default.args,
  spacing: 12,
  namespace: 'nui-toggle-group'
}
