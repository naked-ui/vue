import nRadioInput from './nRadioInput.vue'
import nRadioGroup from './nRadioGroup.vue'
import formFieldArgTypes from '../../../.storybook/utils/argTypes/formFieldArgTypes.js';

const componentArgTypes = {
  ...formFieldArgTypes
}

export default {
  title: 'Form/Input/RadioInput',
  component: nRadioInput,
  argTypes: formFieldArgTypes
  // color: { control: 'color' },
  // gap: {
  //   control: {
  //     type: 'range',
  //     min: 0,
  //     max: 20
  //   }
  // },
  // // spacing: {
  // //   control: {
  // //     type: 'range',
  // //     min: 0,
  // //     max: 20
  // //   }
  // // },
  // customMessages: {
  //   control: 'object'
  // }

}

const Template = (args, { argTypes }) => ({
  components: { nRadioInput },
  props: Object.keys(argTypes),
  template: `
    <form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <nRadioInput v-bind="$props" />
      <input style="margin-top: 16px;" type="submit" value="submit">
    </form>
  `
})

export const Default = Template.bind({})
Default.argTypes = {
  spacing: { table: { disable: true } }
}
Default.args = {
  id: 'radio-input-id',
  name: 'radio-input-name',
  label: 'Radio input label',
  gap: 8,
  validationEnabled: true,
  required: true
}

const GroupTemplate = (args, { argTypes }) => ({
  components: { nRadioGroup, nRadioInput },
  props: Object.keys(argTypes),
  data() {
    return {
      val: null
    }
  },
  template: `
    <form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
      <nRadioGroup v-bind="$props" v-model="val">
        <nRadioInput v-for="n in 3"
          name="radios"
          :key="n"
          :id="\`radio\-input\-\${n}\`"
          :label="\`Radio \${n}\`"
          :value="n"
        />
      </nRadioGroup>
      <input style="margin-top: 16px;" type="submit" value="submit">
      <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
    </form>
  `
})

export const Group = GroupTemplate.bind({})
Group.args = {
  ...Default.args,
  spacing: 12
}

// const GroupRequiredTemplate = (args, { argTypes }) => ({
//   components: { nRadioGroup, nRadioInput },
//   props: Object.keys(argTypes),
//   data() {
//     return {
//       val: 'undefined'
//     }
//   },
//   template: `<form novalidate @submit.prevent="e=>{if (!e.target.checkValidity()) return}">
//       <nRadioGroup v-bind="$props" required v-model="val">
//         <nRadioInput
//           v-for="n in 3"
//           name="radios"
//           :key="n"
//           :id="\`\${n}\`"
//           :label="\`Radio \${n}\`"
//           :value="n"
//         />
//       </nRadioGroup>
//       <input style="margin-top: 16px;" type="submit" value="submit">
//       <code style="display: block; width: 100%; margin-top: 16px;">current val: {{val}}</code>
//     </form>`
// })

// export const GroupRequired = GroupRequiredTemplate.bind({})
// GroupRequired.args = {
//   ...Group.args
// }
