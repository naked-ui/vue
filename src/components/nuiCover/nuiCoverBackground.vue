<template functional>
  <div :class="`${props.namespace}__background`">
    <picture
      v-if="props.backgroundImage && props.backgroundImage.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-for="(image, index) in props.backgroundImage.sources"
        :key="index"
        v-bind="image"
      />
      <img
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="props.backgroundImage.src"
        :alt="props.backgroundImage.alt"
      />
    </picture>
    <video
      v-if="props.backgroundVideo && props.backgroundVideo.src"
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      :class="`${props.namespace}__background-video`"
      autoplay
      loop
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-bind="props.backgroundVideo"
      />
    </video>
  </div>
</template>

<script>
import { uiProps } from '@/utils/props'

const componentProps = {
  namespace: {
    type: String,
    default: 'nui-cover'
  },
  ...uiProps
}

export default {
  name: 'nuiCoverBackground',
  props: componentProps
}
</script>
