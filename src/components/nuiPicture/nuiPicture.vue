<template functional>
  <div
    :class="`${props.baseClassname}`"
    :style="
      props.objectFit && props.objectFit !== 'none'
        ? `--object-fit: ${props.objectFit}; --width: ${props.width}; --height: ${props.height}; --max-width: ${props.maxWidth}; --max-height: ${props.maxHeight};`
        : `--width: ${props.width}; --height: ${props.height}; --max-width: ${props.maxWidth}; --max-height: ${props.maxHeight};`
    "
  >
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
export default {
  name: 'nuiPicture',
  props: {
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
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: ''
    },
    objectFit: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style lang="scss" src="./nuiPicture.scss" />
