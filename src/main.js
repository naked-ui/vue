import * as components from './components'

const ComponentLibrary = {
  install(Vue, options = {}) {
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

export { nuiAccordion, nuiAccordionItem } from './components/nuiAccordion'
export { nuiBadge } from './components/nuiBadge'
export { nuiButton } from './components/nuiButton'
export { nuiCover } from './components/nuiCover'
export { nuiDateInput } from './components/nuiDateInput'
export { nuiEmailInput } from './components/nuiEmailInput'
export { nuiForm } from './components/nuiForm'
export { nuiHyperlink } from './components/nuiHyperlink'
export { nuiIcon } from './components/nuiIcon'
export { nuiProgress } from './components/nuiProgress'
export { nuiSelect } from './components/nuiSelect'
export { nuiSliderCarousel, nuiSliderCarouselItem } from './components/nuiSliderCarousel'
export { nuiOverflowCarousel, nuiOverflowCarouselItem } from './components/nuiOverflowCarousel'
export { nuiTextarea } from './components/nuiTextarea'
export { nuiTextInput } from './components/nuiTextInput'
