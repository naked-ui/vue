import nuiPicture from './nuiPicture.vue'

export default {
  title: 'Picture',
  component: nuiPicture,
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '100%'
    },
    height: {
      control: 'text',
      defaultValue: '100%'
    },
    maxWidth: {
      control: 'text'
    },
    maxHeight: {
      control: 'text'
    },
    objectFit: {
      control: {
        type: 'select',
        options: ['contain', 'cover']
      },
      // defaultValue: 'none'
    },
    image: {
      type: 'object'
    },
  },
}

export const Default = (args, { argTypes }) => ({
  components: { nuiPicture },
  props: Object.keys(argTypes),
  template: `
    <nuiPicture
      v-bind="$props"
      :image="image"
    />
  `
});

Default.args = {
  image: {
    src: 'https://images.pexels.com/photos/5232570/pexels-photo-5232570.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    alt: 'Alt text'
  }
}

export const AdditionalSources = (args, { argTypes }) => ({
  components: { nuiPicture },
  props: Object.keys(argTypes),
  template: `
    <nuiPicture
      v-bind="$props"
      :image="image"
    />
  `
});

AdditionalSources.args = {
  image: {
    src: 'https://images.pexels.com/photos/5232570/pexels-photo-5232570.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    alt: 'Alt text',
    sources: [
      {
        srcset: 'https://images.pexels.com/photos/6762258/pexels-photo-6762258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        media: '(max-width: 767px)'
      },
      {
        srcset: 'https://images.pexels.com/photos/7082674/pexels-photo-7082674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        media: '(min-width: 768px) and (max-width: 980px)'
      }
    ]
  }
}
