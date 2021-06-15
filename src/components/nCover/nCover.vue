<template>
  <div :class="baseClassname" :id="uiElementID()" :style="style">
    <div v-if="$slots['background']" :class="`${baseClassname}__background`">
      <slot name="background" />
    </div>
    <nCoverBackground
      v-else
      :backgroundImage="backgroundImage"
      :backgroundVideo="backgroundVideo"
      :baseClassname="baseClassname"
    />
    <div
      :class="`${baseClassname}__content`"
      v-if="$slots['content'].length > 0"
    >
      <div
        :class="`${baseClassname}__content-inner`"
        :style="`
          --content-place-content: ${placeContent};
        `"
      >
        <slot name="content" />
      </div>
    </div>
    <div
      v-if="hasOverlay"
      :class="`${baseClassname}__overlay`"
      :style="`
        --overlay-background-color: ${overlayColor};
        --overlay-opacity: ${overlayOpacity};
      `"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import nCoverBackground from './nCoverBackground'
import styleVariables from '@/utils/styleVariables'
import {
  height,
  width,
  padding
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [height, width, padding]

export default {
  components: {
    nCoverBackground
  },
  mixins: [uuID, styleVariables(componentStyleVariables)],
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
      default: 0.3
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
      default() {
        return {}
      }
    },
    backgroundVideo: {
      type: Object,
      default() {
        return {}
      }
    },
    baseClassname: {
      type: String,
      default: 'nui-cover'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nCover.scss" />
