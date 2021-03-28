<template>
  <div
    class="n-progress"
    :style="`
      --height: ${calculatedHeight}
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
export default {
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
    },
    height: {
      type: String,
      default: ''
    }
  },
  computed: {
    calculatedHeight () {
      if (isNaN(this.height) == false) return this.height + 'px'
      if (
        this.height.includes('em') ||
        this.height.includes('ex') ||
        this.height.includes('px') ||
        this.height.includes('cm') ||
        this.height.includes('mm') ||
        this.height.includes('in') ||
        this.height.includes('pc') ||
        this.height.includes('pt') ||
        this.height.includes('em') ||
        this.height.includes('rem') ||
        this.height.includes('vh') ||
        this.height.includes('vmin') ||
        this.height.includes('vmax')
      ) {
        return this.height
      }
    }
  }
}

</script>

<style lang="scss" src="./nProgress.scss" />
