import nNumberInput from './nNumberInput.vue'

export default {
    title: 'Form/Input/NumberInput',
    component: nNumberInput
}

const Template = (args, { argTypes }) => ({
    components: { nNumberInput },
    props: Object.keys(argTypes),
    template: '<nNumberInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}