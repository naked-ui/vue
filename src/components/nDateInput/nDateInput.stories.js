import nDateInput from './nDateInput.vue'

export default {
    title: 'Form/Input/DateInput',
    component: nDateInput
}

const Template = (args, { argTypes }) => ({
    components: { nDateInput },
    props: Object.keys(argTypes),
    template: '<nDateInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}