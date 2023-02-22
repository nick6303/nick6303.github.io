import axios from 'axios'
import router from '@router'

const http = axios.create({
  baseURL: process.env.VUE_APP_APIPATH,
  timeout: 10000,
})

http.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization && !config.dropBearerToken) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { response } = error
    if (response) {
      switch (response.status) {
        case 401:
          router.push({ path: '/login' })
          break
        // token 過期 or 帳號密碼輸入錯誤
        default:
          break
      }

      const parse = JSON.stringify({ status: response.status })
      return Promise.reject(new Error(parse), response)
    }
  }
)

export default http
