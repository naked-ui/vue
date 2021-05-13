<template>
  <div :class="componentClasses" :style="style">
    <label :disabled="disabled" :for="id">
      {{ label }}
    </label>
    <div class="n-search-input__inner">
      <input
        ref="input"
        type="search"
        :value="value"
        @invalid="onInvalid"
        @input="
          $emit('input', $event.target.value)
          validateFormField($event)
        "
        @blur.capture="validateFormField"
        :autofocus="autofocus"
        :disabled="disabled"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :title="title"
        :nui-validation="validationEnabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocorrect="autocorrect"
        :pattern="pattern"
        :list="list"
      />
      <button class="search-button">
        <slot name="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </slot>
      </button>
      <datalist :id="list">
        <option
          v-for="(option, index) in suggestions"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </datalist>
    </div>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
    <nInputCounter
      v-if="counterEnabled"
      :totalCharacters="totalCharacters"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import formField from '@/utils/formField/index.js'
import nValidationAlerts from '@/utils/components/nValidationAlerts.vue'
import nInputCounter from '@/utils/components/nInputCounter.vue'

export default {
  mixins: [formField()],
  name: 'nSearchInput',
  components: {
    nValidationAlerts,
    nInputCounter
  },
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
    },
    list: {
      type: String,
      default: ''
    },
    suggestions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'n-search-input']
    }
  },
  mounted() {
    const input = document.getElementById(this.id)
    const datalist = document.getElementById(this.list)

    input.onfocus = function () {
      datalist.style.display = 'block'
    }

    input.onblur = function () {
      datalist.style.display = 'none'
    }

    for (let option of datalist.options) {
      option.onclick = function () {
        input.value = this.value
        datalist.style.display = 'none'
      }
    }

    datalist.style.width = input.offsetWidth + 'px'
    datalist.style.left = input.offsetLeft + 'px'
    datalist.style.top = input.offsetTop + input.offsetHeight + 'px'
  }
}
</script>

<style lang="scss" src="./nSearchInput.scss" />
