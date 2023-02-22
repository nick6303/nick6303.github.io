import http from './http'

export default {
  getUser(){
    return http({
      url: '/user',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/user/${id}`,
      method: 'get',
    })
  },
  postUser(data){
    return http({
      url: '/user',
      method: 'post',
      data
    })
  },
  putUser(data,id){
    return http({
      url: `/user/${id}`,
      method: 'put',
      data
    })
  },
  deleteUser(id) {
    return http({
      url: `/user/${id}`,
      method: 'delete',
    })
  },
  login(data){
    return http({
      url: 'user/login',
      method: 'post',
      data
    })
  },
}