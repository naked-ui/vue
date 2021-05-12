import indexHandler from './indexHandler'
import eventsHandler from './eventsHandler'
import keyboardHandler from './keyboardHandler'
import validationHandler from './validationHandler'
import multiSelectHandler from './multiSelectHandler'

export default {
    mixins: [eventsHandler, keyboardHandler, indexHandler, validationHandler, multiSelectHandler]
}