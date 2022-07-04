<template>
  <modal-factory/>
  <router-view/>
</template>

<script>
import ModalFactory from './components/ModalFactory/ModalFactory.vue'
import { useRoute, useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
import services from './services/services'
import { setCurrentUser } from '@/store/user'

export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.users.getMe()
        setCurrentUser(data)
        console.log('data', data)
      }
    })
  }
}
</script>
