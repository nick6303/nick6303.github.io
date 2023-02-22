<template lang="pug">
article#work
  .rows
    .row(
      v-for="item in workList" 
      :key="item.id"
    )
      figure
        img(
          :src="require(`@img/${item.img}`)" 
          alt=""
        )
      ._text
        h6 {{item.title}}
        p {{item.words}}
        span 難度：
          i.icon-star-full(
            v-for="val in item.star" 
            :key="val.id"
          )
          i.icon-star-empty(
            v-for="val in (5-item.star)" 
            :key="val.id"
          )
      a(
        :href="checkUrl(item.link)" 
        target="_blank"
      )
</template>
<script>
import { defineComponent, onMounted,ref } from 'vue'
import api from '@api'

export default defineComponent({
  name:'Work',
  setup(){
    const { workApi } = api
    const workList = ref([])
    const myworkUrl = process.env.VUE_APP_URL
    const checkUrl = (url) =>{
      return url.indexOf('http')>-1? url: myworkUrl + url
    }

    onMounted( async()=>{
      workList.value = await workApi.getWork()
    })
    
    return {
      workList,
      checkUrl
    }
  }
})
</script>