import nOverflowCarousel from './nOverflowCarousel.vue'
import nOverflowCarouselItem from './nOverflowCarouselItem.vue'

export default {
  title: 'nOverflowCarousel',
  component: nOverflowCarousel,
  argTypes: {
    viewportPadding: { control: 'range', min: 0, max: 100, defaultValue: 0 },
    itemsGap: { control: 'range', min: 0, max: 100, defaultValue: 0 },
    itemWidth: { control: 'text', defaultValue: '300px' },
    itemHeight: { control: 'text', defaultValue: '300px' },
  },
  data () {
    return {
      carouselItems: 12
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    nOverflowCarousel,
    nOverflowCarouselItem
  },
  props: Object.keys(argTypes),
  template: `
  <nOverflowCarousel
    :viewportPadding="viewportPadding"
    :itemsGap="itemsGap"
    :snapItems="snapItems"
  >
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
    <nOverflowCarouselItem
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 24px;"
      >
        Item
      </div>
    </nOverflowCarouselItem>
  </nOverflowCarousel>
  `,
});

export const Default = Template.bind({});