import nHyperlink from './nHyperlink.vue'

export default {
    title: 'Hyperlink',
    component: nHyperlink
}

const Template = (args, { argTypes }) => ({
    components: { nHyperlink },
    props: Object.keys(argTypes),
    template: '<nHyperlink v-bind="$props">Hyperlink</nHyperlink>',
});

export const Default = Template.bind({});
Default.args = {
    href: 'https://naked-ui.org/'
}