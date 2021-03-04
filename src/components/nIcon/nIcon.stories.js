import nIcon from './nIcon.vue'

export default {
    title: 'nIcon',
    component: nIcon
}

const Template = (args, { argTypes }) => ({
    components: { nIcon },
    props: Object.keys(argTypes),
    template: '<nIcon v-bind="$props">Icon</nIcon>',
});

export const Default = Template.bind({});