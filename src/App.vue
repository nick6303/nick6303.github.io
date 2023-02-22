<template lang="pug">
AppHeader(
  v-if="showHeaderFooter"
)

main
  router-view

AppFooter(v-if="showHeaderFooter")

</template>

<script>
import { AppHeader, AppFooter } from '@c/layout'
import {defineComponent, computed } from 'vue'
import router from '@router'

export default defineComponent({
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    const showHeaderFooter = computed(() => {
      const routerName = router.currentRoute.value.name
      const check = /Test|Edit/
      return !check.test(routerName)
    })

    return {
      showHeaderFooter,
    }
  },
})
</script>
