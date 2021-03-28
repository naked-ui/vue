import nRangeInput from './nRangeInput.vue'

export default {
  title: 'Form/Input/RangeInput',
  component: nRangeInput,
  argTypes: {
    dotColor: { control: 'color' },
    rangeColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    outputBackgroundColor: { control: 'color' },
    outputFontColor: { control: 'color' },
  }
}

const Template = (args, { argTypes }) => ({
  components: { nRangeInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <nRangeInput v-bind="$props" v-model="test" />
      <br>
      <code>{{ test }}</code>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  height: '24px',
  width: '280px',
  ranges: 1,
  dotColor: '#111',
  rangeColor: '#ccc',
  backgroundColor: '#f0f0f0',
  outputBackgroundColor: '#111',
  label: 'Label text',
  gap: '12px',
  outputFontColor: '#fff'
}
