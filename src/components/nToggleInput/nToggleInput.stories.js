import nToggleInput from './nToggleInput.vue'

export default {
    title: 'Form/Input/ToggleInput',
    component: nToggleInput
}

const Template = (args, { argTypes }) => ({
    components: { nToggleInput },
    props: Object.keys(argTypes),
    template: '<nToggleInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}