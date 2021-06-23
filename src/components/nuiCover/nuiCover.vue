<template>
  <div :class="namespace" :id="uiElementID()" :style="style">
    <div v-if="$slots['background']" :class="`${namespace}__background`">
      <slot name="background" />
    </div>
    <nuiCoverBackground
      v-else
      :backgroundImage="backgroundImage"
      :backgroundVideo="backgroundVideo"
      :namespace="namespace"
    />
    <div :class="`${namespace}__content`" v-if="$slots['content'].length > 0">
      <div
        :class="`${namespace}__content-inner`"
        :style="`
          --place-content: ${placeContent};
        `"
      >
        <slot name="content" />
      </div>
    </div>
    <div
      v-if="hasOverlay"
      :class="`${namespace}__overlay`"
      :style="`
        --overlay-color: ${overlayColor};
        --overlay-opacity: ${overlayOpacity};
      `"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import nuiCoverBackground from './nuiCoverBackground'
import styleVariables from '@/utils/styleVariables'
import {
  height,
  width,
  padding
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [height, width, padding]

const componentProps = {
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
    default: 0.3
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
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
    default() {
      return {}
    }
  },
  backgroundVideo: {
    type: Object,
    default() {
      return {}
    }
  },
  namespace: {
    type: String,
    default: 'nui-cover'
  }
}

export default {
  name: 'nuiCover',
  components: {
    nuiCoverBackground
  },
  mixins: [uuID, styleVariables(componentStyleVariables)],
  props: componentProps,
  computed: {
    componentClasses() {
      return [this.namespace]
    }
  }
}
</script>

<style lang="scss" src="./nuiCover.scss" />
