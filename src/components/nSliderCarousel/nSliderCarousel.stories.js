import nSliderCarousel from './nSliderCarousel.vue'
import nSliderCarouselItem from './nSliderCarouselItem.vue'

export default {
  title: 'Content/SliderCarousel',
  component: nSliderCarousel,
  argTypes: {
    visibleItems: { control: 'range', min: 1, max: 100, defaultValue: 1 },
    amountToScroll: { control: 'range', min: 1, max: 100, defaultValue: 1 },
  },
}

const TemplateDefault = (args, { argTypes }) => ({
  components: {
    nSliderCarousel,
    nSliderCarouselItem
  },
  data: () => ({
    carouselItems1: [
      {
        title: 'Slide 1'
      },
      {
        title: 'Slide 2'
      },
      {
        title: 'Slide 3'
      },
      {
        title: 'Slide 4'
      },
      {
        title: 'Slide 5'
      },
      {
        title: 'Slide 6'
      },
      {
        title: 'Slide 7'
      },
      {
        title: 'Slide 8'
      },
      {
        title: 'Slide 9'
      },
      {
        title: 'Slide 10'
      },
      {
        title: 'Slide 11'
      },
      {
        title: 'Slide 12'
      },
    ],
    carouselItems2: [
      {
        title: 'Slide 1'
      },
      {
        title: 'Slide 2'
      },
      {
        title: 'Slide 3'
      }
    ],
    carouselItems3: [
      {
        title: 'Slide 1'
      },
      {
        title: 'Slide 2'
      },
      {
        title: 'Slide 3'
      },
      {
        title: 'Slide 4'
      },
      {
        title: 'Slide 5'
      }
    ]
  }),
  props: Object.keys(argTypes),
  template: `
    <nSliderCarousel
      :paginationItems="carouselItems1"
      :refName="refName"
      :amountToScroll="amountToScroll"
      :slideIdEnabled="slideIdEnabled"
      :autoplayInterval="autoplayInterval"
      :autoplayEnabled="autoplayEnabled"
      :loopEnabled="loopEnabled"
      :infiniteScroll="infiniteScroll"
      :paginationAutohide="paginationAutohide"
      :paginationDisabled="paginationDisabled"
      :navigationAutohide="navigationAutohide"
      :navigationDisabled="navigationDisabled"
    >
      <nSliderCarouselItem
        v-for="(item, index) in carouselItems1"
        :key="index"
        :slideIndex="index + 1"
        :visibleItems="visibleItems"
        :refName="refName"
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 32px;"
      >
        {{ item.title }}
      </nSliderCarouselItem>
    </nSliderCarousel>
  `,
});

export const Default = TemplateDefault.bind({});