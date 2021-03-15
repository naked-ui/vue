import nFileInput from './nFileInput.vue'

export default {
    title: 'Form/Input/FileInput',
    component: nFileInput
}

const Template = (args, { argTypes }) => ({
    components: { nFileInput },
    props: Object.keys(argTypes),
    template: '<nFileInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}