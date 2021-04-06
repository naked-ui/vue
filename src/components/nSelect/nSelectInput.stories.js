import nSelect from './nSelect'

export default {
    title: 'Form/Input/Select',
    component: nSelect,
}

const Template = (args, {argTypes}) => ({
    components: { nSelect },
    props: Object.keys(argTypes),
    data: () => ({
        selectValue: null
    }),
    template: `
    <div class="width: 100%;">
        <div class="width: 100%;"><nSelect v-bind="$props" v-model="selectValue" /></div>
        <div style="margin-top: 50px;">{{ selectValue }}</div>
    </div>
    `
})

export const Default = Template.bind({})
Default.args = {
    options: [
        {
            text: 'Option 1',
            value: 'Option 1'
        },
        {
            text: 'Option 2',
            value: 'Option 2'
        },
        {
            text: 'Option 3',
            value: 'Option 3'
        },
        {
            text: 'Option 4',
            value: 'Option 4'
        },
    ]
}