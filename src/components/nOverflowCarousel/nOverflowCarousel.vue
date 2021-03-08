<template>
  <div
    :class="componentClasses"
    :style="`
      --items-gap: ${itemsGap};
      --viewport-padding: ${viewportPadding};
    `"
    :nui-namespace="uiNamespace"
  >
    <div :class="`${baseClassname}__viewport-wrapper`">
      <ul
        :class="`${baseClassname}__viewport`"
        :style="
          itemsSnap ? `--snap: ${itemsSnap};` : false
        "
      >
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nOverflowCarousel',
  mixins: [namespaceMixin],
  props: {
    baseClassname: {
      type: String,
      default: 'overflow-carousel'
    },
    itemsGap: {
      type: String,
      default: '0'
    },
    itemsSnap: {
      type: Boolean,
      default: false
    },
    viewportPadding: {
      type: String,
      default: '0'
    }
  },
  computed: {
    componentClasses () {
      return [
        `overflow-carousel`
      ]
    }
  }
}
</script>

<style lang="scss" src="./nOverflowCarousel.scss" />
