<template lang="pug">
.panelContent(v-loading="loading") 
  .contentWrapper
    el-form.contentInner(
      ref="editForm"
      :model="formData"
      :rules="rules" 
    )
      el-form-item(
        label="權限名稱"
        prop="title"
      )
        el-input(
          v-model="formData.title"
          placeholder="請輸入名稱..."
          maxLength="45"
        )
      el-form-item(
        label="描述"
      )
        el-input(
          v-model="formData.discription"
          placeholder="請輸入描述..."
          maxLength="45"
        )
      el-form-item(
        label="狀態"
      )
        el-switch(
          v-model="formData.status"
          active-text="啟用" 
          inactive-text="停用"
        )
      el-form-item(
        label="管理權限"
      )
        PermissionTable(
          v-if="formData.permissions.length"
          :permissionData.sync="formData.permissions"
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

import PermissionTable from './PermissionTable'

export default {
  name: 'EditGroup',
  props: {
    configProps: {
      type: Object,
      default: null,
    },
  },
  components: {
    PermissionTable,
  },
  setup(props, { emit }) {
    const { groupApi } = api
    const editForm = ref(null)
    const loading = ref(false)
    const { id, action } = props.configProps ?? null

    const formData = reactive({
      title: null,
      discription: null,
      status: false,
      permissions: [],
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
      let api = groupApi.postGroup
      let message = '資料新增成功'
      if (action === 'edit') {
        postData.push(id)
        api = groupApi.putGroup
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
      const res = await groupApi.getItemById(id)
      Object.keys(formData).forEach((key) => {
        if (res[key]) {
          formData[key] = res[key]
        }
      })
    }

    onMounted(async () => {
      if (id) {
        getItemById()
      } else {
        formData.permissions = await groupApi.getPermissions()
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

<style lang="scss" scoped>
.contentWrapper {
  max-height: calc(100vh - 200px);
  overflow: auto;
}
</style>
