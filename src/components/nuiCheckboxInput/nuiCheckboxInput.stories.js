import nuiCheckboxInput from './nuiCheckboxInput.vue'
import nuiCheckboxGroup from './nuiCheckboxGroup.vue'

export default {
  title: 'CheckboxInput',
  component: nuiCheckboxInput,
  argTypes: {
    color: { control: 'color' },
    customMessages: {
      control: 'object'
    },
    gap: {
      control: 'text'
    },
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal']
      }
    }
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nuiCheckboxInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      this.$emit('nui:on-form-submit')
      if (!e.target.checkValidity()) return
    }
  },
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiCheckboxInput v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = DefaultTemplate.bind({})
Default.argTypes = {
  // spacing: { table: { disable: true } }
  orientation: {
    defaultValue: 'horizontal'
  }
}
Default.args = {
  url: 'https://naked-ui.org/',
  id: 'checkbox-input-id',
  name: 'checkbox-input-name',
  label: 'Label text',
  gap: 4,
  validationEnabled: true,
  required: true,
  checked: false
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nuiCheckboxInput, nuiCheckboxGroup },
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
      <nuiCheckboxGroup v-bind="$props" v-model="val">
        <nuiCheckboxInput v-for="n in 3"
          :nname="name"
          :key="n"
          :id="id"
          :label="label"
          :value="n"
          gap="4px"
          />
      </nuiCheckboxGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const CheckboxGroup = GroupTemplate.bind({})

CheckboxGroup.argTypes = {
  orientation: {
    defaultValue: 'vertical'
  }
}

CheckboxGroup.args = {
  ...Default.args
}
