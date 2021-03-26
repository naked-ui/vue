<template>
  <div
    class="number-input"
    :nui-namespace="uiNamespace"
  >
    <input
      type="number"
      inputmode="numeric" pattern="[0-9]*"
    >
  </div>
  <!-- https://codepen.io/james_sheen/pen/ZyEzaZ -->
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nNumberInput'
}

</script>

<style lang="scss" src="./nNumberInput.scss" />
