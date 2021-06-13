import nBadge from './nBadge.vue'
import { color, backgroundColor, padding, borderRadius } from '../../../.storybook/utils/argTypes/styleArgTypes'

const componentArgTypes = {
  color,
  backgroundColor,
  padding,
  borderRadius,
  size: { control: 'text' },
  badgeText: { control: 'text' }
}

export default {
  title: 'Helpers/Badge',
  component: nBadge,
  argTypes: componentArgTypes
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
  size: '24px',
  backgroundColor: '#ff1100',
  color: '#fff',
  padding: '6px',
  badgeText: '123',
  borderRadius: '12px'
}
