<template>
  <div :class="`${baseClassname}`" :id="uiElementID()" :style="style">
    <picture
      v-if="image && image.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-for="(image, index) in image.sources"
        :key="index"
        v-bind="image"
      />
      <img
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="image.src"
        :alt="image.alt"
      />
    </picture>
    <video
      v-if="video && video.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      autoplay
      loop
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-bind="video"
      />
    </video>
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '@/utils/styleVariables/index'
import {
  height as heightProp,
  width as widthProp,
  maxHeight as maxHeightProp,
  maxWidth as maxWidthProp,
  objectFit as objectFitProp
} from '@/utils/props/styleProps'

import {
  height,
  width,
  maxHeight,
  maxWidth,
  objectFit
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = {
  height,
  width,
  maxHeight,
  maxWidth,
  objectFit
}

const styleProps = {
  heightProp,
  widthProp,
  maxHeightProp,
  maxWidthProp,
  objectFitProp
}

const componentProps = {
  baseClassname: {
    type: String,
    default: 'nui-picture'
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
