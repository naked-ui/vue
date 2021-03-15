import nEmailInput from './nEmailInput.vue'

export default {
    title: 'Form/Input/EmailInput',
    component: nEmailInput
}

const Template = (args, { argTypes }) => ({
    components: { nEmailInput },
    props: Object.keys(argTypes),
    template: '<nEmailInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}