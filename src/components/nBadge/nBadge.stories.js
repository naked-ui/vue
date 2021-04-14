import nBadge from './nBadge.vue'

export default {
  title: 'Helpers/Badge',
  component: nBadge,
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
    size: { control: 'range' },
    badgeText: { control: 'text' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { nBadge },
  props: Object.keys(argTypes),
  template: `
    <nBadge v-bind="$props">
      {{ badgeText }}
    </nBadge>
  `
})

export const Default = Template.bind({})

Default.args = {
  size: 24,
  background: '#ff1100',
  color: '#fff',
  padding: 6,
  badgeText: '123',
  borderRadius: '12px'
}
