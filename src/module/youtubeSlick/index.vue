<template lang="pug">
._slick
  button.icon-arrow-thin-left
  button.icon-arrow-thin-right
  Swiper.single-item(
    :autoplay="autoplayOption"
    :navigation="navigationOption"
    :pagination="paginationOption"
    @swiper="onSwiper"
  )
    template(v-for="(item) in list")
      SwiperSlide.item.video-item(
        v-if="item.youtubeId"
      )
        .videoBox(:id="item.youtubeId")
      SwiperSlide.item(v-else)
        <p>{{item.text}}</p>
  .pagination
</template>

<script>
import { defineComponent } from 'vue'
import './style.sass'

import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, Controller, Autoplay])

import youtubeSlick from './youtube'

export default defineComponent({
  name: 'youtubeSlick',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const list = [
      {
        img: '',
        youtubeId: 'kCU3ht6rMMg',
        text: '',
      },
      {
        img: '',
        youtubeId: '',
        text: '我是圖片',
      },
      {
        img: '',
        youtubeId: 'VhCr88-MFfM',
        text: '',
      },
      {
        img: '',
        youtubeId: '',
        text: '我是圖片',
      },
      {
        img: '',
        youtubeId: '',
        text: '我是圖片',
      },
    ]

    const autoplayOption = {
      delay: 5000,
      disableOnInteraction: false,
    }

    const navigationOption = {
      nextEl: '.icon-arrow-thin-right',
      prevEl: '.icon-arrow-thin-left',
    }

    const paginationOption = {
      type: 'bullets',
      el: '.pagination',
      clickable: true,
    }

    let swiperRef = null
    const onSwiper = (swiper) => {
      swiperRef = swiper
      youtubeSlick(list, swiperRef)
    }

    return {
      list,
      autoplayOption,
      navigationOption,
      paginationOption,
      onSwiper,
    }
  },
})
</script>
