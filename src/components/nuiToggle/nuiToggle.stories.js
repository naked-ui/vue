import nuiToggle from './nuiToggle.vue'
import nuiToggleGroup from './nuiToggleGroup.vue'

export default {
  title: 'Toggle',
  component: nuiToggle,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    handleContentOne: { control: 'text' },
    handleContentTwo: { control: 'text' },
    background: { control: 'color' },
    backgroundToggled: { control: 'color' },
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
  required: true
}

const CustomStylesTemplate = (args, { argTypes }) => ({
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

export const CustomStyles = CustomStylesTemplate.bind({})

CustomStyles.argTypes = {
  spacing: { table: { disable: true } }
}
CustomStyles.args = {
  url: 'https://naked-ui.org/',
  id: 'toggle-id',
  name: 'toggle-name',
  label: 'Label text',
  gap: 8,
  validationEnabled: true,
  required: true,
  color: 'white',
  background: 'blue',
  backgroundToggled: 'red',
  width: 120,
  height: 40
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
  handleContent0: 'Off',
  handleContent1: 'On'
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
      <nuiToggleGroup id="toggle-group-id" name="toggle-group-name" v-bind="$props" v-model="val">
        <nuiToggle
          v-for="n in 3"
          :name="name"
          :key="n"
          :id="id"
          :value="n"
          :label="label"
          :backgroundToggled="backgroundToggled"
          />
      </nuiToggleGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const ToggleGroup = ToggleGroupTemplate.bind({})

ToggleGroup.args = {
  ...Default.args,
  namespace: 'nui-toggle-group',
  gap: 24,
  backgroundToggled: 'mediumseagreen'
}
