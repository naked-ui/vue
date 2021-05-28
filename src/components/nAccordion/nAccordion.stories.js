import nAccordion from './nAccordion'
import nAccordionItem from './nAccordionItem'

export default {
  title: 'Content/Accordion',
  component: nAccordion,
  argTypes: {
    items: { control: 'array' }
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nAccordion, nAccordionItem },
  props: Object.keys(argTypes),
  template: `
    <nAccordion v-bind="$props">
      <nAccordionItem v-for="(item, $index) in items" :key="$index">
        <template #title>{{ item.title }}</template>
        <template #text>{{ item.text }}</template>
      </nAccordionItem>
    </nAccordion>
  `
})
export const Default = DefaultTemplate.bind({})

Default.args = {
  items: [
    { title: 'Title 1', text: 'Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1' },
    { title: 'Title 2', text: 'Text 2Text 2Text 2Text 2Text 2Text 2Text 2Text 2Text 2Text 2' },
    { title: 'Title 3', text: 'Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3Text 3' }
  ]
}