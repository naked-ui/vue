<template>
  <div
    class="progress"
    :nui-namespace="uiNamespace"
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
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nProgress',
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
    }
  }
}

</script>

<style lang="scss" src="./nProgress.scss" />
