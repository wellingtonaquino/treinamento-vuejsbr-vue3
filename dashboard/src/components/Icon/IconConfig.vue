<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './IconLoading.vue'
import Copy from './IconCopy.vue'
import ChevronDown from './IconChevronDown.vue'

export default {
  components: { Loading, Copy, ChevronDown },
  props: {
    name: { type: String, require: true }
  }
}
</script>
