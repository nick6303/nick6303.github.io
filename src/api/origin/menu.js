import http from './http'

export default {
  getMenu(){
    return http({
      url: '/menu',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/menu/${id}`,
      method: 'get',
    })
  },
  postMenu(data){
    return http({
      url: '/menu',
      method: 'post',
      data
    })
  },
  putMenu(data,id){
    return http({
      url: `/menu/${id}`,
      method: 'put',
      data
    })
  },
  deleteMenu(id) {
    return http({
      url: `/menu/${id}`,
      method: 'delete',
    })
  }
}