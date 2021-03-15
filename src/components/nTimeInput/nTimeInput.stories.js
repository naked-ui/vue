import nTimeInput from './nTimeInput.vue'

export default {
    title: 'Form/Input/TimeInput',
    component: nTimeInput
}

const Template = (args, { argTypes }) => ({
    components: { nTimeInput },
    props: Object.keys(argTypes),
    template: '<nTimeInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}