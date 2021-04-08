<template>
    <div
      class="n-select"
      :class="{'n-select--native-handler': useNative}"
      :style="styleVariables"
    >
    <span
      class="n-select--label"
      :id="uiElementID"
    >
      {{ label }}
    </span>
    <div class="n-select--wrapper">
      <select
        class="n-select__native"
        :aria-labelledby="uiElementID"
        v-if="useNative"
        v-on="listeners"
      >
        <!-- Fake placeholder for native select -->
        <option value="" selected disabled>
          {{ defaultPlaceholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="n-select__custom"
        :class="{'active': !isHidden}"
        :aria-hidden="isHidden"
        :aria-labelledby="uiElementID"
        @click="handleClickOnSelect"
        v-clickout="handleClickout"
      >
        <div
          class="n-select__custom--placeholder"
          @click="handleClickOnPlaceholder"
        >
            <template v-if="!searchInput">
              {{ defaultPlaceholder }}
            </template>
            <input
              class="n-select__custom--search-input"
              type="text"
              ref="searchInput"
              v-else
              v-model="searchValue"
              @blur="handleBlurInput"
              @keyup.esc.prevent="handleKeyupEsc"
              @keyup.up.prevent="handleInputKeyupUp"
              @keyup.down.prevent="handleInputKeyupDown"
            />
        </div>
        <div
          class="n-select__custom--options"
          tabindex="-1"
          ref="options"
          @keyup.up.prevent="handleKeyupUp"
          @keyup.down.prevent="handleKeyupDown"
          @keyup.esc.prevent="handleKeyupEsc"
          @keyup.enter.prevent="handleKeyupEnter"
        >
          <div
            class="n-select__custom--option"
            v-if="filteredOptions.length === 0"
          >
            No options available...
          </div>
          <div
            class="n-select__custom--option"
            :class="{
              'selected': selected && selected.value === option.value,
              'candidate': candidate && candidate.value === option.value
            }"
            v-for="option in filteredOptions"
            :key="option.value"
            :data-value="option.value"
            @click="handleClickOnOption(option.value)"
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
      default: '#555'
    },
    optionSelectedColor: {
      type: String,
      default: '#444'
    },
    optionBorderColor: {
      type: String,
      default: '#444'
    },
  },
  watch: {
    async searchInput (value) {
      if (value) await this.$nextTick(() => this.$refs.searchInput.focus())
    }
  },
  data: () => ({
    isHidden: true,
    searchInput: false,
    searchValue: '',
    selected: null,
    candidate: null
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
      const optionSelectedColor = this.optionSelectedColor ? `--option-selected-color: ${this.optionSelectedColor};` : ''
      const optionBorderColor = this.optionBorderColor ? `--option-border-color: ${this.optionBorderColor};` : ''

      return width + height + paddingSelect + paddingOption + lineHeight + textSize +
              textColor + textHoverColor + backgroundColor + borderRadius + borderColor +
              borderHoverColor + optionHoverColor + optionSelectedColor + optionBorderColor
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
    currentIndex () {
      if (!this.selected && !this.candidate) return null
      if (this.candidate) return this.filteredOptions.indexOf(this.candidate)
      return this.filteredOptions.indexOf(this.selected)
    },
    prevOptionIndex () {
      if (!this.currentIndex || this.currentIndex === 0) return this.filteredOptions.length - 1
      return this.currentIndex - 1
    },
    nextOptionIndex () {
      if (!this.currentIndex && this.currentIndex !== 0) return 0
      if (this.currentIndex === this.filteredOptions.length - 1) return 0
      return this.currentIndex + 1
    }
  },
  methods: {
    findSelected (value) {
      const options = [...this.options]

      this.selected = options.find(option => option.value === value)
    },
    findCandidate () {
      const options = [...this.options]

      this.candidate = options.find(option => option.value === value)
    },
    closeOptions () {
      this.isHidden = true
      this.searchInput = false
      this.searchValue = ''
      this.candidate = null
      this.emitInput()
    },
    async handleClickOnSelect () {
      this.isHidden = !this.isHidden

      if(!this.isHidden && !this.enableSearch) await this.$nextTick(() => this.$refs.options.focus())
    },
    emitInput () {
      this.$emit('input', this.selected)
      this.$emit('change', this.selected)
    },
    handleClickOnPlaceholder () {
      if (!this.enableSearch && this.useNative) return
      this.searchInput = true
    },
    handleClickOnOption (value) {
      this.findSelected(value)
      this.emitInput()
    },
    handleClickout () {
      this.closeOptions()
    },
    handleBlurInput (e) {
      if (e.relatedTarget && e.relatedTarget.className === 'n-select__custom--options') {
        this.searchInput = false
        return
      }
      this.closeOptions()
    },
    handleKeyupEsc () {
      this.closeOptions()
    },
    handleKeyupEnter () {
      this.selected = this.candidate
      this.closeOptions()
    },
    handleKeyupUp () {
      this.candidate = this.filteredOptions[this.prevOptionIndex]
    },
    handleKeyupDown () {
      this.candidate = this.filteredOptions[this.nextOptionIndex]
    },
    async handleInputKeyupUp () {
      await this.$nextTick(() => this.$refs.options.focus())
      this.handleKeyupUp()
    },
    async handleInputKeyupDown () {
      await this.$nextTick(() => this.$refs.options.focus())
      this.handleKeyupDown()
    }
  },
  mounted () {
    if (this.useNative && this.enableSearch) console.error(`You can't use search feature with native select enabled.`)
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
