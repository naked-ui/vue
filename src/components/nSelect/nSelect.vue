<template>
  <div
    class="n-select"
    :class="componentClasses"
    :style="style"
    :disabled="disabled"
    :nui-validation="validationEnabled"
  >
    <label class="n-select__label" v-if="label" :for="uiElementID">
      {{ label }}
    </label>
    <div class="n-select__inner">
      <div class="n-select__select">
        <select
          class="n-select__select--native"
          :aria-hidden="!showOptions"
          v-on="listeners"
          v-model="dummySelected"
          :tabindex="nativeTabindex"
          :id="uiElementID"
          :disabled="disabled"
          :nui-validation="validationEnabled"
        >
          <!-- Fake placeholder for native select -->
          <option v-if="!selected" value="" selected disabled>
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
        <div
          v-if="!disabled"
          class="n-select__select__trigger"
          @click="handleClickOnSelect"
          @keyup.enter.stop="handleClickOnSelect"
          v-clickout="handleClickout"
          :tabindex="customTabindex"
        />
        <div
          class="n-select__select--multiselect"
          v-show="!searchInputValue.length"
          v-if="enableMultiSelect"
        >
          <span v-if="!selected || !selected.length">
            {{ multiselectPlaceholder }}
          </span>
          <div
            v-for="option in selected"
            :key="option.value"
            @click.stop="handleClickOnChip(option)"
            class="n-select__select--multiselect__item"
          >
            {{ option.name }}
          </div>
        </div>
        <input
          class="n-select__search-input"
          type="search"
          :ref="searchInputRefName"
          v-if="showSearchInput"
          v-model="searchInputValue"
          @blur="handleBlurInput"
          @keyup.esc.prevent="handleKeyupEsc"
          @keyup.up.prevent="handleInputKeyupUp"
          @keyup.down.prevent="handleInputKeyupDown"
        />
      </div>
      <div
        class="n-select__options"
        :class="{ 'n-select__options--active': showOptions }"
        :aria-hidden="!showOptions"
        :aria-labelledby="uiElementID"
      >
        <div
          class="n-select-options"
          :tabindex="customTabindex"
          :ref="optionsRefName"
          @keyup.up.prevent="handleKeyupUp"
          @keyup.down.prevent="handleKeyupDown"
          @keyup.esc.prevent="handleKeyupEsc"
          @keyup.enter.prevent="handleKeyupEnter"
        >
          <div class="n-select-option" v-if="!filteredOptions.length">
            <slot name="no-options-text">No options to display</slot>
          </div>
          <div
            class="n-select-option"
            :class="{
              selected: isSelected(option),
              candidate: isCandidate(option)
            }"
            v-for="option in filteredOptions"
            :key="option.value"
            :data-value="option.value"
            @click.stop="handleClickOnOption(option)"
          >
            <span class="n-select-option__inner">
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
import styleVariables from '@/utils/styleVariables'
import formField from '@/utils/formField/helpers/formFieldProps'
import {
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  lineHeight,
  gap,
  padding,
  borderColor,
  borderWidth,
  borderStyle
} from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  lineHeight,
  gap,
  padding,
  borderColor,
  borderWidth,
  borderStyle,
  { name: 'optionHoverBackgroundColor', type: 'color' }
]

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [uuidMixin, styleVariables(componentStyleVariables), formField],
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
    tabindex: {
      type: Number,
      default: 0
    },
    options: {
      type: Array,
      required: true
    },
    enableNativeSelect: {
      type: Boolean,
      default: false
    },
    enableSearchInput: {
      type: Boolean,
      default: false
    },
    enableMultiSelect: {
      type: Boolean,
      default: false
    },
    optionsRefName: {
      type: String,
      default: 'options'
    },
    optionHoverBackgroundColor: {
      type: String,
      default: ''
    },
    searchInputRefName: {
      type: String,
      default: 'searchInput'
    },
    multiselectPlaceholder: {
      type: String,
      default: 'Select options'
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
    candidate: null,
    dummySelected: ''
  }),
  computed: {
    componentClasses() {
      return [
        this.baseClassname,
        { 'n-select--native-handler': this.enableNativeSelect },
        { 'n-select--active': this.showOptions },
        { 'n-select--search-active': this.showSearchInput }
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
    },
    nativeTabindex() {
      return this.enableNativeSelect ? this.tabindex : -1
    },
    customTabindex() {
      return !this.enableNativeSelect ? this.tabindex : -1
    }
  },
  methods: {
    setSelected(value) {
      if (!value) return
      this.selected = [...this.options].find((option) => option.value === value)
      this.dummySelected = value
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

      if (this.enableSearchInput && !this.enableNativeSelect)
        this.showSearchInput = true
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
      if (e.relatedTarget && e.relatedTarget.className === 'n-select-options')
        return
      this.closeOptions()
    },
    handleKeyupEsc() {
      this.closeOptions()
    },
    handleKeyupEnter() {
      if (this.enableMultiSelect) return this.handleMultiSelect(this.candidate)
      this.setSelected(this.candidate.value)
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
