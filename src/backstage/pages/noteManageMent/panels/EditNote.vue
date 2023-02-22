<template lang="pug">
.panelContent(v-loading="loading") 
  .contentWrapper
    el-form.contentInner(
      ref="editForm"
      :model="formData"
      :rules="rules" 
    )
      el-form-item(
        label="標題"
        prop="title"
      )
        el-input(
          v-model="formData.title"
          placeholder="請輸入作品名..."
          maxLength="45"
        )
      el-form-item(
        label="網址連結"
        prop="url"
      )
        el-input(
          v-model="formData.url"
          placeholder="請輸入網址..."
          maxLength="255"
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
  name: 'EditNote',
  props: {
    configProps: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const { noteApi } = api
    const editForm = ref(null)
    const loading = ref(false)
    const { id, action } = props.configProps ?? null

    const formData = reactive({
      title: null,
      url: null,
    })

    const rules = computed(() => {
      const rule = {}
      Object.keys(formData).forEach((key) => {
        rule[key] = [{ required: true, message: '↑此項必填' }]
      })
      return rule
    })

    const checkValidate = () => {
      editForm.value.validate((valid) => {
        if (valid) {
          submitWhenValidate()
        }
      })
    }

    const submitWhenValidate = async () => {
      const postData = [{ ...formData }]
      let api = noteApi.postNote
      let message = '資料新增成功'
      if (action === 'edit') {
        postData.push(id)
        api = noteApi.putNote
        message = '資料更新成功'
      }

      try {
        loading.value = true
        await api(...postData)
        ElMessage({
          type: 'success',
          message,
        })
        emit('eventEmit', { name: 'refresh-page' })
        closePanel()
      } catch {
        // pass
      } finally {
        loading.value = false
      }
    }

    const closePanel = () => {
      emit('close')
    }

    const getItemById = async () => {
      const res = await noteApi.getItemById(id)
      Object.keys(formData).forEach((key) => {
        if (res[key]) {
          formData[key] = res[key]
        }
      })
    }

    onMounted(() => {
      if (id) {
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
    }
  },
}
</script>
