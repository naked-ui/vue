<template>
  <div
    class="date-input"
    :nui-namespace="uiNamespace"
  >
    <input type="date">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nDateInput'
}

</script>
