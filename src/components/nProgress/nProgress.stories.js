import nProgress from './nProgress.vue'

export default {
    title: 'Form/Progress',
    component: nProgress,
    argTypes: {
      value: {
        control: 'range',
        min: 0,
        max: 100
      },
      color: {
        control: 'color',
        defaultValue: '#333'
      }
    }
}

const Template = (args, { argTypes }) => ({
    components: { nProgress },
    props: Object.keys(argTypes),
    template: '<nProgress v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    value: 40
}