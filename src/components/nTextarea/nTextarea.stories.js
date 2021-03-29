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
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { nTextarea },
  props: Object.keys(argTypes),
  data: () => ({ val: '' }),
  template: '<nTextarea v-bind="$props" v-model="val" />'
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
  counterEnabled: true
}
