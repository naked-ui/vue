<template>
    <div class="n-select" :class="{'n-select--native-handler': useNative}" :style="styleVariables">
    <span class="n-select--label" :id="uiElementID">{{ label }}</span>
    <div class="n-select--wrapper">
      <select v-if="useNative" v-on="listeners" class="n-select__native" :aria-labelledby="uiElementID">
        <option value="" selected disabled>{{ defaultPlaceholder }}</option>
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="n-select__custom"
        @click="isHidden = !isHidden"
        v-clickout="onClickOut"
        :class="{'active': !isHidden}"
        :aria-hidden="isHidden"
      >
        <div
          class="n-select__custom--placeholder"
          @click="enableSearch && !useNative ? searchInput = true : null"
        >
            <template v-if="!searchInput">{{ defaultPlaceholder }}</template>
            <input
              class="n-select__custom--search-input"
              v-else
              ref="searchInput"
              v-model="searchValue"
              type="text"
              @blur="searchInput = false"
            />
        </div>
        <div class="n-select__custom--options">
          <div v-if="filteredOptions.length === 0" class="n-select__custom--option">No options available...</div>
          <div
            v-for="option in filteredOptions"
            @click="handleCustomSelect(option.value)"
            class="n-select__custom--option"
            :class="{'selected': selected && selected.value === option.value}"
            :data-value="option.value"
            :key="option.value"
          >
              {{ option.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuidMixin from '../../utils/uuid'
import clickout from '../../utils/clickout'

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [uuidMixin],
  directives: { clickout },
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      required: false,
      default: undefined
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    useNative: {
      type: Boolean,
      default: true
    },
    enableSearch: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '11rem'
    },
    height: {
      type: String,
      default: '3rem'
    },
    paddingSelect: {
      type: String,
      default: '0.5rem'
    },
    paddingOption: {
      type: String,
      default: '0.3rem'
    },
    lineHeight: {
      type: String,
      default: '3rem'
    },
    textSize: {
      type: String,
      default: '1rem'
    },
    textColor: {
      type: String,
      default: '#FFF'
    },
    textHoverColor: {
      type: String,
      default: '#FFF'
    },
    backgroundColor: {
      type: String,
      default: '#333'
    },
    borderRadius: {
      type: String,
      default: '0rem'
    },
    borderColor: {
      type: String,
      default: '#222'
    },
    borderHoverColor: {
      type: String,
      default: '#444'
    },
    optionHoverColor: {
      type: String,
      default: '#444'
    },
    optionBorderColor: {
      type: String,
      default: '#444'
    },
  },
  watch: {
    searchInput (value) {
      if (value) this.$nextTick(() => this.$refs.searchInput.focus())
    }
  },
  data: () => ({
    isHidden: true,
    searchInput: false,
    searchValue: '',
    selected: null,
  }),
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', this.findSelected(e.target.value)),
        change: e => this.$emit('change', this.findSelected(e.target.value))
      }
    },
    styleVariables () {
      const width = this.width ? `--width: ${this.width};` : ''
      const height = this.height ? `--height: ${this.height};` : ''
      const paddingSelect = this.paddingSelect ? `--padding-select: ${this.paddingSelect};` : ''
      const paddingOption = this.paddingOption ? `--padding-option: ${this.paddingOption};` : ''
      const lineHeight = this.lineHeight ? `--line-height: ${this.lineHeight};` : ''
      const textSize = this.textSize ? `--text-size: ${this.textSize};` : ''
      const textColor = this.textColor ? `--text-color: ${this.textColor};` : ''
      const textHoverColor = this.textHoverColor ? `--text-hover-color: ${this.textHoverColor};` : ''
      const backgroundColor = this.backgroundColor ? `--background-color: ${this.backgroundColor};` : ''
      const borderRadius = this.borderRadius ? `--border-radius: ${this.borderRadius};` : ''
      const borderColor = this.borderColor ? `--border-color: ${this.borderColor};` : ''
      const borderHoverColor = this.borderHoverColor ? `--border-hover-color: ${this.borderHoverColor};` : ''
      const optionHoverColor = this.optionHoverColor ? `--option-hover-color: ${this.optionHoverColor};` : ''
      const optionBorderColor = this.optionBorderColor ? `--option-border-color: ${this.optionBorderColor};` : ''

      return width + height + paddingSelect + paddingOption + lineHeight + textSize +
              textColor + textHoverColor + backgroundColor + borderRadius + borderColor +
              borderHoverColor + optionHoverColor + optionBorderColor
    },
    defaultPlaceholder () {
      return this.selected ? this.selected.text : this.placeholder
    },
    filteredOptions () {
      if (!this.searchValue) return this.options
      return this.options.filter(option => {
        const parsedOption = option.text.toUpperCase()
        const parsedSearch = this.searchValue.toUpperCase()

        return parsedOption.includes(parsedSearch)
      })
    },
  },
  methods: {
    findSelected(value) {
      const options = [...this.options]

      this.selected = options.find(option => option.value === value)
      return this.selected
    },
    handleCustomSelect(value) {
      this.$emit('input', this.findSelected(value))
      if (this.searchInput && !this.useNative) {
        this.searchInput = false
        this.searchValue = ''
      }
    },
    onClickOut() {
      this.isHidden = true
      this.searchInput = false
    }
  },
  mounted () {
    if (this.useNative && this.enableSearch) console.error(`You can't use search feature with native select enabled.`)
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
