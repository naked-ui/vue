<template>
  <div
    class="range-input"
    role="group"
    aria-labelledby="range-input--label"
    :nui-namespace="uiNamespace"
  >
    <div
      class="range-input__wrap"
      role="group"
      aria-labelledby="range-input--label"
      :style="styleVariables"
    >
      <div id="range-input--label" v-if="label">{{ label }}</div>
      <template v-for="index in dots">
        <label class="range-input__sr-only" :for="`v${index-1}`" :key="`label_${index-1}`">Value {{index - 1}}</label>
        <input type="range" :id="`v${index-1}`" :min="min" v-model.number="rangeValues[index-1]" :max="max" @change="handleChange" :key="`input_${index-1}`"/>
        <output :for="`v${index-1}`" :style="`--c: var(--v${index-1})`" :key="`output_${index-1}`"></output>
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
      default: -50
    },
    max: {
      type: Number,
      default: 50
    },
    width: {
      type: String,
      default: '20em'
    },
    height: {
      type: String,
      default: '2em'
    },
    label: {
      type: String,
      required: false
    },
    ranges: {
      type: Number,
      default: 1
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
    styleVariables() {
      const limitationsVariables = `
        --min: ${this.min};
        --max: ${this.max};
        --w: ${this.width};
        --h: ${this.height};
      `

      let valuesVariables = ``
      let fill = `--fill: `

      for(let i of [...Array(this.dots).keys()]) {
        valuesVariables += `--v${i}: ${this.rangeValues[i]};`
        fill += `linear-gradient(90deg, red calc(var(--r) + (var(--v${i}) - var(--min))/var(--dif)*var(--uw)), transparent 0)`
        i === ((2*this.ranges) - 1) ? fill += `;` : fill += `,`
      }

      return valuesVariables + limitationsVariables + fill
    }
  },
  methods: {
    defineRanges() {
      const perDotValue = (this.max - this.min) / this.dots

      let values = []
      for (let i of [...Array(this.dots).keys()]) {
        if (i === 0) values.push(this.min)
        else if (i === (this.dots - 1)) values.push(this.max)
        else if (i === this.dots) break
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
