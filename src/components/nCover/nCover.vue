<template>
  <div
    class="cover"
    :nui-namespace="uiNamespace"
    :style="`
      --width: ${width};
      --height: ${height};
      --padding: ${padding};
    `"
  >
    <div
      v-if="$slots['background']"
      class="cover__background"
    >
      <slot name="background" />
    </div>
    <nCoverBackground
      v-else
      :backgroundImage="backgroundImage"
      :srcsetBackgroundImages="srcsetBackgroundImages"
      :backgroundVideo="backgroundVideo"
    />
    <div
      class="cover__content"
      v-if="$slots['content'].length > 0"
    >
      <div
        class="cover__content-inner"
        :style="`
          --content-place-content: ${placeContent};
        `"
      >
        <slot name="content" />
      </div>
    </div>
    <div
      v-if="hasOverlay"
      class="cover__overlay"
      :style="`
        --overlay-background-color: ${overlayColor};
        --overlay-opacity: ${overlayOpacity};
      `"
    />
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'
import nCoverBackground from './nCoverBackground'

export default {
  mixins: [namespaceMixin],
  components: {
    nCoverBackground
  },
  props: {
    hasOverlay: {
      type: Boolean,
      default: false
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    overlayOpacity: {
      type: Number,
      default: .3
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    placeContent: {
      type: String,
      default: 'center'
    },
    padding: {
      type: String,
      default: '0'
    },
    backgroundImage: {
      type: Object,
      default: () => {}
    },
    backgroundVideo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" src="./nCover.scss" />
