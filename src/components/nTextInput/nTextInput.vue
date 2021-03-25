<template>
<BaseInput v-bind="$props" v-slot="{ inputEvents, inputProps }">
  <input
    type="text"
    v-on="inputEvents"
    v-bind="inputProps"
    :autofocus="autofocus"
    :autocorrect="autocorrect"
    :disabled="disabled"
    :id="id"
    :maxlength="maxlength"
    :minlength="minlength"
    :placeholder="placeholder"
    :readonly="readonly"
    :required="required"
    :title="title"
  >
</BaseInput>
</template>

<script>
// import namespaceMixin from '@/utils/namespace'
// import formField from '@/utils/formField'
import BaseInput from '@/components/utils/BaseInput'
import baseInputMixin from '@/utils/baseInput'
export default {
  mixins: [ baseInputMixin ],
  name: 'nTextInput',
  components:{ BaseInput }
}

</script>

<style lang="scss" src="./nTextInput.scss" />
