import nRangeInput from './nRangeInput.vue'

export default {
    title: 'Form/Input/RangeInput',
    component: nRangeInput
}

const Template = (args, { argTypes }) => ({
    components: { nRangeInput },
    props: Object.keys(argTypes),
    template: '<nRangeInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}
