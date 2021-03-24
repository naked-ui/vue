import nRadioInput from './nRadioInput.vue'

export default {
    title: 'Form/Input/RadioInput',
    component: nRadioInput
}

const Template = (args, { argTypes }) => ({
    components: { nRadioInput },
    props: Object.keys(argTypes),
    template: '<nRadioInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}
