<template>
  <div
    :class="componentClasses"
    :style="style"
  >
    <div
      v-if="$slots['background']"
      :class="`${componentClasses}__background`"
    >
      <slot name="background" />
    </div>
    <nCoverBackground
      v-else
      :backgroundImage="backgroundImage"
      :backgroundVideo="backgroundVideo"
      :baseClassname="baseClassname"
    />
    <div
      :class="`${componentClasses}__content`"
      v-if="$slots['content'].length > 0"
    >
      <div
        :class="`${componentClasses}__content-inner`"
        :style="`
          --content-place-content: ${placeContent};
        `"
      >
        <slot name="content" />
      </div>
    </div>
    <div
      v-if="hasOverlay"
      :class="`${componentClasses}__overlay`"
      :style="`
        --overlay-background-color: ${overlayColor};
        --overlay-opacity: ${overlayOpacity};
      `"
    />
  </div>
</template>

<script>
import nCoverBackground from './nCoverBackground'
import styleVariables from '../../utils/styleVariables/index.js'

const defaultStyleVariables = [
  { name: 'height', type: 'size' },
  { name: 'width', type: 'size' },
  { name: 'padding', type: 'size' },
]

export default {
  components: {
    nCoverBackground
  },
  mixins: [styleVariables(defaultStyleVariables)],
  props: {
    hasOverlay: {
      type: Boolean,
      default: false
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    overlayOpacity: {
      type: Number,
      default: .3
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    placeContent: {
      type: String,
      default: 'center'
    },
    padding: {
      type: String,
      default: '0'
    },
    backgroundImage: {
      type: Object,
      default () {
        return {}
      }
    },
    backgroundVideo: {
      type: Object,
      default () {
        return {}
      }
    },
    baseClassname: {
      type: String,
      default: 'n-cover'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    }
  }
}
</script>

<style lang="scss" src="./nCover.scss" />
