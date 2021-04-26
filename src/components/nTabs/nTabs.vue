<template>
  <div :class="[componentClasses, currentDirection]" :style="[style, tabCount]">
    <div :class="`${componentClasses}__buttons`">
      <button
      :class="{'active': $index === currentTab}"
        v-for="(title, $index) in tabTitles"
        :key="$index"
        @click="changeTab($index)"
      >
          {{ title }}
      </button>
    </div>
    <div v-if="!$slots.default" :class="`${componentClasses}__content`">
      {{ currentTabContent }}
    </div>
    <template slot-scope="currentTabContent" v-else>
      <slot :currentTabContent="currentTabContent" />
    </template>
  </div>
</template>

<script>
import styleVariables from '../../utils/styleVariables'
import { width } from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [
  width,
  { name: 'tabPadding', type: 'size' },
  { name: 'contentPadding', type: 'size' },
]

export default {
  name: 'nTabs',
  mixins: [styleVariables(defaultStyleVariables)],
  props: {
    baseClassname: {
      type: String,
      default: 'n-tabs'
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      required: false
    },
    defaultTab: {
      type: Number,
      default: 0
    },
    width: {
      type: [Number, String],
      default: '250px'
    },
    tabPadding: {
      type: [Number, String],
      default: '2px 6px'
    },
    contentPadding: {
      type: [Number, String],
      default: '2px 2px'
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname,
      ]
    },
    tabTitles () {
      if (this.slotTabs && this.slotTabs.length) return this.slotTabs
      if (!this.items) return

      return this.items.map(el => el.title)
    },
    tabContents () {
      if (!this.items) return

      return this.items.map(el => el.content)
    },
    tabCount () {
      return { '--tab-count': this.items ? this.items.length : 1 }
    },
    currentTabContent () {
      if (!this.tabContents) return ''
      return this.tabContents[this.currentTab]
    },
    currentDirection () {
      return this.horizontal ? 'horizontal' : 'vertical'
    }
  },
  data: () => ({
    currentTab: 0,
    slotTabs: []
  }),
  methods: {
    changeTab(index) {
      this.currentTab = index
    },
    addTab(tab) {
      this.slotTabs.push(tab)
    }
  },
  created () {
    this.$on('nui:add-tab', this.addTab)
  },
  mounted () {
    if (this.defaultTab) this.currentTab = this.defaultTab
  },
  destroyed () {
    this.$off('nui:add-tab')
  }
}
</script>

<style lang="scss" src="./nTabs.scss" />