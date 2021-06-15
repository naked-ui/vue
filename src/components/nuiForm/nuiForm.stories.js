import nuiForm from './nuiForm'
import { nuiTextInput } from '../nuiTextInput'
import { nuiEmailInput } from '../nuiEmailInput'
import { nuiTextarea } from '../nuiTextarea'
import { nuiButton } from '../nuiButton'

const textInputStyling = {
  gap: 8,
  height: 48,
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  validationEnabled: true,
}

const textareaStyling = {
  height: '96px',
  gap: '8px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
}

const buttonStyling = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px',
  height: '48px'
}

export default {
  title: 'Form',
  component: nuiForm,
  argTypes: {
    gap: { control: 'text' },
    width: { control: 'text' }
  }
}

const Template = (arg, { argTypes }) => ({
  components: { nuiForm, nuiTextInput, nuiEmailInput, nuiTextarea, nuiButton },
  props: Object.keys(argTypes),
  data: () => ({
    form: {
      name: '',
      email: '',
      message: ''
    },
    formError: false
  }),
  computed: {
    textInputStyling() {
      return textInputStyling
    },
    textareaStyling() {
      return textareaStyling
    },
    buttonStyling() {
      return buttonStyling
    }
  },
  methods: {
    onSubmit(e) {
      console.log('działa')
    },
    onError(e) {
      this.formError = e
    }
  },
  template: `
    <nuiForm v-bind="$props" @submit="onSubmit" @error="onError">
      <nuiTextInput v-bind="textInputStyling" id="name" name="name" v-model="form.name" label="Name" />
      <nuiEmailInput v-bind="textInputStyling" id="email" name="email" v-model="form.email" label="E-mail" :required="true" />
      <nuiTextarea v-bind="textareaStyling" id="message" name="message" v-model="form.message" label="Message" />
      <nuiButton type="submit" v-bind="buttonStyling" :disabled="formError" >Send!</nuiButton>
      <pre>{{ formError }}</pre>
    </nuiForm>
  `
})

export const Default = Template.bind({})

Default.args = {
  gap: '16px',
  width: '420px'
}
