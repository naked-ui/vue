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
          {{ option.name }}
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
              {{ option.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuidMixin from '../../utils/uuid'
import clickout from '../../utils/clickout'
import SelectStyling from './utils/SelectStyling'

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [uuidMixin, SelectStyling],
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
  },
  watch: {
    searchInput (value) {
      if (value) this.focusInput()
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
    defaultPlaceholder () {
      return this.selected ? this.selected.name : this.placeholder
    },
    filteredOptions () {
      if (!this.searchValue) return this.options
      return this.options.filter(option => {
        const parsedOption = option.name.toUpperCase()
        const parsedSearch = this.searchValue.toUpperCase()

        return parsedOption.includes(parsedSearch)
      })
    },
    currentIndex () {
      if (!this.selected && !this.candidate) return -1
      if (this.candidate) return this.filteredOptions.indexOf(this.candidate)
      return this.filteredOptions.indexOf(this.selected)
    },
    prevOptionIndex () {
      if (!this.currentIndex || this.currentIndex <= 0) return this.filteredOptions.length - 1
      return this.currentIndex - 1
    },
    nextOptionIndex () {
      if (!this.currentIndex && this.currentIndex !== 0) return 0
      if (this.currentIndex === this.filteredOptions.length - 1) return 0
      return this.currentIndex + 1
    },
    isAbleToFocusInput () {
      return this.enableSearch && this.searchInput && this.currentIndex >= 0
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
    async focusInput () {
      this.candidate = -1
      await this.$nextTick(() => this.$refs.searchInput.focus())
    },
    handleClickOnPlaceholder () {
      if (!this.enableSearch && this.useNative) return
      this.searchInput = true
    },
    handleClickOnOption (value) {
      this.findSelected(value)
      this.searchInput = false
      this.emitInput()
    },
    handleClickout () {
      this.closeOptions()
    },
    handleBlurInput (e) {
      if (e.relatedTarget && e.relatedTarget.className === 'n-select__custom--options') return
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
      if (this.isAbleToFocusInput && this.prevOptionIndex === this.filteredOptions.length - 1)
        return this.focusInput()

      this.candidate = this.filteredOptions[this.prevOptionIndex]
    },
    handleKeyupDown () {
      if (this.isAbleToFocusInput && this.nextOptionIndex === 0)
        return this.focusInput()

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
