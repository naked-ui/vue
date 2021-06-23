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
    image: {
      type: 'object'
    },
    images: {
      type: 'array'
    }
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

export const LazyLoading = (args, { argTypes }) => ({
  components: { nuiPicture },
  props: Object.keys(argTypes),
  template: `
    <div>
      <nuiPicture
        v-for="(image, index) in images" :key="index"
        v-bind="$props"
        :image="image"
      />
    </div>
  `
});

LazyLoading.args = {
  width: '600px',
  height: '600px',
  maxWidth: 'calc(100vw - 32px)',
  images: [
    {
      src: 'https://placekitten.com/1200/1300',
      sources: [
        {
          srcset: 'https://placekitten.com/200/300',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/750',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1301',
      sources: [
        {
          srcset: 'https://placekitten.com/200/301',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/751',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1302',
      sources: [
        {
          srcset: 'https://placekitten.com/200/302',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/752',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1303',
      sources: [
        {
          srcset: 'https://placekitten.com/200/303',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/753',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1304',
      sources: [
        {
          srcset: 'https://placekitten.com/200/304',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/754',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1305',
      sources: [
        {
          srcset: 'https://placekitten.com/200/305',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/755',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1306',
      sources: [
        {
          srcset: 'https://placekitten.com/200/306',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/756',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1307',
      sources: [
        {
          srcset: 'https://placekitten.com/200/307',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/757',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1308',
      sources: [
        {
          srcset: 'https://placekitten.com/200/308',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/758',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1309',
      sources: [
        {
          srcset: 'https://placekitten.com/200/309',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/759',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },

    {
      src: 'https://placekitten.com/1200/1310',
      sources: [
        {
          srcset: 'https://placekitten.com/200/310',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/760',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1311',
      sources: [
        {
          srcset: 'https://placekitten.com/200/311',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/761',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1312',
      sources: [
        {
          srcset: 'https://placekitten.com/200/312',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/762',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1313',
      sources: [
        {
          srcset: 'https://placekitten.com/200/313',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/763',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1314',
      sources: [
        {
          srcset: 'https://placekitten.com/200/314',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/764',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1315',
      sources: [
        {
          srcset: 'https://placekitten.com/200/315',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/765',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1316',
      sources: [
        {
          srcset: 'https://placekitten.com/200/316',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/766',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1317',
      sources: [
        {
          srcset: 'https://placekitten.com/200/317',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/767',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1318',
      sources: [
        {
          srcset: 'https://placekitten.com/200/318',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/768',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
    {
      src: 'https://placekitten.com/1200/1319',
      sources: [
        {
          srcset: 'https://placekitten.com/200/319',
          media: '(max-width: 767px)'
        },
        {
          srcset: 'https://placekitten.com/600/769',
          media: '(min-width: 768px) and (max-width: 980px)'
        }
      ]
    },
  ]
}

