<template>
  <div
    class="base-input"
    :nui-namespace="uiNamespace"
    :style="`
      --gap: ${isNaN(gap) ? gap : gap + 'px'};
      --height: ${isNaN(height) ? height : height + 'px'};
      --width: ${isNaN(width) ? width : width + 'px'};
      --padding: ${padding};
      --outline-width: ${isNaN(outlineWidth) ? outlineWidth : outlineWidth + 'px'};
      --color-invalid: ${colorInvalid};
      --color-valid: ${colorValid};
    `"
  >
    <label
      class="base-input__label"
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
      <slot v-bind="{ inputEvents, inputProps  }"></slot>
    <div
      class="base-input__alerts"
      :style="`
        --alerts-color: ${alertsColor ? alertsColor : '--'};
      `"
    >
    <div class="base-input__helper" v-if="$slots['helper']">
      <slot name="helper"></slot>
    </div>
      <span
        v-for="(message, index) in validationMessages"
        :key="index"
        :class="[
          'base-input__alerts-item'
        ]"
        :style="`
          --color: ${message.color}
        `"
        v-html="message.content"
      />
    </div>
    <div
      class="base-input__counter"
      v-if="maxlength && counterEnabled"
    >
      <span>{{ totalCharacters }}</span>
      <slot name="counter-separator">/</slot>
      <span>{{ maxlength }}</span>
    </div>
  </div>
</template>

<script>
import namespaceMixin from '@/utils/namespace'
import formField from '@/utils/formField'

export default {
  mixins: [ namespaceMixin, formField ],
  name: 'nBaseInput',
  mounted(){
    // add generic class to any component in default slot: input, textarea etc.
    // then use in css to specify input
    this.$nextTick(()=>{
      const el = this.$el.querySelector(`#${this.id}`)
      if(el){
        el.classList.add('nInput')
      }
      // cannot access element by scopedslot
      // if(this.$scopedSlots.default()) {
      //   this.$scopedSlots.default()[0].context.$children[0].$el.classList.add('nInput') // undefined
      // }
    })
  }
}

</script>

<style lang="scss" src="./BaseInput.scss" />
