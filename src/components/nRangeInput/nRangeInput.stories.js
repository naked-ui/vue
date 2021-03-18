import nRangeInput from './nRangeInput.vue'

export default {
    title: 'Form/Input/RangeInput',
    component: nRangeInput,
    argTypes: {
        dotColor: { control: 'color' },
        rangeColor: { control: 'color' },
        bgColor: { control: 'color' },
        outputFontColor: { control: 'color' },
    }
}

const Template = (args, { argTypes }) => ({
    components: { nRangeInput },
    props: Object.keys(argTypes),
    data: () => ({
        test: []
    }),
    template: '<div><nRangeInput v-bind="$props" v-model="test" /><br/>{{ test }}</div>',
});

export const Default = Template.bind({});
Default.args = {
    url: 'https://naked-ui.org/'
}
