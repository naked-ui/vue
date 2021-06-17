<template>
  <picture
    v-if="image && image.src && image.sources"
    :class="`${baseClassname}`"
    :id="uiElementID()"
    :style="style"
    style="content-visibility: auto"
  >
    <source
      v-for="(image, index) in image.sources"
      :key="index"
      v-bind="image"
    />
    <img
      :loading="loading"
      :decoding="decoding"
      :src="image.src"
      :alt="image.alt"
      :width="width"
      :height="height"
    />
  </picture>
  <img
    v-else
    :loading="loading"
    :decoding="decoding"
    :width="width"
    :height="height"
    :src="image.src"
    :alt="image.alt"
    style="content-visibility: auto"
  />
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
  // Data
  image: {
    type: Object,
    default() {
      return null
    }
  },
  ...styleProps
}

export default {
  name: 'nuiPicture',
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps
}
</script>

<style lang="scss" src="./nuiPicture.scss" />
