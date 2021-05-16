<template>
  <div :target="target" :class="componentClasses" :style="style" :busy="busy">
    <slot />
    <div v-if="$slots['badge']" :class="`${baseClassname}__badge`">
      <slot name="badge" />
    </div>
  </div>
</template>

<script>
import styleVariables from '@/utils/styleVariables/index.js'
import hrefIsExternalMixin from '@/utils/hrefIsExternal'
import { size } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [size]

export default {
  name: 'nIcon',
  mixins: [hrefIsExternalMixin, styleVariables(componentStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-icon'
    },
    size: {
      type: [String, Number]
    },
    target: {
      type: String
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
