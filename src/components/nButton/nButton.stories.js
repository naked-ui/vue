import nButton from './nButton.vue'

export default {
  title: 'nButton',
  component: nButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'big'] } },
    kind: { control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'danger', 'warning'] } },
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
      <template v-slot:button-busy-text>
        {{ buttonBusyText }}
      </template>
    </nButton>
  `,
});

export const Default = DefaultTemplate.bind({});

const IconLeftTemplate = (args, { argTypes }) => ({
  components: { nButton },
  props: Object.keys(argTypes),
  template: `
    <nButton
      v-bind="$props"
    >
      <template v-slot:button-icon--left>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="textColor" />
      </svg>
      </template>
      {{ buttonText }}
      <template v-slot:button-busy-text>
        {{ buttonBusyText }}
      </template>
    </nButton>
  `,
});

export const IconLeft = IconLeftTemplate.bind({});

const IconRightTemplate = (args, { argTypes }) => ({
  components: { nButton },
  props: Object.keys(argTypes),
  template: `
    <nButton
      v-bind="$props"
    >
      <template v-slot:button-icon--right>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="textColor" />
      </svg>
      </template>
      {{ buttonText }}
    </nButton>
  `,
});

export const IconRight = IconRightTemplate.bind({});