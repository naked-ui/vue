<template functional>
  <div class="cover__background">
    <picture
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-for="(image, index) in props.backgroundImage.srcset"
        :key="index"
        v-bind="image"
      >
      <img
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        :src="props.backgroundImage.src"
        :alt="props.backgroundImage.alt"
      >
    </picture>
    <video
      loading="lazy"
      decoding="async"
      style="content-visibility: auto"
      class="cover__background-video"
      v-if="props.backgroundVideo.src"
      autoplay
      loop
    >
      <source
        loading="lazy"
        decoding="async"
        style="content-visibility: auto"
        v-bind="props.backgroundVideo"
      >
    </video>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: Object,
      default: () => {}
    },
    backgroundVideo: {
      type: Object,
      default: () => {}
    }
  },
  // computed: {
  //   extractImage () {
  //     return this.image.find(obj => obj.src)
  //   }
  // }
}
</script>