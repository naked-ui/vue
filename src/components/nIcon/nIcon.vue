<template>
  <div
    :target="target"
    :class="componentClasses"
    :style="style"
  >
    <slot />
    <div
      v-if="$slots['badge']"
      :class="`${baseClassname}__badge`"
    >
      <slot name="badge" />
    </div>
  </div>
</template>

<script>
import styleVariables from '../../utils/styleVariables/index.js'
import hrefIsExternalMixin from '../../utils/hrefIsExternal'

const defaultStyleVariables = [
  { name: 'size', type: 'size' }
]

export default {
  name: 'nIcon',
  mixins: [
    hrefIsExternalMixin,
    styleVariables(defaultStyleVariables)
  ],
  props: {
    baseClassname: {
      type: String,
      default: 'n-icon'
    },
    size: {
      type: [String, Number]
    },
    target: {
      type: String
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
  }
}
</script>

<style lang="scss" src="./nIcon.scss" />
