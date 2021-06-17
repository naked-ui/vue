<template functional>
  <div :class="`${props.baseClassname}`" :style="style">
    <picture
      v-if="props.image && props.image.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-for="(image, index) in props.image.sources"
        :key="index"
        v-bind="image"
      />
      <img
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="props.image.src"
        :alt="props.image.alt"
      />
    </picture>
    <video
      v-if="props.video && props.video.src"
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
        v-bind="props.video"
      />
    </video>
  </div>
</template>

<script>
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
  mixins: [styleVariables(componentStyleVariables)],
  props: componentProps
}
</script>

<style lang="scss" src="./nuiPicture.scss" />
