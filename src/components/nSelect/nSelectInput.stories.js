import nSelect from './nSelect'

export default {
    title: 'Form/Select',
    component: nSelect,
    argTypes: {
        color: { control: { type: 'color' } },
        backgroundColor: { control: { type: 'color' } },
        borderColor: { control: { type: 'color' } },
        borderWidth: { control: { type: 'range' }, defaultValue: 2 },
        optionBackgroundColor: { control: { type: 'color' } },
        optionHoverBackgroundColor: { control: { type: 'color' }, defaultValue: '#eee' },
        label: { defaultValue: 'Label text' },
        width: { defaultValue: '280px' },
        height: { defaultValue: '48px' },
        gap: { control: { type: 'range', min: 0 }, defaultValue: 8 },
        padding: { defaultValue: '10px' },
        optionPadding: { defaultValue: '12px' },
        // placeholderColor: { defaultValue: '#838383' }
    }
}

const Template = (args, { argTypes }) => ({
    components: { nSelect },
    props: Object.keys(argTypes),
    data: () => ({
        selectValue: null
    }),
    template: `
    <form novalidate @submit.prevent="submit">
        <nSelect v-bind="$props" v-model="selectValue" />
        <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
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