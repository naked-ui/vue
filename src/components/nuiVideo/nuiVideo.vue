<template>
  <video
    :class="`${baseClassname}`"
    :id="uiElementID()"
    :style="style"
    style="content-visibility: auto"
    :autoplay="autoplay"
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
  decoding: {
    type: String,
    default: 'async'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  autoplay: {
    type: Boolean
  },
  loop: {
    type: Boolean
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
