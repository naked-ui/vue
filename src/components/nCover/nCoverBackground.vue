<template functional>
  <div class="cover__background">
    <picture
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      v-if="props.backgroundImage"
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-for="(image, index) in props.srcsetBackgroundImages"
        :key="index"
        v-bind="image"
      >
      <img
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="props.backgroundImage"
        :alt="props.backgroundAltText"
      >
    </picture>
    <video
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      class="cover__background-video"
      v-if="props.backgroundVideo"
      autoplay
      loop
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="props.backgroundVideo"
        :type="props.backgroundVideoType"
      >
    </video>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    srcsetBackgroundImages: {
      type: Array,
      default: () => []
    },
    backgroundVideo: {
      type: String,
      default: ''
    }
  }
}
</script>