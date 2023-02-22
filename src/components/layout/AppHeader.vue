<template lang="pug">
header#header   
  nav.navbar
    router-link.logo(to="/") 我的作品集
      span (初版)
    .manage
      ul
        li
          .openMenu(@click="open = true")
            span
            span
            span
    .menuLibox(
      :class="{close,open}"
    )
      .cover(@click="menuClose")
      section
        .liboxClose(@click="menuClose")
          span
        a.icon-home(
          href="javascript:void(0)"
          @click="topage('/')"
        )
        ul.mainLink
          li
            a(
              href="javascript:void(0)"
              @click="topage('/work')"
            ) 作品集
          li 
            a(
              href="javascript:void(0)"
              @click="topage('/tecnic')"
            ) 特殊技術
          li
            a(
              href="javascript:void(0)"
              @click="topage('/notes')"
            ) 個人筆記
        ul.user
          li(v-if="!alreadylogin")
            a(
              href="javascript:void(0)"
              @click="topage('/login')"
            ) 登入
          li(v-else)
            a(
              href="javascript:void(0)" 
              @click="signout"
            ) 登出

</template>

<script>
import { defineComponent,ref } from 'vue'
import router from '@router'

export default defineComponent({
  name: 'AppHeader',
  props: {
    alreadylogin: {
      type: Boolean,
      default: null,
    },
  },
  setup(props, { emit }) {
    const open = ref(false)
    const close = ref(false)

    const signout = () => {
      emit('logout')
      if (open.value) {
        menuClose()
      }
      router.push('/login')
    }

    const menuClose = () => {
      open.value = false
      close.value = true
      setTimeout(() => {
        close.value = false
      }, 800)
    }

    const topage = (path) => {
      menuClose()
      router.push(path)
    }

    return {
      signout,
      menuClose,
      close,
      open,
      topage,
    }
  },
})
</script>
