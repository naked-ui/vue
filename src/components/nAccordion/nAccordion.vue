<template>
  <div :class="componentClasses" :style="style">
    <ul :class="`${baseClassname}__items`">
      <template>
        <slot />
      </template>
      <!-- <template v-else>
        <li
          :class="`${baseClassname}-item`"
          v-for="(item, $index) in accordionItems"
          :key="$index"
        >
          <div
            :class="[`${baseClassname}-item__inner`, { open: item.open }]"
            @click="item.open = !item.open"
          >
            <span :class="`${baseClassname}-item__title`">
              {{ item.title }}
            </span>
            <nIcon
              class=""
              :class="[`${baseClassname}-item__icon`, { open: item.open }]"
              :size="12"
            >
              <svg
                version="1.1"
                id="Capa_1"
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
          <div :class="[`${baseClassname}-item__content`, { open: item.open }]">
            {{ item.text }}
          </div>
        </li>
      </template> -->
    </ul>
  </div>
</template>

<script>
import nIcon from '../nIcon/nIcon'
import styleVariables from '../../utils/styleVariables'
import { width } from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [width, { name: 'itemHeight', type: 'size' }]

export default {
  name: 'nAccordion',
  mixins: [styleVariables(defaultStyleVariables)],
  components: { nIcon },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-accordion'
    },
    items: {
      type: Array,
      required: false
    },
    width: {
      type: String,
      default: '250px'
    },
    itemHeight: {
      type: [String, Number],
      default: 60
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
    // areSlotsProvided() {
    //   return this.$slots && this.$slots.default
    // },
    // areItemsProvided() {
    //   return this.items && this.items.length > 0
    // }
  },
  data: () => ({
    accordionItems: []
  }),
  mounted() {
    if (this.areItemsProvided) {
      this.accordionItems = this.items.map((item) => ({ ...item, open: false }))
    }
  }
}
</script>

<style lang="scss" src="./nAccordion.scss" />
