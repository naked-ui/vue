import nDropdown from './nDropdown'
import nDropdownOption from './nDropdownOption'

export default {
    title: 'Form/Input/Dropdown',
    component: nDropdown
}

const Template = (args, {argTypes}) => ({
    components: { nDropdown, nDropdownOption },
    props: Object.keys(argTypes),
    data: () => ({
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        dropdownValue: undefined
    }),
    template: `
        <div style="width: 300px;">
            <nDropdown v-bind="$props" v-model="dropdownValue">
                <nDropdownOption
                    v-for="(option, $index) in options"
                    :key="$index"
                >
                    {{ option }}
                </nDropdownOption>
                <nDropdownOption role="external-link">
                    <a href="https://naked-ui.org">Option URL</a>
                </nDropdownOption>
            </nDropdown>
            {{ dropdownValue }}
        </div>
    `
})

export const Default = Template.bind({})