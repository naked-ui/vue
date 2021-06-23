import nuiBadge from './nuiBadge.vue'
import { color, background, padding, borderRadius } from '../../../.storybook/utils/argTypes/styleArgTypes'

const componentArgTypes = {
  color,
  background,
  padding,
  borderRadius,
  size: { control: 'text' },
  badgeText: { control: 'text' }
}

export default {
  title: 'Badge',
  component: nuiBadge,
  argTypes: componentArgTypes
}

const Template = (args, { argTypes }) => ({
  components: { nuiBadge },
  props: Object.keys(argTypes),
  template: `
    <nuiBadge v-bind="$props">
      {{ badgeText }}
    </nuiBadge>
  `
})

export const Default = Template.bind({})

Default.args = {
  size: '24px',
  background: '#ff1100',
  color: '#fff',
  padding: '6px',
  badgeText: '123',
  borderRadius: '12px'
}
