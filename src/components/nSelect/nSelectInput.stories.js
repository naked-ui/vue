import nSelect from './nSelect'

export default {
    title: 'Form/Select',
    component: nSelect,
    argTypes: {
        color: { control: { type: 'color' } },
        backgroundColor: { control: { type: 'color' } },
        borderColor: { control: { type: 'color' } },
        optionHoverColor: { control: { type: 'color' } },
        label: { defaultValue: 'Label text' },
        // optionSelectedColor: { control: { type: 'color' } },
    }
}

const Template = (args, { argTypes }) => ({
    components: { nSelect },
    props: Object.keys(argTypes),
    data: () => ({
        selectValue: null
    }),
    template: `
    <div style="width: 100%;">
        <nSelect v-bind="$props" v-model="selectValue" />
    </div>
    `
})

export const Default = Template.bind({})
Default.args = {
    options: [
        {
            name: 'Option 1',
            value: 'Option 1'
        },
        {
            name: 'Option 2',
            value: 'Option 2'
        },
        {
            name: 'Option 3',
            value: 'Option 3'
        },
        {
            name: 'Option 4',
            value: 'Option 4'
        },
    ]
}