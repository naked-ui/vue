<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <div :class="`${baseClassname}__controls`">
      <button
        :class="[
          'nui-tabs__control',
          { 'nui-tabs__control--active': $index === currentTab }
        ]"
        v-for="(title, $index) in tabTitles"
        :key="$index"
        @click="changeTab($index)"
      >
        {{ title }}
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import styleVariables from '../../utils/styleVariables'
import { width } from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [
  width,
  { name: 'controlPadding', type: 'size' },
  { name: 'tabPadding', type: 'size' }
]

export default {
  name: 'nTabs',
  mixins: [uuID, styleVariables(defaultStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'nui-tabs'
    },
    vertical: {
      type: Boolean,
      default: false
    },
    defaultTab: {
      type: Number,
      default: 0
    },
    controlPadding: {
      type: [Number, String],
      default: ''
    },
    tabPadding: {
      type: [Number, String],
      default: ''
    },
    width: {
      type: [Number, String],
      default: ''
    }
  },
  data: () => ({
    currentTab: 0,
    slotTabs: []
  }),
  computed: {
    componentClasses() {
      return [this.baseClassname, this.tabsDirection]
    },
    tabTitles() {
      if (this.slotTabs && this.slotTabs.length) return this.slotTabs
    },
    tabsDirection() {
      return this.vertical ? 'nui-tabs--vertical' : ''
    }
  },
  methods: {
    changeTab(index) {
      this.currentTab = index
      this.$emit('nui:set-tab', this.tabTitles[index])
    },
    addTab(tab) {
      if (this.slotTabs.includes(tab)) return
      this.slotTabs.push(tab)
    }
  },
  created() {
    this.$on('nui:add-tab', this.addTab)
  },
  mounted() {
    if (this.defaultTab) this.currentTab = this.defaultTab
    this.$emit('nui:set-tab', this.tabTitles[this.currentTab])
  },
  destroyed() {
    this.$off('nui:add-tab')
  }
}
</script>

<style lang="scss" src="./nTabs.scss" />
