import nTab from './nTab'
import nTabs from './nTabs'

export default {
  component: nTabs,
  title: 'Tabs',
  argTypes: {
    controlPadding: { control: 'text' },
    tabPadding: { control: 'text' },
    width: { control: 'text' },
    vertical: { control: 'boolean' },
    tabs: { control: 'array' }
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nTabs, nTab },
  props: Object.keys(argTypes),
  template: `
    <nTabs v-bind="$props">
        <nTab v-for="(item, $index) in tabs" :key="$index" :label="item.title">{{ item.content }}</nTab>
    </nTabs>
  `
})

export const Default = DefaultTemplate.bind({})

Default.args = {
  width: '480px',
  controlPadding: '8px',
  tabPadding: '12px 0',
  tabs: [
    {
      title: 'First tab',
      content: 'Cupidatat id sit ea nulla culpa duis voluptate pariatur. Voluptate ea nulla incididunt excepteur et aliqua. Sint voluptate officia quis aliquip. Laboris culpa pariatur exercitation ex nostrud nostrud. Quis cillum velit veniam incididunt sint fugiat nisi.'
    },
    {
      title: 'Second tab',
      content: 'Laboris ipsum et et cupidatat adipisicing. Voluptate exercitation eiusmod laborum nostrud dolor ad ex. Nostrud duis proident in dolor aute tempor quis velit deserunt eu fugiat pariatur sunt.'
    },
    {
      title: 'Third tab',
      content: 'Lorem sunt aliquip exercitation elit elit deserunt enim incididunt reprehenderit qui. Qui voluptate id quis reprehenderit eu dolor sint magna exercitation eiusmod laborum consectetur anim. Minim adipisicing culpa qui officia ex nisi culpa velit tempor minim dolore aliquip et incididunt. Enim tempor aute dolor ullamco.'
    },
  ]
}
