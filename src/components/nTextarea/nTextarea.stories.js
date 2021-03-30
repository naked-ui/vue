import nTextarea from './nTextarea.vue'

export default {
  title: 'Form/Textarea',
  component: nTextarea,
  argTypes: {
    resize: {
      control: {
        type: 'select',
        options: ['both', 'horizontal', 'vertical', 'none']
      }
    },
    autocorrect: {
      defaultValue: null,
      description: '`autocorrect` prop is Safari only'
    },
    customMessages: {
      control: 'object'
    },
    rules: {
      control: 'array'
    },
    name: {
      defaultValue: 'text-input-name',
      description: '`name` prop is required'
    },
    id: {
      defaultValue: 'text-input-id',
      description: '`id` prop is required'
    },
    title: {
      defaultValue: 'text-input-title'
    },
    label: {
      defaultValue: 'Label text'
    },
    placeholder: {
      defaultValue: 'Placeholder text'
    },
    pattern: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    autofocus: {
      control: 'boolean'
    },
    readonly: {
      control: 'boolean'
    },
    counterEnabled: {
      defaultValue: false
    },
    validationEnabled: {
      control: 'boolean',
      defaultValue: true
    },
    colorValid: {
      control: 'color'
    },
    colorInvalid: {
      control: 'color'
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 80
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { nTextarea },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
  <form novalidate @submit.prevent="submit">
    <nTextarea v-bind="$props" v-model="val" />
    <input type="submit" value="submit" >
  </form>
  `
})

export const Default = Template.bind({})
Default.args = {
  id: 'textarea',
  name: 'textarea',
  label: 'Label text',
  placeholder: 'Placeholder text',
  gap: 10,
  height: 80,
  width: 320,
  autofocus: false,
  disabled: false,
  maxlength: 24,
  minlength: 3,
  outlineWidth: '2px',
  padding: '15px 12px',
  resize: 'both',
  counterEnabled: true,
  customMessages: { valueMissing: 'Not empty!' },
  rules: [
    (value) =>
      !value ||
      value.length >= 5 ||
      'This is custom rule message: field not required, but min 5 chars!'
  ]
}
