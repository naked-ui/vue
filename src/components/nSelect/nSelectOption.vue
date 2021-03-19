<template>
    <option class="select-input__option" :nui-namespace="uiNamespace">
      <slot />
    </option>
</template>

<script>
import namespaceMixin from '../../utils/namespace'


export default {
  name: 'nSelectOption',
  mixins: [namespaceMixin]
}
</script>