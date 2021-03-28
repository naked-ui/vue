<template>
  <component
    :is="tag"
    v-bind="attrs"
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
  </component>
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
    href: {
      type: String
    },
    target: {
      type: String
    },
    // width: {
    //   type: String
    // },
    // height: {
    //   type: String
    // },
    size: {
      type: [String, Number]
    }
  },
  computed: {
    tag () {
      if (!this.href) return 'div'
      if (this.hrefIsExternal) return 'a'
      else return 'router-link'
    },
    attrs () {
      if (!this.href) return
      if (this.hrefIsExternal) return {
        href: this.href,
        rel: 'noreferrer'
      }
      else return { to: this.href }
    },
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    style () {
      return [
        {
          '--size': this.calculateCssSize(this.size),
          // '--height': this.calculateCssSize(this.height),
          // '--width': this.calculateCssSize(this.width),
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./nIcon.scss" />
