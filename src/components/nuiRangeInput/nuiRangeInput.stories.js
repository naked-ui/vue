import nuiRangeInput from './nuiRangeInput.vue'

export default {
  title: 'RangeInput',
  component: nuiRangeInput,
  argTypes: {
    dotColor: { control: 'color' },
    rangeColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    outputBackgroundColor: { control: 'color' },
    outputFontColor: { control: 'color' },
  }
}

const Template = (args, { argTypes }) => ({
  components: { nuiRangeInput },
  props: Object.keys(argTypes),
  methods: {
    submit(e) {
      if (!e.target.checkValidity()) return
    }
  },
  data: () => ({ val: '' }),
  template: `
    <form novalidate @submit.prevent="submit">
      <nuiRangeInput v-bind="$props" v-model="val" />
      <br>
      <code>{{ val }}</code>
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'range-input-id',
  name: 'range-input-name',
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
