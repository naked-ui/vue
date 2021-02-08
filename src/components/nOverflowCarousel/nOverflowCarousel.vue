<template>
  <div
    :data-name-prefix="namePrefix"
    :style="` --${baseClassname}__name-prefix: ${namePrefix};`"
    :class="componentClasses"
  >
    <div class="overflow-carousel__viewport-wrapper">
      <div class="overflow-carousel__viewport">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'
import namePrefixMixin from '../../utils/namePrefix'

export default {
  name: 'nOverflowCarousel',
  mixins: [carouselNavigation, namePrefixMixin],
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
