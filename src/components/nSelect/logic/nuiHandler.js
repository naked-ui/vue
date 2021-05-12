import uuidMixin from '@/utils/uuid'
import nChip from '@/utils/components/nChip'
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
  components: { nChip, nValidationAlerts }
}
