import nColorInput from './nColorInput.vue'

export default {
  title: 'Form/Input/ColorInput',
  component: nColorInput
}

const Template = (args, { argTypes }) => ({
  components: { nColorInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <nColorInput
        v-bind="$props"
      />
    </div>
  `,
  data: () => ({
    color: ''
  })
});

export const Default = Template.bind({});
Default.args = {
  name: 'color-input',
  id: 'color-input'
}