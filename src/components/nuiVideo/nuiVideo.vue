<template>
  <video
    :class="`${baseClassname}`"
    :id="uiElementID()"
    :style="style"
    style="content-visibility: auto"
    :autoplay="autoplay"
    :controls="controls"
    :loop="loop"
    :loading="loading"
    :decoding="decoding"
    :width="width"
    :height="height"
  >
    <source v-bind="video" />
  </video>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables/index'
import styleProps from '@/utils/props/styleProps'
import {
  height,
  width,
  maxHeight,
  maxWidth,
  background,
  objectFit
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  height,
  width,
  maxHeight,
  maxWidth,
  background,
  objectFit
]

const componentProps = {
  // UI
  baseClassname: {
    type: String,
    default: 'nui-picture'
  },
  // Performance
  decoding: {
    type: String,
    default: 'async'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  // Settings
  autoplay: {
    type: Boolean
  },
  controls: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean
  },
  muted: {
    type: Boolean
  },
  playsinline: {
    type: Boolean
  },
  poster: {
    type: String
  },
  preload: {
    type: String,
    default: 'auto'
  },
  // Data
  video: {
    type: Object,
    default() {
      return null
    }
  },
  ...styleProps
}

export default {
  name: 'nuiVideo',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps
}
</script>

<style lang="scss" src="./nuiVideo.scss" />
