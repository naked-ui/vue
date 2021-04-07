<template>
    <div class="n-select" :class="{'n-select--native-handler': useNative}">
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
    }
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
