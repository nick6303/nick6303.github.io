<template lang="pug">
article#home
  section.banner.swiper-container
    Swiper(
      :speed="1000"
      loop
      :autoplay="autoplayOption"
    )
      SwiperSlide(
        v-for="item in bannerList"
        :key="item.id"
        :data-white="item.white"
      )
        picture
          source(:srcset="require(`@img/${item.img}`)" media="(max-width:1024px)")
          img(:src="require(`@img/${item.img}`)" alt="")
  section.work
    h3 精選作品
    Swiper(
      :space-between="100"
      :navigation="navigationOption"
      :speed="1000"
      centeredSlides
      loop
      :controller="{ control: controlledSwiper, by:'slides' }"
    ).img
      template(
        v-for="item in workList" 
        :key="item.id")
        SwiperSlide(
          v-if="item.show_in_index"
        )
          .box
            figure
              img(:src="require(`@img/${item.img}`)" alt="")
            ._text
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
              :href="myworkUrl + item.link" 
              target="_blank"
            )
    Swiper(
      :speed="1000"
      loop
      :simulateTouch="false"
      @swiper="swiperControll"
    ).name
      template(
        v-for="item in workList" 
        :key="item.id"
      )
        SwiperSlide(
          v-if="item.show_in_index"
        )
          p {{item.title}}
    .arrows
      router-link.more(to="/work") WANT TO SEE MORE?
      div
        span.icon-arrow-thin-left
        span.icon-arrow-thin-right
  section.tecnic
    ._title
      div
        h6 客製化技術
        p 因應客戶要求，所獨立研發出來的技術
        router-link(to="/tecnic") WANT TO SEE MORE?
    template(
      v-for="item in tecnicList" 
      :key="item.id"
    )
      .box(
        v-if="item.show_in_index"
      )
        .sample
          img(
            v-if="item.img"
            :src="require(`@img/${item.img}`)" 
            alt=""
          )
          .hoverBox(v-if="item.link")
            span
            p {{item.words}}
          component(
            v-if="item.module"
            :is="componentId(item.module)"
          )
          
        h6 {{item.title}}
        a(
          v-if="item.link"
          :href="myworkUrl + item.link" 
          target="_blank" 
        )
</template>
<script>
import api from '@api'

import SwiperCore, { Navigation, Controller, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { defineComponent,onMounted,ref } from 'vue'

SwiperCore.use([Navigation, Controller, Autoplay])

export default defineComponent({
  name: 'Index',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const myworkUrl = process.env.VUE_APP_URL

    const { workApi, bannerApi, tecnicApi } = api 

    const bannerList = ref([])
    const workList = ref([])
    const tecnicList = ref([])

    const navigationOption = {
      nextEl: '.icon-arrow-thin-right',
      prevEl: '.icon-arrow-thin-left',
    }

    const controlledSwiper = ref(null)
    const swiperControll = (swiper) => {
      controlledSwiper.value = swiper
    }

    const autoplayOption = {
      delay: 5000,
      disableOnInteraction: false,
    }

    const componentId = (id) => require(`../module/${id}`).default

    onMounted(async ()=>{
      bannerList.value = await bannerApi.getBanner()
      workList.value = await workApi.getWork()
      tecnicList.value = await tecnicApi.getTecnic()
    })

    return {
      myworkUrl,
      bannerList,
      workList,
      tecnicList,
      swiperControll,
      controlledSwiper,
      navigationOption,
      autoplayOption,
      componentId,
    }
  },
})
</script>
