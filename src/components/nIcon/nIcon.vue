<template>
  <a :class="componentClasses" :id="uiElementID()" :style="style">
    <slot />
    <div v-if="$slots['badge']" :class="`${baseClassname}__badge`">
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
  name: 'nIcon',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-icon'
    },
    size: {
      type: [String, Number]
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nIcon.scss" />
