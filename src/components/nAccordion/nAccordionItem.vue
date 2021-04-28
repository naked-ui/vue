<template>
  <li :class="`${componentClasses}-item`">
    <div
      :class="[`${componentClasses}-item__inner`, { open }]"
      @click="open = !open"
    >
      <span :class="`${componentClasses}-item__title`">
        <slot name="title" />
      </span>
      <nIcon
        class=""
        :class="[`${componentClasses}-item__icon`, { open }]"
        :size="12"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 256 256"
          style="enable-background: new 0 0 256 256"
          xml:space="preserve"
        >
          <g>
            <g>
              <polygon
                points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"
              />
            </g>
          </g>
        </svg>
      </nIcon>
    </div>
    <div :class="[`${componentClasses}-item__content`, { open }]">
      <slot name="text" />
    </div>
  </li>
</template>

<script>
import nIcon from '../nIcon/nIcon'

export default {
  name: 'nAccordionitem',
  components: { nIcon },
  props: {
    baseClassname: {
      type: String,
      default: 'n-accordion'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  },
  data: () => ({
    open: false
  })
}
</script>

<style lang="scss" src="./nAccordion.scss" />
