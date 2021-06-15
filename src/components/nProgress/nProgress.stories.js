import nProgress from './nProgress.vue'

export default {
  title: 'Progress',
  component: nProgress,
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
  }
}

const Template = (args, { argTypes }) => ({
  components: { nProgress },
  props: Object.keys(argTypes),
  template: '<nProgress v-bind="$props" />',
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
