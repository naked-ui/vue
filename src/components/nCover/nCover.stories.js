import nCover from './nCover.vue'

export default {
  title: 'Content/Cover',
  component: nCover,
  argTypes: {
    width: { control: 'text', defaultValue: '980px' },
    height: { control: 'text', defaultValue: '480px' },
    hasOverlay: {
      defaultValue: true
    },
    overlayColor: {
      control: 'color',
      defaultValue: '#000'
    }
    
  },
}

export const BackgroundImageTemplate = (args, { argTypes }) => ({
    components: { nCover },
    props: Object.keys(argTypes),
    template: `
      <nCover
        v-bind="$props"
        :backgroundImage="backgroundImage"
        :srcsetBackgroundImages="srcsetBackgroundImages"
      >
        <template v-slot:content>
          <h2 style="color: #fff; margin: 0 0 24px 0;">Enim labore laboris dolor laboris veniam voluptate sunt velit.</h2>
          <p style="color: #fff; margin: 0;">Quis aliqua exercitation duis occaecat ex est aliquip esse in tempor cillum labore aute. Ipsum occaecat aute exercitation laboris ullamco sint non fugiat. Aute deserunt consectetur cupidatat consectetur consequat aliqua occaecat ad dolore eu magna commodo. Ut nostrud sint eu cillum adipisicing exercitation. Duis ad irure incididunt nulla minim cillum ut. Officia pariatur ad esse adipisicing.</p>
        </template>
      </nCover>
    `
});
BackgroundImageTemplate.args = {
  srcsetBackgroundImages: [
    {
      srcset: 'https://images.pexels.com/photos/6762258/pexels-photo-6762258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      media: '(max-width: 1280px)'
    }
  ],
  backgroundImage: 'https://images.pexels.com/photos/5232570/pexels-photo-5232570.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
}

export const VideoTemplate = (args, { argTypes }) => ({
  components: { nCover },
  props: Object.keys(argTypes),
  template: `
    <nCover
      v-bind="$props"
      :backgroundVideo="backgroundVideo"
      :backgroundVideoType="backgroundVideoType"
    >
      <template v-slot:content>
        <h2 style="color: #fff; margin: 0 0 24px 0;">Enim labore laboris dolor laboris veniam voluptate sunt velit.</h2>
        <p style="color: #fff; margin: 0;">Quis aliqua exercitation duis occaecat ex est aliquip esse in tempor cillum labore aute. Ipsum occaecat aute exercitation laboris ullamco sint non fugiat. Aute deserunt consectetur cupidatat consectetur consequat aliqua occaecat ad dolore eu magna commodo. Ut nostrud sint eu cillum adipisicing exercitation. Duis ad irure incididunt nulla minim cillum ut. Officia pariatur ad esse adipisicing.</p>
      </template>
    </nCover>
  `
});
VideoTemplate.args = {
  backgroundVideo: 'https://file-examples-com.github.io/uploads/2020/03/file_example_WEBM_1280_3_6MB.webm',
  backgroundVideoType:'video/webm'
}

// export const BackgroundVideo = VideoTemplate.bind({});
