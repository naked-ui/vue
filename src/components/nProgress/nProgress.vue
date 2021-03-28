<template>
  <div
    class="n-progress"
    :style="`
      --height: ${calculateCssSize(height)};
      --width: ${calculateCssSize(width)};
    `"
  >
    <label
      :for="id"
      v-if="label && label.length > 0"
    >
      {{ label }}
    </label>
    <progress
      :id="id"
      :max="max"
      :value="value"
      v-if="value != null || value != false"
      :style="`
        --color: ${color};
      `"
    >
      {{ value }}
    </progress>
  </div>
</template>

<script>
import calculateCssSizeMixin from '../../utils/calculateCssSize'

export default {
  name: 'nProgress',
  mixins: [calculateCssSizeMixin],
  props: {
    label: {
      type: String,
      defualt: ''
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: '',
      required: true
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./nProgress.scss" />
