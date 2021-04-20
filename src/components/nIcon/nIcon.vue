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
import calculateCssSizeMixin from '../../utils/calculateCssSize'
import hrefIsExternalMixin from '../../utils/hrefIsExternal'

export default {
  name: 'nIcon',
  mixins: [
    hrefIsExternalMixin,
    calculateCssSizeMixin
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
    style () {
      return [
        {
          '--size': this.calculateCssSize(this.size)
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./nIcon.scss" />
