export default {
  getMenu() {
    return [
      {
        "id": 18,
        "menuTitle": "作品集",
        "icon": "s-order",
        "path": "work",
        "menuCode": "EditWork",
        "create_name": "nick",
        "componentPath": "workManagement",
        "update_name": "nick",
        "create_time": "2021-05-13T03:06:24.000Z",
        "update_time": "2021-05-13T03:19:15.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 19,
        "menuTitle": "特殊技術",
        "icon": "magic-stick",
        "path": "tecnic",
        "menuCode": "EditTecnic",
        "create_name": "nick",
        "componentPath": "tecnicManagement",
        "update_name": null,
        "create_time": "2021-05-13T03:15:21.000Z",
        "update_time": "2021-05-13T03:15:21.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 20,
        "menuTitle": "個人筆記",
        "icon": "notebook-1",
        "path": "note",
        "menuCode": "EditNote",
        "create_name": "nick",
        "componentPath": "noteManageMent",
        "update_name": null,
        "create_time": "2021-05-13T03:16:32.000Z",
        "update_time": "2021-05-13T03:16:32.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 21,
        "menuTitle": "封面輪播",
        "icon": "picture",
        "path": "banner",
        "menuCode": "EditBanner",
        "create_name": "nick",
        "componentPath": "bannerManagament",
        "update_name": null,
        "create_time": "2021-05-13T03:17:08.000Z",
        "update_time": "2021-05-13T03:17:08.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 22,
        "menuTitle": "選單編輯",
        "icon": "menu",
        "path": "menu",
        "menuCode": "EditMenu",
        "create_name": "nick",
        "componentPath": "menuManagement",
        "update_name": null,
        "create_time": "2021-05-13T03:17:16.000Z",
        "update_time": "2021-05-13T03:17:16.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 23,
        "menuTitle": "使用者",
        "icon": "user-solid",
        "path": "user",
        "menuCode": "EditUser",
        "create_name": "nick",
        "componentPath": "userManagement",
        "update_name": null,
        "create_time": "2021-05-13T03:17:29.000Z",
        "update_time": "2021-05-13T03:17:29.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      },
      {
        "id": 24,
        "menuTitle": "權限管理",
        "icon": "s-release",
        "path": "group",
        "menuCode": "EditGroup",
        "create_name": "nick",
        "componentPath": "groupManagement",
        "update_name": null,
        "create_time": "2021-05-13T03:17:37.000Z",
        "update_time": "2021-05-13T03:17:37.000Z",
        "isVisible": true,
        "actions": {
          "create": true,
          "delete": true,
          "readSingle": true,
          "update": true
        }
      }
    ]
  },
  getItemById() {
    return {
      "id": 18,
      "menuTitle": "作品集",
      "icon": "s-order",
      "path": "work",
      "menuCode": "EditWork",
      "create_name": "nick",
      "componentPath": "workManagement",
      "update_name": "nick",
      "create_time": "2021-05-13T03:06:24.000Z",
      "update_time": "2021-05-13T03:19:15.000Z",
      "isVisible": true,
      "actions": {
        "create": true,
        "delete": true,
        "readSingle": true,
        "update": true
      }
    }
  },
  postMenu() {
    return {}
  },
  putMenu() {
    return {}
  },
  deleteMenu() {
    return {}
  }
}