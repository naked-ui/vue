<template>
    <optgroup class="select-input__optgroup" :nui-namespace="uiNamespace">
      <slot />
    </optgroup>
</template>

<script>
import namespaceMixin from '../../utils/namespace'


export default {
  name: 'nSelectOptgroup',
  mixins: [namespaceMixin]
}
</script>