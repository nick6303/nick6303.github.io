<template lang="pug">
.panelContent(v-loading="loading") 
  .contentWrapper
    el-form.contentInner(
      ref="editForm"
      :model="formData"
      :rules="rules" 
    )
      el-form-item(
        label="圖片"
        prop="img"
      )
        el-button.imgSeletor(
          @click="ImgSeletor"
          :title="formData.img?'點擊更改圖片':''"
        ) 
          p(v-if="formData.img") {{formData.img}} 
          p(v-else) 請選擇圖片
        .previewImg
          img(
            v-if="formData.img"
            :src="getImgUrl(formData.img)"
          )
          p(v-else) 圖片預覽
      el-form-item(
        label="作品名"
        prop="title"
      )
        el-input(
          v-model="formData.title"
          placeholder="請輸入作品名..."
          maxLength="45"
        )
      el-form-item(
        label="描述"
      )
        el-input(
          v-model="formData.words"
          placeholder="請輸入描述..."
          maxLength="255"
        )
      el-form-item(
        label="難易度"
      )
        el-rate(
          v-model="formData.star"
        )
      el-form-item(
        label="網址連結"
      )
        el-input(
          v-model="formData.link"
          placeholder="請輸入網址..."
          maxLength="255"
        )
      el-form-item(
        label="是否顯示在首頁"
      )
        el-switch(
          v-model="formData.show_in_index"
          active-text="是" 
          inactive-text="否"
        )
  .buttonWrapper
    el-button(
      type="danger"
      @click="closePanel"
    ) 取消
    el-button(
      type="success"
      @click="checkValidate"
    )
      span 儲存
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

import api from '@api'
import { PanelMixin } from '@/backstage/mixin'

export default {
  name:'EditWork',
  props:{
    configProps:{
      type: Object,
      default: null
    }
  },
  setup( props, { emit } ) {
    const { workApi } = api
    const { openImgSeletor } = PanelMixin()
    const editForm = ref(null)
    const loading = ref(false)
    const { 
      id,
      action 
    } = props.configProps ?? null

    const formData = reactive({
      img: null,
      title: null,
      words: null,
      star: 0,
      link: null,
      show_in_index: false
    })

    const rules = computed(()=>{
      const rule = {}
      Object.keys(formData).forEach(key => {
        rule[key] = [{ required: true, message: '↑此項必填' }]
      })
      return rule
    })

    const checkValidate = () => {
      editForm.value.validate(valid => {
        if (valid) {
          submitWhenValidate()
        }
      })
    }

    const submitWhenValidate = async() => {
      const postData = [{...formData}]
      let api = workApi.postWork
      let message = '資料新增成功'
      if (action === 'edit') {
        postData.push(id)
        api = workApi.putWork
        message = '資料更新成功'
      } 

      try {
        loading.value = true
        await api(...postData)
        ElMessage({
          type: 'success',
          message
        })
        emit('eventEmit',{ name:'refresh-page' })
        closePanel()
      } catch {
        // pass
      } finally {
        loading.value = false
      }
    }

    const closePanel = ()=> {
      emit('close')
    }

    const getItemById = async()=>{
      const res = await workApi.getItemById(id)
      Object.keys(formData).forEach(key=>{
        if(res[key]){
          formData[key] = res[key]
        }
      })
    }

    const images = require.context('@img/work', true, /\.jpg$/)

    const getImgUrl =(img) => {
      const imgName = img.split('/')[1]
      return images('./' + imgName)
    }

    const getImgValue = (val) =>{
      const imgName = val.split('/')[1]
      formData.img = 'work/' + imgName
    }

    const ImgSeletor = ()=>{ 
      openImgSeletor(images, getImgValue) 
    }

    onMounted(()=>{
      if(id){
        getItemById()
      }
    })

    return {
      loading,
      formData,
      rules,
      editForm,
      checkValidate,
      closePanel,
      getImgUrl,
      ImgSeletor
    }
  }
}
</script>