<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :for="IDForLabel" v-if="label && label.length > 0">
      {{ label }}
    </label>
    <progress
      :id="IDForLabel"
      :name="name"
      :max="max"
      :value="value"
      v-if="value != null || value != false"
      :style="`
        --color: ${color};
        --background-color: ${backgroundColor};
      `"
    >
      {{ value }}
    </progress>
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField/index.js'
import styleVariables from '@/utils/styleVariables'
import { width, height, gap } from '@/utils/styleVariables/helpers/variables'

const componentStyleVariables = [width, height, gap]

export default {
  name: 'nuiProgress',
  mixins: [uuID, formField(), styleVariables(componentStyleVariables)],
  props: {
    namespace: {
      type: String,
      default: 'nui-progress'
    },
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
    backgroundColor: {
      type: String
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    gap: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiProgress.scss" />
