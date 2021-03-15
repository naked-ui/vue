import nPasswordInput from './nPasswordInput.vue'

export default {
    title: 'Form/Input/PasswordInput',
    component: nPasswordInput
}

const Template = (args, { argTypes }) => ({
    components: { nPasswordInput },
    props: Object.keys(argTypes),
    template: '<nPasswordInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}