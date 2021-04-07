<template>
    <div class="n-select" :class="{'n-select--native-handler': useNative}" :style="styleVariables">
    <span class="n-select--label" :id="uiElementID">{{ label }}</span>
    <div class="n-select--wrapper">
      <select v-if="useNative" v-on="listeners" class="n-select__native" :aria-labelledby="uiElementID">
        <option value="" selected disabled>{{ defaultPlaceholder }}</option>
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
      </select>
      <div class="n-select__custom" @click="isHidden = !isHidden" :class="{'active': !isHidden}" :aria-hidden="isHidden">
        <div class="n-select__custom--placeholder">{{ defaultPlaceholder }}</div>
        <div class="n-select__custom--options">
          <div
            v-for="option in options"
            @click="handleCustomSelect(option.value)"
            class="n-select__custom--option"
            :class="{'selected': selected && selected.value === option.value}"
            :data-value="option.value"
            :key="option.value">
              {{ option.text }}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import uuidMixin from '../../utils/uuid'

export default {
  name: 'nSelect',
  inheritAttrs: false,
  mixins: [uuidMixin],
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
    width: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
    padding: {
      type: String,
      default: undefined
    },
    lineHeight: {
      type: String,
      default: undefined
    },
    textSize: {
      type: String,
      default: undefined
    },
    textColor: {
      type: String,
      default: undefined
    },
    textHoverColor: {
      type: String,
      default: undefined
    },
    backgroundColor: {
      type: String,
      default: undefined
    },
    borderColor: {
      type: String,
      default: undefined
    },
    borderHoverColor: {
      type: String,
      default: undefined
    },
    optionHoverColor: {
      type: String,
      default: undefined
    },
    optionBorderColor: {
      type: String,
      default: undefined
    },
  },
  data: () => ({
    isHidden: true,
    selected: null
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
      const width = this.width ? `--w: ${this.width};` : ''
      const height = this.height ? `--h: ${this.height};` : ''
      const padding = this.padding ? `--padding: ${this.padding};` : ''
      const lineHeight = this.lineHeight ? `--line-height: ${this.lineHeight};` : ''
      const textSize = this.textSize ? `--text-size: ${this.textSize};` : ''
      const textColor = this.textColor ? `--text-color: ${this.textColor};` : ''
      const textHoverColor = this.textHoverColor ? `--text-hover-color: ${this.textHoverColor};` : ''
      const backgroundColor = this.backgroundColor ? `--background-color: ${this.backgroundColor};` : ''
      const borderColor = this.borderColor ? `--border-color: ${this.borderColor};` : ''
      const borderHoverColor = this.borderHoverColor ? `--border-hover-color: ${this.borderHoverColor};` : ''
      const optionHoverColor = this.optionHoverColor ? `--option-hover-color: ${this.optionHoverColor};` : ''
      const optionBorderColor = this.optionBorderColor ? `--text-border-color: ${this.optionBorderColor};` : ''

      return width + height + padding + lineHeight +
              textSize + textColor + textHoverColor +
              backgroundColor + borderColor + borderHoverColor +
              optionHoverColor + optionBorderColor
    },
    defaultPlaceholder () {
      return this.selected ?
              this.selected.text :
              this.placeholder
    }
  },
  methods: {
    findSelected(value) {
      const options = [...this.options]

      this.selected = options.find(option => option.value === value)
      return this.selected
    },
    handleCustomSelect(value) {
      this.$emit('input', this.findSelected(value))
      console.log(this.selected)
    }
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
