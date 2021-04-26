import nTab from './nTab'
import nTabs from './nTabs'

export default {
    component: nTabs,
    title: 'Content/Tabs'
}

const DefaultTemplate = ( args, {argTypes} ) => ({
    components: { nTabs },
    props: Object.keys(argTypes),
    template: `
        <nTabs v-bind="$props" />
    `
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    items: [
        {
            title: 'Tab 1',
            content: 'Content 1'
        },
        {
            title: 'Tab 2',
            content: 'Content 2'
        },
        {
            title: 'Tab 3',
            content: 'Content 3'
        },
    ]
}

const SlotsTemplate = ( args, {argTypes} ) => ({
    components: { nTabs, nTab },
    props: Object.keys(argTypes),
    data: () => ({
        slotItems: [
            {
                title: 'Tab 1',
                content: 'Content 1'
            },
            {
                title: 'Tab 2',
                content: 'Content 2'
            },
            {
                title: 'Tab 3',
                content: 'Content 3'
            },
        ]
    }),
    template: `
        <nTabs v-bind="$props">
            <nTab v-for="(item, $index) in slotItems" :key="$index" :label="item.title">{{ item.content }}</nTab>
        </nTabs>
    `
})

export const Slots = SlotsTemplate.bind({})