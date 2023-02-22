export default {
  getUser(){
    return [
      {
        "id": 24,
        "name": "nick",
        "password": "$2b$10$2lKYXhjhF3ZK0eoZiSC4R.ouFwQCesJc2w3OvmDFXuGVdAdlF5eo6",
        "group": 6,
        "update_name": "nick",
        "create_name": "nick",
        "created_time": "2021-05-10T09:01:53.000Z",
        "update_time": "2021-05-10T09:26:20.000Z"
      },
      {
        "id": 25,
        "name": "guest",
        "password": "$2b$10$DEJqzqvlf/KvrtZyHq/UeO1O.9feGudZAKIBkZxq6kqxve2W4smAS",
        "group": 5,
        "update_name": "nick",
        "create_name": "nick",
        "created_time": "2021-05-12T01:59:11.000Z",
        "update_time": "2021-05-12T02:48:40.000Z"
      }
    ]
  },
  getItemById(){
    return {
      "id": 24,
      "name": "nick",
      "password": "$2b$10$2lKYXhjhF3ZK0eoZiSC4R.ouFwQCesJc2w3OvmDFXuGVdAdlF5eo6",
      "group": 6,
      "update_name": "nick",
      "create_name": "nick",
      "created_time": "2021-05-10T09:01:53.000Z",
      "update_time": "2021-05-10T09:26:20.000Z"
    }
  },
  postUser(){
    return {}
  },
  putUser(){
    return {}
  },
  deleteUser() {
    return {}
  },
  login(data){
    return new Promise((resolve, reject) => {
      const users = this.getUser()
      const userIndex = users.findIndex(item=> item.name === data.name)
      if(userIndex === -1){
        reject('無此帳號')
      } else {
        const userPassword = data.password
        
        if (userPassword === 'p12396') {
          resolve({"code":200,"message":"登入成功","usertoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyNCwibmFtZSI6Im5pY2siLCJncm91cCI6Nn0sImV4cCI6MTYyMDc4NDQ0NSwiaWF0IjoxNjIwNzgzNTQ1fQ.OPqNtDXXUcURWjb4LjT_lTR7PAyJzBXE_SJOBPie1ok"})
        }else {
          reject('您輸入的密碼有誤！')
        }
      }
    })
  }
}