<template>
  <div class="n-select" :class="componentClasses" :style="style">
    <span class="n-select__label" v-if="label" :id="uiElementID">
      {{ label }}
    </span>
    <div class="n-select__inner">
      <div
        class="n-select__select-wrapper"
        @click="handleClickOnSelect"
        v-clickout="handleClickout"
      >
        <select
          :aria-labelledby="uiElementID"
          :aria-hidden="!showOptions"
          v-on="listeners"
          tabindex="-1"
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
            {{ option.name }}
          </option>
          <!--  -->
        </select>
      </div>
      <div
        class="n-select__custom-items"
        :class="{ active: showOptions }"
        :aria-hidden="!showOptions"
        :aria-labelledby="uiElementID"
      >
        <div
          class="n-select-custom-input"
          :class="{
            'n-select-custom-input--multiselect-options': displayMultiselectOptions
          }"
          @click="handleClickOnPlaceholder"
        >
          <input
            class="n-select-custom-input__search-input"
            type="text"
            :ref="searchInputRefName"
            :placeholder="defaultPlaceholder"
            v-if="showSearchInput"
            v-model="searchInputValue"
            @blur="handleBlurInput"
            @keyup.esc.prevent="handleKeyupEsc"
            @keyup.up.prevent="handleInputKeyupUp"
            @keyup.down.prevent="handleInputKeyupDown"
          />
          <div
            class="n-select__custom-items__selected-options"
            :class="{
              'n-select--custom__multiselect-options__placeholder': showSearchInput
            }"
            v-show="!searchInputValue.length"
            v-if="enableMultiSelect"
          >
            <div
              v-for="option in selected"
              :key="option.value"
              @click.stop="handleClickOnChip(option)"
              class="n-select--custom__selected-options__item"
            >
              {{ option.name }}
            </div>
          </div>
          <!-- <template v-if="displayDefaultPlaceholder">
            {{ defaultPlaceholder }}
          </template> -->
        </div>
        <div
          class="n-select__custom-items__options"
          :tabindex="tabindex"
          :ref="optionsRefName"
          @keyup.up.prevent="handleKeyupUp"
          @keyup.down.prevent="handleKeyupDown"
          @keyup.esc.prevent="handleKeyupEsc"
          @keyup.enter.prevent="handleKeyupEnter"
        >
          <div
            class="n-select__custom-items__option"
            v-if="!filteredOptions.length"
          >
            {{ noOptionsPlaceholder }}
          </div>
          <div
            class="n-select__custom-items__option"
            :class="{
              selected: isSelected(option),
              candidate: isCandidate(option)
            }"
            v-for="option in filteredOptions"
            :key="option.value"
            :data-value="option.value"
            @click.stop="handleClickOnOption(option)"
          >
            <span class="n-select__custom-items__option-inner">
              {{ option.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuidMixin from '@/utils/uuid'
import clickout from '@/utils/clickout'
import nChip from '@/utils/components/nChip'
import styleVariables from '../../utils/styleVariables'
import formField from '@/utils/formField/index.js'
import {
  color,
  width,
  height,
  fontSize,
  lineHeight,
  borderWidth,
  borderColor,
  gap,
  padding,
  backgroundColor
} from '../../utils/styleVariables/helpers/variables'

const defaultStyleVariables = [
  color,
  width,
  height,
  fontSize,
  lineHeight,
  borderWidth,
  borderColor,
  gap,
  padding,
  backgroundColor,
  { name: 'paddingSelect', type: 'size' },
  { name: 'optionPadding', type: 'size' },
  { name: 'optionBackgroundColor', type: 'color' },
  { name: 'optionHoverBackgroundColor', type: 'color' }
]

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [uuidMixin, styleVariables(defaultStyleVariables)],
  directives: { clickout },
  components: { nChip },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
    },
    value: {
      required: true
    },
    label: {
      type: String,
      required: false,
      default: undefined
    },
    tabindex: {
      type: Number,
      default: 0
    },
    searchInputRefName: {
      type: String,
      default: 'searchInput'
    },
    optionsRefName: {
      type: String,
      default: 'options'
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    noOptionsPlaceholder: {
      type: String,
      default: 'No options to display...'
    },
    enableNativeSelect: {
      type: Boolean,
      default: true
    },
    enableSearchInput: {
      type: Boolean,
      default: false
    },
    enableMultiSelect: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    gap: {
      type: [String, Number],
      default: null
    },
    optionPadding: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    optionHoverBackgroundColor: {
      type: String,
      default: ''
    },
    optionBackgroundColor: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: [String, Number],
      default: null
    },
    borderColor: {
      type: String,
      default: ''
    }
  },
  watch: {
    showSearchInput(value) {
      if (value) this.focusSearchInput()
    },
    enableMultiSelect(value) {
      if (value) this.selected = []
      else this.selected = null
    }
  },
  data: () => ({
    showOptions: false,
    showSearchInput: false,
    searchInputValue: '',
    selected: null,
    candidate: null
  }),
  computed: {
    componentClasses() {
      return [
        this.baseClassname,
        { 'n-select--native-handler': this.enableNativeSelect }
      ]
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => this.$emit('input', this.setSelected(e.target.value)),
        change: (e) => this.$emit('change', this.setSelected(e.target.value))
      }
    },
    defaultPlaceholder() {
      if (this.enableMultiSelect) {
        if (this.selected && this.selected.length) return ''
        else return 'No options selected...'
      }
      return this.selected ? this.selected.name : this.placeholder
    },
    filteredOptions() {
      if (!this.searchInputValue) return this.options
      return this.options.filter((option) => {
        const parsedOption = option.name.toUpperCase().trim()
        const parsedSearch = this.searchInputValue.toUpperCase().trim()

        return parsedOption.includes(parsedSearch)
      })
    },
    currentIndex() {
      if (!this.candidate && this.showSearchInput) return -1
      if (this.candidate) return this.filteredOptions.indexOf(this.candidate)
      return -1
    },
    prevOptionIndex() {
      if (!this.currentIndex || this.currentIndex <= 0)
        return this.filteredOptions.length - 1
      return this.currentIndex - 1
    },
    nextOptionIndex() {
      if (!this.currentIndex && this.currentIndex !== 0) return 0
      if (this.currentIndex === this.filteredOptions.length - 1) return 0
      return this.currentIndex + 1
    },
    isAbleToFocusSearchInput() {
      return (
        this.enableSearchInput && this.showSearchInput && this.currentIndex >= 0
      )
    },
    canBeNative() {
      return (
        this.enableNativeSelect &&
        !this.enableSearchInput &&
        !this.enableMultiSelect
      )
    },
    displayMultiselectOptions() {
      return !this.showSearchInput && this.enableMultiSelect
    },
    displayDefaultPlaceholder() {
      return (
        !this.showSearchInput && !(this.selected && this.selected.length > 0)
      )
    }
  },
  methods: {
    setSelected(value) {
      if (!value) return
      this.selected = [...this.options].find((option) => option.value === value)
    },
    isSelected(option) {
      return (
        (this.selected && this.selected.value === option.value) ||
        (this.selected &&
          this.selected.length > 0 &&
          this.selected.includes(option))
      )
    },
    isCandidate(option) {
      return this.candidate && this.candidate.value === option.value
    },
    handleMultiSelect(option) {
      if (!this.enableMultiSelect) return

      if (
        this.selected &&
        this.selected.length &&
        this.selected.includes(option)
      ) {
        this.selected = this.selected.filter((el) => el.value !== option.value)
      } else {
        this.selected.push(option)
      }
      this.searchInputValue = ''
    },
    closeOptions() {
      this.showOptions = false
      this.showSearchInput = false
      this.searchInputValue = ''
      this.candidate = null
      this.emitInput()
    },
    async handleClickOnSelect() {
      this.showOptions = !this.showOptions

      if (this.showOptions && !this.enableSearchInput) await this.focusOptions()
    },
    emitInput() {
      this.$emit('input', this.selected)
      this.$emit('change', this.selected)
    },
    async focusSearchInput() {
      this.candidate = null
      await this.$nextTick(() => this.$refs[this.searchInputRefName].focus())
    },
    async focusOptions() {
      await this.$nextTick(() => this.$refs[this.optionsRefName].focus())
    },
    handleClickOnPlaceholder() {
      if (!this.enableSearchInput) return
      if (!this.enableSearchInput && this.enableNativeSelect) return
      this.showSearchInput = true
    },
    handleClickOnOption(option) {
      if (this.enableMultiSelect) return this.handleMultiSelect(option)
      this.setSelected(option.value)
      this.closeOptions()
    },
    handleClickOnChip(option) {
      this.handleMultiSelect(option)
    },
    handleClickout() {
      this.closeOptions()
    },
    handleBlurInput(e) {
      if (
        e.relatedTarget &&
        e.relatedTarget.className === 'n-select--custom__options'
      )
        return
      this.closeOptions()
    },
    handleKeyupEsc() {
      this.closeOptions()
    },
    handleKeyupEnter() {
      if (this.enableMultiSelect) return this.handleMultiSelect(this.candidate)
      this.selected = this.candidate
      this.closeOptions()
    },
    handleKeyupUp() {
      if (
        this.isAbleToFocusSearchInput &&
        this.prevOptionIndex === this.filteredOptions.length - 1
      )
        return this.focusSearchInput()

      this.candidate = this.filteredOptions[this.prevOptionIndex]
    },
    handleKeyupDown() {
      if (this.isAbleToFocusSearchInput && this.nextOptionIndex === 0)
        return this.focusSearchInput()

      this.candidate = this.filteredOptions[this.nextOptionIndex]
    },
    async handleInputKeyupUp() {
      await this.focusOptions()
      this.handleKeyupUp()
    },
    async handleInputKeyupDown() {
      await this.focusOptions()
      this.handleKeyupDown()
    }
  },
  mounted() {
    if (this.enableNativeSelect && this.enableSearchInput)
      console.error(`You can't use search feature with native select enabled.`)
    if (this.enableNativeSelect && this.enableMultiSelect)
      console.error(
        `You can't use multi select feature with native select enabled.`
      )
    if (this.enableMultiSelect) this.selected = []
  }
}
</script>

<style lang="scss" src="./nSelect.scss" />
