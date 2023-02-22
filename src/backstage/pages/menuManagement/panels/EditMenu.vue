<template lang="pug">
.panelContent(v-loading="loading") 
  .contentWrapper
    el-form.contentInner(
      ref="editForm"
      :model="formData"
      :rules="rules" 
    )
      el-form-item(
        label="選單名稱"
        prop="menuTitle"
      )
        el-input(
          v-model="formData.menuTitle"
          placeholder="請輸入名稱..."
          maxLength="45"
        )
      
      el-form-item(
        label="選單代號"
        prop="menuCode"
      )
        el-input(
          v-model="formData.menuCode"
          placeholder="請輸入代號..."
          maxLength="45"
        )
      el-form-item(
        label="路徑"
        prop="path"
      )
        el-input(
          v-model="formData.path"
          placeholder="請輸入名稱..."
          maxLength="45"
        )
      el-form-item(
        label="元件"
        prop="componentPath"
      )
        el-select(
          v-model="formData.componentPath"
        )
          el-option(
            v-for="item in componentsArray"
            :value="item"
            :label="item"
          )
      el-form-item(
        label="圖示名稱"
        prop="icon"
      )
        .iconBlock
          el-select.icon-select(
            v-model='formData.icon'
            filterable
            popper-class="iconDropdown"
            palceholder='請選擇'
          )
            el-option(
              v-for='(icon, index) in iconOptions'
              :key="index"
              :label="icon"
              :value="icon"
            )
              span(:class="`el-icon-${icon}`")
          .demo(v-if="formData.icon && formData.menuTitle")
            span(:class="`el-icon-${formData.icon}`")
            span {{ formData.menuTitle }}

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
import iconOptions from './iconOptions'

export default {
  name: 'EditMenu',
  props: {
    configProps: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const { menuApi } = api
    const editForm = ref(null)
    const loading = ref(false)
    const { id, action } = props.configProps ?? null

    const formData = reactive({
      menuTitle: '',
      icon: '',
      path: '',
      menuCode: '',
      componentPath: '',
    })

    const componentsContext = require.context(
      '@/backstage/pages',
      true,
      /Management.vue$/
    )
    const componentsArray = componentsContext.keys().map((item) => {
      return item.split('/')[1]
    })
    console.log(componentsArray)

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
      let api = menuApi.postMenu
      let message = '資料新增成功'
      if (action === 'edit') {
        postData.push(id)
        api = menuApi.putMenu
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
      const res = await menuApi.getItemById(id)
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
      iconOptions,
      componentsArray,
    }
  },
}
</script>

<style lang="scss" scoped>
.iconBlock {
  display: flex;
  .demo {
    color: #5d6588;
    background-color: #f1f1f1;
    width: 200px;
    height: 42px;
    margin-left: 20px;
    padding: 0 20px;
    line-height: 42px;
    font-size: 16px;
    span:first-child {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
