import nForm from './nForm'
import { nTextInput } from '../nTextInput'
import { nEmailInput } from '../nEmailInput'
import { nTextarea } from '../nTextarea'
import { nButton } from '../nButton'

const textInputStyling = {
  gap: 8,
  height: 48,
  // width: '280px',
  padding: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  validationEnabled: true,
}

const textareaStyling = {
  height: '96px',
  // width: '280px',
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
  title: 'Form/Form',
  component: nForm,
  argTypes: {
    gap: { control: 'text' },
    width: { control: 'text' }
  }
}

const Template = (arg, { argTypes }) => ({
  components: { nForm, nTextInput, nEmailInput, nTextarea, nButton },
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
    <nForm v-bind="$props" style="width: 100%;" @submit="onSubmit" @error="onError">
      <nTextInput v-bind="textInputStyling" id="name" name="name" v-model="form.name" label="Name" />
      <nEmailInput v-bind="textInputStyling" id="email" name="email" v-model="form.email" label="E-mail" :required="true" />
      <nTextarea v-bind="textareaStyling" id="message" name="message" v-model="form.message" label="Message" />
      <nButton type="submit" v-bind="buttonStyling" :disabled="formError" >Send!</nButton>
      <pre>{{ formError }}</pre>
    </nForm>
  `
})

export const Default = Template.bind({})

Default.args = {
  validationEnabled: true,
  gap: '16px',
  width: '420px'
}
