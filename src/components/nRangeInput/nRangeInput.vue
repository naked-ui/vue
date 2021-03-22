<template>
  <div
    class="range-input"
    role="group"
    aria-labelledby="range-input--label"
    :style="colorVariables"
    :nui-namespace="uiNamespace"
  >
    <div
      class="range-input__wrap"
      role="group"
      aria-labelledby="range-input--label"
      :style="rangeVariables"
    >
      <div id="range-input--label" v-if="label">{{ label }}</div>
      <template v-for="index in dots">
        <label
          class="range-input__sr-only"
          :for="`v${index-1}`"
          :key="`label_${index-1}`"
        >
          Value {{index - 1}}
        </label>
        <input
          type="range"
          :id="`v${index-1}`"
          :min="min"
          v-model.number="rangeValues[index-1]"
          :max="max"
          @input="liveInput ? handleChange() : null"
          @change="!liveInput ? handleChange() : null"
          :key="`input_${index-1}`"
        />
        <output
          :for="`v${index-1}`"
          :style="`--c: var(--v${index-1})`"
          :key="`output_${index-1}`"
        />
      </template>
    </div>
  </div>
</template>

<script>
import namespaceMixin from "../../utils/namespace"

export default {
  mixins: [namespaceMixin],
  name: 'nRangeInput',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: false
    },
    ranges: {
      type: Number,
      default: 1
    },
    liveInput: {
      type: Boolean,
      default: false
    },
    dotColor: {
      type: String,
      required: false
    },
    rangeColor: {
      type: String,
      required: false
    },
    backgroundColor: {
      type: String,
      required: false
    },
    outputBackgroundColor: {
      type: String,
      required: false
    },
    outputFontColor: {
      type: String,
      required: false
    }
  },
  data: () => ({
    rangeValues: []
  }),
  watch: {
    ranges(oldVal, newVal) {
      if (oldVal === newVal) return
      this.defineRanges()
    }
  },
  computed: {
    dots() {
      return this.ranges * 2
    },
    rangeVariables() {
      const limitationsVariables = `
        --min: ${this.min};
        --max: ${this.max};
        --w: ${this.width};
        --h: ${this.height};
      `

      let valuesVariables = ``
      let fill = `--fill: `

      for (let i of [...Array(this.dots).keys()]) {
        valuesVariables += `--v${i}: ${this.rangeValues[i]};`
        fill += `linear-gradient(90deg, red calc(var(--r) + (var(--v${i}) - var(--min))/var(--dif)*var(--uw)), transparent 0)`
        i === this.dots - 1 ? fill += `;` : fill += `,`
      }

      return valuesVariables + limitationsVariables + fill
    },
    colorVariables() {
      const dotColor = this.dotColor ? `--fillDot: ${this.dotColor};` : ''
      const rangeColor = this.rangeColor ? `--fillRange: ${this.rangeColor};` : ''
      const backgroundColor = this.backgroundColor ? `--fillBg: ${this.backgroundColor};` : ''
      const outputBackgroundColor = this.outputBackgroundColor ? `--fillOutput: ${this.outputBackgroundColor};` : ''
      const outputFontColor = this.outputFontColor ? `--outputFontColor: ${this.outputFontColor};` : ''

      return dotColor + rangeColor + backgroundColor + outputFontColor + outputBackgroundColor
    }
  },
  methods: {
    defineRanges() {
      const perDotValue = (this.max - this.min) / this.dots

      let values = []
      for (let i of [...Array(this.dots).keys()]) {
        if (i === this.dots) break
        else if (i === 0) values.push(this.min)
        else if (i === (this.dots - 1)) values.push(this.max)
        else values.push(+(values[+i-1] + perDotValue).toFixed(0))
      }

      this.rangeValues = values
      this.handleChange()
    },
    handleChange() {
      const sortedRanges = [...this.rangeValues].sort((a,b) => a - b)
      const splicedRanges = []
      while(sortedRanges.length) {
        splicedRanges.push(sortedRanges.splice(0, 2))
      }

      this.$emit('input', splicedRanges)
    }
  },
  created() {
    this.defineRanges()
  }
}
</script>

<style src="./nRangeInput.scss" lang="scss" />
