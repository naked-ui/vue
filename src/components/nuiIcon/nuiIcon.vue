<template>
  <a :class="componentClasses" :id="uiElementID()" :style="style">
    <slot />
    <div v-if="$slots['badge']" :class="`${namespace}__badge`">
      <slot name="badge" />
    </div>
  </a>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables/index.js'
import { size } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [size]

export default {
  name: 'nuiIcon',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    namespace: {
      type: String,
      default: 'nui-icon'
    },
    size: {
      type: [String, Number]
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiIcon.scss" />
