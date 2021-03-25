import nSelectInput from './nSelectInput'
import nSelectOption from './nSelectOption'
import nSelectOptgroup from './nSelectOptgroup'

export default {
    title: 'Form/Input/Select',
    component: nSelectInput,
    argTypes: {
        bgSelectColor: { control: { type: 'color' } },
        bgOptionColor: { control: { type: 'color' } },
        bgOptgroupColor: { control: { type: 'color' } },
        outlineColor: { control: { type: 'color' } },
    }
}

const Template = (args, {argTypes}) => ({
    components: { nSelectInput, nSelectOption, nSelectOptgroup },
    props: Object.keys(argTypes),
    data: () => ({
        options_one: ['Option 1', 'Option 2', 'Option 3'],
        options_two: ['Option 4', 'Option 5', 'Option 6']
    }),
    template: `
        <nSelectInput v-bind="$props">
            <nSelectOptgroup label="Options">
                <nSelectOption v-for="(option, $index) in options_one" :key="$index">{{ option }}</nSelectOption>
            </nSelectOptgroup>
            <nSelectOption v-for="(option, $index) in options_two" :key="$index">{{ option }}</nSelectOption>
        </nSelectInput>
    `
})

export const Default = Template.bind({})