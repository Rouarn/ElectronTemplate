// import http from '@/service/request'
// import { PORT1 } from '@/service/request/servicePort'
import authMenuList from '@/assets/json/authMenuList.json'

/**
 * Login
 *
 * @param userName User name
 * @param password Password
 */
export function fetchLogin(userName: string, password: string) {
  // return http.post<Api.Auth.LoginToken>(PORT1 + '/auth/login', {
  //   userName,
  //   password,
  // })
  return Promise.resolve({
    code: 200,
    data: { token: '123456', userName, password },
  })
}

// 获取菜单列表
export const fetchAuthMenuListApi = () => {
  // return http.get<Api.Route.UserRoute[]>(PORT1 + `/menu/list`, {}, { loading: false })
  // 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据
  return authMenuList
}
