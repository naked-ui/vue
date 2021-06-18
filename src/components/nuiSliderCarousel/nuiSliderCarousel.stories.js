// import nuiSliderCarousel from './nuiSliderCarousel.vue'
// import nuiSliderCarouselItem from './nuiSliderCarouselItem.vue'

// export default {
//   title: 'SliderCarousel',
//   component: nuiSliderCarousel,
//   argTypes: {
//     visibleItems: { control: 'range', min: 1, max: 12, step: 1, defaultValue: 1 },
//     amountToScroll: { control: 'range', min: 1, max: 12, step: 1, defaultValue: 1 },
//     sliderItems: {
//       control: 'array',
//       defaultValue: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6']
//     },
//     refName: {
//       control: 'text',
//       defaultValue: 'example-ref-name'
//     }
//   },
// }

// const TemplateDefault = (args, { argTypes }) => ({
//   components: {
//     nuiSliderCarousel,
//     nuiSliderCarouselItem
//   },
//   props: Object.keys(argTypes),
//   template: `
//     <nuiSliderCarousel
//       :paginationItems="sliderItems"
//       :refName="refName"
//       :amountToScroll="amountToScroll"
//       :slideIdEnabled="slideIdEnabled"
//       :autoplayInterval="autoplayInterval"
//       :autoplayEnabled="autoplayEnabled"
//       :loopEnabled="loopEnabled"
//       :infiniteScroll="infiniteScroll"
//       :paginationAutohide="paginationAutohide"
//       :paginationDisabled="paginationDisabled"
//       :navigationAutohide="navigationAutohide"
//       :navigationDisabled="navigationDisabled"
//     >
//       <nuiSliderCarouselItem
//         v-for="(item, index) in sliderItems"
//         :key="index"
//         :slideIndex="index + 1"
//         :visibleItems="visibleItems"
//         :refName="refName"
//         style="background-color: #ddd; width: 100%; height: 100%; color: #fff; display: grid; place-content: center; font-size: 32px;"
//       >
//         {{ item }}
//       </nuiSliderCarouselItem>
//     </nuiSliderCarousel>
//   `,
// });

// export const Default = TemplateDefault.bind({});