import nCheckboxInput from './nCheckboxInput.vue'

export default {
    title: 'Form/Input/CheckboxInput',
    component: nCheckboxInput
}

const Template = (args, { argTypes }) => ({
    components: { nCheckboxInput },
    props: Object.keys(argTypes),
    template: '<nCheckboxInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}