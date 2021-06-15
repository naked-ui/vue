import nuiButton from './nuiButton.vue'
import hyperlinkArgTypes from '../../../.storybook/utils/argTypes/hyperlinkArgTypes'
import styleArgTypes from '../../../.storybook/utils/argTypes/styleArgTypes'
import stateArgTypes from '../../../.storybook/utils/argTypes/stateArgTypes'

const storyArgTypes = {
  ...hyperlinkArgTypes,
  ...styleArgTypes,
  ...stateArgTypes,
  buttonText: {
    control: {
      type: 'text'
    },
    defaultValue: 'Button text'
  },
  buttonBusyText: {
    control: {
      type: 'text'
    },
    defaultValue: 'Button busy text'
  }
}

export default {
  title: 'Button',
  component: nuiButton,
  argTypes: storyArgTypes
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { nuiButton },
  props: Object.keys(argTypes),
  template: `
    <nuiButton
      v-bind="$props"
    >
      {{ buttonText }}
      <template v-slot:busy-text>
        {{ buttonBusyText }}
      </template>
    </nuiButton>
  `,
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  href: 'https://naked-ui.org',
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px',
  height: '48px'
}

const IconLeftTemplate = (args, { argTypes }) => ({
  components: { nuiButton },
  props: Object.keys(argTypes),
  template: `
    <nuiButton
      v-bind="$props"
    >
      <template v-slot:icon--left>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="color" />
      </svg>
      </template>
      {{ buttonText }}
      <template v-slot:busy-text>
        {{ buttonBusyText }}
      </template>
    </nuiButton>
  `,
});

export const IconLeft = IconLeftTemplate.bind({});
IconLeft.args = {
  href: 'https://naked-ui.org',
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px',
  height: '48px',
  gap: '8px'
}

const IconRightTemplate = (args, { argTypes }) => ({
  components: { nuiButton },
  props: Object.keys(argTypes),
  template: `
    <nuiButton
      v-bind="$props"
    >
      <template v-slot:icon--right>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width: 16px;">
        <circle cx="16" cy="16" r="16" :fill="color" />
      </svg>
      </template>
      {{ buttonText }}
    </nuiButton>
  `,
});

export const IconRight = IconRightTemplate.bind({});
IconRight.args = {
  href: 'https://naked-ui.org',
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px',
  height: '48px',
  gap: '8px'
}