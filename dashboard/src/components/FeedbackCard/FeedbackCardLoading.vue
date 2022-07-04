<template>
  <content-loader
    class="flex flex-col rounded p-4"
    width="100%"
    height="200px"
  >
    <div class="flex justify-between">
      <content-loader
        class="rounded"
        width="10%"
        height="30px"
        animation-duration="2s"
      />

      <content-loader
        class="rounded"
        width="15%"
        height="30px"
        animation-duration="2s"
      />
    </div>

    <content-loader
      class="mt-2 rounded"
      width="100%"
      height="30px"
      animation-duration="2.3s"
    />

    <content-loader
      class="mt-2 rounded"
      width="60%"
      height="30px"
      animation-duration="2.7s"
    />

    <content-loader
      class="mt-2 rounded"
      width="70%"
      height="30px"
      animation-duration="2.9s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
