<template lang="pug">
article#Notes
  section.tags
    a.tag(
      v-for="item in noteList"
      :href="item.url"
      @click.prevent="showIframe"
    ) {{item.title}}
  section.iframe(v-if="showUrl")
    .close(@click="closeIframe")
      span
    iframe(:src="showUrl")
</template>

<script>
import { defineComponent,onMounted,ref } from 'vue'
import api from '@api'

export default defineComponent({
  name: 'Notes',
  setup() {
    const { noteApi } = api
    const noteList = ref([])

    const showUrl = ref('')
    const showIframe = (event)=>{
      event.preventDefault();

      showUrl.value = event.target .href
    }

    const closeIframe = ()=>{
      showUrl.value = ''
    }

    onMounted( async ()=>{
      noteList.value = await noteApi.getNote()
    })

    return {
      noteList,
      showIframe,
      closeIframe,
      showUrl
    }
  }
})
</script>