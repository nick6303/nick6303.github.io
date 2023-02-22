<template lang="pug">
.panelContent(v-loading="loading") 
  .contentWrapper
    el-form.contentInner(
      ref="editForm"
      :model="formData"
      :rules="rules" 
    )
      el-form-item(
        label="名稱"
        prop="name"
      )
        el-input(
          v-model="formData.name"
          placeholder="請輸入名稱..."
          maxLength="45"
        )
      el-form-item(
        label="權限"
        prop="group"
      )
        el-select(
          v-model="formData.group"
          placeholder="請選擇"
        )
          el-option(
            v-for="item in groupList"
            :value="item.id"
            :label="item.title"
          ) {{ item.title }}
      el-form-item(
        :label="'密碼' "
        prop="password"
      )
        el-input(
          v-model="formData.password"
          placeholder="請輸入密碼..."
          maxLength="45"
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

export default {
  name:'EditUser',
  props:{
    configProps:{
      type: Object,
      default: null
    }
  },
  setup( props, { emit } ) {

    const { userApi } = api
    const editForm = ref(null)
    const loading = ref(false)
    const { 
      id,
      action,
      groupList
    } = props.configProps ?? null

    const formData = reactive({
      name: '',
      password:'',
      group: null,
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
      let api = userApi.postUser
      let message = '資料新增成功'
      if (action === 'edit') {
        postData.push(id)
        api = userApi.putUser
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
      const res = await userApi.getItemById(id)
      Object.keys(formData).forEach(key=>{
        if(res[key]){
          formData[key] = res[key]
        }
        formData.password = ''
      })
    }

    onMounted(()=>{
      if(id){
        getItemById()
      }
    })

    return {
      groupList,
      loading,
      formData,
      rules,
      editForm,
      checkValidate,
      closePanel,
    }
  }
}
</script>
}