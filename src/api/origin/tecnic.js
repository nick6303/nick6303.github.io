import http from './http'

export default {
  getTecnic(){
    return http({
      url: '/tecnic',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/tecnic/${id}`,
      method: 'get',
    })
  },
  postTecnic(data){
    return http({
      url: '/tecnic',
      method: 'post',
      data
    })
  },
  putTecnic(data,id){
    return http({
      url: `/tecnic/${id}`,
      method: 'put',
      data
    })
  },
  deleteTecnic(id) {
    return http({
      url: `/tecnic/${id}`,
      method: 'delete',
    })
  }
}