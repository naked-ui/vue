import nuiVideo from './nuiVideo.vue'

export default {
  title: 'Video',
  component: nuiVideo,
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '100%'
    },
    height: {
      control: 'text',
      defaultValue: '100%'
    },
    background: {
      control: 'text',
      defaultValue: '#ddd'
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
    autoplay: {
      control: 'boolean'
    },
    controls: {
      control: 'boolean',
      defaultValue: true
    },
    loop: {
      control: 'boolean'
    },
    muted: {
      control: 'boolean'
    },
    playsinline: {
      control: 'boolean'
    },
    poster: {
      control: 'text'
    },
    preload: {
      control: {
        type: 'select',
        options: ['none', 'metadata', 'auto']
      },
      defaultValue: 'auto'
    }
  }
}

export const Default = (args, { argTypes }) => ({
  components: { nuiVideo },
  props: Object.keys(argTypes),
  template: `
    <nuiVideo
      v-bind="$props"
      :image="image"
    />
  `
});

Default.args = {
  video: {
    src: 'https://file-examples-com.github.io/uploads/2020/03/file_example_WEBM_1280_3_6MB.webm',
    type: 'video/webm'
  }
}
