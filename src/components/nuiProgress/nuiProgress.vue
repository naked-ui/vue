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
      :style="style"
    >
      {{ value }}
    </progress>
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '@/utils/formField'
import styleVariables from '@/utils/styleVariables'
import {
  width,
  height,
  gap,
  color,
  backgroundColor
} from '@/utils/styleVariables/helpers/variables'

import { id } from '@/utils/props/globalProps'
import { label, max, value } from '@/utils/props/inputProps'
import { styleProps } from '@/utils/props'

const componentStyleVariables = [width, height, gap, color, backgroundColor]

export default {
  name: 'nuiProgress',
  mixins: [uuID, formField(), styleVariables(componentStyleVariables)],
  props: {
    namespace: {
      type: String,
      default: 'nui-progress'
    },
    label,
    id,
    // max,
    max: {
      type: Number,
      default: 100
    },
    value,
    ...styleProps
  },
  computed: {
    componentClasses() {
      return [this.namespace, 'nui-form-field']
    }
  }
}
</script>

<style lang="scss" src="./nuiProgress.scss" />
