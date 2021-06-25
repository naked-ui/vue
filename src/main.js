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
export { nuiCheckboxInput, nuiCheckboxGroup } from './components/nuiCheckboxInput'
export { nuiCover } from './components/nuiCover'
export { nuiDateInput } from './components/nuiDateInput'
export { nuiEmailInput } from './components/nuiEmailInput'
export { nuiForm } from './components/nuiForm'
export { nuiHyperlink } from './components/nuiHyperlink'
export { nuiIcon } from './components/nuiIcon'
export { nuiOverflowCarousel, nuiOverflowCarouselItem } from './components/nuiOverflowCarousel'
export { nuiNumberInput } from './components/nuiNumberInput'
export { nuiPasswordInput } from './components/nuiPasswordInput'
export { nuiPicture } from './components/nuiPicture'
export { nuiProgress } from './components/nuiProgress'
export { nuiRadioInput, nuiRadioGroup } from './components/nuiRadioInput'
export { nuiRangeInput } from './components/nuiRangeInput'
export { nuiSelect } from './components/nuiSelect'
export { nuiTable, nuiTableRow, nuiTableCell } from './components/nuiTable'
export { nuiTabs, nuiTabsItem } from './components/nuiTabs'
export { nuiTextarea } from './components/nuiTextarea'
export { nuiTextInput } from './components/nuiTextInput'
export { nuiToggle, nuiToggleGroup } from './components/nuiToggle'
export { nuiUrlInput } from './components/nuiUrlInput'
export { nuiVideo } from './components/nuiVideo'
