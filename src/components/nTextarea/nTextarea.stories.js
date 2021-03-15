import nTextarea from './nTextarea.vue'

export default {
    title: 'Form/Textarea',
    component: nTextarea
}

const Template = (args, { argTypes }) => ({
    components: { nTextarea },
    props: Object.keys(argTypes),
    template: '<nTextarea v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}