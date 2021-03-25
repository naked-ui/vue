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
  id: 'color-input',
  name: 'color-input',
  label: 'Color input label',
  placeholder: 'Color input placeholder',
  gap: 12,
  height: 48,
  width: 'auto',
  padding: '0 12px',
  autofocus: false,
  disabled: false,
  outlineWidth: '2px'
}
