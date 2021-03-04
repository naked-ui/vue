import nButton from './nButton.vue'

export default {
    title: 'nButton',
    component: nButton
}

const Template = (args, { argTypes }) => ({
    components: { nButton },
    props: Object.keys(argTypes),
    template: '<nButton v-bind="$props">Button</nButton>',
});

export const Default = Template.bind({});