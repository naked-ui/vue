import nuiProgress from './nuiProgress.vue'

export default {
  title: 'Progress',
  component: nuiProgress,
  argTypes: {
    value: {
      control: 'range',
      min: 0,
      max: 100
    },
    gap: {
      control: 'range'
    },
    name: {
      control: 'text'
    },
    color: {
      control: 'color',
      defaultValue: '#333'
    },
    backgroundColor: {
      control: 'color',
      defaultValue: '#eee'
    },
  }
}

const Template = (args, { argTypes }) => ({
  components: { nuiProgress },
  props: Object.keys(argTypes),
  template: '<nuiProgress v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: 40,
  id: 'progress-id',
  label: 'Progress label',
  height: '6px',
  width: '280px',
  gap: '8px'
}
