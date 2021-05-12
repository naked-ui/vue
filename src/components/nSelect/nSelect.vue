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
            {{ multiSelectPlaceholder }}
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
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import logic from './logic'
import clickout from '@/utils/clickout'

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [logic],
  directives: { clickout },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
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
    enableOnlyValueEmit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showSearchInput(value) {
      if (value) this.focusSearchInput()
    }
  },
  data: () => ({
    selected: null,
    candidate: null,
    dummySelected: '',
    searchInputValue: '',
    showOptions: false,
    showSearchInput: false
  }),
  computed: {
    componentClasses() {
      return [
        this.baseClassname,
        { 'n-select--native-handler': this.enableNativeSelect },
        { 'n-select--active': this.showOptions },
        { 'n-select--search-active': this.showSearchInput },
        { 'n-select--error': this.isError }
      ]
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => this.setSelected(e.target.value),
        change: (e) => this.setSelected(e.target.value)
      }
    },
    defaultPlaceholder() {
      if (this.enableMultiSelect) {
        if (this.selected && this.selected.length) return ''
        else return this.multiSelectPlaceholder
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
    emitInput() {
      const toEmit =
        this.enableOnlyValueEmit && !this.enableMultiSelect
          ? this.selected.value
          : this.selected

      this.$emit('input', toEmit)
      this.$emit('change', toEmit)
    },
    closeOptions() {
      this.showOptions = false
      this.showSearchInput = false
      this.searchInputValue = ''
      this.candidate = null
      this.validateFormField()
      this.emitInput()
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
    }
  },
  mounted() {
    if (this.enableNativeSelect && this.enableSearchInput)
      console.error(`You can't use search feature with native select enabled.`)
  }
}
</script>

<style lang="scss" src="./nSelect.scss" />
