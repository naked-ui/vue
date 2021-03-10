import nOverflowCarousel from './nOverflowCarousel.vue'
import nOverflowCarouselItem from './nOverflowCarouselItem.vue'

export default {
  title: 'Content/OverflowCarousel',
  component: nOverflowCarousel,
  argTypes: {
    viewportPadding: { control: 'range', min: 0, max: 100, defaultValue: 12 },
    itemsGap: { control: 'range', min: 0, max: 100, defaultValue: 12 },
    itemWidth: { control: 'text', defaultValue: '300px' },
    itemHeight: { control: 'text', defaultValue: '300px' },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    nOverflowCarousel,
    nOverflowCarouselItem
  },
  data: () => ({
    carouselItems: 12
  }),
  props: Object.keys(argTypes),
  template: `
  <nOverflowCarousel
    :viewportPadding="viewportPadding"
    :itemsGap="itemsGap"
    :snapItems="snapItems"
  >
    <nOverflowCarouselItem
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
    </nOverflowCarouselItem>
  </nOverflowCarousel>
  `,
});

export const Default = Template.bind({});