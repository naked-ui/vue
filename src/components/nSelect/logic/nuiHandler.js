import uuidMixin from '@/utils/uuid'
import formField from '@/utils/formField/helpers/formFieldProps'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'

export default {
  props: {
    optionsRefName: {
      type: String,
      default: 'options'
    },
    searchInputRefName: {
      type: String,
      default: 'searchInput'
    },
  },
  mixins: [uuidMixin, formField],
  components: { nValidationAlerts }
}
