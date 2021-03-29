import nButton from './nButton.vue'

export default {
  title: 'Form/Button',
  component: nButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    buttonText: { control: { type: 'text'}, defaultValue: 'Button text' },
    buttonBusyText: { control: { type: 'text'}, defaultValue: 'Button busy text' }
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nButton },
  props: Object.keys(argTypes),
  template: `
    <nButton
      v-bind="$props"
    >
      {{ buttonText }}
      <template v-slot:busy-text>
        {{ buttonBusyText }}
      </template>
    </nButton>
  `,
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  href: 'https://newfantastic.com',
  target: '_blank'
}

const IconLeftTemplate = (args, { argTypes }) => ({
  components: { nButton },
  props: Object.keys(argTypes),
  template: `
    <nButton
      v-bind="$props"
    >
      <template v-slot:icon--left>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="textColor" />
      </svg>
      </template>
      {{ buttonText }}
      <template v-slot:busy-text>
        {{ buttonBusyText }}
      </template>
    </nButton>
  `,
});

export const IconLeft = IconLeftTemplate.bind({});
IconLeft.args = {
  href: 'https://newfantastic.com',
  target: '_blank'
}

const IconRightTemplate = (args, { argTypes }) => ({
  components: { nButton },
  props: Object.keys(argTypes),
  template: `
    <nButton
      v-bind="$props"
    >
      <template v-slot:icon--right>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="textColor" />
      </svg>
      </template>
      {{ buttonText }}
    </nButton>
  `,
});

export const IconRight = IconRightTemplate.bind({});
IconRight.args = {
  href: 'https://newfantastic.com',
  target: '_blank'
}