<template>
  <div
    class="range-input"
    :nui-namespace="uiNamespace"
  >
    <input type="range">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nRangeInput'
}
</script>
