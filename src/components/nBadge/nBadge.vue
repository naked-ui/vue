<template>
  <div
    class="n-badge"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import calculateCssSizeMixin from '../../utils/calculateCssSize'

export default {
  mixins: [calculateCssSizeMixin],
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
  computed: {
    copmonentClasses () {
      return [
        this.baseClassname
      ]
    },
    style () {
      return [
        {
          '--border-radius': this.calculateCssSize(this.borderRadius),
          '--size': this.calculateCssSize(this.size),
          '--background': this.background,
          '--color': this.color,
          '--font-size': this.calculateCssSize(this.fontSize),
          '--padding': this.calculateCssSize(this.padding)
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./nBadge.scss" />
