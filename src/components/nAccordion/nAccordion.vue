<template>
  <div :class="componentClasses" :style="style">
    <ul :class="`${componentClasses}--items`" v-if="areSlotsProvided || areItemsProvided">
      <template v-if="areSlotsProvided">
        <slot />
      </template>
      <template v-else>
        <li :class="`${componentClasses}--item`" v-for="(item, $index) in accordionItems" :key="$index">
          <div :class="`${componentClasses}--item__content`" @click="item.open = !item.open">
            <span> {{ item.title }} </span>
            <nIcon class="" :class="[`${componentClasses}--item__arrow`, { 'open': item.open }]" :size="12">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve">
              <g>
                <g>
                  <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"/>
                </g>
              </g>
              </svg>
            </nIcon>
          </div>
          <div v-show="item.open">{{ item.text }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import nIcon from '../nIcon/nIcon'
import styleVariables from '../../utils/styleVariables'
import { width, height, padding } from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [width, height, padding]

export default {
  name: 'nAccordion',
  mixins: [styleVariables(defaultStyleVariables)],
  components: { nIcon },
  props: {
    baseClassname: {
      type: String,
      default: 'n-accordion'
    },
    items: {
      type: Array,
      required: false
    },
    width: {
      type: String,
      default: '250px'
    },
    height: {
      type: String,
      default: '16px'
    },
    padding: {
      type: String,
      default: '6 0'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    areSlotsProvided () {
      return this.$slots && this.$slots.default
    },
    areItemsProvided () {
      return this.items && this.items.length > 0
    }
  },
  data: () => ({
    accordionItems: []
  }),
  mounted () {
    if (this.areItemsProvided) {
      this.accordionItems = this.items.map(item => ({ ...item, open: false }))
    }
  }
}
</script>

<style lang="scss" src="./nAccordion.scss" />