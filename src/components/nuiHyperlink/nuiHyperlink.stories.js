import nuiHyperlink from './nuiHyperlink.vue'

export default {
    title: 'Hyperlink',
    component: nuiHyperlink
}

const Template = (args, { argTypes }) => ({
    components: { nuiHyperlink },
    props: Object.keys(argTypes),
    template: '<nuiHyperlink v-bind="$props">Hyperlink</nuiHyperlink>',
});

export const Default = Template.bind({});
Default.args = {
    href: 'https://naked-ui.org/'
}