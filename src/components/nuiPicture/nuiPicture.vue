<template>
  <picture
    v-if="image && image.src && image.sources"
    :class="`${namespace}`"
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
      @load="onLoad"
      @error="onError"
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
    @load="onLoad"
    @error="onError"
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
  namespace: {
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
  props: componentProps,
  methods: {
    onLoad(e) {
      this.$emit('load')
    },
    onError(e) {
      this.$emit('error')
    }
  }
}
</script>

<style lang="scss" src="./nuiPicture.scss" />
