<template>
  <span
    class="px-4 py-2 text-xs font-black text-white uppercase rounded-full"
    :class="`bg-${classColor}`">
    {{ label }}
  </span>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    type: { type: String, required: true }
  },
  setup (props) {
    const label = computed(() => {
      switch (props.type) {
        case 'ISSUE': return 'problema'
        case 'IDEA': return 'ideia'
        default: return 'outros'
      }
    })

    const classColor = computed(() => {
      switch (props.type) {
        case 'ISSUE': return 'brand-danger'
        case 'IDEA': return 'brand-warning'
        default: return 'brand-graydark'
      }
    })

    return {
      label,
      classColor
    }
  }
}
</script>

<style>

</style>
