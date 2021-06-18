import nuiCover from './nuiCover.vue'

export default {
  title: 'Cover',
  component: nuiCover,
  argTypes: {
    width: { control: 'text', defaultValue: '100%' },
    height: { control: 'text', defaultValue: '480px' },
    hasOverlay: {
      defaultValue: true
    },
    overlayColor: {
      control: 'color',
      defaultValue: '#000'
    },
    overlayOpacity: {
      control: 'range',
      min: 0,
      max: 100,
      defaultValue: 30
    },
    backgroundVideo: {
      type: 'object'
    },
    backgroundImage: {
      type: 'object'
    },
    padding: {
      defaultValue: '48px'
    },
  },
}

export const BackgroundImageTemplate = (args, { argTypes }) => ({
  components: { nuiCover },
  props: Object.keys(argTypes),
  template: `
      <nuiCover
        v-bind="$props"
        :backgroundImage="backgroundImage"
        :overlayOpacity="overlayOpacity / 100"
      >
        <template v-slot:content>
          <h2 style="color: #fff; margin: 0 0 24px 0;">Enim labore laboris dolor laboris veniam voluptate sunt velit.</h2>
          <p style="color: #fff; margin: 0;">Quis aliqua exercitation duis occaecat ex est aliquip esse in tempor cillum labore aute. Ipsum occaecat aute exercitation laboris ullamco sint non fugiat. Aute deserunt consectetur cupidatat consectetur consequat aliqua occaecat ad dolore eu magna commodo. Ut nostrud sint eu cillum adipisicing exercitation. Duis ad irure incididunt nulla minim cillum ut. Officia pariatur ad esse adipisicing.</p>
        </template>
      </nuiCover>
    `
});
BackgroundImageTemplate.args = {
  backgroundImage: {
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
  },
  // backgroundImage: 'https://images.pexels.com/photos/5232570/pexels-photo-5232570.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  content: `
    <h2 style="color: #fff; margin: 0 0 24px 0;">Enim labore laboris dolor laboris veniam voluptate sunt velit.</h2>
    <p style="color: #fff; margin: 0;">Quis aliqua exercitation duis occaecat ex est aliquip esse in tempor cillum labore aute. Ipsum occaecat aute exercitation laboris ullamco sint non fugiat. Aute deserunt consectetur cupidatat consectetur consequat aliqua occaecat ad dolore eu magna commodo. Ut nostrud sint eu cillum adipisicing exercitation. Duis ad irure incididunt nulla minim cillum ut. Officia pariatur ad esse adipisicing.</p>
  `
}

export const VideoTemplate = (args, { argTypes }) => ({
  components: { nuiCover },
  props: Object.keys(argTypes),
  template: `
    <nuiCover
      v-bind="$props"
      :overlayOpacity="overlayOpacity / 100"
    >
      <template v-slot:content>
        <h2 style="color: #fff; margin: 0 0 24px 0;">Enim labore laboris dolor laboris veniam voluptate sunt velit.</h2>
        <p style="color: #fff; margin: 0;">Quis aliqua exercitation duis occaecat ex est aliquip esse in tempor cillum labore aute. Ipsum occaecat aute exercitation laboris ullamco sint non fugiat. Aute deserunt consectetur cupidatat consectetur consequat aliqua occaecat ad dolore eu magna commodo. Ut nostrud sint eu cillum adipisicing exercitation. Duis ad irure incididunt nulla minim cillum ut. Officia pariatur ad esse adipisicing.</p>
      </template>
    </nuiCover>
  `
});
VideoTemplate.args = {
  backgroundVideo: {
    src: 'https://file-examples-com.github.io/uploads/2020/03/file_example_WEBM_1280_3_6MB.webm',
    type: 'video/webm'
  }
}
