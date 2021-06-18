import nuiOverflowCarousel from './nuiOverflowCarousel.vue'
import nuiOverflowCarouselItem from './nuiOverflowCarouselItem.vue'

export default {
  title: 'OverflowCarousel',
  component: nuiOverflowCarousel,
  argTypes: {
    viewportPadding: { control: 'range', min: 0, max: 100, defaultValue: 12 },
    itemsGap: { control: 'range', min: 0, max: 100, defaultValue: 12 },
    itemWidth: { control: 'text', defaultValue: '300px' },
    itemHeight: { control: 'text', defaultValue: '300px' },
    carouselItems: { control: 'range', min: 1, max: 100, defaultValue: 16 }
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    nuiOverflowCarousel,
    nuiOverflowCarouselItem
  },
  // data: () => ({
  //   carouselItems: 12
  // }),
  props: Object.keys(argTypes),
  template: `
  <nuiOverflowCarousel
    :viewportPadding="viewportPadding"
    :itemsGap="itemsGap"
    :snapItems="snapItems"
    style="width: 100%"
  >
    <nuiOverflowCarouselItem
      v-for="(item, index) in carouselItems"
      :key="index"
      :width="itemWidth"
      :height="itemHeight"
    >
      <div
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 32px;"
      >
        Item {{ index + 1 }}
      </div>
    </nuiOverflowCarouselItem>
  </nuiOverflowCarousel>
  `,
});

export const Default = Template.bind({});