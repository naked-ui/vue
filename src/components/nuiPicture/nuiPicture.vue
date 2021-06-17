<template>
  <div :class="`${baseClassname}`" :id="uiElementID()" :style="style">
    <picture
      v-if="image && image.src && image.sources"
      style="content-visibility: auto"
    >
      <source
        v-for="(image, index) in image.sources"
        :key="index"
        v-bind="image"
      />
      <img
        loading="lazy"
        decoding="async"
        :src="image.src"
        :alt="image.alt"
        :width="width"
        :height="height"
      />
    </picture>
    <img
      v-else
      :loading="loading"
      decoding="async"
      :width="width"
      :height="height"
      :src="image.src"
      :alt="image.alt"
    />
    <video
      v-if="video && video.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      autoplay
      loop
    >
      <source v-bind="video" />
    </video>
  </div>
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
  loading: {
    type: String,
    default: 'lazy'
  },
  // Data
  image: {
    type: Object,
    default() {
      return {}
    }
  },
  video: {
    type: Object,
    default() {
      return {}
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
