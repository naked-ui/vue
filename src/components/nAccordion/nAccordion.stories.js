import nAccordion from './nAccordion'
import nAccordionItem from './nAccordionItem'

export default {
  title: 'Content/Accordion',
  component: nAccordion,
  argTypes: {
    items: { control: 'array' },
    padding: { type: 'text' },
    transition: { type: 'text' }
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nAccordion, nAccordionItem },
  props: Object.keys(argTypes),
  template: `
    <nAccordion v-bind="$props">
      <nAccordionItem v-for="(item, $index) in items" :key="$index" :contentHeight="'250px'">
        <template #title>{{ item.title }}</template>
        <template #text>{{ item.text }}</template>
      </nAccordionItem>
    </nAccordion>
  `
})
export const Default = DefaultTemplate.bind({})

Default.args = {
  items: [
    { title: 'Title 1', text: 'Laborum consectetur quis laborum ad Lorem dolore irure irure cupidatat et. Do incididunt fugiat elit do cupidatat. Laborum eiusmod amet consequat id incididunt aute exercitation irure non deserunt laborum quis. Irure ut exercitation irure elit ea eu laboris pariatur ex.' },
    { title: 'Title 2', text: 'Incididunt velit Lorem aliqua nisi ut. Duis est fugiat eu duis commodo ea magna esse culpa. Laboris nisi eiusmod consectetur labore pariatur consequat fugiat aute quis adipisicing enim. Mollit pariatur et veniam excepteur nisi occaecat culpa. Exercitation consequat sint aliqua aliqua excepteur tempor est proident incididunt dolor veniam ullamco. Deserunt laborum do pariatur ad adipisicing tempor eiusmod mollit magna cupidatat duis aliquip anim proident. Veniam Lorem labore dolore enim cillum voluptate dolor aute.' },
    { title: 'Title 3', text: 'Aliquip cupidatat ipsum magna dolore. Laboris ea sint qui qui enim do officia magna in adipisicing mollit voluptate est in. Reprehenderit aute dolor pariatur laboris. Laboris qui et eiusmod proident.' }
  ],
  width: '280px',
  transition: 'all 0.1s'
}