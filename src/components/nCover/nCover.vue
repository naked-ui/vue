<template>
  <div
    :class="componentClasses"
    :style="`
      --width: ${width ? width : '100%'};
      --height: ${height ? height : '100%'};
      --padding: ${padding ? padding : '0'};
    `"
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

export default {
  components: {
    nCoverBackground
  },
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
      default: ''
    },
    height: {
      type: String,
      default: ''
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
