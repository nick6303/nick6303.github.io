import http from './http'

export default {
  getGroup(){
    return http({
      url: '/group',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/group/${id}`,
      method: 'get',
    })
  },
  postGroup(data){
    return http({
      url: '/group',
      method: 'post',
      data
    })
  },
  putGroup(data,id){
    return http({
      url: `/group/${id}`,
      method: 'put',
      data
    })
  },
  deleteGroup(id) {
    return http({
      url: `/group/${id}`,
      method: 'delete',
    })
  },
  getPermissions(){
    return http({
      url: `/permissions`,
      method: 'get',
    })
  }
}