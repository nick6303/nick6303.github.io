<template lang="pug">
article#member
  form.form-signin(@submit.prevent="signin")
    h1.h3.mb-3.font-weight-normal 來了! 老弟!
    input#inputEmail.form-control(
      type="text" 
      v-model="userform.name" 
      placeholder="你哪位?" 
      required 
      autofocus
    )
    input#inputPassword.form-control(
      type="password"
      v-model="userform.password" 
      placeholder="通關密語" 
      required
    )
    button.btn.btn-lg.btn-primary.btn-block(type="submit") 登入
  p 你是不是來錯地方了呢? 快點按下面回去欣賞美麗的作品吧!
  router-link.backHome(to="/") 返回首頁
</template>

<script>
import { defineComponent,reactive } from 'vue'
import router from '@router'
import api from '@api'
import { useStore } from 'vuex'


export default defineComponent({
  name:'Login',
  setup(){
    const { userApi } = api
    const store = useStore()

    const userform = reactive({
      name:'',
      password:''
    })
    
    const signin= async() => {
      try {
        const res = await userApi.login(userform)
        const userToken = res.usertoken
        store.dispatch('user/setUserToken',userToken)
        router.push('/edit')
      } catch {
        alert("輸入錯誤")
      }
    }

    return {
      userform,
      signin
    }
  }
})
</script>