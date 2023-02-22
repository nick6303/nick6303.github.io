import http from './http'

export default {
  getNote(){
    return http({
      url: '/note',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/note/${id}`,
      method: 'get',
    })
  },
  postNote(data){
    return http({
      url: '/note',
      method: 'post',
      data
    })
  },
  putNote(data,id){
    return http({
      url: `/note/${id}`,
      method: 'put',
      data
    })
  },
  deleteNote(id) {
    return http({
      url: `/note/${id}`,
      method: 'delete',
    })
  }
}