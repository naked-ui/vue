import nSliderCarousel from './nSliderCarousel.vue'
import nSliderCarouselItem from './nSliderCarouselItem.vue'

export default {
  title: 'SliderCarousel',
  component: nSliderCarousel,
  argTypes: {
    visibleItems: { control: 'range', min: 1, max: 12, step: 1, defaultValue: 1 },
    amountToScroll: { control: 'range', min: 1, max: 12, step: 1, defaultValue: 1 },
    sliderItems: {
      control: 'array',
      defaultValue: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6']
    },
    refName: {
      control: 'text',
      defaultValue: 'example-ref-name'
    }
  },
}

const TemplateDefault = (args, { argTypes }) => ({
  components: {
    nSliderCarousel,
    nSliderCarouselItem
  },
  props: Object.keys(argTypes),
  template: `
    <nSliderCarousel
      :paginationItems="sliderItems"
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
        v-for="(item, index) in sliderItems"
        :key="index"
        :slideIndex="index + 1"
        :visibleItems="visibleItems"
        :refName="refName"
        style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 32px;"
      >
        {{ item }}
      </nSliderCarouselItem>
    </nSliderCarousel>
  `,
});

export const Default = TemplateDefault.bind({});