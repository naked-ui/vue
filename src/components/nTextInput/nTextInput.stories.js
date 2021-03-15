import nTextInput from './nTextInput.vue'

export default {
    title: 'Form/Input/TextInput',
    component: nTextInput
}

const Template = (args, { argTypes }) => ({
    components: { nTextInput },
    props: Object.keys(argTypes),
    template: '<nTextInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}