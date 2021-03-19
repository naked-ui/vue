import nSelectInput from './nSelectInput'

export default {
    title: 'Form/Input/Select',
    component: nSelectInput
}

const Template = (args, {argTypes}) => ({
    components: { nSelectInput },
    props: Object.keys(argTypes),
    template: `
        <nSelectInput v-bind="$props" />
    `
})

export const Default = Template.bind({})
Default.args = {
    options: ['Option 1', 'Option 2', 'Option 3']
}