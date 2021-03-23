import nHyperlink from './nHyperlink.vue'

export default {
    title: 'Content/Hyperlink',
    component: nHyperlink
}

const Template = (args, { argTypes }) => ({
    components: { nHyperlink },
    props: Object.keys(argTypes),
    template: '<nHyperlink v-bind="$props">Hyperlink</nHyperlink>',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}