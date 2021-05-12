import nuiHandler from './nuiHandler'
import styleHandler from './styleHandler'
import indexHandler from './indexHandler'
import eventsHandler from './eventsHandler'
import keyboardHandler from './keyboardHandler'
import validationHandler from './validationHandler'
import multiSelectHandler from './multiSelectHandler'

export default {
  props: {
    optionHoverBackgroundColor: {
      type: String,
      default: ''
    }
  },
  mixins: [
    styleHandler,
    eventsHandler,
    keyboardHandler,
    indexHandler,
    validationHandler,
    multiSelectHandler,
    nuiHandler
  ]
}
