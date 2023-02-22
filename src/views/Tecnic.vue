<template lang="pug">
article#tecnic
  section.content
    .rows
      template(
        v-for="item in tecnicList" 
        :key="item.id"
      )
        .row(
          v-if="item.module"
        )
          .sample
            component(:is="componentId(item.module)") 
          ._text
            h6 {{item.title}}
            p {{item.words}}
        .row(
          v-else-if="item.link"
        )
          .sample
            img(
              v-if="item.img"
              :src="require(`@img/${item.img}`)" alt=""
            )
            a(
              v-if="item.link"
              :href="checkUrl(item.link)" 
              target="_blank" 
            )
            
          ._text
            h6 {{item.title}}
            p {{item.words}}
            a(
              v-if="item.link"
              target="_blank" 
              :href="checkUrl(item.link)" 
            ) 用說的或許看不懂(@.@)，直接看網頁吧!
          
  section.alert
    p 警告：以上網頁程式碼均為智慧財產權所有，如有盜用，將保留法律追訴權
    p 以上js均已使用編譯軟體重新編譯，如果你是來欣賞的，非常歡迎! 但如果你是來copy的，也沒那麼容易!!
</template>

<script>
import { defineComponent, onMounted,ref } from 'vue'
import api from '@api'

export default defineComponent({
  name: 'Tecnic',
  setup() {
    const { tecnicApi } = api
    const tecnicList = ref([])
    const myworkUrl = process.env.VUE_APP_URL
    const componentId = (id) => require(`../module/${id}`).default
    const checkUrl = (url) =>{
      return url.indexOf('http')>-1? url: myworkUrl + url
    }

    onMounted( async () => {
      tecnicList.value = await tecnicApi.getTecnic()
    })
    return {
      tecnicList,
      componentId,
      checkUrl
    }
  },
})
</script>
