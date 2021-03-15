import nColorInput from './nColorInput.vue'

export default {
    title: 'Form/Input/ColorInput',
    component: nColorInput
}

const Template = (args, { argTypes }) => ({
    components: { nColorInput },
    props: Object.keys(argTypes),
    template: '<nColorInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}