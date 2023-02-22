
export default {
  getGroup(){
    return [
      {
        "id": 5,
        "title": "visitor",
        "discription": "訪客",
        "status": true,
        "create_name": "nick",
        "update_name": "nick",
        "create_time": "2021-05-07T08:37:14.000Z",
        "update_time": "2021-05-10T09:33:14.000Z"
      },
      {
        "id": 6,
        "title": "owner",
        "discription": "開發者",
        "status": true,
        "create_name": "nick",
        "update_name": "nick",
        "create_time": "2021-05-10T08:59:20.000Z",
        "update_time": "2021-05-10T09:49:51.000Z"
      }
    ]
  },
  getItemById(){
    return {
      "id": 6,
      "title": "owner",
      "discription": "開發者",
      "status": true,
      "create_name": "nick",
      "update_name": "nick",
      "create_time": "2021-05-10T08:59:20.000Z",
      "update_time": "2021-05-10T09:49:51.000Z"
    }
  },
  postGroup(){
    return {}
  },
  putGroup(){
    return {}
  },
  deleteGroup() {
    return {}
  },
  getPermissions(){
    return [
      {
        "menuCode": "EditWork",
        "title": "作品集",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditTecnic",
        "title": "特殊技術",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditNote",
        "title": "個人筆記",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditBanner",
        "title": "封面輪播",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditMenu",
        "title": "選單編輯",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditUser",
        "title": "使用者",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      },
      {
        "menuCode": "EditGroup",
        "title": "權限管理",
        "isVisible": false,
        "actions": {
          "create": false,
          "delete": false,
          "readSingle": false,
          "update": false
        }
      }
    ]
  }
}