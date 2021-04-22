<template>
  <div
    class="n-badge"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import styleVariables from '../../utils/styleVariables'
import { borderRadius, size, fontSize, padding, background, color } from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [
  borderRadius,
  size,
  fontSize,
  padding,
  background,
  color
]

export default {
  props: {
    baseClassname: {
      type: String,
      default: 'n-badge'
    },
    borderRadius: {
      type: [String, Number],
      default: '100%'
    },
    size: {
      type: [String, Number]
    },
    background: {
      type: String
    },
    color: {
      type: String
    },
    fontSize: {
      type: String
    },
    padding: {
      type: [String, Number]
    }
  },
  mixins: [styleVariables(defaultStyleVariables)],
  computed: {
    copmonentClasses () {
      return [
        this.baseClassname
      ]
    },
  }
}
</script>

<style lang="scss" src="./nBadge.scss" />
