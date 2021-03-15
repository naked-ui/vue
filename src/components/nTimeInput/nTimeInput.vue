<template>
  <div
    class="date-input"
    :nui-namespace="uiNamespace"
  >
    <input type="time">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nDateInput'
}

</script>
