<template>
  <div
    class="textarea"
    :nui-namespace="uiNamespace"
  >
    <textarea/>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nTextarea'
}

</script>
